
"use client";
import Navbar from "@/components/Navbar";

import { motion } from "framer-motion";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
<About />
export default function Home() {
  return (
    <>
  <Navbar />
  <main>Hero Section</main>
  <About />
  <Experience />
  <Skills />
  <Projects />
  <Contact />
<main className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden">      
      <div className="absolute inset-0 -z-10">
  <div className="absolute w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl top-[-200px] left-[-200px] animate-pulse"></div>
  <div className="absolute w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl bottom-[-200px] right-[-200px] animate-pulse"></div>
</div>
      <motion.section
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12 px-6"
>

  {/* LEFT SIDE TEXT */}
  <div>
    <motion.h1
      className="text-6xl font-bold tracking-tight"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      Rohan Sindhu
    </motion.h1>

    <motion.p
      className="mt-6 text-xl text-gray-400"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      Senior Quality Analyst | Customer Experience & Digital Platforms
    </motion.p>

    <motion.p
      className="mt-4 max-w-xl text-gray-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9 }}
    >
      Improving product quality, optimizing support systems,
      and delivering measurable customer experience outcomes.
    </motion.p>

    <motion.div
      className="mt-8 flex gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
    >
      <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:scale-105 transition">
        View Experience
      </button>

      <button className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
        Download Resume
      </button>
    </motion.div>
  </div>

  {/* RIGHT SIDE IMAGE */}
  <div className="flex justify-center">
    <img
      src="/images/rohan.png"
      alt="Rohan Sindhu"
      className="w-[350px] rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
    />
  </div>

</motion.section>

    </main>
    </>
  );
}