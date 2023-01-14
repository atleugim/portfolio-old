import projects from "public/assets/json/projects.json";
import { useTranslation } from "react-i18next";
import Project from "./Project";

const Projects = () => {
  const { t } = useTranslation();

  const title = t("page.projects.title");

  return (
    <section id="projects" className="flex flex-col w-full space-y-4">
      <p
        className="flex space-x-1 text-lg font-medium"
        dangerouslySetInnerHTML={{
          __html: title,
        }}
      />
      <div className="flex flex-col items-start justify-start space-y-5">
        {projects.map((project, key) => (
          <Project key={project.link} priority={key === 0} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
