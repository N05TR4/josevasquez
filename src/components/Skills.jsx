import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t("skill_category_languages"),
      skills: ["C#", "Python", "JavaScript", "SQL", "HTML", "CSS"]
    },
    {
      title: t("skill_category_frameworks"),
      skills: [".NET", "ASP.NET MVC", "React", "Django", "Entity Framework", "Tailwind CSS"]
    },
    {
      title: t("skill_category_databases"),
      skills: ["SQL Server", "MySQL", "PostgreSQL"]
    },
    {
      title: t("skill_category_cloud"),
      skills: ["Azure", "Azure DevOps", "Docker", "Google Cloud", "Oracle Cloud", "Dokploy", "Git", "Linux"]
    },
    {
      title: t("skill_category_architecture"),
      skills: ["Clean Architecture", "CQRS", "SOLID", "Repository Pattern", "Design Patterns", "REST APIs"]
    },
    {
      title: t("skill_category_methodologies"),
      skills: ["Scrum", "Agile"]
    }
  ];

  const softSkills = [
    { name: t("skill_teamwork"), icon: "👥" },
    { name: t("skill_critical"), icon: "🧠" },
    { name: t("skill_communication"), icon: "💬" },
    { name: t("skill_problem"), icon: "🔍" },
    { name: t("skill_detail"), icon: "👁️" },
    { name: t("skill_motivation"), icon: "🚀" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-800">
      <div className="section-container">
        <h2 className="section-title">{t("skills_title")}</h2>

        {/* Hard Skills by Category */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8">{t("hard_skills")}</h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4 flex items-center">
                  <span className="w-1 h-6 bg-blue-600 dark:bg-blue-400 rounded mr-3"></span>
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Soft Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8">{t("soft_skills")}</h3>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20 rounded-lg border border-blue-200 dark:border-blue-700 flex flex-col items-center justify-center text-center hover:shadow-md hover:scale-105 transition-all"
              >
                <span className="text-3xl mb-2">{skill.icon}</span>
                <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
