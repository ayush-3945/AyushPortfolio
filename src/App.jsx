import React, { useState, useEffect } from 'react';
import TopMenuBar from './components/TopMenuBar';
import HeroBento from './components/HeroBento';
import ProjectsSection from './sections/ProjectsSection';
import StackSection from './sections/StackSection';
import ExperienceSection from './sections/ExperienceSection';
import ArticleSection from './sections/ArticleSection';
import ContactSection from './sections/ContactSection';
import MacDock from './components/MacDock';
import CommandPalette from './components/CommandPalette';
import GlowCursor from './components/GlowCursor';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Smooth Teleport Navigation to any section
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ScrollSpy: Automatically highlight current section in dock on scroll
  useEffect(() => {
    const sectionIds = ['hero', 'projects', 'stack', 'experience', 'article', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#07090e] text-[#f8fafc] relative overflow-x-hidden dot-grid selection:bg-[#a855f7]/30 selection:text-white">
      
      {/* Background Ambient Glow Lighting */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[380px] bg-gradient-to-b from-[#a855f7]/10 via-purple-600/5 to-transparent rounded-full blur-3xl pointer-events-none z-0"></div>

      {/* Interactive Trailing Purple Glow Spotlight Cursor */}
      <GlowCursor />

      {/* 1. macOS Top Menu Bar */}
      <TopMenuBar onScrollTo={scrollToSection} />

      {/* 2. Main Scrollable Narrative Flow */}
      <main className="relative z-10 space-y-12 pb-32">
        {/* Hero Section */}
        <HeroBento onScrollTo={scrollToSection} />

        {/* Featured Projects */}
        <ProjectsSection />

        {/* Tech Stack Matrix */}
        <StackSection />

        {/* Experience & Journey */}
        <ExperienceSection />

        {/* Technical Writing & Case Studies */}
        <ArticleSection />

        {/* Direct Contact Form & Info */}
        <ContactSection />
      </main>

      {/* 3. Bottom Floating macOS Dock with Smooth Navigation */}
      <MacDock
        activeSection={activeSection}
        onScrollTo={scrollToSection}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* 4. Spotlight Search Command Palette (Ctrl + K) */}
      <CommandPalette
        isOpen={isSearchOpen}
        onClose={setIsSearchOpen}
        onSelectAction={scrollToSection}
      />

    </div>
  );
}