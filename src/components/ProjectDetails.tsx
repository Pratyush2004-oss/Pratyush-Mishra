import type { ProjectType } from "../types";
import {motion} from "motion/react";
function ProjectDetails({
  project,
  closeModal,
}: {
  project: ProjectType;
  closeModal: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-full w-full overflow-hidden backdrop-blur-sm">
      <motion.div 
      className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      >
        <button
          className="absolute top-5 right-5 bg-midnight hover:bg-gray-500 p-2 rounded-sm"
          onClick={closeModal}
        >
          <img src="assets/close.svg" alt="close" className="size-6" />
        </button>
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-t-2xl"
        />
        {/* description and tags */}
        <div className="p-5 text-justify">
          <h5 className="text-2xl mb-2 font-bold text-white">
            {project.title}
          </h5>
          <p className="font-normal mb-3 text-neutral-400">
            {project.description}
          </p>
          <ul className="list-inside list-disc">
            {project.subDescription.map((description, index) => (
              <li
                className="my-2 text-sm font-normal text-neutral-400"
                key={index}
              >
                {description}
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {project.tags.map((tag) => (
                <img
                  src={tag.path}
                  alt={tag.name}
                  key={tag.id}
                  className="rounded-lg size-10 hover:animation"
                />
              ))}
            </div>
            <a
              href={project.href}
              className="inline-flex items-center gap-1 font-medium cursor-pointer hover:animation "
            >
              View Project
              <img src="assets/arrow-up.svg" alt="awwow-up" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectDetails;
