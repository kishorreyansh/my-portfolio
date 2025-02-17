import { SKILLS } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};

export const Skills = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pt-10 pb-4" id="skills">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center gap-3 text-2xl md:text-4xl font-bold text-text-light mb-12"
      >
        Technical Expertise
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
      >
        {SKILLS.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-center gap-4 rounded-xl border border-white/20 bg-white/5 p-4 backdrop-blur-sm"
          >
            <img src={skill.icon} alt={skill.name} className="h-12 w-12" />

            <span className="text-lg font-medium text-white md:text-xl">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
