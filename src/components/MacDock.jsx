import React from 'react';
import { 
  Briefcase, 
  Code2, 
  Cpu, 
  BookOpen, 
  FileText, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter,
  Terminal,
  Command
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function MacDock({ openWindows = [], activeSection = 'hero', onToggleWindow, onOpenSearch }) {
  const handleItemClick = (id) => {
    if (onToggleWindow) onToggleWindow(id);
  };

  const dockItems = [
    { id: 'projects', label: 'Projects', icon: Briefcase, action: () => handleItemClick('projects') },
    { id: 'stack', label: 'Tech Stack', icon: Cpu, action: () => handleItemClick('stack') },
    { id: 'experience', label: 'Experience', icon: Code2, action: () => handleItemClick('experience') },
    { id: 'article', label: 'Writing', icon: BookOpen, action: () => handleItemClick('article') },
    { id: 'resume', label: 'Resume', icon: FileText, action: () => window.open(portfolioData.personal.resumeUrl, '_blank') },
    { id: 'contact', label: 'Contact', icon: Mail, action: () => handleItemClick('contact') },
  ];

  const socialItems = [
    { label: 'GitHub', icon: Github, url: portfolioData.personal.github },
    { label: 'LinkedIn', icon: Linkedin, url: portfolioData.personal.linkedin },
    { label: 'Twitter', icon: Twitter, url: portfolioData.personal.twitter },
  ];

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 max-w-[95vw]">
      <div className="px-4 py-2.5 rounded-2xl bg-[#06090e]/90 backdrop-blur-2xl border border-white/[0.1] shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_25px_rgba(16,185,129,0.1)] flex items-center gap-2 sm:gap-3">
        
        {/* Navigation Dock Apps */}
        {dockItems.map((item) => {
          const IconComponent = item.icon;
          const isOpen = openWindows.includes(item.id);
          const isFront = openWindows[openWindows.length - 1] === item.id;
          const isActive = activeSection === item.id || isFront;

          return (
            <button
              key={item.id}
              onClick={item.action}
              className={`group relative p-2.5 rounded-xl transition-all duration-200 hover:-translate-y-2 hover:scale-125 cursor-pointer flex flex-col items-center justify-center ${
                isFront
                  ? 'bg-emerald-500/25 text-emerald-300 border border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.4)] scale-105'
                  : isOpen
                  ? 'bg-white/[0.12] text-white'
                  : isActive
                  ? 'bg-emerald-500/15 text-emerald-300'
                  : 'text-white/60 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              <IconComponent size={19} strokeWidth={1.8} />
              
              {/* Tooltip */}
              <span className="absolute -top-9 opacity-0 group-hover:opacity-100 transition-opacity bg-[#080b11] text-white text-[10px] font-mono-code font-bold px-2 py-0.5 rounded-md border border-white/10 shadow-lg pointer-events-none whitespace-nowrap">
                {item.label}
              </span>

              {/* Active Dot for Open Window or Active Section */}
              {(isOpen || isActive) && (
                <span className={`w-1.5 h-1.5 rounded-full absolute -bottom-1 ${isOpen ? 'bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse' : 'bg-white/40'}`}></span>
              )}
            </button>
          );
        })}

        <div className="w-[1px] h-5 bg-white/10 mx-1"></div>

        {/* Socials with Clean Outline Icons */}
        {socialItems.map((s, idx) => {
          const SocialIcon = s.icon;
          return (
            <a
              key={idx}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="group relative p-2.5 rounded-xl text-white/60 hover:text-white hover:-translate-y-2 hover:scale-125 hover:bg-white/[0.06] transition-all duration-200 cursor-pointer flex items-center justify-center"
            >
              <SocialIcon size={19} strokeWidth={1.8} />
              <span className="absolute -top-9 opacity-0 group-hover:opacity-100 transition-opacity bg-[#080b11] text-white text-[10px] font-mono-code font-bold px-2 py-0.5 rounded-md border border-white/10 shadow-lg pointer-events-none whitespace-nowrap">
                {s.label}
              </span>
            </a>
          );
        })}

        <div className="w-[1px] h-5 bg-white/10 mx-1 hidden sm:block"></div>

        {/* Ctrl + K Shortcut Button */}
        <button
          onClick={onOpenSearch}
          className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.08] transition-all text-white/50 hover:text-white text-xs font-mono-code cursor-pointer ml-1"
        >
          <Terminal size={13} strokeWidth={2} />
          <span className="text-[10px] font-bold">CTRL K</span>
          <Command size={11} strokeWidth={2} className="text-white/40" />
        </button>

      </div>
    </div>
  );
}
