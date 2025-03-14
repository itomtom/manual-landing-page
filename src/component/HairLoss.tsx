import { useTranslation } from 'react-i18next';

import HairImage from '@/assets/hair.png';
import HairImageMobile from '@/assets/hair-mobile.png';

export function HairLoss() {
  const { t } = useTranslation();

  return (
    <div className="relative mx-6 size-auto justify-self-center lg:mx-0 lg:h-[445px] lg:w-[870px]">
      <div
        className="absolute left-[290px] hidden h-full text-[445px] font-bold leading-[510px] text-tertiary-100 lg:block"
        aria-hidden="true"
      >
        01
      </div>
      <img
        className="relative mb-3 place-self-center lg:absolute lg:mb-0"
        alt="Hair loss treatment"
        src={HairImage}
        width={370}
        height={445}
        srcSet={`${HairImageMobile} 375w`}
      />
      <article className="relative flex h-full flex-col justify-center lg:absolute lg:left-[495px] lg:w-[372px]">
        <div className="mb-[10px] text-center text-[10px] font-bold uppercase leading-[15px] tracking-[1.5px] text-primary-200 lg:text-left">
          {t('hairLoss.title')}
        </div>
        <h3 className="mb-[22px] text-[28px] font-bold leading-10 text-primary-100">
          {t('hairLoss.headline')}
        </h3>
        <p className="text-justify text-lg font-normal leading-[30px] text-primary-100 lg:text-left">
          {t('hairLoss.description')}
        </p>
      </article>
    </div>
  );
}
