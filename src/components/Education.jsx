import { useLanguage } from '../contexts/LanguageContext';

const Education = () => {
  const { t } = useLanguage();
  
  return (
    <section id="education" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title">{t("education_title")}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Education */}
          <div className="space-y-6">
            {/* Bachelor's Degree */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{t("degree_title")}</h3>
                  <p className="text-blue-600 dark:text-blue-400">{t("degree_institution")}</p>
                </div>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                  {t("degree_date")}
                </span>
              </div>
            </div>
            
            {/* Master's Degree */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{t("master_title")}</h3>
                  <p className="text-blue-600 dark:text-blue-400">{t("master_institution")}</p>
                </div>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                  {t("master_date")}
                </span>
              </div>
            </div>
          </div>
          
          {/* Certifications */}
          <div className="space-y-6">
            {/* Advanced C# .Net */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{t("cert_csharp")}</h3>
                  <p className="text-blue-600 dark:text-blue-400">{t("cert_csharp_institution")}</p>
                </div>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
                  {t("cert_csharp_date")}
                </span>
              </div>
            </div>
            
            {/* Microsoft SQL Server */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{t("cert_sql")}</h3>
                  <p className="text-blue-600 dark:text-blue-400">{t("cert_sql_institution")}</p>
                </div>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
                  {t("cert_sql_date")}
                </span>
              </div>
            </div>
            
            {/* English Immersion Program */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{t("cert_english")}</h3>
                  <p className="text-blue-600 dark:text-blue-400">{t("cert_english_institution")}</p>
                </div>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
                  {t("cert_english_date")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;