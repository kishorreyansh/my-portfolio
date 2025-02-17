import { PROJECTS } from "../constants";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="px-6 py-2 md:px-12" id="projects">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="section-title"
        //className="mb-12 text-center text-4xl font-bold text-white md:text-5xl"*
      >
        Key Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-2xl border border-white/20"
          >
            {/* Project Image */}
            <motion.img
              src={project.image}
              alt={project.name}
              className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              initial={{ scale: 1 }}
            />

            {/* Project Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 to-transparent p-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-semibold text-white">
                  {project.name}
                </h3>
                <p className="text-gray-300">{project.description}</p>
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex w-fit items-center gap-2 text-white"
                >
                  <span>View Repository</span>
                  <MdArrowOutward className="transition-transform group-hover:translate-x-1" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
