import { motion } from "framer-motion";
import robot from "../assets/robot.jpg";
import ParticleBackground from "../components/ParticleBackground";


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-start pt-30 bg-dark overflow-hidden px-6">

      {/* Background Layers */}
      <ParticleBackground />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 w-full">
 
        {/* LEFT SIDE TEXT */}
        <div>
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Ayush Pandey
            </span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl text-gray-400 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            className="max-w-lg text-gray-300 mb-8 text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            I build modern and high-performance web applications using
            React, Node.js and clean UI principles. Focused on smooth
            animations and exceptional user experience.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold shadow-lg hover:scale-105 transition duration-300"
            >
              View Projects
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 border border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition-all"
            >
              Contact Me
            </button>

            {/* Resume Button */}
            <a
              href="/Ayush_Pandey_Resume.pdf"
              download="Ayush_Pandey_Resume.pdf"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold shadow-md hover:scale-105 transition duration-300 flex items-center justify-center"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE ROBOT */}
        <div className="flex justify-center">
          <motion.img
            src={robot}
            alt="AI Robot"
            className="w-80 md:w-96"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;