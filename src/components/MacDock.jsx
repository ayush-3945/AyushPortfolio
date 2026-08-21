import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function MacDock({ onOpenWindow, onOpenSearch, activeWindow }) {
  const dockItems = [
    { id: 'projects', label: 'Projects', icon: '📁', action: () => onOpenWindow('projects') },
    { id: 'experience', label: 'Experience', icon: '💼', action: () => onOpenWindow('experience') },
    { id: 'stack', label: 'Tech Stack', icon: '🧠', action: () => onOpenWindow('stack') },
    { id: 'article', label: 'Writing', icon: '📖', action: () => onOpenWindow('article') },
    { id: 'resume', label: 'Resume', icon: '📄', action: () => window.open(portfolioData.personal.resumeUrl, '_blank') },
    { id: 'contact', label: 'Contact', icon: '✉️', action: () => onOpenWindow('contact') },
  ];

  const socialItems = [
    { label: 'GitHub', icon: '🐙', url: portfolioData.personal.github },
    { label: 'LinkedIn', icon: '💼', url: portfolioData.personal.linkedin },
    { label: 'Twitter', icon: '🐦', url: portfolioData.personal.twitter },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 max-w-[95vw]">
      <div className="px-3.5 py-2 rounded-2xl bg-[#090d14]/85 backdrop-blur-2xl border border-white/[0.12] shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_20px_rgba(14,165,233,0.15)] flex items-center gap-1.5 sm:gap-2">
        
        {/* Navigation Dock Apps */}
        {dockItems.map((item) => {
          const isActive = activeWindow === item.id;
          return (
            <button
              key={item.id}
              onClick={item.action}
              className={`group relative p-2.5 rounded-xl transition-all duration-200 hover:-translate-y-2 hover:scale-125 cursor-pointer flex flex-col items-center justify-center ${
                isActive ? 'bg-[#0ea5e9]/20 border border-[#0ea5e9]/40' : 'hover:bg-white/[0.08]'
              }`}
            >
              <span className="text-xl select-none leading-none">{item.icon}</span>
              
              {/* Tooltip */}
              <span className="absolute -top-9 opacity-0 group-hover:opacity-100 transition-opacity bg-black/90 text-white text-[10px] font-mono-code font-bold px-2 py-0.5 rounded-md border border-white/10 shadow-lg pointer-events-none whitespace-nowrap">
                {item.label}
              </span>

              {/* Active Dot */}
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-[#38bdf8] absolute -bottom-1"></span>
              )}
            </button>
          );
        })}

        <div className="w-[1px] h-6 bg-white/10 mx-1"></div>

        {/* Socials */}
        {socialItems.map((s, idx) => (
          <a
            key={idx}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            className="group relative p-2.5 rounded-xl hover:-translate-y-2 hover:scale-125 hover:bg-white/[0.08] transition-all duration-200 cursor-pointer flex items-center justify-center"
          >
            <span className="text-lg select-none leading-none">{s.icon}</span>
            <span className="absolute -top-9 opacity-0 group-hover:opacity-100 transition-opacity bg-black/90 text-white text-[10px] font-mono-code font-bold px-2 py-0.5 rounded-md border border-white/10 shadow-lg pointer-events-none whitespace-nowrap">
              {s.label}
            </span>
          </a>
        ))}

        <div className="w-[1px] h-6 bg-white/10 mx-1 hidden sm:block"></div>

        {/* Ctrl + K Shortcut Button */}
        <button
          onClick={onOpenSearch}
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.05] border border-white/10 hover:border-[#38bdf8]/40 hover:bg-white/[0.08] transition-all text-white/60 hover:text-white text-xs font-mono-code cursor-pointer"
        >
          <span>&gt;_</span>
          <span className="text-[10px] font-bold">CTRL K</span>
        </button>

      </div>
    </div>
  );
}
