import logo from "../assets/kishor-logo2.png";
import { SOCIAL_MEDIA_LINKS } from "../constants";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="mt-10 mb-8">
      {/* Logo with sliding animation */}
      {/* <div className="flex justify-center bg-transparent">
        <motion.img
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={logo}
          width={200}
          className="my-20"
        />
      </div> */}

      {/* Social media links with sliding animation */}
      <div className="flex justify-center gap-8 mt-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.3 }}
            style={{ fontSize: "35px" }}
            className="text-white hover:text-blue-400" // Adjust icon size here
          >
            {link.icon}
          </motion.a>
        ))}
      </div>

      {/* Copyright message */}
      <motion.p
        className="mt-8 text-center text-lg tracking-wide text-gray-400"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Built By Kishor Kumar Andekar. All rights reserved.
      </motion.p>
    </div>
  );
};

export default Footer;
