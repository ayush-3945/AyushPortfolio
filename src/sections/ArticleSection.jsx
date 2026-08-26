import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, BookOpen } from 'lucide-react';

export default function ArticleSection() {
  const article = portfolioData.articles[0];

  return (
    <section id="article" className="w-full max-w-[1580px] mx-auto px-4 sm:px-8 md:px-12 py-16 scroll-mt-20">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono-code text-[#F5A623] uppercase tracking-widest mb-1.5 font-bold">
            <span className="w-2 h-2 rounded-full bg-[#F5A623] shadow-[0_0_8px_#FFC15E]"></span>
            <span>SYSTEM ESSAY & CASE STUDY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] via-[#FFC15E] to-amber-200">Writing & Case Studies</span>
          </h2>
        </div>
        <span className="text-xs font-mono-code text-white/40 tracking-widest uppercase">
          VOL. 03 // AUG 2026
        </span>
      </div>

      <div className="glass-bento rounded-3xl p-7 sm:p-10 border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-3 text-xs font-mono-code text-[#F5A623]">
            <BookOpen size={16} />
            <span>SYSTEM ESSAY • {article.date} • {article.readTime}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug group-hover:text-[#FFC15E] transition-colors">
            {article.title}
          </h3>

          <p className="text-white/70 text-sm sm:text-base leading-relaxed">
            {article.excerpt}
          </p>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-2 text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
            <p className="font-semibold text-white">💡 Key Architectural Takeaway:</p>
            <p className="text-white/60">
              By combining offline-first PWA caching with multimodal vision inference from Gemini 1.5 Flash, field operators in low-connectivity areas can submit instant visual audit logs that auto-sync over bi-directional WebSockets upon reconnection.
            </p>
          </div>

          <div className="pt-2">
            <a
              href={article.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F5A623]/12 border border-[#F5A623]/30 hover:bg-[#F5A623]/25 text-[#FFC15E] font-mono-code font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(245,166,35,0.2)]"
            >
              <span>READ FULL REPOSITORY WRITEUP</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
