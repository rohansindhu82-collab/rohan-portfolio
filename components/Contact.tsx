"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex items-center justify-center"
    >
      <motion.div
        className="text-center px-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6">
          Let’s Work Together
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto">
          Open to Senior Quality Analyst and QA Engineer opportunities.
          Available for remote roles and global teams.
        </p>

        <div className="mt-10 flex gap-6 justify-center flex-wrap">

          <a
            href="mailto:rohansindhu82@gmail.com"
            className="bg-white text-black px-6 py-3 rounded-lg hover:scale-105 transition"
          >
            Email Me
          </a>

          <a
            href="#"
            className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            LinkedIn
          </a>

          <a
            href="/resume.pdf"
            className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            Download Resume
          </a>

        </div>
      </motion.div>
    </section>
  );
}