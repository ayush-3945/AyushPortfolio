import React from 'react';
import { portfolioData } from '../data/portfolioData';
import SpotifyWidget from './SpotifyWidget';
import GithubHeatmap from './GithubHeatmap';
import { QuoteCarousel, StatusCard, LatestWritingCard } from './Cards';

export default function HeroBento({ onOpenWindow }) {
  const { personal } = portfolioData;

  return (
    <div className="w-full max-w-[1580px] mx-auto px-4 sm:px-8 md:px-12 py-6 md:py-10 space-y-8 pb-32">
      
      {/* 1. TOP ROW: [Title & Intro (Left)] + [Anime Manga Avatar (Center)] + [Status & Quote (Right)] */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        
        {/* Left Column: Big Title & Bio (5 cols on lg) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6 pt-2">
          <div>
            <h1 className="font-serif-title text-6xl sm:text-7xl xl:text-8xl font-normal text-white tracking-tight leading-[1.02] mb-4 select-none">
              {personal.name}
            </h1>

            <div className="text-[11px] sm:text-xs font-mono-code text-white/50 tracking-[0.25em] uppercase mb-6 flex items-center gap-2">
              <span>FULL STACK</span>
              <span className="text-white/20">/</span>
              <span>AI SYSTEMS ENGINEER</span>
            </div>

            <p className="text-white/70 text-sm sm:text-[15px] leading-relaxed max-w-lg font-normal">
              I specialize in architecting autonomous AI incident engines and real-time distributed web systems, while building interactive frontends. My focus is on creating end-to-end digital experiences that are robust, performant, and completely timeless.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={() => onOpenWindow('contact')}
              className="px-7 py-3.5 rounded-xl bg-white text-black font-extrabold text-xs tracking-widest uppercase hover:bg-[#38bdf8] hover:text-white transition-all shadow-[0_10px_25px_rgba(255,255,255,0.1)] hover:shadow-[#38bdf8]/30 cursor-pointer flex items-center gap-2 group"
            >
              <span>START PROJECT</span>
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
            </button>

            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 text-white/70 hover:text-white font-mono-code font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>READ RESUME</span>
            </a>
          </div>
        </div>

        {/* Center Column: Monochrome Manga Anime Avatar Frame (4 cols on lg) */}
        <div className="lg:col-span-4 flex justify-center items-center">
          <div className="relative w-full max-w-[360px] aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-[#090d14] group">
            {/* Stylized Gojo / Anime Manga Persona */}
            <img
              src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=700&auto=format&fit=crop&q=80"
              alt="Ayush Anime Tech Persona"
              className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-all duration-700 brightness-95"
            />
            {/* Subtle Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-black/20 opacity-70"></div>
          </div>
        </div>

        {/* Right Column: Status & Quote Widget Stack (3 cols on lg) */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          <StatusCard onContactClick={() => onOpenWindow('contact')} />
          <QuoteCarousel />
        </div>

      </div>

      {/* 2. BOTTOM ROW: [Latest Writing (4 cols)] + [Spotify Player (3 cols)] + [GitHub Heatmap (5 cols)] */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch pt-2">
        
        {/* Latest Writing (3.5 cols) */}
        <div className="md:col-span-4 lg:col-span-3">
          <LatestWritingCard onArticleClick={() => onOpenWindow('article')} />
        </div>

        {/* Spotify Compact Player (3.5 cols) */}
        <div className="md:col-span-4 lg:col-span-4 flex flex-col justify-end">
          <SpotifyWidget />
        </div>

        {/* GitHub Heatmap Grid (5 cols) */}
        <div className="md:col-span-4 lg:col-span-5">
          <GithubHeatmap onClick={() => onOpenWindow('projects')} />
        </div>

      </div>

      {/* 3. FEATURED HIGHLIGHTS (Dispatch OS & Systems) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        
        {/* Dispatch OS Card */}
        <div
          onClick={() => onOpenWindow('projects')}
          className="glass-bento rounded-2xl p-6 cursor-pointer group relative overflow-hidden border border-[#0ea5e9]/20 hover:border-[#0ea5e9]/60 transition-all"
        >
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="px-2.5 py-0.5 rounded-full bg-[#0ea5e9]/10 text-[#38bdf8] border border-[#0ea5e9]/30 font-mono-code font-bold text-[10px]">
              FLAGSHIP PRODUCTION SAAS
            </span>
            <span className="text-white/40 group-hover:translate-x-1 transition-transform">↗</span>
          </div>
          <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-[#38bdf8] transition-colors">
            ⚡ Dispatch OS
          </h3>
          <p className="text-white/60 text-xs leading-relaxed line-clamp-2 mb-3">
            Autonomous incident triage engine with Gemini 1.5 Flash, real-time WebSockets, and 7-day predictive surge forecasting.
          </p>
          <div className="text-[11px] font-mono-code text-[#38bdf8] font-bold">
            Launch Live App & Simulator ➔
          </div>
        </div>

        {/* AI Interview Agent Card */}
        <div
          onClick={() => onOpenWindow('projects')}
          className="glass-bento rounded-2xl p-6 cursor-pointer group relative overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all"
        >
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30 font-mono-code font-bold text-[10px]">
              VOICE + NLP SIMULATOR
            </span>
            <span className="text-white/40 group-hover:translate-x-1 transition-transform">↗</span>
          </div>
          <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-purple-400 transition-colors">
            🎙️ AI Interview Agent
          </h3>
          <p className="text-white/60 text-xs leading-relaxed line-clamp-2 mb-3">
            Real-time voice mock interview simulator with dynamic technical questioning and automated evaluation scoring.
          </p>
          <div className="text-[11px] font-mono-code text-purple-400 font-bold">
            Explore Architecture ➔
          </div>
        </div>

        {/* Systems Arsenal */}
        <div
          onClick={() => onOpenWindow('stack')}
          className="glass-bento rounded-2xl p-6 cursor-pointer group relative overflow-hidden border border-emerald-500/20 hover:border-emerald-500/50 transition-all"
        >
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-mono-code font-bold text-[10px]">
              TECH ARSENAL
            </span>
            <span className="text-white/40 group-hover:translate-x-1 transition-transform">↗</span>
          </div>
          <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-emerald-400 transition-colors">
            🧠 Systems & Infrastructure
          </h3>
          <p className="text-white/60 text-xs leading-relaxed line-clamp-2 mb-3">
            React 19, Node.js, Express, MongoDB Atlas, Redis, Tailwind, WebSockets, and Edge Cloud Deployments.
          </p>
          <div className="text-[11px] font-mono-code text-emerald-400 font-bold">
            View Full Matrix ➔
          </div>
        </div>

      </div>

    </div>
  );
}
