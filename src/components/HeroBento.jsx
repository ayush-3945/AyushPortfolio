import React from 'react';
import { portfolioData } from '../data/portfolioData';
import SpotifyWidget from './SpotifyWidget';
import GithubHeatmap from './GithubHeatmap';
import { QuoteCarousel, StatusCard, LatestWritingCard } from './Cards';

export default function HeroBento({ onOpenWindow }) {
  const { personal } = portfolioData;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-10 space-y-6 pb-28">
      
      {/* 1. TOP HERO SECTION (Bento Master Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Hero Identity Card (7 cols on lg) */}
        <div className="lg:col-span-7 glass-bento rounded-3xl p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle Electric Cyan Glow */}
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#0ea5e9]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div>
            <div className="flex items-center gap-2 text-white/50 font-mono-code text-xs mb-4 uppercase tracking-widest">
              <span className="text-[#38bdf8]">⚡</span>
              <span>{personal.role}</span>
            </div>

            <h1 className="font-serif-title text-5xl sm:text-7xl font-normal text-white tracking-tight leading-[1.05] mb-6">
              {personal.name}
            </h1>

            <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              {personal.tagline}
            </p>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-8 mt-6 border-t border-white/[0.08]">
            <button
              onClick={() => onOpenWindow('contact')}
              className="px-6 py-3 rounded-xl bg-white text-black font-extrabold text-xs tracking-wider uppercase hover:bg-[#38bdf8] hover:text-white transition-all shadow-lg hover:shadow-[#38bdf8]/30 cursor-pointer flex items-center gap-2 group"
            >
              <span>START PROJECT</span>
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
            </button>

            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-white/[0.05] border border-white/10 hover:border-white/25 text-white font-semibold text-xs tracking-wider uppercase hover:bg-white/[0.08] transition-all cursor-pointer flex items-center gap-2"
            >
              <span>READ RESUME</span>
              <span className="text-white/40">📄</span>
            </a>

            <button
              onClick={() => onOpenWindow('projects')}
              className="px-4 py-3 rounded-xl text-[#38bdf8] hover:bg-[#0ea5e9]/10 text-xs font-mono-code font-bold uppercase transition-all cursor-pointer ml-auto"
            >
              Explore OS Projects ➔
            </button>
          </div>
        </div>

        {/* Center / Right Avatar Card (3 cols) */}
        <div className="lg:col-span-3 glass-bento rounded-3xl p-4 flex flex-col items-center justify-center relative overflow-hidden group">
          <div className="relative w-full aspect-square max-w-[280px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#090d14]">
            {/* Stylized Anime / Monochrome Tech Illustration */}
            <img
              src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80"
              alt="Ayush Tech Persona"
              className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:contrast-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-80"></div>
            
            <div className="absolute bottom-3 left-3 right-3 text-center">
              <span className="text-[10px] font-mono-code text-white/80 bg-black/60 px-2 py-1 rounded-md border border-white/10 backdrop-blur-sm">
                FULL STACK & AI BUILDER
              </span>
            </div>
          </div>
        </div>

        {/* Right Stack Widgets (2 cols) */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <StatusCard onContactClick={() => onOpenWindow('contact')} />
          <QuoteCarousel />
        </div>

      </div>

      {/* 2. MIDDLE BENTO ROW (Widgets: Writing, Spotify, Heatmap) */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
        
        {/* Latest Writing (3 cols) */}
        <div className="lg:col-span-3">
          <LatestWritingCard onArticleClick={() => onOpenWindow('article')} />
        </div>

        {/* Spotify Live Playing (4 cols) */}
        <div className="lg:col-span-4">
          <SpotifyWidget />
        </div>

        {/* GitHub Contribution Heatmap (5 cols) */}
        <div className="lg:col-span-5">
          <GithubHeatmap onClick={() => onOpenWindow('projects')} />
        </div>

      </div>

      {/* 3. FEATURED SAAS SHOWCASE ROW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Dispatch OS Spotlight Card */}
        <div
          onClick={() => onOpenWindow('projects')}
          className="glass-bento rounded-3xl p-6 cursor-pointer group relative overflow-hidden border border-[#0ea5e9]/20 hover:border-[#0ea5e9]/60"
        >
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="px-2.5 py-1 rounded-full bg-[#0ea5e9]/10 text-[#38bdf8] border border-[#0ea5e9]/30 font-mono-code font-bold text-[10px]">
              FLAGSHIP PRODUCTION
            </span>
            <span className="text-white/40 text-xs group-hover:translate-x-1 transition-transform">↗</span>
          </div>

          <h3 className="text-xl font-extrabold text-white mb-2 group-hover:text-[#38bdf8] transition-colors">
            ⚡ Dispatch OS
          </h3>
          <p className="text-white/60 text-xs leading-relaxed line-clamp-2 mb-4">
            Autonomous incident triage engine with Gemini 1.5 Flash, real-time WebSockets, and 7-day predictive surge forecasting.
          </p>

          <div className="flex items-center justify-between text-[11px] font-mono-code text-white/50 pt-3 border-t border-white/[0.06]">
            <span>React 19 • Gemini • Socket.io</span>
            <span className="text-[#38bdf8] font-bold">Try Simulator ➔</span>
          </div>
        </div>

        {/* AI Interview Agent Card */}
        <div
          onClick={() => onOpenWindow('projects')}
          className="glass-bento rounded-3xl p-6 cursor-pointer group relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30 font-mono-code font-bold text-[10px]">
              VOICE + MULTIMODAL
            </span>
            <span className="text-white/40 text-xs group-hover:translate-x-1 transition-transform">↗</span>
          </div>

          <h3 className="text-xl font-extrabold text-white mb-2 group-hover:text-purple-400 transition-colors">
            🎙️ AI Interview Agent
          </h3>
          <p className="text-white/60 text-xs leading-relaxed line-clamp-2 mb-4">
            Real-time voice mock interview simulator with dynamic technical questioning and automated evaluation scoring.
          </p>

          <div className="flex items-center justify-between text-[11px] font-mono-code text-white/50 pt-3 border-t border-white/[0.06]">
            <span>Speech API • Gemini AI</span>
            <span className="text-purple-400 font-bold">Explore ➔</span>
          </div>
        </div>

        {/* Tech Stack Matrix Summary Card */}
        <div
          onClick={() => onOpenWindow('stack')}
          className="glass-bento rounded-3xl p-6 cursor-pointer group relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-mono-code font-bold text-[10px]">
              SYSTEMS ARSENAL
            </span>
            <span className="text-white/40 text-xs group-hover:translate-x-1 transition-transform">↗</span>
          </div>

          <h3 className="text-xl font-extrabold text-white mb-2 group-hover:text-emerald-400 transition-colors">
            🧠 Tech & Architecture
          </h3>
          <p className="text-white/60 text-xs leading-relaxed line-clamp-2 mb-4">
            TypeScript, Node.js, Express, MongoDB Atlas, Redis, Tailwind, and Cloud Infrastructure deployments.
          </p>

          <div className="flex items-center justify-between text-[11px] font-mono-code text-white/50 pt-3 border-t border-white/[0.06]">
            <span>15+ Core Technologies</span>
            <span className="text-emerald-400 font-bold">View Stack ➔</span>
          </div>
        </div>

      </div>

    </div>
  );
}
