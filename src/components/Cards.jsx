import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

export function QuoteCarousel() {
  const quotes = portfolioData.quotes;
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  const q = quotes[currentIdx];

  return (
    <div className="glass-bento rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden group min-h-[140px]">
      <div className="text-white/20 text-3xl font-serif leading-none select-none">“</div>
      
      <p className="text-white/90 text-sm font-medium leading-relaxed italic my-auto">
        "{q.text}"
      </p>

      <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/[0.06] text-xs">
        <span className="text-white/50 text-[11px] font-mono-code">— {q.author}</span>

        {/* Carousel Indicators */}
        <div className="flex gap-1.5">
          {quotes.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              className={`h-1 rounded-full cursor-pointer transition-all ${
                idx === currentIdx ? 'w-4 bg-[#38bdf8]' : 'w-1.5 bg-white/20 hover:bg-white/40'
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function StatusCard({ onContactClick }) {
  return (
    <div
      onClick={onContactClick}
      className="glass-bento rounded-2xl p-5 cursor-pointer group flex flex-col justify-between hover:border-emerald-500/40"
    >
      <div className="flex items-center gap-2 text-xs font-mono-code text-white/50">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span className="uppercase text-[11px]">STATUS</span>
      </div>

      <div className="my-2">
        <h4 className="text-white font-extrabold text-base tracking-tight group-hover:text-emerald-400 transition-colors">
          Available for new opportunities
        </h4>
        <p className="text-white/60 text-xs mt-1">
          Open for Software Engineering Internships, Full-Stack Roles, and AI System Design.
        </p>
      </div>

      <div className="flex items-center justify-between text-xs pt-2 border-t border-white/[0.06] text-emerald-400 font-semibold">
        <span>Get in touch</span>
        <span className="group-hover:translate-x-1 transition-transform">➔</span>
      </div>
    </div>
  );
}

export function LatestWritingCard({ onArticleClick }) {
  const article = portfolioData.articles[0];

  return (
    <div
      onClick={onArticleClick}
      className="glass-bento rounded-2xl p-5 cursor-pointer group flex flex-col justify-between"
    >
      <div className="flex items-center justify-between text-xs mb-2">
        <div className="flex items-center gap-2 text-white/50 font-mono-code text-[11px]">
          <span>📖</span>
          <span>LATEST WRITING</span>
        </div>
        <span className="text-[11px] font-mono-code text-[#38bdf8]">{article.date}</span>
      </div>

      <div>
        <h4 className="text-white font-bold text-sm tracking-tight group-hover:text-[#38bdf8] transition-colors leading-snug">
          {article.title}
        </h4>
        <p className="text-white/60 text-xs mt-1 line-clamp-2 leading-relaxed">
          {article.excerpt}
        </p>
      </div>

      <div className="flex items-center justify-between text-xs mt-3 pt-2 border-t border-white/[0.06] text-white/40 font-mono-code">
        <span>{article.readTime}</span>
        <span className="text-[#38bdf8] group-hover:translate-x-1 transition-transform font-bold">READ ↗</span>
      </div>
    </div>
  );
}
