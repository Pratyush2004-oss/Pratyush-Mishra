import Project from "../components/Project";
import { myProjects } from "../constamts";

function Projects() {
  return (
    <div id="projects" className="relative c-space section-spacing">
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full">
        {myProjects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
