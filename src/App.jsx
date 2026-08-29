import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import TopMenuBar from './components/TopMenuBar';
import Home from './pages/Home';
import ActivityPage from './pages/ActivityPage';

// UI Manager Components
import MacWindowManager from './components/MacWindowManager';
import MacDock from './components/MacDock';
import CommandPalette from './components/CommandPalette';
import GlowCursor from './components/GlowCursor';
import AskAyushAI from './components/AskAyushAI';
import Footer from './components/Footer';

export default function app() {
  const [openWindows, setOpenWindows] = useState([]); // Array of active desktop windows
  const [activeSection, setActiveSection] = useState('hero');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Close front window on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && openWindows.length > 0) {
        setOpenWindows((prev) => prev.slice(0, -1)); // pop front window
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [openWindows]);

  // Toggle or bring window to front
  const handleToggleWindow = (windowId) => {
    setOpenWindows((prev) => {
      const isAlreadyOpen = prev.includes(windowId);
      const isFront = prev[prev.length - 1] === windowId;

      if (isAlreadyOpen && isFront) {
        // Clicking active front window minimizes/closes it
        return prev.filter((w) => w !== windowId);
      } else if (isAlreadyOpen) {
        // Bring existing window to front
        return [...prev.filter((w) => w !== windowId), windowId];
      } else {
        // Open new window on top of stack
        return [...prev, windowId];
      }
    });
  };

  const handleBringToFront = (windowId) => {
    setOpenWindows((prev) => [...prev.filter((w) => w !== windowId), windowId]);
  };

  const handleCloseWindow = (windowId) => {
    setOpenWindows((prev) => prev.filter((w) => w !== windowId));
  };

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
    <HashRouter>
      <div className="min-h-screen bg-[#07090e] text-[#f8fafc] relative overflow-x-hidden dot-grid selection:bg-[#a855f7]/30 selection:text-white">

        {/* Background Ambient Glow Lighting */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[380px] bg-gradient-to-b from-[#a855f7]/10 via-purple-600/5 to-transparent rounded-full blur-3xl pointer-events-none z-0"></div>

        {/* Interactive Trailing Purple Glow Spotlight Cursor */}
        <GlowCursor />

        {/* 1. macOS Top Menu Bar */}
        <TopMenuBar
          onOpenWindow={handleToggleWindow}
          onScrollTo={scrollToSection}
        />

        {/* 2. Routing Setup */}
        <Routes>
          <Route path="/" element={<Home handleToggleWindow={handleToggleWindow} scrollToSection={scrollToSection} />} />
          <Route path="/activity" element={<ActivityPage />} />
        </Routes>

      {/* Upgraded Footer */}
      <Footer onScrollTo={scrollToSection} onToggleWindow={handleToggleWindow} />

      {/* 3. True Non-Blocking Multi-Window Desktop Manager (Opens on Click) */}
      <MacWindowManager
        openWindows={openWindows}
        onBringToFront={handleBringToFront}
        onCloseWindow={handleCloseWindow}
        onSwitchWindow={handleBringToFront}
      />

      {/* 4. Bottom Floating macOS Dock with Dual Action (Window Open + Scroll) */}
      <MacDock
        openWindows={openWindows}
        activeSection={activeSection}
        onToggleWindow={handleToggleWindow}
        onScrollTo={scrollToSection}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* 5. Spotlight Search Command Palette (Ctrl + K) */}
      <CommandPalette
        isOpen={isSearchOpen}
        onClose={setIsSearchOpen}
        onSelectAction={(id) => {
          handleToggleWindow(id);
          scrollToSection(id);
        }}
      />

      {/* 6. Ask Ayush AI Floating Chatbot Widget */}
      <AskAyushAI />

    </div>
    </HashRouter>
  );
}