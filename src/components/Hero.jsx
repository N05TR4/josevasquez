import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, Download } from 'lucide-react';

const LINKS = {
  linkedin: 'https://www.linkedin.com/in/jose-alberto-vasquez-lorenzo-8204b3255/',
  github: 'https://github.com/N05TR4',
  email: 'mailto:josevasquezdev21@gmail.com',
};

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Hero = () => {
  const { t } = useLanguage();

  const fields = [
    { k: 'name', v: 'Jose A. Vásquez L.' },
    { k: 'role', v: t('json_role') },
    { k: 'focus', v: t('json_focus') },
    { k: 'scale', v: t('json_scale') },
    { k: 'location', v: t('json_location') },
    { k: 'experience', v: t('json_experience') },
  ];

  const metrics = [
    { value: t('metric_years_value'), label: t('metric_years_label') },
    { value: t('metric_records_value'), label: t('metric_records_label') },
    { value: t('metric_automation_value'), label: t('metric_automation_label') },
    { value: t('metric_products_value'), label: t('metric_products_label') },
  ];

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-line-light dark:border-line"
    >
      {/* Ambient: faint petrol glow + dotted grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] dark:opacity-[0.12]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '28px 28px',
          color: '#0D3B36',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-petrol/20 blur-3xl dark:bg-petrol/40"
      />

      <div className="shell relative grid grid-cols-1 items-center gap-12 pb-16 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24 lg:pt-36">
        {/* ---- Left: thesis ---- */}
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div variants={item} className="mb-6 flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber" />
            </span>
            <span className="font-mono text-xs text-mist dark:text-paper/60">
              {t('available')}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {t('hero_headline')}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 font-mono text-sm text-amber"
          >
            {t('role')}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-mist dark:text-paper/70"
          >
            {t('hero_lead')}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-md bg-amber px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              {t('contact_me')}
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md border border-ink/20 px-5 py-3 text-sm font-semibold transition-colors hover:border-amber hover:text-amber dark:border-paper/25"
            >
              {t('view_work')}
            </a>
            <a
              href="/JoseVasquezCV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md px-3 py-3 text-sm font-medium text-mist transition-colors hover:text-amber dark:text-paper/60"
            >
              <Download size={16} />
              {t('download_cv')}
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-5">
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-mist transition-colors hover:text-amber dark:text-paper/60">
              <Linkedin size={20} />
            </a>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-mist transition-colors hover:text-amber dark:text-paper/60">
              <Github size={20} />
            </a>
            <a href={LINKS.email} aria-label="Email" className="text-mist transition-colors hover:text-amber dark:text-paper/60">
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* ---- Right: the signature — request/response panel ---- */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
          className="overflow-hidden rounded-xl border border-line-light bg-white shadow-2xl shadow-petrol/5 dark:border-line dark:bg-petrol-dark/60 dark:shadow-black/40"
        >
          {/* request bar */}
          <div className="flex items-center justify-between border-b border-line-light px-4 py-3 dark:border-line/80">
            <span className="font-mono text-xs text-mist dark:text-paper/70">
              <span className="text-amber">GET</span>{' '}
              {t('hero_endpoint').replace('GET ', '')}
            </span>
            <span className="rounded-full bg-amber/15 px-2 py-0.5 font-mono text-[11px] font-semibold text-amber">
              {t('hero_status')}
            </span>
          </div>

          {/* response body */}
          <div className="px-5 py-5 font-mono text-[13px] leading-relaxed">
            <span className="text-mist dark:text-paper/40">{'{'}</span>
            {fields.map((f) => (
              <div key={f.k} className="pl-4">
                <span className="text-petrol dark:text-amber-soft">"{f.k}"</span>
                <span className="text-mist dark:text-paper/40">: </span>
                <span className="text-ink dark:text-paper/90">"{f.v}"</span>
                <span className="text-mist dark:text-paper/40">,</span>
              </div>
            ))}
            <div className="pl-4">
              <span className="text-petrol dark:text-amber-soft">"status"</span>
              <span className="text-mist dark:text-paper/40">: </span>
              <span className="inline-flex items-center gap-1.5 rounded bg-amber/15 px-1.5 text-amber">
                <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse" />
                "{t('json_status')}"
              </span>
            </div>
            <span className="text-mist dark:text-paper/40">{'}'}</span>
          </div>
        </motion.div>
      </div>

      {/* ---- Metrics band ---- */}
      <div className="border-t border-line-light dark:border-line">
        <div className="shell grid grid-cols-2 divide-line-light dark:divide-line sm:grid-cols-4 sm:divide-x">
          {metrics.map((m, i) => (
            <div
              key={i}
              className={`px-2 py-6 sm:px-6 ${i < 2 ? 'border-b border-line-light dark:border-line sm:border-b-0' : ''}`}
            >
              <div className="font-display text-3xl font-bold text-ink dark:text-paper sm:text-4xl">
                {m.value}
              </div>
              <div className="mt-1.5 font-mono text-[11px] leading-snug text-mist dark:text-paper/55">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
