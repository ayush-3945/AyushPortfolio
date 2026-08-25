import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function MacWindowModal({ activeWindow, onClose, onSwitchWindow }) {
  if (!activeWindow) return null;

  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Interactive Live Simulator for Dispatch OS
  const [simTitle, setSimTitle] = useState('VPN tunnel failing on prod servers');
  const [simDesc, setSimDesc] = useState('Production node cluster lost SSL handshake');
  const [simResult, setSimResult] = useState(null);
  const [simLoading, setSimLoading] = useState(false);

  const runSimulator = () => {
    setSimLoading(true);
    setTimeout(() => {
      setSimResult({
        category: 'IT Infrastructure',
        priority: 'High',
        confidence: '98.6%',
        department: 'IT Department',
        summary: 'Critical SSL/VPN tunnel degradation detected affecting production cluster.',
        suggestedResolution: 'Regenerate SSL certs and reset Wireguard/VPN network gateway.'
      });
      setSimLoading(false);
    }, 600);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setContactSubmitted(false);
    }, 4000);
  };

  // 10 Core Tech Badges matching Rohit's exact ARSENAL layout
  const techArsenal = [
    {
      name: 'TYPESCRIPT',
      bg: 'bg-[#3178c6]',
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
      name: 'TAILWIND',
      icon: (
        <div className="w-10 h-10 rounded-lg bg-[#38bdf8]/10 border border-[#38bdf8]/30 flex items-center justify-center text-[#38bdf8] text-xl font-bold shadow-[0_0_15px_rgba(56,189,248,0.3)]">
          ≈
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
      name: 'PYTHON',
      icon: (
        <div className="w-10 h-10 rounded-lg bg-[#3776ab]/15 border border-[#ffd438]/30 flex items-center justify-center text-[#ffd438] text-xl">
          🐍
        </div>
      )
    },
    {
      name: 'C / C++',
      icon: (
        <div className="w-10 h-10 rounded-lg bg-[#00599c]/20 border border-[#00599c]/40 flex items-center justify-center font-bold text-[#38bdf8] text-xs">
          C++
        </div>
      )
    },
  ];

  const windowTitle = {
    stack: 'TECH STACK',
    projects: 'PROJECTS',
    experience: 'EXPERIENCE',
    contact: 'CONTACT',
    article: 'WRITING'
  }[activeWindow] || 'SYSTEM';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg animate-fadeIn select-none">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Layered Window Deck Container */}
      <div className="relative w-full max-w-4xl z-10 flex flex-col items-center">
        
        {/* Faint Stacked Window Layer 1 (Experience) */}
        <div 
          onClick={() => onSwitchWindow('experience')}
          className="w-[94%] h-12 -mb-8 rounded-2xl bg-[#090c13] border border-white/[0.08] flex items-center px-4 justify-between cursor-pointer hover:border-white/20 transition-all opacity-40 hover:opacity-70 shadow-lg"
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/40"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/40"></span>
          </div>
          <span className="text-[11px] font-mono-code text-white/50 font-bold uppercase tracking-wider">EXPERIENCE</span>
          <div className="w-6"></div>
        </div>

        {/* Faint Stacked Window Layer 2 (Projects) */}
        <div 
          onClick={() => onSwitchWindow('projects')}
          className="w-[97%] h-12 -mb-8 rounded-2xl bg-[#0b0f17] border border-white/[0.1] flex items-center px-4 justify-between cursor-pointer hover:border-white/20 transition-all opacity-70 hover:opacity-90 shadow-xl"
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/60"></span>
          </div>
          <span className="text-[11px] font-mono-code text-white/70 font-bold uppercase tracking-wider">PROJECTS</span>
          <div className="w-6"></div>
        </div>

        {/* 🌟 Active Front macOS Window */}
        <div className="relative w-full max-h-[85vh] bg-[#0c1017] border border-white/[0.12] rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.95),0_0_30px_rgba(14,165,233,0.15)] flex flex-col overflow-hidden animate-scaleUp">
          
          {/* macOS Titlebar */}
          <div className="px-5 py-4 bg-[#090d14] border-b border-white/[0.08] flex items-center justify-between flex-shrink-0">
            {/* Traffic Lights */}
            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                title="Close Window"
                className="w-3 h-3 rounded-full bg-[#ff5f56] hover:opacity-80 transition-opacity cursor-pointer flex items-center justify-center text-[7px] text-black font-bold"
              >
                ✕
              </button>
              <button
                onClick={() => {}}
                title="Zoom"
                className="w-3 h-3 rounded-full bg-[#27c93f] hover:opacity-80 transition-opacity cursor-pointer"
              ></button>
            </div>

            {/* Window Name */}
            <div className="text-xs font-mono-code text-white/70 font-bold tracking-[0.2em] uppercase">
              {windowTitle}
            </div>

            {/* Fast Switch Tabs */}
            <div className="flex items-center gap-1.5">
              {['stack', 'projects', 'experience', 'contact'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => onSwitchWindow(tab)}
                  className={`px-2 py-0.5 rounded text-[10px] font-mono-code uppercase transition-all cursor-pointer ${
                    activeWindow === tab
                      ? 'bg-white/10 text-white border border-white/20'
                      : 'text-white/40 hover:text-white/70'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Window Body */}
          <div className="p-6 md:p-10 overflow-y-auto flex-1 scrollbar-subtle space-y-6 relative">
            
            {/* ========================================================= */}
            {/* 1. TECH STACK (Exact ARSENAL layout from screenshot!)      */}
            {/* ========================================================= */}
            {activeWindow === 'stack' && (
              <div className="space-y-8 relative">
                {/* Faint Background Watermark */}
                <div className="absolute right-4 bottom-0 text-white/[0.02] text-8xl font-black font-mono-code select-none pointer-events-none">
                  ARSENAL
                </div>

                {/* Section Title Header */}
                <div className="border-b border-white/[0.08] pb-4">
                  <div className="flex items-center gap-3">
                    <h2 className="text-3xl font-black tracking-tight text-white uppercase">
                      ARSENAL
                    </h2>
                    <span className="text-white/20 text-lg">|</span>
                    <span className="text-xs font-mono-code text-white/50 tracking-widest uppercase">
                      TECH STACK // 01
                    </span>
                  </div>
                </div>

                {/* 2x5 Grid of Square Rounded Tech Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-5">
                  {techArsenal.map((tech, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-[#111622]/80 border border-white/[0.08] hover:border-white/25 hover:bg-[#151c2b] transition-all duration-200 flex flex-col items-center justify-center gap-3 cursor-pointer group shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                      {/* Icon */}
                      <div className="group-hover:scale-110 transition-transform duration-200">
                        {tech.icon}
                      </div>

                      {/* Name */}
                      <span className="text-[11px] font-mono-code font-bold tracking-wider text-white/70 group-hover:text-white transition-colors text-center">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Systems Architecture Brief */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono-code text-white/60 flex items-center justify-between">
                  <span>● Full-Stack Systems, Real-Time WebSockets & Distributed Backends</span>
                  <button onClick={() => onSwitchWindow('projects')} className="text-[#38bdf8] hover:underline font-bold">
                    View Live Projects ➔
                  </button>
                </div>
              </div>
            )}

            {/* ========================================================= */}
            {/* 2. PROJECTS WINDOW                                        */}
            {/* ========================================================= */}
            {activeWindow === 'projects' && (
              <div className="space-y-8">
                {/* Flagship: CoalDarpan */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0f172a]/90 to-[#0c121e]/90 border border-[#0ea5e9]/30 relative overflow-hidden shadow-xl">
                  <div className="absolute top-0 right-0 px-3 py-1 bg-[#0ea5e9] text-black font-extrabold text-[10px] rounded-bl-xl font-mono-code">
                    NATIONAL HACKATHON
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-2xl font-extrabold text-white tracking-tight">
                      🏛️ CoalDarpan
                    </h3>
                    <span className="text-white/40 text-xs font-mono-code">— Smart Issue Routing PWA</span>
                  </div>

                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    Digital governance and smart issue routing Progressive Web App built during a national hackathon to digitize offline processes. Features role-based dashboards, real-time <strong>WebSocket</strong> notifications, <strong>JWT</strong> authentication, and AI-powered categorization using <strong>Google Gemini</strong> for image analysis. Supports offline capabilities with PWA architecture.
                  </p>

                  {/* Live Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4">
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-center">
                      <div className="text-[#38bdf8] font-bold text-lg">AI</div>
                      <div className="text-[10px] text-white/50 font-mono-code uppercase">Gemini Vision</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-center">
                      <div className="text-emerald-400 font-bold text-lg">Real-time</div>
                      <div className="text-[10px] text-white/50 font-mono-code uppercase">WebSocket Sync</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-center">
                      <div className="text-amber-400 font-bold text-lg">JWT</div>
                      <div className="text-[10px] text-white/50 font-mono-code uppercase">Auth Security</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-center">
                      <div className="text-purple-400 font-bold text-lg">PWA</div>
                      <div className="text-[10px] text-white/50 font-mono-code uppercase">Offline Ready</div>
                    </div>
                  </div>

                  {/* Interactive Triage Simulator */}
                  <div className="mt-5 p-4 rounded-xl bg-black/40 border border-white/10 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#38bdf8] font-mono-code">⚡ TRY LIVE TRIAGE SIMULATOR</span>
                      <span className="text-white/40 text-[10px]">Powered by Gemini 1.5 Flash</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={simTitle}
                        onChange={(e) => setSimTitle(e.target.value)}
                        placeholder="Issue Title..."
                        className="px-3 py-2 rounded-lg bg-white/[0.05] border border-white/10 text-xs text-white outline-none focus:border-[#0ea5e9]"
                      />
                      <input
                        type="text"
                        value={simDesc}
                        onChange={(e) => setSimDesc(e.target.value)}
                        placeholder="Issue Description..."
                        className="px-3 py-2 rounded-lg bg-white/[0.05] border border-white/10 text-xs text-white outline-none focus:border-[#0ea5e9]"
                      />
                    </div>

                    <button
                      onClick={runSimulator}
                      disabled={simLoading}
                      className="w-full py-2 rounded-lg bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] text-white font-bold text-xs hover:opacity-90 transition-opacity cursor-pointer flex items-center justify-center gap-2"
                    >
                      {simLoading ? '⚡ Analyzing with Gemini 1.5 Flash...' : '🔮 Run Instant AI Incident Triage'}
                    </button>

                    {simResult && (
                      <div className="p-3 rounded-lg bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 text-xs space-y-1 animate-fadeIn">
                        <div className="flex items-center justify-between font-bold">
                          <span className="text-[#38bdf8]">Category: {simResult.category}</span>
                          <span className="text-amber-400">Priority: {simResult.priority} ({simResult.confidence})</span>
                        </div>
                        <p className="text-white/80">{simResult.summary}</p>
                        <p className="text-emerald-400 font-mono-code text-[11px]">💡 Action: {simResult.suggestedResolution}</p>
                      </div>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 mt-5 pt-3 border-t border-white/[0.08]">
                    <a
                      href="https://coaldarpan.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl bg-white text-black font-extrabold text-xs hover:bg-[#38bdf8] hover:text-white transition-all shadow-md flex items-center gap-1.5"
                    >
                      <span>LAUNCH LIVE APP</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://github.com/ayush-3945"
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl bg-white/[0.06] border border-white/10 text-white font-semibold text-xs hover:bg-white/10 transition-all flex items-center gap-1.5"
                    >
                      <span>GITHUB REPO</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>

                {/* AI Interview Agent */}
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">🎙️ AI Interview Agent</h4>
                    <p className="text-white/60 text-xs">Real-time voice mock interview simulator with dynamic Gemini AI prompts.</p>
                  </div>
                  <a
                    href="https://github.com/ayush-3945/AI-Interview-Agent"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-white/10 text-white font-mono-code text-xs hover:bg-[#38bdf8] hover:text-black transition-colors"
                  >
                    View Code ↗
                  </a>
                </div>
              </div>
            )}

            {/* ========================================================= */}
            {/* 3. EXPERIENCE WINDOW                                      */}
            {/* ========================================================= */}
            {activeWindow === 'experience' && (
              <div className="space-y-6">
                <div className="border-l-2 border-[#0ea5e9] pl-4 ml-2 space-y-6">
                  {portfolioData.experience.map((exp, idx) => (
                    <div key={idx} className="relative group">
                      <div className="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-[#0ea5e9] border-2 border-[#0c1017]"></div>
                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/20 transition-all">
                        <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                          <h4 className="text-white font-bold text-base">{exp.role}</h4>
                          <span className="text-[11px] font-mono-code text-[#38bdf8] px-2 py-0.5 rounded bg-[#0ea5e9]/10">
                            {exp.period}
                          </span>
                        </div>
                        <div className="text-white/60 text-xs font-semibold mb-2">
                          {exp.org} • <span className="text-white/40 font-normal">{exp.location}</span>
                        </div>
                        <p className="text-white/70 text-xs leading-relaxed">
                          {exp.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ========================================================= */}
            {/* 4. CONTACT WINDOW                                         */}
            {/* ========================================================= */}
            {activeWindow === 'contact' && (
              <div className="space-y-6">
                <div className="text-center max-w-md mx-auto mb-4">
                  <h3 className="text-2xl font-black text-white tracking-tight">Get In Touch</h3>
                  <p className="text-white/60 text-xs mt-1">
                    LET'S BUILD SOMETHING GREAT
                  </p>
                </div>

                {contactSubmitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center animate-fadeIn">
                    <span className="text-3xl mb-2 inline-block">🚀</span>
                    <h4 className="text-emerald-400 font-bold text-base">Message Sent Successfully!</h4>
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
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm outline-none focus:border-[#0ea5e9]"
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
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm outline-none focus:border-[#0ea5e9]"
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
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm outline-none focus:border-[#0ea5e9] resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-white text-black font-extrabold text-xs tracking-wider uppercase hover:bg-[#38bdf8] hover:text-white transition-all shadow-lg cursor-pointer"
                    >
                      SEND MESSAGE
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* ========================================================= */}
            {/* 5. ARTICLE / WRITING                                      */}
            {/* ========================================================= */}
            {activeWindow === 'article' && (
              <div className="space-y-4 max-w-2xl mx-auto">
                <div className="text-[11px] font-mono-code text-[#38bdf8]">SYSTEM ESSAY • AUG 2026</div>
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

      </div>
    </div>
  );
}
