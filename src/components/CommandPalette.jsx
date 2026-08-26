import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function CommandPalette({ isOpen, onClose, onSelectAction }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onClose(!isOpen);
      }
      if (e.key === 'Escape' && isOpen) {
        onClose(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    { label: 'View Flagship Project: CoalDarpan', icon: '🏛️', category: 'Projects', action: () => onSelectAction('projects') },
    { label: 'View AI Interview Agent', icon: '🎙️', category: 'Projects', action: () => onSelectAction('projects') },
    { label: 'Open Tech Stack Matrix', icon: '🧠', category: 'Skills', action: () => onSelectAction('stack') },
    { label: 'View Experience & Education', icon: '💼', category: 'Experience', action: () => onSelectAction('experience') },
    { label: 'Send Message / Get In Touch', icon: '✉️', category: 'Contact', action: () => onSelectAction('contact') },
    { label: 'Download Resume PDF', icon: '📄', category: 'Resume', action: () => window.open(portfolioData.personal.resumeUrl, '_blank') },
    { label: 'Open GitHub Profile (@ayush-3945)', icon: '🐙', category: 'Social', action: () => window.open(portfolioData.personal.github, '_blank') },
    { label: 'Open LinkedIn Profile', icon: '💼', category: 'Social', action: () => window.open(portfolioData.personal.linkedin, '_blank') },
  ];

  const filtered = actions.filter((a) =>
    a.label.toLowerCase().includes(query.toLowerCase()) ||
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="absolute inset-0" onClick={() => onClose(false)}></div>

      <div className="relative w-full max-w-xl bg-[#090d14] border border-white/20 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(14,165,233,0.2)] overflow-hidden z-10 animate-scaleUp">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-white/10 flex items-center gap-3">
          <span className="text-white/40 text-sm font-mono-code">🔍</span>
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search (e.g. projects, resume, contact)..."
            className="w-full bg-transparent text-white text-sm outline-none placeholder:text-white/30 font-medium"
          />
          <span className="text-[10px] font-mono-code text-white/40 border border-white/10 px-1.5 py-0.5 rounded">
            ESC
          </span>
        </div>

        {/* Results List */}
        <div className="max-h-72 overflow-y-auto p-2 scrollbar-subtle space-y-1">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-xs text-white/40 font-mono-code">
              No matching commands found.
            </div>
          ) : (
            filtered.map((action, idx) => (
              <button
                key={idx}
                onClick={() => {
                  action.action();
                  onClose(false);
                }}
                className="w-full px-3 py-2.5 rounded-xl hover:bg-emerald-500/15 hover:border hover:border-emerald-500/30 transition-all flex items-center justify-between text-left group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="text-base">{action.icon}</span>
                  <div>
                    <div className="text-xs font-semibold text-white group-hover:text-emerald-300 transition-colors">
                      {action.label}
                    </div>
                    <div className="text-[10px] text-white/40 font-mono-code">
                      {action.category}
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-mono-code text-white/40 group-hover:text-emerald-300">
                  ENTER ↵
                </span>
              </button>
            ))
          )}
        </div>

        <div className="px-4 py-2 bg-black/40 border-t border-white/[0.06] text-[10px] font-mono-code text-white/40 flex justify-between items-center">
          <span>Navigation Spotlight</span>
          <span>Press ↵ to select</span>
        </div>
      </div>
    </div>
  );
}
