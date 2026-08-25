import React from 'react';
import ayushPhoto from '../assets/ayush.jpeg';
import { portfolioData } from '../data/portfolioData';
import SpotifyWidget from './SpotifyWidget';
import GithubHeatmap from './GithubHeatmap';
import { QuoteCarousel, StatusCard, LatestWritingCard } from './Cards';

export default function HeroBento({ onOpenWindow }) {
  const { personal } = portfolioData;

  return (
    <div className="w-full max-w-[1580px] mx-auto px-4 sm:px-8 md:px-12 py-6 md:py-10 space-y-6 pb-28">
      
      {/* 1. TOP ASYMMETRIC ROW: [Left 7 Cols: Hero Intro & Bio & Badges] + [Right 5 Cols: Framed Portrait & Live Status Stack] */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Column: Big Display Title & Bio & Key Tags (7 cols on lg) */}
        <div className="lg:col-span-7 flex flex-col justify-between p-7 sm:p-9 rounded-3xl glass-bento relative overflow-hidden border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          {/* Ambient background glow */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="space-y-5">
            {/* Top Pill / Role */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono-code text-purple-300 font-semibold tracking-[0.2em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              <span>FULL STACK & AI SYSTEMS</span>
            </div>

            {/* Display Typography */}
            <h1 className="font-display text-5xl sm:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.05] select-none">
              Ayush <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">Pandey</span>
            </h1>

            {/* Tagline / Bio */}
            <p className="text-white/70 text-sm sm:text-[15px] leading-relaxed max-w-xl font-normal">
              Specialized in architecting autonomous AI incident engines, real-time distributed web systems, and high-performance interactive interfaces. Obsessed with building resilient, production-grade digital experiences.
            </p>

            {/* Micro Highlights Pill Row */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono-code text-white/70">
                🏛️ CoalDarpan Hackathon
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono-code text-white/70">
                ⚡ Real-time WebSockets
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono-code text-white/70">
                🤖 Google Gemini AI
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-6 mt-4 border-t border-white/[0.06]">
            <button
              onClick={() => onOpenWindow('contact')}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-white to-neutral-200 text-black font-black text-xs tracking-widest uppercase hover:from-purple-500 hover:to-indigo-500 hover:text-white transition-all shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:shadow-purple-500/30 cursor-pointer flex items-center gap-2 group"
            >
              <span>START PROJECT</span>
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
            </button>

            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-purple-500/40 text-white/80 hover:text-white font-mono-code font-bold text-xs tracking-wider uppercase transition-all cursor-pointer flex items-center gap-2"
            >
              <span>READ RESUME</span>
            </a>
          </div>
        </div>

        {/* Right Column: Hero Portrait + Quick Status Stack (5 cols on lg) */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 items-stretch">
          
          {/* Top: Vibrant Personal Portrait */}
          <div className="relative w-full h-[260px] sm:h-auto min-h-[240px] rounded-3xl overflow-hidden border border-purple-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(168,85,247,0.2)] bg-[#090d14] group">
            <img
              src={ayushPhoto}
              alt="Ayush Pandey"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 brightness-105 contrast-110"
              style={{ objectPosition: 'center 15%' }}
            />
            {/* Ambient Purple Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-purple-950/20 opacity-60 pointer-events-none"></div>
            {/* Live Indicator Pill */}
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-2 pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_#c084fc]"></span>
              <span className="text-[10px] font-mono-code font-bold text-white tracking-wider uppercase">AYUSH // CORE</span>
            </div>
          </div>

          {/* Bottom: Quick Status Card & Quote Carousel Side-by-side or Stack */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <StatusCard onContactClick={() => onOpenWindow('contact')} />
            <QuoteCarousel />
          </div>

        </div>

      </div>

      {/* 2. BOTTOM ASYMMETRIC ROW: [GitHub Heatmap 5 cols] + [Spotify Player 4 cols] + [Latest Writing 3 cols] */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        
        {/* GitHub Heatmap Grid (5 cols) */}
        <div className="md:col-span-5">
          <GithubHeatmap onClick={() => onOpenWindow('projects')} />
        </div>

        {/* Spotify Compact Player (4 cols) */}
        <div className="md:col-span-4 flex flex-col justify-end">
          <SpotifyWidget />
        </div>

        {/* Latest Writing (3 cols) */}
        <div className="md:col-span-3">
          <LatestWritingCard onArticleClick={() => onOpenWindow('article')} />
        </div>

      </div>

    </div>
  );
}
