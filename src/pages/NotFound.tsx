import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-6xl font-extrabold text-secondary-100">404</h1>
        <p className="text-2xl">{t('notFound.message')}</p>
        <Link to="/" className="text-primary-100 underline">
          {t('notFound.returnHome')}
        </Link>
      </div>
    </div>
  );
}
