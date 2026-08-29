import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer({ onScrollTo, onToggleWindow }) {
  const techStack = [
    "React", "Node.js", "Gemini AI", "WebSockets", "MongoDB", "Tailwind CSS",
    "Express", "TypeScript", "System Design", "AWS", "Figma", "Redux"
  ];
  
  const routerNavigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (id) => {
    if (id === 'hero') {
      if (location.pathname !== '/') routerNavigate('/');
      else window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    if (id === 'activity') {
      routerNavigate('/activity');
      return;
    }

    if (onToggleWindow && ['terminal', 'stack'].includes(id)) {
      onToggleWindow(id);
    } else {
      if (location.pathname !== '/') {
        routerNavigate('/');
        setTimeout(() => {
          if (onScrollTo) onScrollTo(id);
        }, 100);
      } else {
        if (onScrollTo) onScrollTo(id);
      }
    }
  };

  return (
    <footer className="w-full relative bg-[#07090e] border-t border-white/[0.05] overflow-hidden">
      
      {/* 1. Marquee Ticker */}
      <div className="w-full border-b border-white/[0.05] bg-[#0a0d14] py-3 overflow-hidden relative flex">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...techStack, ...techStack, ...techStack].map((tech, idx) => (
            <React.Fragment key={idx}>
              <span className="mx-6 text-xs sm:text-sm font-mono-code font-bold tracking-widest text-[#FFC15E] uppercase opacity-70">
                {tech}
              </span>
              <span className="text-[#F5A623] opacity-40 text-[10px]">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 2. Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          {/* Left Column: Brand & Status (6 cols) */}
          <div className="md:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-[#F5A623] text-xl">◆</span>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-mono-code">
                ayush//os
              </span>
            </div>
            <p className="text-white/50 text-sm sm:text-base font-mono-code max-w-sm leading-relaxed">
              Backend & Systems Engineering.<br/>
              Building fast, reliable systems and shipping production-grade products.
            </p>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono-code text-white/70">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
              <span className="text-emerald-400">ONLINE</span>
              <span className="text-white/20">·</span>
              <span>Available for opportunities</span>
            </div>
          </div>

          {/* Middle Column: Navigation (3 cols) */}
          <div className="md:col-span-3">
            <h3 className="text-[10px] font-mono-code font-bold tracking-[0.2em] text-white/30 uppercase mb-6">
              Navigation
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm font-mono-code">
              {[
                { id: 'hero', label: '00 home' },
                { id: 'projects', label: '01 projects' },
                { id: 'stack', label: '02 stack' },
                { id: 'activity', label: '03 logs' },
                { id: 'article', label: '04 blog' },
                { id: 'contact', label: '05 contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-left text-white/60 hover:text-white transition-colors hover:translate-x-1 transform duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Connect (3 cols) */}
          <div className="md:col-span-3">
            <h3 className="text-[10px] font-mono-code font-bold tracking-[0.2em] text-white/30 uppercase mb-6">
              Connect
            </h3>
            <div className="flex gap-3 mb-6">
              <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all">
                <Github size={18} />
              </a>
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all">
                <Linkedin size={18} />
              </a>
              <a href={portfolioData.personal.twitter} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all">
                <Twitter size={18} />
              </a>
              <a href={`mailto:${portfolioData.personal.email}`} className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all">
                <Mail size={18} />
              </a>
            </div>
            <a 
              href={`mailto:${portfolioData.personal.email}`}
              className="text-sm font-mono-code text-[#38bdf8] hover:text-[#7dd3fc] transition-colors"
            >
              {portfolioData.personal.email}
            </a>
          </div>

        </div>
      </div>

      {/* 3. Bottom Bar */}
      <div className="border-t border-white/[0.05] bg-black/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono-code text-xs text-white/40 flex items-center gap-2">
            <span className="text-[#F5A623] font-bold">ayush@portfolio:~$</span>
            <span>echo "© 2026 Ayush Pandey"</span>
          </div>
          <div className="font-mono-code text-[10px] text-white/30 tracking-widest uppercase">
            built with react · vite · tailwind
          </div>
        </div>
      </div>

    </footer>
  );
}
