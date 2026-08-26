import React, { useState, useEffect } from 'react';

export default function TopMenuBar({ onOpenWindow, onScrollTo }) {
  const [timeStr, setTimeStr] = useState('');
  const navigate = (id) => {
    if (onOpenWindow) onOpenWindow(id);
    else if (onScrollTo) onScrollTo(id);
  };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      };
      setTimeStr(now.toLocaleDateString('en-US', options).toUpperCase());
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full border-b border-white/[0.08] bg-[#06090e]/90 backdrop-blur-xl px-6 md:px-12 py-3.5 flex items-center justify-between text-xs tracking-wider z-50 sticky top-0">
      {/* Left */}
      <div className="flex items-center gap-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-bold tracking-widest text-white uppercase text-xs hover:text-[#FFC15E] transition-colors cursor-pointer flex items-center gap-2"
        >
          <span className="text-[#F5A623]">⚡</span>
          <span>AYUSH</span>
        </button>
        <button
          onClick={() => navigate('contact')}
          className="text-white/60 hover:text-[#FFC15E] transition-colors font-mono-code text-[11px] tracking-wider uppercase cursor-pointer"
        >
          CONTACT
        </button>
      </div>

      {/* Center Live Date */}
      <div className="hidden md:flex items-center gap-2 text-white/60 font-mono-code text-[11px] tracking-[0.2em] font-medium select-none">
        <span>{timeStr || 'WEDNESDAY, AUGUST 26, 2026'}</span>
      </div>

      {/* Right Custom Protocol */}
      <div className="flex items-center gap-4">
        <span className="text-[#FFC15E] text-[10px] font-mono-code tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-[#F5A623]/12 border border-[#F5A623]/30 font-bold shadow-[0_0_12px_rgba(245,166,35,0.2)]">
          SIUUU PROTOCOL // 2026 ⚡
        </span>
      </div>
    </header>
  );
}
