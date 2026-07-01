import { useLanguage } from '../contexts/LanguageContext';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-line-light dark:border-line">
      <div className="shell flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <a href="#hero" className="font-mono text-sm">
            <span className="text-amber">jv</span>
            <span className="text-mist dark:text-paper/60">@portfolio</span>
          </a>
          <p className="mt-2 max-w-sm text-sm text-mist dark:text-paper/60">
            {t('footer_tagline')}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/jose-alberto-vasquez-lorenzo-8204b3255/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-mist transition-colors hover:text-amber dark:text-paper/60">
            <Linkedin size={18} />
          </a>
          <a href="https://github.com/N05TR4" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-mist transition-colors hover:text-amber dark:text-paper/60">
            <Github size={18} />
          </a>
          <a href="mailto:josevasquezdev21@gmail.com" aria-label="Email" className="text-mist transition-colors hover:text-amber dark:text-paper/60">
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="border-t border-line-light dark:border-line">
        <div className="shell flex flex-col gap-1 py-5 text-center font-mono text-[11px] text-mist dark:text-paper/45 sm:flex-row sm:justify-between sm:text-left">
          <p>{t('copyright')}</p>
          <p>{t('built_with')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
