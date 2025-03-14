import { useTranslation } from 'react-i18next';

import EDImage from '@/assets/erecetile.png';
import EDImageMobile from '@/assets/erecetile-mobile.png';

export function ErecetileDysfunction() {
  const { t } = useTranslation();

  return (
    <div className="relative mx-6 size-auto justify-self-center lg:mx-0 lg:h-[445px] lg:w-[870px]">
      <div
        className="absolute left-[25px] hidden h-full text-[445px] font-bold leading-[510px] text-tertiary-100 lg:block"
        aria-hidden="true"
      >
        02
      </div>
      <img
        className="relative right-0 mb-3 place-self-center max-md:mx-auto lg:absolute lg:mb-0"
        alt="Erecetile dysfunction treatment"
        src={EDImage}
        width={370}
        height={445}
        srcSet={`${EDImageMobile} 375w`}
      />
      <article className="relative flex h-full flex-col justify-center lg:absolute lg:left-[10px] lg:w-[372px]">
        <div className="mb-[10px] text-center text-[10px] font-bold uppercase leading-[15px] tracking-[1.5px] text-primary-200 lg:text-left">
          {t('erectileDysfunction.title')}
        </div>
        <h3 className="mb-[22px] text-[28px] font-bold leading-10 text-primary-100">
          {t('erectileDysfunction.headline')}
        </h3>
        <p className="text-justify text-lg font-normal leading-[30px] text-primary-100 lg:text-left">
          {t('erectileDysfunction.description')}
        </p>
      </article>
    </div>
  );
}
