import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import tic from "../assets/Tic.jpg";
import rock from "../assets/Rock.jpg";
import magic from "../assets/Magic.jpg";
import portfolio3d from "../assets/Portfolio3D.jpg";

const projects = [
  {
    title: "Tic Tac Toe Game",
    description:
      "A responsive Tic Tac Toe game built using HTML, CSS and JavaScript with proper winning logic and restart functionality.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: tic,
    live: "https://ayush-3945.github.io/Projects/",
    github: "https://github.com/ayush-3945/Projects",
  },
  {
    title: "Rock Paper Scissors",
    description:
      "Interactive Rock Paper Scissors game with real-time score tracking and dynamic UI updates.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: rock,
    live: "https://ayush-3945.github.io/Projects/",
    github: "https://github.com/ayush-3945/Projects",
  },
  {
    title: "Magic Color Game",
    description:
      "A fun and interactive RGB color guessing game where users match the correct color with given RGB values.",
    tags: ["JavaScript", "DOM", "UI"],
    image: magic,
    live: "https://ayush-3945.github.io/Projects/",
    github: "https://github.com/ayush-3945/Projects",
  },
  {
    title: "3D Portfolio Website",
    description:
      "Modern 3D animated portfolio built with React, Tailwind and Framer Motion featuring smooth transitions and interactive UI.",
    tags: ["React", "Tailwind", "Framer Motion"],
    image: portfolio3d,
    live: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen py-8 px-6 bg-gradient-to-b from-[#0b0f1a] to-[#0e1224]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            A curated collection of frontend projects demonstrating my expertise
            in building modern, responsive web applications with clean UI and
            smooth animations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-[#12172a] border border-white/10 rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300"
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex justify-between text-xs">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-primary hover:underline"
                  >
                    <ExternalLink size={14} /> Live
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-400 hover:text-primary"
                  >
                    <Github size={14} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;