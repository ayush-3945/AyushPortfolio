import React from 'react';

export default function StackSection() {
  const techArsenal = [
    {
      name: 'TYPESCRIPT',
      category: 'Core Language',
      bg: 'bg-[#3178c6]',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-[#3178c6] flex items-center justify-center font-extrabold text-white text-base shadow-[0_0_15px_rgba(49,120,198,0.4)]">
          TS
        </div>
      )
    },
    {
      name: 'C / C++',
      category: 'Systems & Algorithms',
      bg: 'bg-[#00599c]',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-[#00599c]/20 border border-[#00599c]/40 flex items-center justify-center font-black text-emerald-300 text-xs shadow-[0_0_15px_rgba(168,85,247,0.3)]">
          C++
        </div>
      )
    },
    {
      name: 'JAVA',
      category: 'Object Oriented / Backend',
      bg: 'bg-[#ea2d2e]',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-[#ea2d2e]/20 border border-[#ea2d2e]/40 flex items-center justify-center font-black text-[#ea2d2e] text-xs shadow-[0_0_15px_rgba(234,45,46,0.3)]">
          ☕
        </div>
      )
    },
    {
      name: 'REACT / REACT 19',
      category: 'Frontend UI Architecture',
      bg: 'bg-[#61dafb]',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-[#61dafb]/10 border border-[#61dafb]/30 flex items-center justify-center text-cyan-400 text-xl font-bold shadow-[0_0_15px_rgba(97,218,251,0.3)]">
          ⚛️
        </div>
      )
    },
    {
      name: 'NODE.JS & EXPRESS',
      category: 'Runtime & REST APIs',
      bg: 'bg-[#539e43]',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-[#539e43]/10 border border-[#539e43]/30 flex items-center justify-center text-emerald-400 text-xl font-bold shadow-[0_0_15px_rgba(83,158,67,0.3)]">
          🟩
        </div>
      )
    },
    {
      name: 'MONGODB ATLAS',
      category: 'Document Database',
      bg: 'bg-[#47a248]',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-[#47a248]/10 border border-[#47a248]/30 flex items-center justify-center text-green-400 text-xl font-bold shadow-[0_0_15px_rgba(71,162,72,0.3)]">
          🍃
        </div>
      )
    },
    {
      name: 'GEMINI 1.5 AI',
      category: 'Multimodal LLM / Pipelines',
      bg: 'bg-[#10b981]',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 text-xl font-bold shadow-[0_0_15px_rgba(168,85,247,0.4)]">
          ✨
        </div>
      )
    },
    {
      name: 'SOCKET.IO',
      category: 'Real-Time Bi-Directional',
      bg: 'bg-[#010101]',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white text-xl font-bold shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          ⚡
        </div>
      )
    },
    {
      name: 'TAILWIND CSS',
      category: 'Utility Design System',
      bg: 'bg-[#06b6d4]',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xl font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)]">
          🎨
        </div>
      )
    },
    {
      name: 'PWA & SERVICE WORKERS',
      category: 'Offline-First Installation',
      bg: 'bg-[#5a0fc8]',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-300 text-xl font-bold shadow-[0_0_15px_rgba(90,15,200,0.3)]">
          📱
        </div>
      )
    }
  ];

  return (
    <section id="stack" className="w-full max-w-[1580px] mx-auto px-4 sm:px-8 md:px-12 py-16 scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono-code text-[#F5A623] uppercase tracking-widest mb-1.5 font-bold">
            <span className="w-2 h-2 rounded-full bg-[#F5A623] shadow-[0_0_8px_#FFC15E]"></span>
            <span>ENGINEERING ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] via-[#FFC15E] to-amber-200">Stack & Matrix</span>
          </h2>
        </div>
        <span className="text-xs font-mono-code text-white/40 tracking-widest uppercase">
          10 CORE TECHNOLOGIES
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {techArsenal.map((tech, idx) => (
          <div
            key={idx}
            className="glass-bento rounded-2xl p-5 border border-white/[0.07] hover:border-[#F5A623]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            <div className="flex items-center gap-3.5 mb-4">
              <div className="group-hover:scale-110 transition-transform duration-200">
                {tech.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-[#FFC15E] transition-colors tracking-tight">
                  {tech.name}
                </h4>
                <p className="text-[10px] font-mono-code text-white/40 uppercase mt-0.5">
                  {tech.category}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono-code text-white/30 pt-3 border-t border-white/[0.05]">
              <span>PROD GRADE</span>
              <span className="text-[#F5A623] font-bold">ACTIVE ↗</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
