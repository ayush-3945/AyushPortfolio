import { motion } from "framer-motion";
import ayush from "../assets/ayush.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-start pt-12 pb-24"
    >
      <div className="max-w-6xl mx-auto w-full px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE - IMAGE (Animation Same) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full border-4 border-primary shadow-[0_0_60px_rgba(139,92,246,0.6)] overflow-hidden">
              
              <motion.img
                src={ayush}
                alt="Ayush Pandey"
                className="w-full h-full object-cover object-top scale-110"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

            </div>
          </motion.div>

          {/* RIGHT SIDE - CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            {/* Small Top Label */}
            <p className="text-primary uppercase tracking-widest text-sm mb-3">
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-primary">Me</span>
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              I'm <span className="text-white font-semibold">Ayush Pandey</span>, 
              a passionate Full Stack Developer who enjoys turning ideas into 
              powerful and scalable digital products. I specialize in building 
              modern web applications using 
              <span className="text-primary"> React, Node.js, JavaScript and MongoDB</span>.
            </p>

            <p className="text-gray-400 leading-relaxed mb-6">
              I focus on writing clean, maintainable code and crafting smooth 
              user experiences with subtle animations and performance-optimized 
              architecture. My goal is not just to build websites, but to build 
              products that feel premium and intuitive.
            </p>

            <p className="text-gray-400 leading-relaxed mb-10">
              Currently, I'm constantly learning new technologies, exploring AI 
              integrations, and working on real-world projects to sharpen my 
              problem-solving skills and system design understanding.
            </p>

            {/* Stats */}
            <div className="flex gap-12">
              <div>
                <h3 className="text-3xl font-bold text-primary">10+</h3>
                <p className="text-gray-400">Projects</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-primary">1+</h3>
                <p className="text-gray-400">Years Learning</p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;