import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const { toggleLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  const navLinks = [
    { name: t('about'), href: '#about' },
    { name: t('experience'), href: '#experience' },
    { name: t('skills'), href: '#skills' },
    { name: t('education'), href: '#education' },
    { name: t('projects'), href: '#projects' },
    { name: t('contact'), href: '#contact' },
  ];

  const iconBtn =
    'p-2 rounded-md text-mist hover:text-ink dark:hover:text-paper hover:bg-line-light dark:hover:bg-petrol/40 transition-colors';

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-line-light/80 bg-paper/85 backdrop-blur-md dark:border-line dark:bg-ink/85'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="shell flex h-16 items-center justify-between">
        {/* Brand mark — terminal prompt */}
        <a href="#hero" className="group flex items-baseline gap-1.5 font-mono text-sm">
          <span className="text-amber">jv</span>
          <span className="text-mist group-hover:text-ink dark:group-hover:text-paper transition-colors">
            @portfolio
          </span>
          <span className="text-amber animate-blink">_</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 font-mono text-sm text-mist transition-colors hover:text-ink dark:text-paper/70 dark:hover:text-paper"
            >
              {link.name}
            </a>
          ))}
          <div className="mx-2 h-5 w-px bg-line-light dark:bg-line" />
          <button
            onClick={toggleLanguage}
            className="rounded-md border border-line-light px-2.5 py-1 font-mono text-xs font-medium text-mist transition-colors hover:border-amber hover:text-amber dark:border-line dark:text-paper/70"
            aria-label="Toggle language"
          >
            {t('language')}
          </button>
          <button onClick={toggleDarkMode} className={iconBtn} aria-label="Toggle theme">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          <button
            onClick={toggleLanguage}
            className="rounded-md border border-line-light px-2.5 py-1 font-mono text-xs font-medium text-mist dark:border-line dark:text-paper/70"
            aria-label="Toggle language"
          >
            {t('language')}
          </button>
          <button onClick={toggleDarkMode} className={iconBtn} aria-label="Toggle theme">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={toggleMenu} className={iconBtn} aria-label="Toggle menu">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-t border-line-light bg-paper md:hidden dark:border-line dark:bg-ink">
          <div className="shell flex flex-col py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={toggleMenu}
                className="rounded-md px-2 py-2.5 font-mono text-sm text-mist hover:bg-line-light hover:text-ink dark:text-paper/80 dark:hover:bg-petrol/40 dark:hover:text-paper"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
