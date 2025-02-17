import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";
import { motion } from "framer-motion";

const ContactForm = () => {
  // ... keep existing state and logic ...

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is Invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);

      emailjs
        .send(
          "service_imsd1js",
          "template_834088e",
          formData,
          "dVxUCCwZEB13c8k2W"
        )
        .then((response) => {
          toast.success("Message sent successfully");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log("FAILED...", error);
          toast.error("Failed to send message. Please try again later.");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };
  return (
    <section className="mx-auto max-w-7xl px-6 pt-10 pb-20" id="contact">
      <Toaster />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid gap-16 md:grid-cols-2"
      >
        {/* Contact Info */}
        <motion.div
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Let's Collaborate
          </h2>
          <p className="text-lg text-white/80">
            Open to discussing full-time roles, contract opportunities, or
            innovative projects in cloud architecture and full-stack
            development.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-white/5 p-3">
                <FiMail className="text-xl text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-white/60">Email</p>
                <a
                  href="mailto:kishor.andekar.dev@gmail.com"
                  className="text-white hover:text-blue-400"
                >
                  kishor.andekar.dev@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-white/5 p-3">
                <FiUser className="text-xl text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-white/60">Location</p>
                <p className="text-white">Kansas, United States</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ x: 50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="relative">
                <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  placeholder="Full Name"
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/20 bg-white/5 py-3 pl-10 pr-4 text-white placeholder-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-1 text-sm text-red-400"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>

              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email Address"
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/20 bg-white/5 py-3 pl-10 pr-4 text-white placeholder-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-1 text-sm text-red-400"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>

              <div className="relative">
                <FiMessageSquare className="absolute left-3 top-4 text-white/50" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  placeholder="Your Message"
                  onChange={handleChange}
                  rows="5"
                  className="w-full rounded-lg border border-white/20 bg-white/5 py-3 pl-10 pr-4 text-white placeholder-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-1 text-sm text-red-400"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSending}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 px-6 font-medium text-white transition-all hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSending ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <FiSend className="text-lg" />
                </>
              )}
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
