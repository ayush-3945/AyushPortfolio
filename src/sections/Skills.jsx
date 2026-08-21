import { motion } from "framer-motion";
import {
  Code2,
  Braces,
  Atom,
  Wind,
  Server,
  Database,
  GitBranch,
} from "lucide-react";

import cyber from "../assets/cyber.jpg";

const skills = [
  { name: "HTML/CSS", icon: <Code2 />, progress: 90, color: "from-orange-500 to-red-500" },
  { name: "JavaScript", icon: <Braces />, progress: 85, color: "from-yellow-400 to-yellow-600" },
  { name: "React", icon: <Atom />, progress: 80, color: "from-cyan-400 to-blue-500" },
  { name: "Tailwind CSS", icon: <Wind />, progress: 75, color: "from-teal-400 to-cyan-500" },
  { name: "Node.js", icon: <Server />, progress: 70, color: "from-green-500 to-emerald-600" },
  { name: "Express", icon: <Server />, progress: 65, color: "from-gray-400 to-gray-600" },
  { name: "MongoDB", icon: <Database />, progress: 60, color: "from-green-600 to-green-800" },
  { name: "Git/GitHub", icon: <GitBranch />, progress: 85, color: "from-orange-600 to-red-600" },
  { name: "Next.js", icon: <GitBranch />, progress: 85, color: "from-orange-600 to-red-600" },
  
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-18 bg-gradient-to-b from-[#050816] via-[#0b0f2a] to-[#050816]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-primary uppercase tracking-widest text-sm mb-6">
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-primary">Skills</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>

              <img
                src={cyber}
                alt="Cyber Developer"
                className="relative w-[420px] rounded-3xl object-cover shadow-2xl"
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE SKILLS */}
          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-[#0f172a] rounded-2xl p-6 border border-white/10 backdrop-blur-md"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(139,92,246,0.4)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-primary">{skill.icon}</div>
                  <h3 className="font-semibold text-white">
                    {skill.name}
                  </h3>
                </div>

                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.progress}%` }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                  />
                </div>

                <p className="text-right text-sm text-gray-400 mt-2">
                  {skill.progress}%
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;