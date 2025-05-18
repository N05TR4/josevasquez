import { useLanguage } from '../contexts/LanguageContext';
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
      titleKey: "portfolio_title",
      descriptionKey: "portfolio_description",
      technologies: `${t("tech_react")}, ${t("tech_vite")}, ${t("tech_tailwind")}`,
      githubUrl: "https://github.com/N05TR4/portfolio",
      liveUrl: "https://josevasquez-portfolio.netlify.app",
      imageUrl: portfolioImg
    },
    {
      titleKey: "codeator_title",
      descriptionKey: "codeator_description",
      technologies: `${t("tech_react")}, ${t("tech_dotnet")}, ${t("tech_tailwind")}, ${t("tech_java")}, ${t("tech_spring")}, ${t("tech_python")}, ${t("tech_mysql")}`,
      githubUrl: "https://github.com/N05TR4/Codeator",
      liveUrl: "https://codeator.vercel.app/", // No tiene demo en vivo
      imageUrl: codeatorImg
    },
    {
      titleKey: "image_processor_title",
      descriptionKey: "image_processor_description",
      technologies: `${t("tech_react")}, ${t("tech_tailwind")}, ${t("tech_js")}`,
      githubUrl: "https://github.com/N05TR4/image-processor",
      liveUrl: null,
       imageUrl: imageProcessorImg
    },
    {
      titleKey: "club_access_title",
      descriptionKey: "club_access_description",
      technologies: `${t("tech_csharp")}, ${t("tech_dotnet")}, ${t("tech_entity")}, ${t("tech_mysql")}, ${t("tech_react")}`,
      githubUrl: "https://github.com/N05TR4/ClubAccessSystem",
      liveUrl: null,
      imageUrl: clubAccessImg
    },
    {
      titleKey: "movilpos_title",
      descriptionKey: "movilpos_description",
      technologies: `${t("tech_react_native")}, ${t("tech_firebase")}, ${t("tech_tailwind")}, ${t("tech_bootstrap")}`,
      githubUrl: "https://github.com/N05TR4/movilPOS",
      liveUrl: null,
      imageUrl: movilPOSImg
    },
    {
        titleKey: "farmacia_title",
        descriptionKey: "farmacia_description",
        technologies: `${t("tech_python")}, ${t("tech_django")}`,
        githubUrl: "https://github.com/N05TR4/movilPOS",
        liveUrl: null,
        imageUrl: farmaciaImg

    },
    {
      titleKey: "website_title",
      descriptionKey: "website_description",
      technologies: `${t("tech_python")}, ${t("tech_django")}, ${t("tech_bootstrap")}, ${t("tech_postgresql")}`,
      githubUrl: "https://github.com/N05TR4/Web-Site",
      liveUrl: "https://ezeicom-web.onrender.com/",
      imageUrl: websiteImg
    }
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
                  alt={t(project.titleKey)} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {t(project.titleKey)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t(project.descriptionKey)}
                </p>
                
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
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    {t("view_code")}
                  </a>
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