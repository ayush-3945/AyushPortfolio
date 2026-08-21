import React, { useState, useEffect } from 'react';

export default function TopMenuBar({ onOpenWindow }) {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      };
      setTimeStr(now.toLocaleDateString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full border-b border-white/[0.08] bg-[#07090e]/80 backdrop-blur-xl px-4 md:px-8 py-2.5 flex items-center justify-between text-xs tracking-wider z-50 sticky top-0">
      {/* Left Branding */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 cursor-pointer font-bold" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="text-sm text-[#0ea5e9]">⚡</span>
          <span className="font-extrabold tracking-tight text-white uppercase text-[13px]">AYUSH</span>
        </div>
        <span className="text-white/20 hidden sm:inline">/</span>
        <span className="text-white/50 text-[11px] hidden sm:inline font-mono-code">OS v2.6.4</span>
      </div>

      {/* Center Live Clock */}
      <div className="hidden md:flex items-center gap-2 text-white/70 font-mono-code text-[11px] font-medium tracking-normal">
        <span>{timeStr || 'Loading System Clock...'}</span>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold text-[11px]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="hidden sm:inline">AVAILABLE FOR WORK</span>
        </div>

        <button
          onClick={() => onOpenWindow('contact')}
          className="text-white/70 hover:text-[#38bdf8] transition-colors font-medium text-[11px] hidden sm:inline-block cursor-pointer uppercase tracking-wider"
        >
          CONTACT
        </button>

        <span className="text-white/40 text-[10px] font-mono-code border border-white/10 px-2 py-0.5 rounded bg-white/[0.04] hidden lg:inline">
          LATE NIGHT PROTOCOL
        </span>
      </div>
    </header>
  );
}
