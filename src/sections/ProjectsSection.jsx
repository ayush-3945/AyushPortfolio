import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Github, Sparkles, Layers, ShieldCheck, Zap } from 'lucide-react';

export default function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="w-full max-w-[1580px] mx-auto px-4 sm:px-8 md:px-12 py-16 scroll-mt-20">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono-code text-purple-400 uppercase tracking-widest mb-1.5 font-bold">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_#c084fc]"></span>
            <span>FEATURED PRODUCTION BUILDS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Projects <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">& Architecture</span>
          </h2>
        </div>
        <span className="text-xs font-mono-code text-white/40 tracking-widest uppercase">
          VOL. 01 // 2026
        </span>
      </div>

      <div className="space-y-8">
        {/* Flagship: CoalDarpan */}
        <div className="glass-bento rounded-3xl p-6 sm:p-9 relative overflow-hidden border border-purple-500/30 hover:border-purple-500/60 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(168,85,247,0.15)] group transition-all duration-300">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-600/20 via-indigo-600/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-2xl">🏛️</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-purple-300 transition-colors tracking-tight">
                  CoalDarpan
                </h3>
                <span className="px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 text-[11px] font-mono-code font-bold uppercase tracking-wider shadow-[0_0_12px_rgba(168,85,247,0.3)]">
                  NATIONAL HACKATHON WINNER
                </span>
              </div>
              <span className="text-xs font-mono-code text-white/40 font-semibold">2026 • PRODUCTION PWA</span>
            </div>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-4xl">
              Digital governance and smart issue routing Progressive Web App (PWA) built to eliminate statutory bottlenecks in offline coal mining workflows. Engineered with <strong>Google Gemini AI</strong> for automated image hazard classification, real-time bi-directional <strong>WebSockets</strong> for instant dispatch notifications, and secure <strong>JWT</strong> role-based dashboards.
            </p>

            {/* Architecture Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-center group-hover:border-purple-500/20 transition-all">
                <div className="text-purple-300 font-black text-xl">Gemini 1.5</div>
                <div className="text-[10px] text-white/40 font-mono-code uppercase mt-0.5">AI Vision Engine</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-center group-hover:border-purple-500/20 transition-all">
                <div className="text-emerald-400 font-black text-xl">&lt; 50ms</div>
                <div className="text-[10px] text-white/40 font-mono-code uppercase mt-0.5">WebSocket Sync</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-center group-hover:border-purple-500/20 transition-all">
                <div className="text-amber-400 font-black text-xl">JWT + RBAC</div>
                <div className="text-[10px] text-white/40 font-mono-code uppercase mt-0.5">Role Security</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-center group-hover:border-purple-500/20 transition-all">
                <div className="text-indigo-400 font-black text-xl">Offline PWA</div>
                <div className="text-[10px] text-white/40 font-mono-code uppercase mt-0.5">Service Workers</div>
              </div>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['React', 'Node.js', 'Express', 'MongoDB Atlas', 'Socket.io', 'Google Gemini', 'Tailwind CSS', 'JWT', 'PWA'].map((t, i) => (
                <span key={i} className="text-xs font-mono-code px-3 py-1.5 rounded-xl bg-white/[0.04] text-white/70 border border-white/[0.08]">
                  {t}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/[0.08]">
              <a
                href="https://coaldarpan.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3 rounded-xl bg-white text-black font-black text-xs tracking-wider uppercase hover:bg-purple-400 hover:text-white transition-all shadow-[0_10px_25px_rgba(255,255,255,0.15)] flex items-center gap-2"
              >
                <span>VISIT LIVE APP</span>
                <ExternalLink size={14} />
              </a>

              <a
                href="https://github.com/ayush-3945/ai-smart-issue-routing"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-white/[0.05] border border-white/10 hover:border-purple-500/40 text-white font-mono-code font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-2"
              >
                <span>VIEW SOURCE CODE</span>
                <Github size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Project 2: AI Interview Agent */}
        <div className="glass-bento rounded-3xl p-6 sm:p-9 relative overflow-hidden border border-white/[0.08] hover:border-purple-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group transition-all duration-300">
          <div className="space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-2xl">🎙️</span>
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors tracking-tight">
                  AI Interview Agent
                </h3>
                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 text-[10px] font-mono-code font-bold uppercase tracking-wider">
                  MULTIMODAL AI TOOL
                </span>
              </div>
              <span className="text-xs font-mono-code text-white/40 font-semibold">2026</span>
            </div>

            <p className="text-white/70 text-sm sm:text-[15px] leading-relaxed max-w-3xl">
              Real-time interactive technical mock interview simulator. Dynamically generates role-based question chains across custom difficulty presets using <strong>Google Gemini prompt pipelines</strong> and captures speech responses with the <strong>Web Speech API</strong> for instant rubric evaluation.
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['React.js', 'Node.js', 'Web Speech API', 'Gemini AI', 'Tailwind CSS', 'Vite'].map((t, i) => (
                <span key={i} className="text-xs font-mono-code px-3 py-1.5 rounded-xl bg-white/[0.04] text-white/70 border border-white/[0.08]">
                  {t}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-white/[0.06]">
              <a
                href="https://github.com/ayush-3945/AI-Interview-Agent"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 rounded-xl bg-white/[0.06] border border-white/10 hover:border-purple-500/40 text-white font-mono-code font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-2"
              >
                <span>GITHUB REPO</span>
                <Github size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
