import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Footer } from '@/component/Footer';
import { Hero } from '@/component/Hero';
import { MainSection } from '@/component/MainSection';
import { Quiz } from '@/pages';

export function Home() {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <>
      <div className={showQuiz ? 'block' : 'hidden'}>
        <Quiz onClose={() => setShowQuiz(false)} />
      </div>
      <div className={showQuiz ? 'hidden' : 'block'}>
        <Hero openQuiz={() => setShowQuiz(true)} />
        <MainSection />
        <Footer />
      </div>
    </>
  );
}
