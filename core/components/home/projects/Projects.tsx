import Project from "./Project";

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col w-full space-y-4">
      <p className="flex space-x-1 text-lg font-medium">
        <span className="text-secondary">Some </span>
        <span>projects I&apos;ve worked on</span>
      </p>
      <div className="flex flex-col items-start justify-start space-y-5">
        {[0, 1, 2, 3].map((index) => (
          <Project
            key={index}
            name="Project name goes here"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            image="/assets/images/neutro.png"
            link="https://startupslab.co/"
            technologies={[]}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
