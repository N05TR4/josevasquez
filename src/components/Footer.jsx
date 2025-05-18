import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="section-container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {t("copyright")}
            </p>
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              {t("built_with")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;