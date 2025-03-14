import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import facebook from '@/assets/facebook.svg';
import google from '@/assets/google.svg';
import logo from '@/assets/logo.svg';
import twitter from '@/assets/twitter.svg';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full justify-center bg-primary-400 sm:px-[138px]">
      <div className="mx-6 flex flex-wrap justify-between gap-5 py-6 sm:mx-0 sm:py-[72px]">
        <img
          src={logo}
          alt="Manual Logo"
          className="mx-auto size-[75px] sm:mx-0"
        />
        <nav className="grid grid-cols-2 gap-6 sm:mx-auto sm:grid-cols-4">
          <div className="flex w-[46%] flex-col gap-5 sm:w-[174px]">
            <h4 className="h-[15px]tracking-[1.5px] text-[10px] font-bold uppercase leading-[15px]">
              {t('footer.section.product')}
            </h4>
            <div className="flex flex-col gap-5">
              <Link to="/popular">{t('footer.link.popular')}</Link>
              <Link to="/trending">{t('footer.link.trending')}</Link>
              <Link to="/guided">{t('footer.link.guided')}</Link>
              <Link to="/products">{t('footer.link.products')}</Link>
            </div>
          </div>
          <div className="flex w-[46%] flex-col gap-5 sm:w-[174px]">
            <h4 className="h-[15px] text-[10px] font-bold uppercase leading-[15px] tracking-[1.5px]">
              {t('footer.section.company')}
            </h4>
            <div className="flex flex-col gap-5">
              <Link to="/press">{t('footer.link.press')}</Link>
              <Link to="/mission">{t('footer.link.mission')}</Link>
              <Link to="/strategy">{t('footer.link.strategy')}</Link>
              <Link to="/about">{t('footer.link.about')}</Link>
            </div>
          </div>
          <div className="flex w-[46%] flex-col gap-5 sm:w-[174px]">
            <h4 className="h-[15px] text-[10px] font-bold uppercase leading-[15px] tracking-[1.5px]">
              {t('footer.section.info')}
            </h4>
            <div className="flex flex-col gap-5">
              <Link to="/support">{t('footer.link.support')}</Link>
              <Link to="/customer-service">
                {t('footer.link.customerService')}
              </Link>
              <Link to="/get-started">{t('footer.link.getStarted')}</Link>
            </div>
          </div>
          <div className="flex w-[46%] flex-col gap-5 sm:w-[174px]">
            <h4 className="h-[15px] text-[10px] font-bold uppercase leading-[15px] tracking-[1.5px]">
              {t('footer.section.followUs')}
            </h4>
            <div className="flex flex-col gap-5 sm:flex-row">
              <a
                href="https://www.facebook.com/MenofManual"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="Facebook" className="size-6" />
              </a>
              <a
                href="https://www.manual.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={google} alt="Google" className="size-6" />
              </a>
              <a
                href="https://x.com/MenofManual"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="Twitter" className="size-6" />
              </a>
            </div>
          </div>
        </nav>
      </div>

      <div className="w-full justify-items-center border-t border-primary-300 p-6">
        <div className="text-center leading-[30px] text-primary-200">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
}
