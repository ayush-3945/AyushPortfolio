import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import TerminalWindow from './TerminalWindow';
import GithubFeedWindow from './GithubFeedWindow';

export default function MacWindowManager({ openWindows, onBringToFront, onCloseWindow, onSwitchWindow }) {
  if (!openWindows || openWindows.length === 0) return null;

  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactLoading, setContactLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactLoading(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: portfolioData.personal.web3FormsKey || 'd2d7c18a-bbca-4df3-9efc-7e61882b7b51',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: 'Ayush Portfolio Contact Form',
          subject: `🚀 Portfolio Message from ${formData.name}`
        })
      });
      const data = await res.json();
      if (data.success) {
        setContactSubmitted(true);
      } else {
        window.open(`mailto:${portfolioData.personal.email}?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`);
        setContactSubmitted(true);
      }
    } catch (err) {
      window.open(`mailto:${portfolioData.personal.email}?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`);
      setContactSubmitted(true);
    } finally {
      setContactLoading(false);
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setContactSubmitted(false);
      }, 5000);
    }
  };

  // 10 Core Tech Badges including C/C++ and JAVA
  const techArsenal = [
    {
      name: 'TYPESCRIPT',
      icon: (
        <div className="w-10 h-10 rounded-lg bg-[#3178c6] flex items-center justify-center font-extrabold text-white text-base shadow-[0_0_15px_rgba(49,120,198,0.4)]">
          TS
        </div>
      )
    },
    {
      name: 'REACT',
      icon: (
        <div className="w-10 h-10 rounded-lg bg-[#00d8ff]/10 border border-[#00d8ff]/30 flex items-center justify-center text-[#00d8ff] text-2xl shadow-[0_0_15px_rgba(0,216,255,0.3)]">
          ⚛
        </div>
      )
    },
    {
      name: 'NODE.JS',
      icon: (
        <div className="w-10 h-10 rounded-lg bg-[#5fa04e]/10 border border-[#5fa04e]/30 flex items-center justify-center text-[#5fa04e] text-xl font-bold shadow-[0_0_15px_rgba(95,160,78,0.3)]">
          ⬢
        </div>
      )
    },
    {
      name: 'JAVA',
      icon: (
        <div className="w-10 h-10 rounded-lg bg-[#f89820]/15 border border-[#f89820]/35 flex items-center justify-center text-[#f89820] text-xl font-black shadow-[0_0_15px_rgba(248,152,32,0.3)]">
          ☕
        </div>
      )
    },
    {
      name: 'C / C++',
      icon: (
        <div className="w-10 h-10 rounded-lg bg-[#00599c]/20 border border-[#00599c]/40 flex items-center justify-center font-black text-[#FFC15E] text-xs shadow-[0_0_15px_rgba(56,189,248,0.3)]">
          C++
        </div>
      )
    },
    {
      name: 'EXPRESS',
      icon: (
        <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center font-bold text-white text-sm">
          ex
        </div>
      )
    },
    {
      name: 'MONGODB',
      icon: (
        <div className="w-10 h-10 rounded-lg bg-[#00ed64]/10 border border-[#00ed64]/30 flex items-center justify-center text-[#00ed64] text-xl font-bold shadow-[0_0_15px_rgba(0,237,100,0.3)]">
          🍃
        </div>
      )
    },
    {
      name: 'SOCKET.IO',
      icon: (
        <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white text-lg">
          ⚡
        </div>
      )
    },
    {
      name: 'GEMINI AI',
      icon: (
        <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#1a73e8] via-[#8ab4f8] to-[#ea4335] flex items-center justify-center text-white text-lg shadow-[0_0_15px_rgba(138,180,248,0.4)]">
          ✦
        </div>
      )
    },
    {
      name: 'TAILWIND',
      icon: (
        <div className="w-10 h-10 rounded-lg bg-[#FFC15E]/10 border border-[#FFC15E]/30 flex items-center justify-center text-[#FFC15E] text-xl font-bold shadow-[0_0_15px_rgba(56,189,248,0.3)]">
          ≈
        </div>
      )
    },
  ];

  const windowTitles = {
    terminal: 'ayush@portfolio: ~ (zsh)',
    stack: 'TECH STACK',
    projects: 'PROJECTS',
    experience: 'EXPERIENCE',
    contact: 'CONTACT',
    article: 'WRITING'
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-30 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      
      {/* Cascading Window Stack */}
      <div className="relative w-full max-w-4xl h-[78vh] pointer-events-none">
        
        {openWindows.map((winId, index) => {
          const isFront = index === openWindows.length - 1;
          const stackOffset = (openWindows.length - 1 - index) * 26;
          const zIndex = 30 + index * 5;
          const title = windowTitles[winId] || 'WINDOW';

          return (
            <div
              key={winId}
              onClick={() => onBringToFront(winId)}
              style={{
                top: `${Math.max(0, 10 - stackOffset * 0.4)}%`,
                transform: `translateY(-${stackOffset}px) scale(${1 - (openWindows.length - 1 - index) * 0.025})`,
                zIndex: zIndex,
              }}
              className={`absolute left-0 right-0 max-h-[75vh] rounded-2xl border transition-all duration-300 pointer-events-auto flex flex-col overflow-hidden ${
                isFront
                  ? 'bg-[#0c1017] border-white/[0.16] shadow-[0_30px_70px_rgba(0,0,0,0.95),0_0_30px_rgba(245,166,35,0.15)] opacity-100'
                  : 'bg-[#090d14] border-white/[0.08] shadow-[0_20px_40px_rgba(0,0,0,0.7)] opacity-70 hover:opacity-95 cursor-pointer'
              }`}
            >
              
              {/* Window Header Titlebar */}
              <div className="px-5 py-3.5 bg-[#090d14] border-b border-white/[0.08] flex items-center justify-between flex-shrink-0 select-none">
                {/* Traffic lights */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onCloseWindow(winId);
                    }}
                    title="Close Window"
                    className="w-3 h-3 rounded-full bg-[#ff5f56] hover:opacity-80 transition-opacity cursor-pointer flex items-center justify-center text-[7px] text-black font-bold"
                  >
                    ✕
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onBringToFront(winId);
                    }}
                    title="Zoom"
                    className="w-3 h-3 rounded-full bg-[#27c93f] hover:opacity-80 transition-opacity cursor-pointer"
                  ></button>
                </div>

                {/* Window Name */}
                <div className="text-xs font-mono-code text-white/70 font-bold tracking-[0.2em] uppercase">
                  {title}
                </div>

                {/* Active indicator */}
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-mono-code text-white/30">
                    {isFront ? 'ACTIVE' : 'CLICK TO FOCUS'}
                  </span>
                </div>
              </div>

              {/* Window Content */}
              <div className={`overflow-y-auto flex-1 scrollbar-subtle relative ${winId === 'terminal' ? 'p-0' : 'p-6 md:p-8 space-y-6'} ${isFront ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                
                {/* ========================================================= */}
                {/* 0. TERMINAL WINDOW                                        */}
                {/* ========================================================= */}
                {winId === 'terminal' && (
                  <TerminalWindow
                    onOpenWindow={onSwitchWindow}
                    onClose={() => onCloseWindow('terminal')}
                  />
                )}
                
                {/* ========================================================= */}
                {/* 1. GITHUB FEED WINDOW                                     */}
                {/* ========================================================= */}
                {winId === 'github' && (
                  <GithubFeedWindow />
                )}
                {winId === 'stack' && (
                  <div className="space-y-6 relative">
                    {/* Faint Background Watermark */}
                    <div className="absolute right-4 bottom-0 text-white/[0.02] text-7xl font-black font-mono-code select-none pointer-events-none">
                      HALA MADRID
                    </div>

                    <div className="border-b border-white/[0.08] pb-3">
                      <div className="flex items-center gap-3">
                        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase flex items-center gap-2">
                          <span>REAL MADRID</span>
                          <span className="text-[#FFC15E] text-xl">⚡</span>
                        </h2>
                        <span className="text-white/20 text-lg">|</span>
                        <span className="text-xs font-mono-code text-amber-400 tracking-widest uppercase font-bold">
                          SIUUU // TECH STACK 01
                        </span>
                      </div>
                    </div>

                    {/* 2x5 Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 sm:gap-4">
                      {techArsenal.map((tech, idx) => (
                        <div
                          key={idx}
                          className="p-4 sm:p-5 rounded-2xl bg-[#111622]/80 border border-white/[0.08] hover:border-white/25 hover:bg-[#151c2b] transition-all duration-200 flex flex-col items-center justify-center gap-3 cursor-pointer group shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                          <div className="group-hover:scale-110 transition-transform duration-200">
                            {tech.icon}
                          </div>
                          <span className="text-[11px] font-mono-code font-bold tracking-wider text-white/70 group-hover:text-white transition-colors text-center">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono-code text-white/60 flex items-center justify-between">
                      <span className="text-amber-300 font-bold">👑 Elite Engineering & Real-Time Distributed Architecture</span>
                      <button onClick={() => onSwitchWindow('projects')} className="text-[#FFC15E] hover:underline font-bold">
                        Explore Builds ➔
                      </button>
                    </div>
                  </div>
                )}

                {/* ========================================================= */}
                {/* 2. PROJECTS WINDOW                                        */}
                {/* ========================================================= */}
                {winId === 'projects' && (
                  <div className="space-y-5 relative">
                    <div className="absolute right-4 bottom-0 text-white/[0.02] text-8xl font-black font-mono-code select-none pointer-events-none">
                      BUILDS
                    </div>

                    <div className="border-b border-white/[0.08] pb-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase">
                          BUILDS
                        </h2>
                        <span className="text-white/20 text-lg">|</span>
                        <span className="text-xs font-mono-code text-white/50 tracking-widest uppercase">
                          FEATURED WORKS // 02
                        </span>
                      </div>
                      <span className="text-[11px] font-mono-code text-amber-400">3 Production Projects</span>
                    </div>

                    <div className="space-y-4">
                      {/* Project 1: CoalDarpan */}
                      <div className="p-5 rounded-2xl bg-[#111622]/90 border border-[#F5A623]/30 hover:border-[#F5A623]/60 transition-all flex flex-col justify-between group shadow-lg">
                        <div>
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                            <div className="flex items-center gap-2">
                              <span className="text-base">🏛️</span>
                              <h3 className="text-lg font-bold text-white group-hover:text-[#FFC15E] transition-colors">
                                CoalDarpan
                              </h3>
                            </div>
                            <span className="text-[11px] font-mono-code text-white/40">2026</span>
                          </div>

                          <p className="text-white/70 text-xs sm:text-[13px] leading-relaxed mb-3">
                            Digital governance and smart issue routing PWA built during a national hackathon. Features role-based dashboards, real-time WebSocket notifications, JWT authentication, and AI-powered categorization using Google Gemini.
                          </p>

                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Tailwind CSS', 'Gemini', 'JWT', 'PWA'].map((t, i) => (
                              <span key={i} className="text-[10px] font-mono-code px-2 py-0.5 rounded-md bg-white/[0.05] text-white/60 border border-white/[0.06]">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
                          <a
                            href="https://coaldarpan.vercel.app"
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-1.5 rounded-xl bg-white text-black font-extrabold text-xs hover:bg-[#FFC15E] hover:text-white transition-all flex items-center gap-1.5"
                          >
                            <span>Live App</span>
                            <span>↗</span>
                          </a>
                          <a
                            href="https://github.com/ayush-3945/ai-smart-issue-routing"
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-1.5 rounded-xl bg-white/[0.06] border border-white/10 text-white font-semibold text-xs hover:bg-white/10 transition-all flex items-center gap-1.5"
                          >
                            <span>GitHub</span>
                            <span>↗</span>
                          </a>
                        </div>
                      </div>

                      {/* Project 2: AI Interview Agent */}
                      <div className="p-5 rounded-2xl bg-[#111622]/90 border border-white/[0.08] hover:border-amber-500/40 transition-all flex flex-col justify-between group shadow-lg">
                        <div>
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                            <div className="flex items-center gap-2">
                              <span className="text-base">🎙️</span>
                              <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                                AI Interview Agent
                              </h3>
                              <span className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/30 text-[10px] font-mono-code font-bold">
                                MULTIMODAL AI
                              </span>
                            </div>
                            <span className="text-[11px] font-mono-code text-white/40">2026</span>
                          </div>

                          <p className="text-white/70 text-xs sm:text-[13px] leading-relaxed mb-3">
                            Real-time voice mock interview simulator conducting interactive technical rounds with dynamic role-based question chains and automated rubric scoring via Gemini AI.
                          </p>

                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {['React.js', 'Node.js', 'Web Speech API', 'Gemini AI', 'Tailwind CSS'].map((t, i) => (
                              <span key={i} className="text-[10px] font-mono-code px-2 py-0.5 rounded-md bg-white/[0.05] text-white/60 border border-white/[0.06]">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
                          <a
                            href="https://github.com/ayush-3945/AI-Interview-Agent"
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-1.5 rounded-xl bg-white/[0.06] border border-white/10 text-white font-semibold text-xs hover:bg-white/10 transition-all flex items-center gap-1.5"
                          >
                            <span>GitHub Repo</span>
                            <span>↗</span>
                          </a>
                        </div>
                      </div>

                      {/* Project 3: DevPulse */}
                      <div className="p-5 rounded-2xl bg-[#111622]/90 border border-white/[0.08] hover:border-amber-500/40 transition-all flex flex-col justify-between group shadow-lg">
                        <div>
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                            <div className="flex items-center gap-2">
                              <span className="text-base">📊</span>
                              <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                                DevPulse
                              </h3>
                              <span className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/30 text-[10px] font-mono-code font-bold">
                                AI ANALYTICS
                              </span>
                            </div>
                            <span className="text-[11px] font-mono-code text-white/40">2026</span>
                          </div>

                          <p className="text-white/70 text-xs sm:text-[13px] leading-relaxed mb-3">
                            Interactive dashboard visualizing commit heatmaps, generating AI Developer Archetypes with Gemini 1.5 Flash, featuring a witty "Roast Mode", and providing actionable repository diagnostics.
                          </p>

                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {['React 19', 'Express', 'MongoDB', 'Gemini 1.5 Flash', 'Chart.js'].map((t, i) => (
                              <span key={i} className="text-[10px] font-mono-code px-2 py-0.5 rounded-md bg-white/[0.05] text-white/60 border border-white/[0.06]">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
                          <a
                            href="https://dev-pulse-kohl-theta.vercel.app"
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-1.5 rounded-xl bg-white text-black font-extrabold text-xs hover:bg-[#FFC15E] hover:text-white transition-all flex items-center gap-1.5"
                          >
                            <span>Live App</span>
                            <span>↗</span>
                          </a>
                          <a
                            href="https://github.com/ayush-3945/DevPulse"
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-1.5 rounded-xl bg-white/[0.06] border border-white/10 text-white font-semibold text-xs hover:bg-white/10 transition-all flex items-center gap-1.5"
                          >
                            <span>GitHub</span>
                            <span>↗</span>
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* ========================================================= */}
                {/* 3. EXPERIENCE WINDOW                                      */}
                {/* ========================================================= */}
                {winId === 'experience' && (
                  <div className="space-y-6 relative">
                    <div className="border-b border-white/[0.08] pb-3 flex items-center justify-between">
                      <h2 className="text-2xl font-bold tracking-tight text-white">
                        Experience
                      </h2>
                      <span className="text-xs font-mono-code text-white/40 tracking-widest uppercase">
                        VOL. 02
                      </span>
                    </div>

                    <div className="space-y-7 pt-1">
                      {portfolioData.experience.map((exp, idx) => (
                        <div key={idx} className="pb-6 border-b border-white/[0.05] last:border-b-0 space-y-2 group">
                          {/* Header: Company & Live dot + Date & Location */}
                          <div className="flex flex-wrap items-baseline justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors tracking-tight">
                                {exp.company}
                              </h3>
                              {exp.isLive && (
                                <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#FFC15E] inline-block"></span>
                              )}
                            </div>
                            <div className="text-right">
                              <div className="text-xs font-mono-code text-white/60 tracking-wider font-semibold">
                                {exp.period}
                              </div>
                              <div className="text-[10px] font-mono-code text-white/30 tracking-widest uppercase">
                                {exp.location}
                              </div>
                            </div>
                          </div>

                          {/* Role in italics */}
                          <div className="text-sm italic text-white/70 font-serif">
                            {exp.role}
                          </div>

                          {/* 2-line clean impact description */}
                          <p className="text-white/65 text-xs sm:text-[13px] leading-relaxed pt-1">
                            {exp.description}
                          </p>

                          {/* Monospace tech tag list */}
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-mono-code text-white/40 pt-2 tracking-widest uppercase">
                            {exp.skills.map((skill, sIdx) => (
                              <React.Fragment key={sIdx}>
                                <span className="hover:text-amber-300 transition-colors">{skill}</span>
                                {sIdx < exp.skills.length - 1 && <span className="text-white/20">•</span>}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ========================================================= */}
                {/* 4. CONTACT WINDOW                                         */}
                {/* ========================================================= */}
                {winId === 'contact' && (
                  <div className="space-y-5 relative">
                    <div className="border-b border-white/[0.08] pb-3 flex items-center gap-3">
                      <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase">
                        CONTACT
                      </h2>
                      <span className="text-white/20 text-lg">|</span>
                      <span className="text-xs font-mono-code text-white/50 tracking-widest uppercase">
                        GET IN TOUCH // 04
                      </span>
                    </div>

                    {contactSubmitted ? (
                      <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center animate-fadeIn">
                        <span className="text-3xl mb-2 inline-block">🚀</span>
                        <h4 className="text-amber-400 font-bold text-base">Message Sent Successfully!</h4>
                        <p className="text-white/70 text-xs mt-1">
                          I'll get back to you shortly at {formData.email || 'your email'}.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleContactSubmit} className="space-y-4 max-w-lg mx-auto">
                        <div>
                          <label className="block text-[10px] font-mono-code text-white/50 uppercase mb-1">YOUR NAME</label>
                          <input
                            required
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="John Doe"
                            className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm outline-none focus:border-[#F5A623]"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-mono-code text-white/50 uppercase mb-1">EMAIL ADDRESS</label>
                          <input
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@example.com"
                            className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm outline-none focus:border-[#F5A623]"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-mono-code text-white/50 uppercase mb-1">YOUR MESSAGE</label>
                          <textarea
                            required
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Tell me about your project..."
                            className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm outline-none focus:border-[#F5A623] resize-none"
                          ></textarea>
                        </div>

                        <button
                          type="submit"
                          disabled={contactLoading}
                          className="w-full py-3 rounded-xl bg-white text-black font-extrabold text-xs tracking-wider uppercase hover:bg-[#F5A623] hover:text-white transition-all shadow-lg cursor-pointer disabled:opacity-60 flex items-center justify-center gap-2"
                        >
                          {contactLoading ? (
                            <>
                              <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                              <span>SENDING MESSAGE...</span>
                            </>
                          ) : (
                            <span>SEND MESSAGE</span>
                          )}
                        </button>
                      </form>
                    )}
                  </div>
                )}

                {/* ========================================================= */}
                {/* 5. ARTICLE WINDOW                                         */}
                {winId === 'article' && (
                  <div className="space-y-4 max-w-2xl mx-auto">
                    <div className="text-[11px] font-mono-code text-[#FFC15E]">SYSTEM ESSAY • AUG 2026</div>
                    <h2 className="text-2xl font-bold text-white">
                      How AI-Powered Smart Governance Can Digitize Offline Processes
                    </h2>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Traditional governance workflows rely on manual paper-based reporting, where complaints sit unprocessed for days before reaching the right authority.
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed">
                      With <strong>CoalDarpan</strong>, we built an AI-powered smart issue routing PWA that uses Google Gemini for image analysis and automated categorization, delivering real-time updates via WebSockets to role-based dashboards.
                    </p>
                  </div>
                )}

              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}
