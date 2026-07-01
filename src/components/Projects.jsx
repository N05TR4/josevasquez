import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
import portfolioImg from '../assets/img/projects/pofolio.jpg';
import codeatorImg from '../assets/img/projects/codeator.jpg';
import imageProcessorImg from '../assets/img/projects/image-processor.jpg';
import clubAccessImg from '../assets/img/projects/club-access.jpg';
import movilPOSImg from '../assets/img/projects/movil-pos.jpg';
import farmaciaImg from '../assets/img/projects/farmacia.jpg';
import websiteImg from '../assets/img/projects/website.jpg';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      titleKey: 'farmacia_title',
      descriptionKey: 'farmacia_description',
      tech: ['Python', 'Django', 'PostgreSQL', 'Bootstrap'],
      githubUrl: 'https://github.com/N05TR4',
      liveUrl: 'https://hadespos.ddns.net/',
      imageUrl: farmaciaImg,
    },
    {
      titleKey: 'website_title',
      descriptionKey: 'website_description',
      tech: ['Python', 'Django', 'PostgreSQL', 'Bootstrap'],
      githubUrl: 'https://github.com/N05TR4/Web-Site',
      liveUrl: 'https://ezeicom-web.onrender.com/',
      imageUrl: websiteImg,
    },
    {
      titleKey: 'codeator_title',
      descriptionKey: 'codeator_description',
      tech: ['React', '.NET', 'Python', 'MySQL', 'Tailwind'],
      githubUrl: 'https://github.com/N05TR4/Codeator',
      liveUrl: 'https://codeator.vercel.app/',
      imageUrl: codeatorImg,
    },
    {
      titleKey: 'club_access_title',
      descriptionKey: 'club_access_description',
      tech: ['C#', '.NET', 'Entity Framework', 'React', 'MySQL'],
      githubUrl: 'https://github.com/N05TR4/ClubAccessSystem',
      liveUrl: null,
      imageUrl: clubAccessImg,
    },
    {
      titleKey: 'movilpos_title',
      descriptionKey: 'movilpos_description',
      tech: ['React Native', 'Firebase', 'Tailwind'],
      githubUrl: 'https://github.com/N05TR4/movilPOS',
      liveUrl: null,
      imageUrl: movilPOSImg,
    },
    {
      titleKey: 'image_processor_title',
      descriptionKey: 'image_processor_description',
      tech: ['React', 'Tailwind', 'JavaScript'],
      githubUrl: 'https://github.com/N05TR4/image-processor',
      liveUrl: null,
      imageUrl: imageProcessorImg,
    },
    {
      titleKey: 'portfolio_title',
      descriptionKey: 'portfolio_description',
      tech: ['React', 'Vite', 'Tailwind'],
      githubUrl: 'https://github.com/N05TR4/portfolio',
      liveUrl: 'https://josevasquezl.vercel.app',
      imageUrl: portfolioImg,
    },
  ];

  return (
    <section id="projects" className="scroll-mt-20 py-20 sm:py-24">
      <div className="shell">
        <SectionHeader eyebrow={t('eyebrow_projects')} title={t('projects_title')} />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.06 }}
              className="group flex flex-col overflow-hidden rounded-xl border border-line-light bg-paper transition-colors hover:border-amber/60 dark:border-line dark:bg-petrol-dark/30"
            >
              <div className="relative h-44 overflow-hidden border-b border-line-light dark:border-line">
                <img
                  src={project.imageUrl}
                  alt={t(project.titleKey)}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {project.liveUrl && (
                  <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-ink/80 px-2.5 py-1 font-mono text-[10px] font-semibold text-amber backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse" />
                    {t('live')}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-semibold leading-snug">
                  {t(project.titleKey)}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-mist dark:text-paper/70">
                  {t(project.descriptionKey)}
                </p>

                <p className="mt-4 font-mono text-[11px] leading-relaxed text-mist dark:text-paper/55">
                  {project.tech.map((tech, i) => (
                    <span key={tech}>
                      {i > 0 && <span className="text-amber/60"> · </span>}
                      {tech}
                    </span>
                  ))}
                </p>

                <div className="mt-5 flex items-center gap-4 border-t border-line-light pt-4 dark:border-line">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber hover:underline"
                    >
                      {t('view_project')}
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-mist hover:text-ink dark:text-paper/65 dark:hover:text-paper"
                  >
                    <Github size={15} />
                    {t('view_code')}
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
