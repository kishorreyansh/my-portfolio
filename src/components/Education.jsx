import { EDUCATION } from "../constants";
import { motion } from "framer-motion";
import { FaUniversity } from "react-icons/fa";

export const Education = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-12" id="education">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center gap-3 text-2xl md:text-4xl font-bold text-text-light mb-12"
      >
        Academic Background
      </motion.h2>

      <div className="space-y-8">
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="rounded-xl border border-white/20 bg-white/5 p-6 backdrop-blur-sm"
          >
            <div className="flex items-start gap-4">
              <div className="pt-1 text-2xl text-blue-400">
                <FaUniversity />
              </div>
              <div className="flex-1">
                <div className="flex flex-col justify-between md:flex-row">
                  <h3 className="text-2xl font-bold text-white">
                    {edu.degree}
                  </h3>
                  {edu.gpa && (
                    <span className="text-white/80">GPA: {edu.gpa}</span>
                  )}
                </div>
                <p className="text-xl text-blue-400">{edu.institution}</p>
                <p className="text-sm text-white/80">{edu.duration}</p>

                {edu.honors && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {edu.honors.map((honor, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/80"
                      >
                        {honor}
                      </span>
                    ))}
                  </div>
                )}

                <ul className="mt-4 space-y-2">
                  {edu.description.split(". ").map(
                    (point, i) =>
                      point && (
                        <li key={i} className="flex items-start text-white/90">
                          <span className="mr-2 mt-1">▹</span>
                          <span className="text-lg">{point.trim()}</span>
                        </li>
                      )
                  )}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
