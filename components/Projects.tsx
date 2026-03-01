"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "QA Automation Framework",
      desc: "Designed automation testing workflow using Selenium concepts and structured test cases.",
    },
    {
      title: "Bug Tracking System",
      desc: "Simulated defect lifecycle management using Jira workflow and reporting methodology.",
    },
    {
      title: "Customer Experience Optimization",
      desc: "Improved escalation handling quality resulting in higher resolution efficiency.",
    },
    {
      title: "API Testing Practice",
      desc: "Performed API validation and response verification using Postman collections.",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Projects & Case Studies</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="border border-gray-700 rounded-xl p-8 hover:bg-white hover:text-black transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}