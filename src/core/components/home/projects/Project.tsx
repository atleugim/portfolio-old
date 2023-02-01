import { Language, Project } from "@/core/utils/types";
import { useTranslation } from "react-i18next";
import Button from "../../shared/Button";
import { iconResolver } from "../../shared/Icons/Technologies";
import ImageWithFallback from "../../shared/ImageWithFallback";

interface ProjectProps {
  project: Project;
  priority?: boolean | false;
}

const Project = ({ project, priority }: ProjectProps) => {
  const { t, i18n } = useTranslation();
  const viewLabel = t("page.projects.view_btn");

  return (
    <div className="group relative flex w-full transform flex-col rounded-xl bg-opacity-10 bg-glass-light ring-1 ring-primary ring-opacity-5 backdrop-blur-md duration-300 dark:bg-opacity-10 dark:bg-glass-dark dark:ring-light dark:ring-opacity-10 md:flex-row">
      <div className="flex h-full w-full flex-col items-start space-y-4 p-5 md:w-8/12">
        <h2 className="text-4xl font-bold">{project.name}</h2>
        <p className="font-light">
          {project.description[i18n.language as keyof Language]}
        </p>
        <div className="flex w-full space-x-4 text-primary dark:text-white">
          {project.technologies.map((technology) => (
            <span title={technology.name} key={technology.id} className="">
              {iconResolver(technology.id, 1.4)}
            </span>
          ))}
        </div>
        <Button
          isNavigation
          text={viewLabel}
          href={project.link}
          target="_blank"
        />
      </div>
      <div className="h-full max-h-40 w-full p-4 sm:-translate-y-5 sm:scale-125 md:max-h-screen md:w-4/12 md:translate-y-0 md:translate-x-8 md:p-0">
        <ImageWithFallback
          width={300}
          height={300}
          priority={priority}
          src={project.image}
          alt={project.name}
          className="h-full w-full object-contain object-center duration-300 md:group-hover:scale-110"
        />
      </div>
    </div>
  );
};

export default Project;
