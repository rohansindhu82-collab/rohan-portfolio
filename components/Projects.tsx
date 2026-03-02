"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
  {
    title: "Flipkart Website Testing",
    desc: "Manual QA testing including test plan, test cases and bug reporting.",
    link: "/Projects/flipkart-testing.pdf",
  },
  {
    title: "API Testing Case Study",
    desc: "API validation using Postman with response verification.",
    link: "/Projects/api-testing.pdf",
  },
  {
    title: "Jira Bug Tracking Demo",
    desc: "Agile QA workflow demonstration using Jira issue lifecycle.",
    link: "/Projects/jira-demo.pdf",
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
  <a
    key={i}
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: i * 0.2 }}
      viewport={{ once: true }}
      className="border border-gray-700 rounded-xl p-8 hover:bg-white hover:text-black transition duration-300"
    >
      <h3 className="text-2xl font-semibold mb-3">
        {project.title}
      </h3>

      <p className="text-gray-400">
        {project.desc}
      </p>
    </motion.div>
  </a>
))}
        </div>
      </div>
    </section>
  );
}