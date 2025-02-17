import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/kishor-logo2.png";
import { NAVIGATION_LINKS } from "../constants";
import { FaTimes, FaBars, FaFileDownload } from "react-icons/fa";
import resumePDF from "../documents/Kishor_FS_Resume.pdf";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleScroll = (href) => {
    const target = document.querySelector(href);
    if (target) {
      const offset = 85;
      const position =
        target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: position, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky left-0 right-0 top-4 z-50 mx-auto max-w-7xl px-4 py-6">
      {/* Desktop Navigation */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden items-center justify-between rounded-xl border border-white/20 bg-black/20 px-6 py-3 backdrop-blur-lg lg:flex"
      >
        <a href="#home" className="mr-8">
          <motion.img
            src={logo}
            alt="Kishor Logo"
            width={120}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
          />
        </a>

        <div className="flex items-center gap-8">
          <ul className="flex gap-6">
            {NAVIGATION_LINKS.map((item) => (
              <motion.li key={item.href} whileHover={{ scale: 1.05 }}>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(item.href);
                  }}
                  className="text-lg font-medium text-white/90 transition-colors hover:text-blue-400"
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>

          <motion.a
            href={resumePDF}
            download="Kishor_Kumar_Andekar_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-full bg-gold-600 px-6 py-2 text-lg font-semibold text-white transition-all hover:bg-gold-700"
          >
            <FaFileDownload className="text-lg" />
            Resume
          </motion.a>
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <motion.div
          className="flex items-center justify-between rounded-xl border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-lg"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#home">
            <img src={logo} alt="Logo" width={90} />
          </a>

          <button
            onClick={toggleMobileMenu}
            className="rounded-lg p-2 text-white hover:bg-white/10"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </motion.div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 right-0 top-20 z-50 mx-4 rounded-xl border border-white/20 bg-black/80 p-6 backdrop-blur-lg"
          >
            <ul className="space-y-4">
              {NAVIGATION_LINKS.map((item) => (
                <motion.li
                  key={item.href}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(item.href);
                    }}
                    className="block text-lg font-medium text-white hover:text-blue-400"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}

              <motion.li
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <a
                  href={resumePDF}
                  download
                  className="flex items-center gap-2 text-lg font-medium text-white hover:text-blue-400"
                >
                  <FaFileDownload />
                  Download Resume
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
