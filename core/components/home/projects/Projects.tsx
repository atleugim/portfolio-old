import projects from "@/utils/projects.json";
import Project from "./Project";

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col w-full space-y-4">
      <p className="flex space-x-1 text-lg font-medium">
        <span>Some</span>
        <span className="text-secondary">things</span>
        <span>I&apos;ve built</span>
      </p>
      <div className="flex flex-col items-start justify-start space-y-5">
        {projects.map((project, key) => (
          <Project key={project.link} priority={key === 0} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
