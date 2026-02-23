import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import SectionWrapper from "./components/SectionWrapper";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import FloatingAI from "./components/FloatingAI";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <ScrollProgress />
          <Navbar />
          <main className="pt-16"> {/* offset for fixed navbar */}
            <SectionWrapper id="home">
              <Hero />
            </SectionWrapper>
            <SectionWrapper id="about">
              <About />
            </SectionWrapper>
            <SectionWrapper id="skills">
              <Skills />
            </SectionWrapper>
            <SectionWrapper id="projects">
              <Projects />
            </SectionWrapper>
            <SectionWrapper id="contact">
              <Contact />
            </SectionWrapper>
          </main>
          <Footer />
          <FloatingAI />
          
        </>
      )}
    </>
  );
}

export default App;