"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-black text-white"
    >
      <motion.div
        className="max-w-5xl mx-auto px-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>

        <p className="text-gray-400 text-lg leading-relaxed">
          Senior Quality Analyst with 3+ years of experience supporting
          global digital platforms at Amazon. Specialized in quality
          auditing, escalation handling, process optimization, and
          customer experience improvement across international markets.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          <div>
            <h3 className="text-3xl font-bold">3+</h3>
            <p className="text-gray-500">Years Experience</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">96%</h3>
            <p className="text-gray-500">CX Score</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Top 25</h3>
            <p className="text-gray-500">Amazon Associate</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">4×</h3>
            <p className="text-gray-500">Awards Won</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}