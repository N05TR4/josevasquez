import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const Experience = () => {
  const { t } = useLanguage();

  const roles = [
    {
      position: t('position_dgii'),
      company: t('company_dgii'),
      context: t('context_dgii'),
      date: t('date_dgii'),
      current: true,
      bullets: [
        t('description_dgii_1'),
        t('description_dgii_2'),
        t('description_dgii_3'),
        t('description_dgii_4'),
        t('description_dgii_5'),
      ],
      tech: ['C#', 'ASP.NET Core', 'SQL Server', 'Oracle', 'Docker', 'Azure DevOps'],
    },
    {
      position: t('position_loren'),
      company: t('company_loren'),
      context: t('context_loren'),
      date: t('date_loren'),
      bullets: [t('description_loren_1'), t('description_loren_2'), t('description_loren_3')],
      tech: ['Node.js', 'Next.js', 'Python', 'Django', 'PostgreSQL'],
    },
    {
      position: t('position_patridge'),
      company: t('company_patridge'),
      context: t('context_patridge'),
      date: t('date_patridge'),
      bullets: [t('description_patridge_1'), t('description_patridge_2')],
      tech: ['Python', 'Django', 'Scrum'],
    },
  ];

  return (
    <section id="experience" className="scroll-mt-20 bg-petrol/[0.03] py-20 dark:bg-petrol-dark/20 sm:py-24">
      <div className="shell">
        <SectionHeader eyebrow={t('eyebrow_experience')} title={t('experience_title')} />

        <div className="relative ml-2 border-l border-line-light pl-8 dark:border-line sm:ml-4 sm:pl-10">
          {roles.map((role, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative pb-12 last:pb-0"
            >
              {/* node */}
              <span className="absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center sm:-left-[51px]">
                <span className="h-3 w-3 rounded-full border-2 border-amber bg-paper dark:bg-ink" />
                {role.current && (
                  <span className="absolute h-3 w-3 animate-ping rounded-full bg-amber/60" />
                )}
              </span>

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl font-semibold">{role.position}</h3>
                <span className="flex items-center gap-2 font-mono text-xs text-mist dark:text-paper/55">
                  {role.date}
                  {role.current && (
                    <span className="rounded-full bg-amber/15 px-2 py-0.5 font-semibold text-amber">
                      {t('current')}
                    </span>
                  )}
                </span>
              </div>
              <p className="mt-1 font-medium text-petrol dark:text-amber-soft">{role.company}</p>
              <p className="mt-2 font-mono text-xs leading-relaxed text-mist dark:text-paper/50">
                {role.context}
              </p>

              <ul className="mt-4 space-y-2.5">
                {role.bullets.map((b, bi) => (
                  <li key={bi} className="flex gap-3 text-sm leading-relaxed text-mist dark:text-paper/75">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber/70" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {role.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-line-light px-2 py-0.5 font-mono text-[11px] text-mist transition-colors hover:border-amber hover:text-amber dark:border-line dark:text-paper/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
