import { useLanguage } from '../contexts/LanguageContext';
import porfolio from '../assets/img/projects/pofolio.jpg'

const Projects = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      title: "Portfolio Personal",
      description: "Un portfolio moderno y responsive construido con React, Vite y Tailwind CSS. Incluye modo oscuro/claro, internacionalización (español/inglés) y diseño optimizado para todos los dispositivos.",
      technologies: "React, Vite, Tailwind CSS, Javascript",
      githubUrl: "https://github.com/N05TR4/portfolio",
      liveUrl: "https://josevasquez-portfolio.netlify.app",
      imageUrl: porfolio
    },
    // Puedes agregar más proyectos aquí si lo deseas
  ];
  
  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-800">
      <div className="section-container">
        <h2 className="section-title">{t("projects_title")}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.split(',').map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between mt-4">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-3 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
                    >
                      {t("view_project")}
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                      {t("view_code")}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;