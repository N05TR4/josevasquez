import { useLanguage } from "../contexts/LanguageContext";
import imgn from '../assets/img/Alberto.png'

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-800">
      <div className="section-container">
        <h2 className="section-title">{t("about_title")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={imgn}
                alt="José Vásquez - About"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-3 space-y-4">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {t("about_description")}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {t("about_description_2")}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    Email:
                  </span>
                </div>
                <a
                  href="mailto:josevasquez.l.0011@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                >
                  josevasquez.l.0011@gmail.com
                </a>
              </div>

              <div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    {t("phone")}:
                  </span>
                </div>
                <span className="text-gray-600 dark:text-gray-400">
                  829.805.7683
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
