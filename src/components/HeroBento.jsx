import React from 'react';
import ayushPhoto from '../assets/ayush.jpeg';
import { portfolioData } from '../data/portfolioData';
import SpotifyWidget from './SpotifyWidget';
import GithubHeatmap from './GithubHeatmap';
import { QuoteCarousel, StatusCard, LatestWritingCard } from './Cards';

export default function HeroBento({ onOpenWindow, onScrollTo }) {
  const { personal } = portfolioData;
  const navigate = (id) => {
    if (onScrollTo) onScrollTo(id);
    else if (onOpenWindow) onOpenWindow(id);
  };

  return (
    <div id="hero" className="w-full max-w-[1580px] mx-auto px-4 sm:px-8 md:px-12 py-6 md:py-10 space-y-8">
      
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
              onClick={() => navigate('contact')}
              className="px-7 py-3.5 rounded-xl bg-white text-black font-extrabold text-xs tracking-widest uppercase hover:bg-[#a855f7] hover:text-white transition-all shadow-[0_10px_25px_rgba(255,255,255,0.1)] hover:shadow-[#a855f7]/40 cursor-pointer flex items-center gap-2 group"
            >
              <span>START PROJECT</span>
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
            </button>

            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 text-white/70 hover:text-white font-mono-code font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer flex items-center gap-2 hover:border-purple-500/30"
            >
              <span>READ RESUME</span>
            </a>
          </div>
        </div>

        {/* Center Column: Vibrant Personal Portrait with Purple Glow Frame (4 cols on lg) */}
        <div className="lg:col-span-4 flex justify-center items-center">
          <div className="relative w-full max-w-[360px] aspect-square rounded-2xl overflow-hidden border border-purple-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(168,85,247,0.2)] bg-[#090d14] group">
            {/* Real Color Portrait */}
            <img
              src={ayushPhoto}
              alt="Ayush Pandey"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 brightness-105 contrast-110"
              style={{ objectPosition: 'center 15%' }}
            />
            {/* Ambient Purple Bottom Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-purple-950/20 opacity-60 pointer-events-none"></div>
            {/* Live Indicator Pill on Photo */}
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-1.5 pointer-events-none">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
              <span className="text-[10px] font-mono-code font-bold text-white/80 tracking-wider uppercase">DEV // AI</span>
            </div>
          </div>
        </div>

        {/* Right Column: Status & Quote Widget Stack (3 cols on lg) */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          <StatusCard onContactClick={() => navigate('contact')} />
          <QuoteCarousel />
        </div>

      </div>

      {/* 2. BOTTOM ROW: [Latest Writing (4 cols)] + [Spotify Player (4 cols)] + [GitHub Heatmap (4 cols)] */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch pt-2">
        
        {/* Latest Writing (4 cols) */}
        <div className="md:col-span-4 lg:col-span-4">
          <LatestWritingCard onArticleClick={() => navigate('article')} />
        </div>

        {/* Spotify Compact Player (4 cols) */}
        <div className="md:col-span-4 lg:col-span-4 flex flex-col justify-end">
          <SpotifyWidget />
        </div>

        {/* GitHub Heatmap Grid (4 cols) */}
        <div className="md:col-span-4 lg:col-span-4">
          <GithubHeatmap onClick={() => navigate('projects')} />
        </div>

      </div>

    </div>
  );
}
