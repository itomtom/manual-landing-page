import { Trans, useTranslation } from 'react-i18next';

import logo from '@/assets/logo.svg';
import { Button } from '@/component/ui';

interface HeroProps {
  openQuiz: () => void;
}

export function Hero({ openQuiz }: HeroProps) {
  const { t } = useTranslation();

  return (
    <div className="bg-backgroundMobile bg-cover bg-no-repeat pb-6 sm:min-h-[750px] sm:pb-0 lg:bg-background">
      <header className="pl-6 pt-[30px] sm:pl-[138px]">
        <img src={logo} alt="Manual Logo" />
      </header>
      <section className="mx-6 pt-8 sm:mx-0 sm:pl-[138px] sm:pt-[119px]">
        <div className="flex flex-col gap-9 sm:w-[468px]">
          <h1 className="text-6xl sm:text-[90px] sm:leading-[90px]">
            <Trans
              i18nKey={'hero.title'}
              components={{
                br: <br />,
              }}
            />
          </h1>
          <p className="text-lg leading-[30px]">{t('hero.description')}</p>
          <span className="mx-auto sm:mx-0">
            <Button onClick={openQuiz}>{t('quiz.button.takeQuiz')}</Button>
          </span>
        </div>
      </section>
    </div>
  );
}
