import { useLanguage } from '../contexts/LanguageContext';
import SectionHeader from './SectionHeader';
import imgn from '../assets/img/Alberto.png';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-24">
      <div className="shell">
        <SectionHeader eyebrow={t('eyebrow_about')} title={t('about_title')} />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[260px_1fr] md:gap-14">
          {/* Portrait — framed like a profile card */}
          <div className="mx-auto w-full max-w-[260px] md:mx-0">
            <div className="relative">
              <div className="absolute -inset-2 rounded-xl border border-amber/40" aria-hidden />
              <div className="relative overflow-hidden rounded-xl border border-line-light dark:border-line">
                <img
                  src={imgn}
                  alt="Jose Vásquez"
                  className="aspect-[4/5] w-full object-cover grayscale-[15%]"
                />
              </div>
            </div>
            <p className="mt-4 font-mono text-[11px] text-mist dark:text-paper/50">
              // {t('location_value')}
            </p>
          </div>

          {/* Bio */}
          <div>
            <p className="font-display text-2xl font-medium leading-snug text-ink dark:text-paper sm:text-3xl">
              {t('about_lead')}
            </p>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-mist dark:text-paper/75">
              <p>{t('about_p1')}</p>
              <p>{t('about_p2')}</p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line-light bg-line-light dark:border-line dark:bg-line sm:grid-cols-2">
              <div className="bg-paper p-4 dark:bg-ink">
                <p className="font-mono text-[11px] uppercase tracking-wide text-mist">{t('email')}</p>
                <a
                  href="mailto:josevasquezdev21@gmail.com"
                  className="mt-1 block break-all text-sm font-medium hover:text-amber"
                >
                  josevasquezdev21@gmail.com
                </a>
              </div>
              <div className="bg-paper p-4 dark:bg-ink">
                <p className="font-mono text-[11px] uppercase tracking-wide text-mist">{t('phone')}</p>
                <p className="mt-1 text-sm font-medium">+1 829.805.7683</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
