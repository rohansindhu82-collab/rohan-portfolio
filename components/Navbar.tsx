"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/40 border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="font-semibold text-lg">
          Rohan Sindhu
        </h1>

        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#" className="hover:text-white">Projects</a>
          <a href="#" className="hover:text-white">Contact</a>
          
<a href="#projects" className="hover:text-white">
  Projects
</a>
        </div>

      </div>
    </nav>
  );
}