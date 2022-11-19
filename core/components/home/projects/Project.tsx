import Button from "@/components/shared/Button";
import { Project } from "@/utils/types";
import { iconResolver } from "../../shared/Icons/Technologies";
import ImageWithFallback from "../../shared/ImageWithFallback";

interface ProjectProps {
  project: Project;
  priority?: boolean | false;
}

const Project = ({ project, priority }: ProjectProps) => {
  return (
    <div className="relative flex flex-col w-full duration-300 transform ring-1 rounded-xl group ring-primary dark:ring-light ring-opacity-5 dark:ring-opacity-10 backdrop-blur-md bg-glass-light dark:bg-glass-dark dark:bg-opacity-10 bg-opacity-10 md:flex-row">
      <div className="flex flex-col items-start w-full h-full p-5 space-y-4 md:w-8/12">
        <h2 className="text-4xl font-bold">{project.name}</h2>
        <p className="font-light">{project.description}</p>
        <div className="flex w-full space-x-4 dark:text-white">
          {project.technologies.map((technology) =>
            iconResolver(technology.id, 1.4)
          )}
        </div>
        <Button
          className="duration-300 bg-glass-light dark:bg-glass-dark hover:bg-light dark:hover:bg-primary"
          text="View project"
          isNavigation
          href={project.link}
          target="_blank"
        />
      </div>
      <div className="w-full h-full p-4 sm:-translate-y-5 md:translate-y-0 sm:scale-125 md:translate-x-8 max-h-40 md:max-h-screen md:w-4/12 md:p-0">
        <ImageWithFallback
          width={300}
          height={300}
          priority={priority}
          src={project.image}
          alt={project.name}
          className="object-contain object-center w-full h-full duration-200 group-hover:scale-110"
        />
      </div>
    </div>
  );
};

export default Project;
