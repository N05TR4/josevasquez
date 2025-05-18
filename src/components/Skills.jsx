import { useLanguage } from '../contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();
  
  const hardSkills = [
    { name: "C#", percentage: 90 },
    { name: ".NET", percentage: 85 },
    { name: "Python", percentage: 80 },
    { name: "SQL", percentage: 85 },
    { name: "React", percentage: 75 },
    { name: "HTML/CSS", percentage: 85 },
    { name: "JavaScript", percentage: 80 },
    { name: "Entity Framework", percentage: 75 },
    { name: "Tailwind", percentage: 70 },
    { name: "Version Control", percentage: 80 },
    { name: "API Development", percentage: 85 },
  ];
  
  const softSkills = [
    { name: t("skill_teamwork"), icon: "👥" },
    { name: t("skill_critical"), icon: "🧠" },
    { name: t("skill_communication"), icon: "💬" },
    { name: t("skill_problem"), icon: "🔍" },
    { name: t("skill_detail"), icon: "👁️" },
    { name: t("skill_motivation"), icon: "🚀" },
  ];
  
  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-800">
      <div className="section-container">
        <h2 className="section-title">{t("skills_title")}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          {/* Hard Skills */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">{t("hard_skills")}</h3>
            
            <div className="space-y-6">
              {hardSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-blue-500 h-2.5 rounded-full" 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">{t("soft_skills")}</h3>
            
            <div className="grid grid-cols-2 gap-6">
              {softSkills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800 flex items-center hover:shadow-md transition-shadow"
                >
                  <span className="text-2xl mr-3">{skill.icon}</span>
                  <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;