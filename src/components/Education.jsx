import { useLanguage } from '../contexts/LanguageContext';
import { GraduationCap, Award } from 'lucide-react';
import SectionHeader from './SectionHeader';

const Education = () => {
  const { t } = useLanguage();

  const academic = [
    { title: t('master_title'), org: t('master_institution'), date: t('master_date'), current: true },
    { title: t('degree_title'), org: t('degree_institution'), date: t('degree_date') },
  ];

  const certs = [
    { title: t('cert_azure'), org: t('cert_azure_institution'), date: t('cert_azure_date') },
    { title: t('cert_csharp'), org: t('cert_csharp_institution'), date: t('cert_csharp_date') },
    { title: t('cert_sql'), org: t('cert_sql_institution'), date: t('cert_sql_date') },
    { title: t('cert_infotep'), org: t('cert_infotep_institution'), date: t('cert_infotep_date') },
    { title: t('cert_english'), org: t('cert_english_institution'), date: t('cert_english_date') },
  ];

  const Row = ({ title, org, date, current }) => (
    <div className="flex items-start justify-between gap-4 border-b border-line-light py-4 last:border-b-0 dark:border-line">
      <div>
        <h4 className="font-medium leading-snug">{title}</h4>
        <p className="mt-0.5 text-sm text-petrol dark:text-amber-soft">{org}</p>
      </div>
      <span
        className={`flex-shrink-0 rounded-full px-2.5 py-0.5 font-mono text-[11px] ${
          current ? 'bg-amber/15 font-semibold text-amber' : 'text-mist dark:text-paper/55'
        }`}
      >
        {date}
      </span>
    </div>
  );

  return (
    <section id="education" className="scroll-mt-20 bg-petrol/[0.03] py-20 dark:bg-petrol-dark/20 sm:py-24">
      <div className="shell">
        <SectionHeader eyebrow={t('eyebrow_education')} title={t('education_title')} />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-line-light bg-paper p-6 dark:border-line dark:bg-ink">
            <div className="mb-2 flex items-center gap-2.5">
              <GraduationCap size={18} className="text-amber" />
              <h3 className="font-mono text-xs uppercase tracking-wide text-mist dark:text-paper/55">
                {t('edu_academic')}
              </h3>
            </div>
            {academic.map((a, i) => (
              <Row key={i} {...a} />
            ))}
          </div>

          <div className="rounded-xl border border-line-light bg-paper p-6 dark:border-line dark:bg-ink">
            <div className="mb-2 flex items-center gap-2.5">
              <Award size={18} className="text-amber" />
              <h3 className="font-mono text-xs uppercase tracking-wide text-mist dark:text-paper/55">
                {t('edu_certs')}
              </h3>
            </div>
            {certs.map((c, i) => (
              <Row key={i} {...c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
