import { useState } from "react";
import type { ProjectType } from "../types";
import ProjectDetails from "./ProjectDetails";

function Project({
  project,
  setPreview,
}: {
  project: ProjectType;
  setPreview: (preview: string | null) => void;
}) {
  const [isHidden, setIsHidden] = useState(false);
  const closeModal = () => {
    setIsHidden(false);
  };
  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(project.image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl">{project.title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {project.tags.map((tag, index) => (
              <span key={index} className="flex items-center gap-1 text-sm">
                <img
                  src={tag.path}
                  alt="icon"
                  className="size-8 rounded-full object-contain"
                />
                {tag.name}
              </span>
            ))}
          </div>
        </div>
        <button
          className="flex items-center gap-1 cursor-pointer hover:animation"
          onClick={() => setIsHidden(true)}
        >
          Read more
          <img
            src="assets/arrow-right.svg"
            alt="arrow-right"
            className="size-5"
          />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {isHidden && <ProjectDetails project={project} closeModal={closeModal} />}
    </>
  );
}

export default Project;
