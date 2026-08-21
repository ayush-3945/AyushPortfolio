import React, { useState, useEffect } from 'react';
import TopMenuBar from './components/TopMenuBar';
import HeroBento from './components/HeroBento';
import MacWindowManager from './components/MacWindowManager';
import MacDock from './components/MacDock';
import CommandPalette from './components/CommandPalette';

export default function App() {
  // Array of open window IDs in z-index stack order
  const [openWindows, setOpenWindows] = useState([]); // e.g. ['experience', 'projects', 'stack']
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

  // Click on dock / button: toggle or bring to front
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

  return (
    <div className="min-h-screen bg-[#07090e] text-[#f8fafc] relative overflow-x-hidden dot-grid selection:bg-[#0ea5e9]/30 selection:text-white">
      
      {/* Background Ambient Glow Lighting */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[380px] bg-gradient-to-b from-[#0ea5e9]/10 via-purple-600/5 to-transparent rounded-full blur-3xl pointer-events-none z-0"></div>

      {/* 1. macOS Top Menu Bar */}
      <TopMenuBar onOpenWindow={handleToggleWindow} />

      {/* 2. Central Bento Canvas Grid */}
      <main className="relative z-10">
        <HeroBento onOpenWindow={handleToggleWindow} />
      </main>

      {/* 3. True Non-Blocking Simultaneous Multi-Window Desktop Manager */}
      <MacWindowManager
        openWindows={openWindows}
        onBringToFront={handleBringToFront}
        onCloseWindow={handleCloseWindow}
        onSwitchWindow={handleBringToFront}
      />

      {/* 4. Bottom Floating macOS Dock */}
      <MacDock
        openWindows={openWindows}
        onToggleWindow={handleToggleWindow}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* 5. Spotlight Search Command Palette (Ctrl + K) */}
      <CommandPalette
        isOpen={isSearchOpen}
        onClose={setIsSearchOpen}
        onSelectAction={handleToggleWindow}
      />

    </div>
  );
}