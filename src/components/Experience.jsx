import { useLanguage } from '../contexts/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();
  
  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title">{t("experience_title")}</h2>
        
        <div className="relative border-l-2 border-blue-500 ml-6 md:ml-12 pl-8 space-y-12">
          {/* DGII Experience */}
          <div className="relative">
            <div className="absolute -left-11 md:-left-14 top-0 w-6 h-6 bg-blue-500 rounded-full"></div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex flex-wrap justify-between items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{t("position_dgii")}</h3>
                  <h4 className="text-lg text-blue-600 dark:text-blue-400">{t("company_dgii")}</h4>
                </div>
                <div className="mt-2 sm:mt-0">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">{t("date_dgii")} <span className="ml-1 font-bold text-green-600 dark:text-green-400">{t("current")}</span></span>
                </div>
              </div>
              
              <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="inline-flex mr-2 mt-1"><div className="w-2 h-2 bg-blue-500 rounded-full"></div></span>
                  {t("description_dgii_1")}
                </li>
                <li className="flex items-start">
                  <span className="inline-flex mr-2 mt-1"><div className="w-2 h-2 bg-blue-500 rounded-full"></div></span>
                  {t("description_dgii_2")}
                </li>
                <li className="flex items-start">
                  <span className="inline-flex mr-2 mt-1"><div className="w-2 h-2 bg-blue-500 rounded-full"></div></span>
                  {t("description_dgii_3")}
                </li>
                <li className="flex items-start">
                  <span className="inline-flex mr-2 mt-1"><div className="w-2 h-2 bg-blue-500 rounded-full"></div></span>
                  {t("description_dgii_4")}
                </li>
                <li className="flex items-start">
                  <span className="inline-flex mr-2 mt-1"><div className="w-2 h-2 bg-blue-500 rounded-full"></div></span>
                  {t("description_dgii_5")}
                </li>
              </ul>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-full">C#</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-full">.NET</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-full">ASP.NET MVC</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-full">SQL</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-full">React</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-full">Python</span>
              </div>
            </div>
          </div>
          
          {/* Patridge Consulting Experience */}
          <div className="relative">
            <div className="absolute -left-11 md:-left-14 top-0 w-6 h-6 bg-blue-500 rounded-full"></div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex flex-wrap justify-between items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{t("position_patridge")}</h3>
                  <h4 className="text-lg text-blue-600 dark:text-blue-400">{t("company_patridge")}</h4>
                </div>
                <div className="mt-2 sm:mt-0">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">{t("date_patridge")}</span>
                </div>
              </div>
              
              <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="inline-flex mr-2 mt-1"><div className="w-2 h-2 bg-blue-500 rounded-full"></div></span>
                  {t("description_patridge_1")}
                </li>
                <li className="flex items-start">
                  <span className="inline-flex mr-2 mt-1"><div className="w-2 h-2 bg-blue-500 rounded-full"></div></span>
                  {t("description_patridge_2")}
                </li>
                <li className="flex items-start">
                  <span className="inline-flex mr-2 mt-1"><div className="w-2 h-2 bg-blue-500 rounded-full"></div></span>
                  {t("description_patridge_3")}
                </li>
              </ul>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-full">Python</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-full">Django</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-full">Scrum</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;