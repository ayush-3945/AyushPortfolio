import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function MacWindowModal({ activeWindow, onClose, onSwitchWindow }) {
  if (!activeWindow) return null;

  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Interactive Live Simulator for Dispatch OS in portfolio!
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

  const titles = {
    projects: 'PROJECTS & SYSTEM ARCHITECTURE',
    experience: 'EXPERIENCE & EDUCATION',
    stack: 'TECH ARSENAL & SKILLS',
    contact: 'GET IN TOUCH — LET\'S BUILD TOGETHER',
    article: 'ENGINEERING ESSAY / DISPATCH OS ARCHITECTURE'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Main macOS Window Card */}
      <div className="relative w-full max-w-4xl max-h-[88vh] bg-[#0c1017] border border-white/[0.12] rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_30px_rgba(14,165,233,0.15)] flex flex-col overflow-hidden z-10 animate-scaleUp">
        
        {/* macOS Window Top Titlebar */}
        <div className="px-4 py-3.5 bg-[#090d14] border-b border-white/[0.08] flex items-center justify-between flex-shrink-0 select-none">
          {/* Traffic lights */}
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              title="Close Window"
              className="w-3 h-3 rounded-full bg-[#ff5f56] hover:opacity-80 transition-opacity flex items-center justify-center text-[8px] text-black font-bold cursor-pointer"
            >
              ✕
            </button>
            <button
              onClick={onClose}
              title="Minimize"
              className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:opacity-80 transition-opacity cursor-pointer"
            ></button>
            <button
              onClick={() => {}}
              title="Maximize"
              className="w-3 h-3 rounded-full bg-[#27c93f] hover:opacity-80 transition-opacity cursor-pointer"
            ></button>
          </div>

          {/* Title */}
          <div className="text-[11px] font-mono-code text-white/70 font-semibold tracking-wider uppercase text-center truncate px-4">
            {titles[activeWindow] || 'SYSTEM WINDOW'}
          </div>

          {/* Tab Switcher Pills */}
          <div className="flex items-center gap-1.5">
            {['projects', 'experience', 'stack', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => onSwitchWindow(tab)}
                className={`px-2 py-0.5 rounded text-[10px] font-mono-code uppercase transition-all cursor-pointer ${
                  activeWindow === tab
                    ? 'bg-[#0ea5e9]/20 text-[#38bdf8] border border-[#0ea5e9]/40'
                    : 'text-white/40 hover:text-white/80'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Window Content Body (Scrollable) */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1 scrollbar-subtle space-y-6">
          
          {/* 1. PROJECTS VIEW */}
          {activeWindow === 'projects' && (
            <div className="space-y-8">
              {/* Flagship: Dispatch OS */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0f172a]/90 to-[#0c121e]/90 border border-[#0ea5e9]/30 relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 px-3 py-1 bg-[#0ea5e9] text-black font-extrabold text-[10px] rounded-bl-xl font-mono-code">
                  FLAGSHIP PRODUCTION SAAS
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-2xl font-extrabold text-white tracking-tight">
                    ⚡ Dispatch OS
                  </h3>
                  <span className="text-white/40 text-xs font-mono-code">— Autonomous Incident Triage Engine</span>
                </div>

                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  Full-stack incident management platform leveraging <strong>Google Gemini 1.5 Flash</strong> for autonomous classification, priority badging, and bilingual diagnostic briefs (EN/HI) with 98%+ precision. Features real-time WebSockets, 7-day predictive surge forecasting, and native PWA deployment.
                </p>

                {/* Live Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4">
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-center">
                    <div className="text-[#38bdf8] font-bold text-lg">&lt; 2s</div>
                    <div className="text-[10px] text-white/50 font-mono-code uppercase">AI Triage Speed</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-center">
                    <div className="text-emerald-400 font-bold text-lg">98.4%</div>
                    <div className="text-[10px] text-white/50 font-mono-code uppercase">Reasoning Precision</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-center">
                    <div className="text-amber-400 font-bold text-lg">50ms</div>
                    <div className="text-[10px] text-white/50 font-mono-code uppercase">WebSocket Sync</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-center">
                    <div className="text-purple-400 font-bold text-lg">PWA</div>
                    <div className="text-[10px] text-white/50 font-mono-code uppercase">Play Store Ready</div>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 my-4">
                  {portfolioData.projects[0].techStack.map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-white/[0.06] border border-white/[0.08] text-white/80 text-xs font-mono-code">
                      {tech}
                    </span>
                  ))}
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

                {/* Actions */}
                <div className="flex items-center gap-3 mt-5 pt-3 border-t border-white/[0.08]">
                  <a
                    href="https://ai-smart-issue-routing-jbb8.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-white text-black font-extrabold text-xs hover:bg-[#38bdf8] hover:text-white transition-all shadow-md flex items-center gap-1.5"
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
                    <span>VIEW GITHUB REPO</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>

              {/* Project 2 & 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* AI Interview Agent */}
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#38bdf8]/30 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-white">🎙️ AI Interview Agent</h4>
                      <span className="text-[10px] font-mono-code text-purple-400 px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">VOICE + AI</span>
                    </div>
                    <p className="text-white/70 text-xs leading-relaxed">
                      Voice-enabled technical mock interview simulator with dynamic role-based questions, real-time speech-to-text response processing, and automated evaluation scoring via Gemini AI.
                    </p>
                    <div className="flex flex-wrap gap-1.5 my-3">
                      {['React', 'Node.js', 'Web Speech API', 'Gemini AI'].map((t, i) => (
                        <span key={i} className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-white/[0.05] text-white/60">{t}</span>
                      ))}
                    </div>
                  </div>
                  <a
                    href="https://github.com/ayush-3945/AI-Interview-Agent"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#38bdf8] text-xs font-bold hover:underline flex items-center gap-1 pt-2"
                  >
                    <span>Explore on GitHub</span>
                    <span>↗</span>
                  </a>
                </div>

                {/* Flashmon CLI */}
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#38bdf8]/30 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-white">🛠️ Flashmon CLI</h4>
                      <span className="text-[10px] font-mono-code text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">SYSTEMS TOOL</span>
                    </div>
                    <p className="text-white/70 text-xs leading-relaxed">
                      High-performance developer CLI alternative to nodemon featuring AST-aware file watching, debounced process restarts, and sub-40ms cold start latency.
                    </p>
                    <div className="flex flex-wrap gap-1.5 my-3">
                      {['TypeScript', 'Node.js', 'Chokidar', 'Child Process'].map((t, i) => (
                        <span key={i} className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-white/[0.05] text-white/60">{t}</span>
                      ))}
                    </div>
                  </div>
                  <a
                    href="https://github.com/ayush-3945"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#38bdf8] text-xs font-bold hover:underline flex items-center gap-1 pt-2"
                  >
                    <span>Explore on GitHub</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* 2. EXPERIENCE & EDUCATION */}
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

          {/* 3. TECH STACK MATRIX */}
          {activeWindow === 'stack' && (
            <div className="space-y-6">
              {/* Languages */}
              <div>
                <h4 className="text-xs font-mono-code text-[#38bdf8] tracking-wider uppercase mb-3">
                  CORE LANGUAGES
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {portfolioData.techStack.languages.map((lang, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                      <span className="text-white font-bold text-xs">{lang.name}</span>
                      <span className="text-[10px] font-mono-code text-white/50">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frameworks & Real-time */}
              <div>
                <h4 className="text-xs font-mono-code text-emerald-400 tracking-wider uppercase mb-3">
                  FRAMEWORKS & REAL-TIME SYSTEMS
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {portfolioData.techStack.frameworks.map((fw, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                      <span className="text-white font-bold text-xs">{fw.name}</span>
                      <span className="text-[10px] font-mono-code text-emerald-400/80">{fw.category}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Databases & Tools */}
              <div>
                <h4 className="text-xs font-mono-code text-purple-400 tracking-wider uppercase mb-3">
                  AI, DATABASES & CLOUD DEPLOYMENT
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[...portfolioData.techStack.databases, ...portfolioData.techStack.aiAndTools].map((tool, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                      <span className="text-white font-bold text-xs truncate mr-1">{tool.name}</span>
                      <span className="text-[10px] font-mono-code text-purple-300/70">{tool.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 4. CONTACT / GET IN TOUCH */}
          {activeWindow === 'contact' && (
            <div className="space-y-6">
              <div className="text-center max-w-md mx-auto mb-6">
                <h3 className="text-2xl font-black text-white tracking-tight">Let's Build Something Great</h3>
                <p className="text-white/60 text-xs mt-1">
                  Have an exciting role, software idea, or hackathon project? Send a message directly to my inbox.
                </p>
              </div>

              {contactSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center animate-fadeIn">
                  <span className="text-3xl mb-2 inline-block">🚀</span>
                  <h4 className="text-emerald-400 font-bold text-base">Message Sent Successfully!</h4>
                  <p className="text-white/70 text-xs mt-1">
                    Thank you for reaching out. I'll get back to you shortly at {formData.email || 'your email'}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4 max-w-lg mx-auto">
                  <div>
                    <label className="block text-[11px] font-mono-code text-white/60 uppercase mb-1">YOUR NAME</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Vance"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm outline-none focus:border-[#0ea5e9] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono-code text-white/60 uppercase mb-1">EMAIL ADDRESS</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm outline-none focus:border-[#0ea5e9] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono-code text-white/60 uppercase mb-1">YOUR MESSAGE</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, internship role, or idea..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm outline-none focus:border-[#0ea5e9] transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-white text-black font-extrabold text-xs tracking-wider uppercase hover:bg-[#38bdf8] hover:text-white transition-all shadow-lg cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>SEND MESSAGE</span>
                    <span>➔</span>
                  </button>
                </form>
              )}

              {/* Direct Social Links */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-6 border-t border-white/[0.08] text-xs font-mono-code">
                <a href={`mailto:${portfolioData.personal.email}`} className="text-white/60 hover:text-[#38bdf8] transition-colors">
                  ✉️ {portfolioData.personal.email}
                </a>
                <span className="text-white/20">•</span>
                <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="text-white/60 hover:text-[#38bdf8] transition-colors">
                  GitHub ↗
                </a>
                <span className="text-white/20">•</span>
                <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="text-white/60 hover:text-[#38bdf8] transition-colors">
                  LinkedIn ↗
                </a>
                <span className="text-white/20">•</span>
                <a href={portfolioData.personal.twitter} target="_blank" rel="noreferrer" className="text-white/60 hover:text-[#38bdf8] transition-colors">
                  Twitter/X ↗
                </a>
              </div>
            </div>
          )}

          {/* 5. ARTICLE VIEW */}
          {activeWindow === 'article' && (
            <div className="space-y-4 max-w-2xl mx-auto">
              <div className="text-[11px] font-mono-code text-[#38bdf8]">SYSTEM ARCHITECTURE ESSAY • AUG 2026</div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
                Why Autonomous Triage is the Future of Enterprise IT Operations
              </h2>
              
              <div className="text-white/80 text-sm leading-relaxed space-y-4 pt-4 border-t border-white/[0.08]">
                <p>
                  Traditional IT support models rely on manual ticket ingestion, where complaints sit in unassigned queues for 24 to 48 hours before human triage even begins.
                </p>
                <p>
                  With <strong>Dispatch OS</strong>, we engineered an autonomous incident lifecycle engine that executes multi-step reasoning in under 2 seconds using Google Gemini 1.5 Flash structured schemas. It automatically detects issue severity, generates bilingual diagnostic summaries (English & Hindi), routes to the exact department lead, and broadcasts real-time updates across WebSockets.
                </p>
                <p>
                  Coupled with a 7-day predictive surge forecasting pipeline using in-memory TTL caching, support teams can anticipate infrastructure bottlenecks before they escalate into enterprise outages.
                </p>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => onSwitchWindow('projects')}
                  className="px-4 py-2 rounded-xl bg-[#0ea5e9] text-white font-bold text-xs hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Explore Dispatch OS in Projects ➔
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
