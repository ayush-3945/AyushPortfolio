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
    <div className="glass-bento rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden group min-h-[165px]">
      {/* Top Handle Indicator */}
      <div className="w-8 h-1 rounded-full bg-white/20 mx-auto mb-3"></div>

      <p className="text-white/80 text-sm font-normal leading-relaxed my-auto font-sans">
        "{q.text}"
      </p>

      <div className="flex items-center justify-between mt-4 pt-2 border-t border-white/[0.06] text-xs">
        <span className="text-white/40 text-[10px] font-mono-code tracking-widest uppercase">— {q.author}</span>

        {/* Carousel Indicators */}
        <div className="flex gap-1.5 items-center">
          {quotes.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              className={`h-1.5 rounded-full cursor-pointer transition-all ${
                idx === currentIdx ? 'w-4 bg-white/80' : 'w-1.5 bg-white/20 hover:bg-white/40'
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
      className="glass-bento rounded-2xl p-5 cursor-pointer group flex flex-col justify-between hover:border-[#F5A623]/40"
    >
      {/* Top Handle Indicator */}
      <div className="w-8 h-1 rounded-full bg-white/20 mx-auto mb-2"></div>

      <div className="flex items-center gap-2 text-xs font-mono-code text-white/50 mb-2">
        <span className="w-2 h-2 rounded-full bg-[#F5A623] animate-pulse shadow-[0_0_8px_#FFC15E]"></span>
        <span className="uppercase text-[10px] tracking-wider text-[#F5A623] font-bold">STATUS</span>
      </div>

      <div className="my-1">
        <h4 className="text-white font-semibold text-sm tracking-tight group-hover:text-[#FFC15E] transition-colors">
          Available for new opportunities
        </h4>
      </div>
    </div>
  );
}

export function LatestWritingCard({ onArticleClick }) {
  const article = portfolioData.articles[0];

  return (
    <div
      onClick={onArticleClick}
      className="glass-bento rounded-2xl p-5 cursor-pointer group flex flex-col justify-between min-h-[220px]"
    >
      {/* Top Handle Indicator */}
      <div className="w-8 h-1 rounded-full bg-white/20 mx-auto mb-2"></div>

      <div className="flex items-center justify-between text-xs mb-2">
        <div className="flex items-center gap-2 text-white/50 font-mono-code text-[11px]">
          <span>📖</span>
          <span className="uppercase tracking-wider">LATEST WRITING</span>
        </div>
        <span className="text-[10px] font-mono-code text-[#F5A623] group-hover:text-[#FFC15E] transition-colors font-bold">VIEW ALL ↗</span>
      </div>

      <div className="my-1">
        <h4 className="text-white font-bold text-sm tracking-tight group-hover:text-[#FFC15E] transition-colors leading-snug">
          {article.title}
        </h4>
        <p className="text-white/50 text-xs mt-1.5 line-clamp-2 leading-relaxed">
          {article.excerpt}
        </p>
      </div>

      <div className="flex items-center justify-between text-xs mt-3 pt-2 border-t border-white/[0.06] text-white/40 font-mono-code">
        <span>{article.date}</span>
        <span className="text-[#F5A623] group-hover:text-[#FFC15E] group-hover:translate-x-1 transition-all font-bold text-[11px]">READ ↗</span>
      </div>
    </div>
  );
}
