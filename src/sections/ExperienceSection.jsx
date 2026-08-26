import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="w-full max-w-[1580px] mx-auto px-4 sm:px-8 md:px-12 py-16 scroll-mt-20">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono-code text-emerald-400 uppercase tracking-widest mb-1.5 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
            <span>CAREER & ACADEMIC PATHWAY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">& Journey</span>
          </h2>
        </div>
        <span className="text-xs font-mono-code text-white/40 tracking-widest uppercase">
          VOL. 02 // 2024 — 2028
        </span>
      </div>

      {/* Main Container */}
      <div className="glass-bento rounded-3xl p-6 sm:p-10 border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
        <div className="space-y-8">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="pb-8 border-b border-white/[0.05] last:border-b-0 last:pb-0 space-y-2.5 group transition-all"
            >
              {/* Header: Company & Live dot + Date & Location */}
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors tracking-tight">
                    {exp.company}
                  </h3>
                  {exp.isLive && (
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399] inline-block animate-pulse"></span>
                  )}
                </div>
                <div className="text-right">
                  <div className="text-xs sm:text-sm font-mono-code text-white/70 tracking-wider font-semibold">
                    {exp.period}
                  </div>
                  <div className="text-[10px] font-mono-code text-white/35 tracking-widest uppercase">
                    {exp.location}
                  </div>
                </div>
              </div>

              {/* Role in italics */}
              <div className="text-sm sm:text-base italic text-white/70 font-serif">
                {exp.role}
              </div>

              {/* 2-line clean impact description */}
              <p className="text-white/65 text-xs sm:text-sm leading-relaxed max-w-4xl pt-1">
                {exp.description}
              </p>

              {/* Monospace tech tag list */}
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[10px] sm:text-[11px] font-mono-code text-white/40 pt-2 tracking-widest uppercase">
                {exp.skills.map((skill, sIdx) => (
                  <React.Fragment key={sIdx}>
                    <span className="hover:text-emerald-300 transition-colors">{skill}</span>
                    {sIdx < exp.skills.length - 1 && <span className="text-white/20">•</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
