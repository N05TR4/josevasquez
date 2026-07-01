import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const Skills = () => {
  const { t } = useLanguage();

  const categories = [
    { title: t('skill_category_languages'), skills: ['C#', 'Python', 'JavaScript', 'TypeScript', 'SQL'] },
    { title: t('skill_category_frameworks'), skills: ['ASP.NET Core', '.NET 6/8/10', 'React', 'NextJS', 'Node.js', 'Django', 'FastAPI'] },
    { title: t('skill_category_architecture'), skills: ['Clean Architecture', 'CQRS', 'SOLID', 'DDD', 'REST APIs', 'Microservices'] },
    { title: t('skill_category_databases'), skills: ['SQL Server', 'Oracle', 'PostgreSQL', 'MySQL', 'Entity Framework', 'ADO.NET'] },
    { title: t('skill_category_cloud'), skills: ['Docker', 'Azure', 'Azure DevOps', 'CI/CD', 'Git', 'Linux'] },
    { title: t('skill_category_methodologies'), skills: ['Scrum', 'Agile', 'TDD/BDD', 'Code Reviews', 'Swagger/OpenAPI'] },
  ];

  const soft = [
    t('skill_teamwork'),
    t('skill_critical'),
    t('skill_communication'),
    t('skill_problem'),
    t('skill_detail'),
    t('skill_motivation'),
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
  };
  const item = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="skills" className="scroll-mt-20 py-20 sm:py-24">
      <div className="shell">
        <SectionHeader eyebrow={t('eyebrow_skills')} title={t('skills_title')} />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line-light bg-line-light dark:border-line dark:bg-line sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((cat) => (
            <motion.div key={cat.title} variants={item} className="bg-paper p-6 dark:bg-ink">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-wide text-amber">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-line-light px-2.5 py-1 text-sm text-mist transition-colors hover:border-amber hover:text-ink dark:border-line dark:text-paper/75 dark:hover:text-paper"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft skills */}
        <div className="mt-10">
          <h3 className="mb-4 font-mono text-xs uppercase tracking-wide text-mist dark:text-paper/55">
            {t('soft_skills')}
          </h3>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {soft.map((s) => (
              <span key={s} className="flex items-center gap-2 text-sm">
                <span className="font-mono text-amber">+</span>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
