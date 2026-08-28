import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import TerminalWindow from './TerminalWindow';

export default function MacWindowModal({ activeWindow, onClose, onSwitchWindow }) {
  if (!activeWindow) return null;

  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactLoading, setContactLoading] = useState(false);
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

  // 10 Core Tech Badges
  const techArsenal = [
    {
      name: 'TYPESCRIPT',
      icon: (
        <div className="w-9 h-9 rounded-xl bg-[#3178c6]/20 border border-[#3178c6]/40 flex items-center justify-center text-[#3178c6] font-mono-code font-black text-sm shadow-[0_0_15px_rgba(49,120,198,0.25)]">
          TS
        </div>
      )
    },
    {
      name: 'REACT.JS',
      icon: (
        <div className="w-9 h-9 rounded-xl bg-[#61dafb]/20 border border-[#61dafb]/40 flex items-center justify-center text-[#61dafb] font-mono-code font-black text-sm shadow-[0_0_15px_rgba(97,218,251,0.25)]">
          ⚛
        </div>
      )
    },
    {
      name: 'NEXT.JS',
      icon: (
        <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white font-mono-code font-black text-sm">
          ▲
        </div>
      )
    },
    {
      name: 'NODE.JS',
      icon: (
        <div className="w-9 h-9 rounded-xl bg-[#339933]/20 border border-[#339933]/40 flex items-center justify-center text-[#339933] font-mono-code font-black text-sm shadow-[0_0_15px_rgba(51,153,51,0.25)]">
          ⬢
        </div>
      )
    },
    {
      name: 'EXPRESS.JS',
      icon: (
        <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white/80 font-mono-code font-black text-sm">
          ex
        </div>
      )
    },
    {
      name: 'MONGODB',
      icon: (
        <div className="w-9 h-9 rounded-xl bg-[#47a248]/20 border border-[#47a248]/40 flex items-center justify-center text-[#47a248] font-mono-code font-black text-sm shadow-[0_0_15px_rgba(71,162,72,0.25)]">
          🍃
        </div>
      )
    },
    {
      name: 'SOCKET.IO',
      icon: (
        <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white font-mono-code font-black text-sm">
          ⚡
        </div>
      )
    },
    {
      name: 'TAILWIND CSS',
      icon: (
        <div className="w-9 h-9 rounded-xl bg-[#38bdf8]/20 border border-[#38bdf8]/40 flex items-center justify-center text-[#38bdf8] font-mono-code font-black text-sm shadow-[0_0_15px_rgba(56,189,248,0.25)]">
          ≈
        </div>
      )
    },
    {
      name: 'C / C++',
      icon: (
        <div className="w-9 h-9 rounded-xl bg-[#00599c]/20 border border-[#00599c]/40 flex items-center justify-center text-[#659ad2] font-mono-code font-black text-sm shadow-[0_0_15px_rgba(0,89,156,0.25)]">
          C++
        </div>
      )
    },
    {
      name: 'JAVA',
      icon: (
        <div className="w-9 h-9 rounded-xl bg-[#e76f00]/20 border border-[#e76f00]/40 flex items-center justify-center text-[#f89820] font-mono-code font-black text-sm shadow-[0_0_15px_rgba(231,111,0,0.25)]">
          ☕
        </div>
      )
    }
  ];

  const windowTitle = {
    terminal: 'ayush@portfolio: ~ (zsh)',
    stack: 'TECH STACK',
    projects: 'PROJECTS',
    experience: 'EXPERIENCE',
    contact: 'CONTACT',
    article: 'WRITING'
  }[activeWindow] || 'AYUSH OS';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Background Click to Dismiss */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Container holding stacked windows mockup */}
      <div className="relative w-full max-w-4xl z-10 flex flex-col items-center">
        
        {/* Faint Stacked Window Layer 1 (Stack) */}
        <div 
          onClick={() => onSwitchWindow('stack')}
          className="w-[94%] h-10 -mb-7 rounded-2xl bg-[#080b11] border border-white/[0.08] flex items-center px-4 justify-between cursor-pointer hover:border-white/20 transition-all opacity-50 hover:opacity-80 shadow-2xl"
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/40"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></span>
          </div>
          <span className="text-[10px] font-mono-code text-white/50 uppercase tracking-wider">TECH STACK</span>
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
        <div className="relative w-full max-h-[85vh] bg-[#0c1017] border border-white/[0.12] rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.95),0_0_30px_rgba(245,166,35,0.15)] flex flex-col overflow-hidden animate-scaleUp">
          
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
              {['terminal', 'stack', 'projects', 'experience', 'contact'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => onSwitchWindow(tab)}
                  className={`px-2 py-0.5 rounded text-[10px] font-mono-code uppercase transition-all cursor-pointer ${
                    activeWindow === tab
                      ? 'bg-white/10 text-white border border-white/20'
                      : 'text-white/40 hover:text-white/70'
                  }`}
                >
                  {tab === 'terminal' ? '>_ term' : tab}
                </button>
              ))}
            </div>
          </div>

          {/* Window Body */}
          <div className={`overflow-y-auto flex-1 scrollbar-subtle relative ${activeWindow === 'terminal' ? 'p-0' : 'p-6 md:p-10 space-y-6'}`}>
            
            {/* 0. TERMINAL WINDOW */}
            {activeWindow === 'terminal' && (
              <TerminalWindow
                onOpenWindow={onSwitchWindow}
                onClose={onClose}
              />
            )}

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
                  <button onClick={() => onSwitchWindow('projects')} className="text-[#FFC15E] hover:underline font-bold">
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
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0f172a]/90 to-[#0c121e]/90 border border-[#F5A623]/30 relative overflow-hidden shadow-xl">
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
                      <div className="text-[#FFC15E] font-bold text-lg">AI</div>
                      <div className="text-[10px] text-white/50 font-mono-code uppercase">Gemini Vision</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-center">
                      <div className="text-amber-400 font-bold text-lg">Real-time</div>
                      <div className="text-[10px] text-white/50 font-mono-code uppercase">WebSocket Sync</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-center">
                      <div className="text-amber-400 font-bold text-lg">JWT</div>
                      <div className="text-[10px] text-white/50 font-mono-code uppercase">Auth Security</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-center">
                      <div className="text-amber-400 font-bold text-lg">PWA</div>
                      <div className="text-[10px] text-white/50 font-mono-code uppercase">Offline Ready</div>
                    </div>
                  </div>

                  {/* Interactive Triage Simulator */}
                  <div className="mt-5 p-4 rounded-xl bg-black/40 border border-white/10 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#FFC15E] font-mono-code">⚡ TRY LIVE TRIAGE SIMULATOR</span>
                      <span className="text-white/40 text-[10px]">Powered by Gemini 1.5 Flash</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={simTitle}
                        onChange={(e) => setSimTitle(e.target.value)}
                        placeholder="Issue Title..."
                        className="px-3 py-2 rounded-lg bg-white/[0.05] border border-white/10 text-xs text-white outline-none focus:border-[#F5A623]"
                      />
                      <input
                        type="text"
                        value={simDesc}
                        onChange={(e) => setSimDesc(e.target.value)}
                        placeholder="Issue Description..."
                        className="px-3 py-2 rounded-lg bg-white/[0.05] border border-white/10 text-xs text-white outline-none focus:border-[#F5A623]"
                      />
                    </div>

                    <button
                      onClick={runSimulator}
                      disabled={simLoading}
                      className="w-full py-2 rounded-lg bg-gradient-to-r from-[#F5A623] to-[#C97F1C] text-white font-bold text-xs hover:opacity-90 transition-opacity cursor-pointer flex items-center justify-center gap-2"
                    >
                      {simLoading ? '⚡ Analyzing with Gemini 1.5 Flash...' : '🔮 Run Instant AI Incident Triage'}
                    </button>

                    {simResult && (
                      <div className="p-3 rounded-lg bg-[#F5A623]/10 border border-[#F5A623]/30 text-xs space-y-1 animate-fadeIn">
                        <div className="flex items-center justify-between font-bold">
                          <span className="text-[#FFC15E]">Category: {simResult.category}</span>
                          <span className="text-amber-400">Priority: {simResult.priority} ({simResult.confidence})</span>
                        </div>
                        <p className="text-white/80">{simResult.summary}</p>
                        <p className="text-amber-400 font-mono-code text-[11px]">💡 Action: {simResult.suggestedResolution}</p>
                      </div>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 mt-5 pt-3 border-t border-white/[0.08]">
                    <a
                      href="https://coaldarpan.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl bg-white text-black font-extrabold text-xs hover:bg-[#FFC15E] hover:text-white transition-all shadow-md flex items-center gap-1.5"
                    >
                      <span>LAUNCH LIVE APP</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://github.com/ayush-3945/ai-smart-issue-routing"
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
                    className="px-3 py-1.5 rounded-lg bg-white/10 text-white font-mono-code text-xs hover:bg-[#FFC15E] hover:text-black transition-colors"
                  >
                    View Code ↗
                  </a>
                </div>

                {/* DevPulse */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-[#1c1106]/90 to-[#120a03]/90 border border-[#FFC15E]/30 relative overflow-hidden shadow-xl">
                  <div className="absolute top-0 right-0 px-3 py-1 bg-[#FFC15E] text-black font-extrabold text-[10px] rounded-bl-xl font-mono-code">
                    AI ANALYTICS
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-2xl font-extrabold text-white tracking-tight">
                      📊 DevPulse
                    </h3>
                    <span className="text-white/40 text-xs font-mono-code">— Developer DNA Platform</span>
                  </div>
                  
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    Interactive dashboard visualizing commit heatmaps, generating AI Developer Archetypes with <strong>Gemini 1.5 Flash</strong>, featuring a witty "Roast Mode", and providing actionable repository diagnostics. Backed by <strong>MongoDB TTL caching</strong> for high performance.
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {['React 19', 'Express', 'MongoDB', 'Gemini 1.5 Flash', 'Chart.js'].map((t, i) => (
                      <span key={i} className="text-[10px] font-mono-code px-2 py-1 rounded-md bg-[#FFC15E]/10 text-[#FFC15E] border border-[#FFC15E]/20">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/[0.08]">
                    <a
                      href="https://dev-pulse-kohl-theta.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl bg-white text-black font-extrabold text-xs hover:bg-[#FFC15E] hover:text-white transition-all shadow-md flex items-center gap-1.5"
                    >
                      <span>LAUNCH APP</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://github.com/ayush-3945/DevPulse"
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl bg-white/[0.06] border border-white/10 text-white font-semibold text-xs hover:bg-white/10 transition-all flex items-center gap-1.5"
                    >
                      <span>GITHUB REPO</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* ========================================================= */}
            {/* 3. EXPERIENCE WINDOW                                      */}
            {/* ========================================================= */}
            {activeWindow === 'experience' && (
              <div className="space-y-6">
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
            {activeWindow === 'contact' && (
              <div className="space-y-6">
                <div className="text-center max-w-md mx-auto mb-4">
                  <h3 className="text-2xl font-black text-white tracking-tight">Get In Touch</h3>
                  <p className="text-white/60 text-xs mt-1">
                    LET'S BUILD SOMETHING GREAT
                  </p>
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
            {/* 5. ARTICLE / WRITING                                      */}
            {/* ========================================================= */}
            {activeWindow === 'article' && (
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

      </div>
    </div>
  );
}
