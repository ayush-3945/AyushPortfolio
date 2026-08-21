import React from 'react';

export default function GithubHeatmap({ onClick }) {
  // Generate realistic contribution matrix (52 weeks x 7 days)
  const generateWeeks = () => {
    const weeks = [];
    const intensityLevels = [
      'bg-white/[0.04]', // 0
      'bg-emerald-950/60 border border-emerald-800/40', // 1
      'bg-emerald-700/80', // 2
      'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]', // 3
      'bg-[#38bdf8] shadow-[0_0_10px_rgba(56,189,248,0.7)]' // 4 (Spike day)
    ];

    for (let w = 0; w < 36; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        // Higher density on recent weeks
        let rand = Math.random();
        let level = 0;
        if (w > 20) {
          if (rand > 0.4) level = Math.floor(Math.random() * 4) + 1;
        } else if (w > 10) {
          if (rand > 0.65) level = Math.floor(Math.random() * 3) + 1;
        } else {
          if (rand > 0.8) level = Math.floor(Math.random() * 2) + 1;
        }
        days.push(intensityLevels[level]);
      }
      weeks.push(days);
    }
    return weeks;
  };

  const weeks = React.useMemo(() => generateWeeks(), []);
  const months = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];

  return (
    <div
      onClick={onClick}
      className="glass-bento rounded-2xl p-5 cursor-pointer group relative overflow-hidden flex flex-col justify-between"
    >
      <div className="flex items-center justify-between mb-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-sm">📊</span>
          <span className="font-bold text-white tracking-tight uppercase text-[12px] group-hover:text-[#38bdf8] transition-colors">
            GITHUB CONTRIBUTIONS
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-mono-code text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>163+ Year Commits</span>
        </div>
      </div>

      {/* Heatmap Grid */}
      <div className="overflow-x-auto pb-1 scrollbar-subtle">
        <div className="flex justify-between text-[10px] text-white/40 font-mono-code mb-2 px-1 min-w-[500px]">
          {months.map((m, idx) => (
            <span key={idx}>{m}</span>
          ))}
        </div>

        <div className="flex gap-1.5 min-w-[500px]">
          {weeks.map((week, wIdx) => (
            <div key={wIdx} className="flex flex-col gap-1.5 flex-1">
              {week.map((dayClass, dIdx) => (
                <div
                  key={dIdx}
                  className={`w-2.5 h-2.5 rounded-[3px] transition-all hover:scale-125 ${dayClass}`}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-[11px] font-mono-code text-white/40 mt-3 pt-2 border-t border-white/[0.06]">
        <span>@ayush-3945 on GitHub</span>
        <div className="flex items-center gap-1">
          <span>Less</span>
          <div className="flex gap-1">
            <span className="w-2 h-2 rounded-[2px] bg-white/[0.04]"></span>
            <span className="w-2 h-2 rounded-[2px] bg-emerald-950"></span>
            <span className="w-2 h-2 rounded-[2px] bg-emerald-700"></span>
            <span className="w-2 h-2 rounded-[2px] bg-emerald-500"></span>
            <span className="w-2 h-2 rounded-[2px] bg-[#38bdf8]"></span>
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
