import React, { useState, useEffect } from 'react';
import TopMenuBar from './components/TopMenuBar';
import HeroBento from './components/HeroBento';
import MacWindowModal from './components/MacWindowModal';
import MacDock from './components/MacDock';
import CommandPalette from './components/CommandPalette';

export default function App() {
  const [activeWindow, setActiveWindow] = useState(null); // 'projects' | 'experience' | 'stack' | 'contact' | 'article' | null
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Close modal with Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeWindow) {
        setActiveWindow(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeWindow]);

  const handleOpenWindow = (windowId) => {
    setActiveWindow(windowId);
  };

  const handleCloseWindow = () => {
    setActiveWindow(null);
  };

  const handleSelectPaletteAction = (windowId) => {
    setActiveWindow(windowId);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-[#f8fafc] relative overflow-x-hidden dot-grid selection:bg-[#0ea5e9]/30 selection:text-white">
      
      {/* Background Ambient Glow Lighting */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#0ea5e9]/10 via-purple-600/5 to-transparent rounded-full blur-3xl pointer-events-none z-0"></div>

      {/* 1. macOS Top Menu Bar */}
      <TopMenuBar onOpenWindow={handleOpenWindow} />

      {/* 2. Central Bento Canvas Grid */}
      <main className="relative z-10">
        <HeroBento onOpenWindow={handleOpenWindow} />
      </main>

      {/* 3. Interactive Stackable macOS Window Modal */}
      <MacWindowModal
        activeWindow={activeWindow}
        onClose={handleCloseWindow}
        onSwitchWindow={handleOpenWindow}
      />

      {/* 4. Bottom Floating macOS Dock */}
      <MacDock
        activeWindow={activeWindow}
        onOpenWindow={handleOpenWindow}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* 5. Spotlight Search Command Palette (Ctrl + K) */}
      <CommandPalette
        isOpen={isSearchOpen}
        onClose={setIsSearchOpen}
        onSelectAction={handleSelectPaletteAction}
      />

    </div>
  );
}