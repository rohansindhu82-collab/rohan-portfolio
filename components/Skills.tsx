"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "Quality Assurance",
    "Root Cause Analysis",
    "Escalation Handling",
    "Process Optimization",
    "Customer Experience",
    "API Testing",
    "Bug Tracking",
    "Test Case Design",
    "Jira",
    "Postman",
    "SQL Basics",
    "Automation Learning",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Skills & Tools</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="border border-gray-700 rounded-xl p-6 text-center
                         hover:bg-white hover:text-black transition duration-300"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}