import { PROJECTS } from "../constants";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <section className="px-4 sm:px-6 py-10 md:px-12 lg:px-16" id="projects">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center gap-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-text-light mb-8 sm:mb-12"
      >
        Key Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col h-full p-4 sm:p-5 md:p-6 rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-transparent hover:from-white/15 hover:via-white/10 hover:to-transparent transition-all duration-300"
          >
            <div className="flex flex-col h-full space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                {project.name}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 flex-grow">
                {project.description}
              </p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 mt-auto pt-3 sm:pt-4 text-sm sm:text-base"
              >
                <span>View Repository</span>
                <MdArrowOutward />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
