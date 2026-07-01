import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Phone, MapPin, Github, Linkedin, Loader2 } from 'lucide-react';
import SectionHeader from './SectionHeader';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1200);
  };

  const inputCls =
    'w-full rounded-md border border-line-light bg-paper px-3 py-2.5 text-sm outline-none transition-colors focus:border-amber dark:border-line dark:bg-ink';

  const info = [
    { icon: Mail, label: t('email'), value: 'josevasquezdev21@gmail.com', href: 'mailto:josevasquezdev21@gmail.com' },
    { icon: Phone, label: t('phone'), value: '+1 829.805.7683', href: 'tel:+18298057683' },
    { icon: MapPin, label: t('location'), value: t('location_value') },
  ];

  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-24">
      <div className="shell">
        <SectionHeader eyebrow={t('eyebrow_contact')} title={t('contact_title')} />
        <p className="-mt-6 mb-10 max-w-xl text-base text-mist dark:text-paper/70">
          {t('contact_lead')}
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_0.85fr]">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-line-light bg-paper p-6 dark:border-line dark:bg-petrol-dark/30"
          >
            <h3 className="mb-5 font-mono text-xs uppercase tracking-wide text-amber">
              {t('contact_form_title')}
            </h3>

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium">{t('name')}</label>
                <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className={inputCls} />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium">{t('email')}</label>
                <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className={inputCls} />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium">{t('message')}</label>
                <textarea id="message" name="message" rows="4" required value={formData.message} onChange={handleChange} className={`${inputCls} resize-none`} />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-amber px-4 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    {t('sending')}…
                  </>
                ) : (
                  t('send')
                )}
              </button>

              {submitSuccess && (
                <p className="rounded-md border border-amber/40 bg-amber/10 px-3 py-2.5 text-sm text-amber">
                  {t('contact_success')}
                </p>
              )}
            </div>
          </form>

          {/* Info */}
          <div className="space-y-6">
            <div className="rounded-xl border border-line-light bg-paper p-6 dark:border-line dark:bg-petrol-dark/30">
              <h3 className="mb-5 font-mono text-xs uppercase tracking-wide text-mist dark:text-paper/55">
                {t('contact_info_title')}
              </h3>
              <div className="space-y-4">
                {info.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-amber/10 text-amber">
                      <Icon size={16} />
                    </span>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-wide text-mist">{label}</p>
                      {href ? (
                        <a href={href} className="break-all text-sm font-medium hover:text-amber">{value}</a>
                      ) : (
                        <p className="text-sm font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-line-light bg-paper p-6 dark:border-line dark:bg-petrol-dark/30">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-wide text-mist dark:text-paper/55">
                {t('contact_social_title')}
              </h3>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/in/jose-alberto-vasquez-lorenzo-8204b3255/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-md border border-line-light text-mist transition-colors hover:border-amber hover:text-amber dark:border-line dark:text-paper/65">
                  <Linkedin size={18} />
                </a>
                <a href="https://github.com/N05TR4" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-10 w-10 items-center justify-center rounded-md border border-line-light text-mist transition-colors hover:border-amber hover:text-amber dark:border-line dark:text-paper/65">
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
