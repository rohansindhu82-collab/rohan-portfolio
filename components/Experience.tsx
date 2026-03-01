"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Senior Quality Operations",
      company: "Amazon",
      desc: "Handled global marketplaces (US, DE, FR, IT), maintained 96% CX score, performed escalation quality reviews and process optimization.",
    },
    {
      role: "Remote Product Support",
      company: "Growth Empire",
      desc: "Provided chat/email product support and improved resolution efficiency across remote global teams.",
    },
    {
      role: "Production Specialist",
      company: "Wipro",
      desc: "Maintained operational quality checks, reduced workflow disruptions, and monitored production QA metrics.",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen bg-black text-white flex items-center"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Experience</h2>

        <div className="space-y-10 border-l border-gray-700 pl-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold">
                {exp.role} — {exp.company}
              </h3>
              <p className="text-gray-400 mt-2">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}