import { useTranslation } from 'react-i18next';

import { ErecetileDysfunction } from '@/component/ErecetileDysfunction';
import { HairLoss } from '@/component/HairLoss';

export function MainSection() {
  const { t } = useTranslation();

  return (
    <section className="py-8 sm:py-20">
      <div className="container mx-auto">
        <h2 className="mb-4 text-center text-2xl font-bold leading-[60px] tracking-tight text-primary-100 sm:mb-16 sm:text-[40px]">
          {t('mainSection.headline')}
        </h2>

        <div className="space-y-20 lg:space-y-44">
          <HairLoss />
          <ErecetileDysfunction />
        </div>
      </div>
    </section>
  );
}
