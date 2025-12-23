import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const Experience = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title">{t("experience_title")}</h2>

        <motion.div
          className="relative border-l-2 border-blue-500 ml-6 md:ml-12 pl-8 space-y-12 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* DGII Experience */}
          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <motion.div
              className="absolute -left-11 md:-left-14 top-0 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-50 dark:border-gray-900"
              whileHover={{ scale: 1.2 }}
            />
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{t("position_dgii")}</h3>
                  <h4 className="text-lg text-blue-600 dark:text-blue-400 mt-1">{t("company_dgii")}</h4>
                </div>
                <div className="mt-2 sm:mt-0 flex items-center gap-2">
                  <span className="px-4 py-1.5 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                    {t("date_dgii").split(" - ")[0]}
                  </span>
                  <span className="px-4 py-1.5 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 text-sm font-bold rounded-full flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    {t("current")}
                  </span>
                </div>
              </div>

              <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start group">
                  <span className="inline-flex mr-3 mt-1.5">
                    <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform"></div>
                  </span>
                  <span className="flex-1">{t("description_dgii_1")}</span>
                </li>
                <li className="flex items-start group">
                  <span className="inline-flex mr-3 mt-1.5">
                    <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform"></div>
                  </span>
                  <span className="flex-1">{t("description_dgii_2")}</span>
                </li>
                <li className="flex items-start group">
                  <span className="inline-flex mr-3 mt-1.5">
                    <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform"></div>
                  </span>
                  <span className="flex-1">{t("description_dgii_3")}</span>
                </li>
                <li className="flex items-start group">
                  <span className="inline-flex mr-3 mt-1.5">
                    <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform"></div>
                  </span>
                  <span className="flex-1">{t("description_dgii_4")}</span>
                </li>
                <li className="flex items-start group">
                  <span className="inline-flex mr-3 mt-1.5">
                    <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform"></div>
                  </span>
                  <span className="flex-1">{t("description_dgii_5")}</span>
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {["C#", ".NET", "ASP.NET MVC", "SQL", "React", "Python"].map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full border border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Patridge Consulting Experience */}
          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <motion.div
              className="absolute -left-11 md:-left-14 top-0 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-50 dark:border-gray-900"
              whileHover={{ scale: 1.2 }}
            />
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{t("position_patridge")}</h3>
                  <h4 className="text-lg text-blue-600 dark:text-blue-400 mt-1">{t("company_patridge")}</h4>
                </div>
                <div className="mt-2 sm:mt-0">
                  <span className="px-4 py-1.5 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                    {t("date_patridge")}
                  </span>
                </div>
              </div>

              <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start group">
                  <span className="inline-flex mr-3 mt-1.5">
                    <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform"></div>
                  </span>
                  <span className="flex-1">{t("description_patridge_1")}</span>
                </li>
                <li className="flex items-start group">
                  <span className="inline-flex mr-3 mt-1.5">
                    <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform"></div>
                  </span>
                  <span className="flex-1">{t("description_patridge_2")}</span>
                </li>
                <li className="flex items-start group">
                  <span className="inline-flex mr-3 mt-1.5">
                    <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform"></div>
                  </span>
                  <span className="flex-1">{t("description_patridge_3")}</span>
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Python", "Django", "Scrum"].map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full border border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
