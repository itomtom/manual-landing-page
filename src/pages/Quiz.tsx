import classnames from 'classnames';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

import { Button, Loading, Progress } from '@/component/ui';

const URL = 'http://localhost:5173/questionnaires/972423.json';
const AnswerSchema = z.union([z.string(), z.boolean()]);
const OptionSchema = z.object({
  display: z.string(),
  value: AnswerSchema,
  isRejection: z.boolean(),
});
const QuestionSchema = z.object({
  question: z.string(),
  type: z.string(),
  options: z.array(OptionSchema),
});
const QuizResponseSchema = z.object({
  questions: z.array(QuestionSchema),
});

interface QuizProps {
  onClose: () => void;
}
type Question = z.infer<typeof QuestionSchema>;
type Option = z.infer<typeof OptionSchema>;
type Answer = z.infer<typeof AnswerSchema>;

export function Quiz({ onClose }: QuizProps) {
  const { t } = useTranslation();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [result, setResult] = useState<string>();
  const [selectedAnswers, setSelectedAnswers] = useState<Answer[]>([]);

  useEffect(() => {
    async function fetchQuiz() {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        const parsedData = QuizResponseSchema.parse(data);
        setQuestions(parsedData.questions);
      } catch (error) {
        console.error('Failed to fetch quiz', error);
        setResult(t('quiz.error.fetchFailed'));
      }
    }
    fetchQuiz();
  }, [t]);

  const onHandleAnswer = (option: Option, step: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[step] = option.value;
    setSelectedAnswers(newSelectedAnswers);

    if (option.isRejection) {
      setResult(t('quiz.rejection.message'));
    } else if (currentStep === questions.length - 1) {
      setResult(t('quiz.success.message'));
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const onHandleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  if (result) {
    return (
      <div className="mx-6 flex min-h-screen items-center justify-center">
        <div className="max-w-2xl text-center">
          <p className="mb-8 text-justify text-xl font-semibold text-primary-100">
            {parse(result)}
          </p>
          <Button
            onClick={() => {
              setResult('');
              setCurrentStep(0);
              setSelectedAnswers([]);
              onClose();
            }}
          >
            {t('quiz.button.close')}
          </Button>
        </div>
      </div>
    );
  }

  if (questions.length === 0) return <Loading />;

  return (
    <div className="mx-6 min-h-screen max-w-3xl py-6 sm:mx-auto">
      <div className="mb-8">
        <Progress step={currentStep} length={questions.length} />
      </div>

      <h3 className="mb-6 text-center text-lg font-bold text-primary-100 sm:text-[28px] sm:leading-10">
        {t(`quiz.questions.${questions[currentStep].question}`)}
      </h3>

      <div className="grid grid-cols-2 gap-4">
        {questions[currentStep].options.map((option) => (
          <button
            key={option.display}
            onClick={() => onHandleAnswer(option, currentStep)}
            className={classnames(
              'flex items-center justify-center border border-primary-100 p-4 font-bold uppercase tracking-widest text-primary-100 hover:bg-primary-400 focus:bg-primary-400 focus:outline-1 focus:outline-offset-4 focus:outline-primary-300',
              {
                'bg-primary-400': selectedAnswers[currentStep] === option.value,
              },
            )}
          >
            {parse(option.display)}
          </button>
        ))}
      </div>

      <div className="absolute bottom-0 py-8">
        {currentStep > 0 && (
          <Button onClick={onHandleBack}>{t('quiz.button.back')}</Button>
        )}
      </div>
    </div>
  );
}
