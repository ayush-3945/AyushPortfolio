import React, { useState, useEffect } from 'react';

export default function TopMenuBar({ onOpenWindow }) {
  const [timeStr, setTimeStr] = useState('');

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
    <header className="w-full border-b border-white/[0.08] bg-[#07090e]/90 backdrop-blur-xl px-6 md:px-12 py-3.5 flex items-center justify-between text-xs tracking-wider z-50 sticky top-0">
      {/* Left */}
      <div className="flex items-center gap-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-bold tracking-widest text-white uppercase text-xs hover:text-[#38bdf8] transition-colors cursor-pointer flex items-center gap-2"
        >
          <span className="text-[#38bdf8]">⚡</span>
          <span>AYUSH</span>
        </button>
        <button
          onClick={() => onOpenWindow('contact')}
          className="text-white/60 hover:text-white transition-colors font-mono-code text-[11px] tracking-wider uppercase cursor-pointer"
        >
          CONTACT
        </button>
      </div>

      {/* Center Live Date */}
      <div className="hidden md:flex items-center gap-2 text-white/60 font-mono-code text-[11px] tracking-[0.2em] font-medium select-none">
        <span>{timeStr || 'FRIDAY, AUGUST 21, 2026'}</span>
      </div>

      {/* Right Custom Protocol */}
      <div className="flex items-center gap-4">
        <span className="text-[#38bdf8] text-[10px] font-mono-code tracking-[0.15em] uppercase px-2.5 py-0.5 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 font-bold">
          BERNABÉU PROTOCOL // SIUUU ⚡
        </span>
      </div>
    </header>
  );
}
