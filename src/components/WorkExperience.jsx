import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

export const WorkExperience = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-4 pb-10 md:px-12" id="work">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center gap-3 text-2xl md:text-4xl font-bold text-text-light mb-12"
      >
        Professional Journey
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="space-y-8"
      >
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-xl border border-white/20 bg-white/5 p-6 backdrop-blur-sm"
          >
            <div className="flex flex-col justify-between md:flex-row md:items-center">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {experience.title}
                </h3>
                <p className="text-xl text-blue-400">{experience.company}</p>
                <p className="text-sm text-white/80">{experience.duration}</p>
              </div>
              <span className="mt-2 text-white/80 md:mt-0">
                {experience.location}
              </span>
            </div>

            <ul className="mt-4 space-y-2">
              {experience.responsibilities.map((point, i) => (
                <li key={i} className="flex items-start text-white/90">
                  <MdArrowOutward className="mr-2 mt-1 flex-shrink-0 text-blue-400" />
                  <span className="text-lg">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {experience.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
