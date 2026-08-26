import React from 'react';

export default function GithubHeatmap({ onClick }) {
  const generateWeeks = () => {
    const weeks = [];
    const intensityLevels = [
      'bg-white/[0.04]',
      'bg-emerald-950/70 border border-emerald-800/40',
      'bg-emerald-700/80',
      'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]',
      'bg-[#34d399] shadow-[0_0_10px_rgba(52,211,153,0.8)]'
    ];

    for (let w = 0; w < 32; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        let rand = Math.random();
        let level = 0;
        if (w > 18) {
          if (rand > 0.45) level = Math.floor(Math.random() * 4) + 1;
        } else if (w > 8) {
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
      className="glass-bento rounded-2xl p-5 cursor-pointer group relative overflow-hidden flex flex-col justify-between min-h-[220px] hover:border-[#F5A623]/40"
    >
      {/* Top Handle Indicator */}
      <div className="w-8 h-1 rounded-full bg-white/20 mx-auto mb-2"></div>

      <div className="flex items-center justify-between mb-3 text-xs">
        <span className="font-mono-code font-bold text-white/70 tracking-wider uppercase text-[11px] group-hover:text-[#F5A623] transition-colors">
          GITHUB CONTRIBUTIONS
        </span>
        <span className="w-2 h-2 rounded-full bg-[#F5A623] shadow-[0_0_8px_#FFC15E]"></span>
      </div>

      {/* Heatmap Grid */}
      <div className="overflow-x-auto pb-1 scrollbar-subtle">
        <div className="flex justify-between text-[10px] text-white/40 font-mono-code mb-2 px-1 min-w-[420px]">
          {months.map((m, idx) => (
            <span key={idx}>{m}</span>
          ))}
        </div>

        <div className="flex gap-1.5 min-w-[420px]">
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
      <div className="flex items-center justify-between text-[10px] font-mono-code text-white/40 mt-3 pt-2 border-t border-white/[0.06]">
        <span>163 contributions in the last year</span>
        <div className="flex items-center gap-1">
          <span>Less</span>
          <div className="flex gap-1">
            <span className="w-2 h-2 rounded-[2px] bg-white/[0.04]"></span>
            <span className="w-2 h-2 rounded-[2px] bg-emerald-950"></span>
            <span className="w-2 h-2 rounded-[2px] bg-emerald-700"></span>
            <span className="w-2 h-2 rounded-[2px] bg-emerald-500"></span>
            <span className="w-2 h-2 rounded-[2px] bg-[#34d399]"></span>
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
