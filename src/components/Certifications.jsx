import { CERTIFICATIONS } from "../constants";
import { motion } from "framer-motion";
const Certifications = () => {
  return (
    <section className="pt-20" id="certifications">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl font-semibold tracking-tighter"
      >
        Certifications
      </motion.h2>
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
       className="space-y-8 p-10">
        {CERTIFICATIONS.map((experience, index) => (
          <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: index*0.2 }}
            key={index}
            className="rounded-xl border border-stone-50/30 bg-white/10 p-4"
          >
            <h3 className="text-2xl font-semibold">{experience.title}</h3>
            <p className="text-xl">{experience.company}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Certifications;
