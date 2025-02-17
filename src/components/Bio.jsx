import React from "react";
import { BIO } from "../constants";
import { motion } from "framer-motion";
import kishorPhoto from "../assets/kishor-latest.jpeg";

const Bio = () => {
  return (
    <section
      className="relative mx-auto min-h-screen max-w-7xl px-6 py-10 md:px-12"
      id="bio"
    >
      <div className="flex flex-col items-center gap-16 md:flex-row">
        {/* Photo Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="md:w-1/3"
        >
          <img
            src={kishorPhoto}
            alt="Kishor Kumar Andekar"
            className="h-auto w-full max-w-md rounded-2xl shadow-2xl ring-2 ring-gray-200/30"
          />
        </motion.div>

        {/* Bio Content */}
        {/* Bio Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:w-2/3"
        >
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-2 text-xl text-white/80 md:text-2xl"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
          >
            Kishor Kumar Andekar
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-6 text-2xl text-white/90 md:text-3xl"
          >
            Senior Full-Stack Engineer
          </motion.h2>

          {/* Use space-y for better spacing instead of mb-8 */}
          <div className="space-y-4">
            {BIO.map((bio, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                className="text-lg font-medium leading-relaxed text-white/90 md:text-xl"
              >
                {bio}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Bio;
