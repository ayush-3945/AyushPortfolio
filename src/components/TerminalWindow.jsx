import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

const AVAILABLE_COMMANDS = [
  'help',
  'whoami',
  'skills',
  'projects',
  'github',
  'contact',
  'sudo hire-me',
  'matrix',
  'theme',
  'clear',
  'history',
  'date',
  'exit'
];

export default function TerminalWindow({ onOpenWindow, onClose }) {
  const { personal, projects, skills } = portfolioData;
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [outputList, setOutputList] = useState([]);
  const [matrixMode, setMatrixMode] = useState(false);
  
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const matrixCanvasRef = useRef(null);

  // Initial Welcome Banner
  useEffect(() => {
    setOutputList([
      {
        type: 'banner',
        content: `
 █████╗ ██╗   ██╗██╗   ██╗███████╗██╗  ██╗
██╔══██╗╚██╗ ██╔╝██║   ██║██╔════╝██║  ██║
███████║ ╚████╔╝ ██║   ██║███████╗███████║
██╔══██║  ╚██╔╝  ██║   ██║╚════██║██╔══██║
██║  ██║   ██║   ╚██████╔╝███████║██║  ██║
╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚══════╝╚═╝  ╚═╝
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚡ AYUSH PANDEY // FULL STACK & AI SYSTEMS
Type 'help' to view available commands.
Try 'sudo hire-me' for a developer easter egg!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`
      }
    ]);
  }, []);

  // Auto scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [outputList]);

  // Keep input focused
  const handleFocus = () => {
    inputRef.current?.focus();
  };

  // Matrix Rain Canvas Effect
  useEffect(() => {
    if (!matrixMode || !matrixCanvasRef.current) return;
    const canvas = matrixCanvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;

    const chars = '01AYUSH_PANDEY_AI_FULLSTACK_REACT_NODE_GEMINI_0123456789$#@&%';
    const fontSize = 12;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const interval = setInterval(() => {
      ctx.fillStyle = 'rgba(6, 9, 14, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#F5A623';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }, 45);

    return () => clearInterval(interval);
  }, [matrixMode]);

  const handleKeyDown = (e) => {
    // Autocomplete with TAB
    if (e.key === 'Tab') {
      e.preventDefault();
      const current = input.trim().toLowerCase();
      if (!current) return;
      const match = AVAILABLE_COMMANDS.find((cmd) => cmd.startsWith(current));
      if (match) {
        setInput(match);
      }
      return;
    }

    // Command History UP / DOWN
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx < history.length) {
        setHistoryIndex(nextIdx);
        setInput(history[history.length - 1 - nextIdx]);
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInput(history[history.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
      return;
    }

    // Clear buffer shortcut Ctrl + L
    if (e.ctrlKey && e.key === 'l') {
      e.preventDefault();
      setOutputList([]);
      return;
    }

    // Submit Command on Enter
    if (e.key === 'Enter') {
      e.preventDefault();
      const rawCmd = input.trim();
      if (!rawCmd) return;

      // Add to command history
      setHistory((prev) => [...prev, rawCmd]);
      setHistoryIndex(-1);
      setInput('');

      // Execute command
      executeCommand(rawCmd);
    }
  };

  const executeCommand = (cmdStr) => {
    const parts = cmdStr.trim().split(' ');
    const cmd = parts[0].toLowerCase();
    const flag = parts[1]?.toLowerCase();

    // Echo typed command
    const newOutput = [{ type: 'command', text: cmdStr }];

    switch (cmd) {
      case 'help':
        newOutput.push({
          type: 'help',
          data: [
            { cmd: 'whoami', desc: 'Display engineer identity, bio & university' },
            { cmd: 'skills [--all, --ai]', desc: 'Categorized engineering tech stack matrix' },
            { cmd: 'projects [--top]', desc: 'Production builds (CoalDarpan, AI Agent, etc.)' },
            { cmd: 'github [--stats]', desc: 'Commit metrics & real GitHub data summary' },
            { cmd: 'contact [--resume]', desc: 'Email address, socials, or open resume' },
            { cmd: 'sudo hire-me', desc: '🎉 Priority recruiter handshake easter egg' },
            { cmd: 'matrix', desc: 'Toggle cyber matrix code rain background' },
            { cmd: 'theme', desc: 'Display active aesthetic color tokens' },
            { cmd: 'history', desc: 'List previously executed shell commands' },
            { cmd: 'clear', desc: 'Clear the terminal output screen (or Ctrl+L)' },
            { cmd: 'exit', desc: 'Close the terminal window' }
          ]
        });
        break;

      case 'whoami':
        newOutput.push({
          type: 'whoami',
          name: personal.name,
          role: personal.title,
          university: 'ABES Engineering College, Ghaziabad (3rd Year CSE)',
          bio: personal.bio,
          location: personal.location,
          status: '⚡ Available for Full Stack, Frontend & AI Engineering roles'
        });
        break;

      case 'skills':
        newOutput.push({
          type: 'skills',
          flag,
          skills
        });
        break;

      case 'projects':
        newOutput.push({
          type: 'projects',
          flag,
          projects
        });
        break;

      case 'github':
        newOutput.push({
          type: 'github',
          profile: personal.github,
          totalCommits: '500+ across production repos',
          streak: 'Active 2026 developer streak',
          topRepos: [
            'ayush-3945/ai-smart-issue-routing (CoalDarpan PWA)',
            'ayush-3945/AI-Interview-Agent',
            'ayush-3945/AyushPortfolio'
          ]
        });
        break;

      case 'contact':
        if (flag === '--resume') {
          window.open(personal.resumeUrl, '_blank');
          newOutput.push({
            type: 'success',
            text: '📄 Resume opened in new tab. Direct link: ' + personal.resumeUrl
          });
        } else {
          newOutput.push({
            type: 'contact',
            email: personal.email,
            github: personal.github,
            linkedin: personal.linkedin,
            twitter: personal.twitter
          });
        }
        break;

      case 'sudo':
        if (parts[1]?.toLowerCase() === 'hire-me') {
          // 🎉 Trigger Confetti Easter Egg!
          try {
            confetti({
              particleCount: 120,
              spread: 80,
              origin: { y: 0.6 },
              colors: ['#F5A623', '#FFC15E', '#10b981', '#ffffff']
            });
          } catch (err) {
            // ignore
          }

          newOutput.push({
            type: 'easter-egg',
            text: '[ACCESS GRANTED] Initiating recruiter priority handshake protocol...'
          });

          // Navigate to contact after 1.2s
          setTimeout(() => {
            if (onOpenWindow) onOpenWindow('contact');
          }, 1200);
        } else {
          newOutput.push({
            type: 'error',
            text: `sudo: ${parts[1] || 'command'}: permission denied. Try 'sudo hire-me'`
          });
        }
        break;

      case 'matrix':
        setMatrixMode((prev) => !prev);
        newOutput.push({
          type: 'info',
          text: `Matrix cyber code rain ${!matrixMode ? 'ENABLED' : 'DISABLED'}.`
        });
        break;

      case 'theme':
        newOutput.push({
          type: 'theme',
          name: 'Amber Gold & Sunset Glow',
          primary: '#F5A623',
          hover: '#FFC15E',
          background: '#06090e',
          matrix: 'GitHub Green Matrix #34d399'
        });
        break;

      case 'history':
        newOutput.push({
          type: 'history',
          items: history
        });
        break;

      case 'date':
        newOutput.push({
          type: 'info',
          text: new Date().toString()
        });
        break;

      case 'clear':
        setOutputList([]);
        return;

      case 'exit':
        if (onClose) onClose();
        return;

      default:
        newOutput.push({
          type: 'error',
          text: `command not found: ${cmd}. Type 'help' for valid commands.`
        });
        break;
    }

    setOutputList((prev) => [...prev, ...newOutput]);
  };

  return (
    <div
      onClick={handleFocus}
      className="relative w-full h-[520px] bg-[#06090e] text-[#f8fafc] font-mono-code text-xs sm:text-sm p-4 overflow-y-auto select-text scrollbar-subtle"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {/* Matrix Canvas Layer */}
      {matrixMode && (
        <canvas
          ref={matrixCanvasRef}
          className="absolute inset-0 pointer-events-none opacity-30 z-0"
        />
      )}

      {/* Output Renderers */}
      <div className="relative z-10 space-y-3">
        {outputList.map((item, idx) => (
          <div key={idx} className="leading-relaxed">
            {item.type === 'banner' && (
              <pre className="text-[#F5A623] text-[10px] sm:text-xs leading-tight font-bold whitespace-pre-wrap">
                {item.content}
              </pre>
            )}

            {item.type === 'command' && (
              <div className="flex items-center gap-2 text-white/80 font-bold">
                <span className="text-[#FFC15E]">ayush@portfolio:~$</span>
                <span className="text-white">{item.text}</span>
              </div>
            )}

            {item.type === 'help' && (
              <div className="my-2 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-1.5">
                <div className="text-[#FFC15E] font-bold pb-1 border-b border-white/[0.06]">
                  AVAILABLE COMMANDS:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
                  {item.data.map((c, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2">
                      <span className="text-[#F5A623] font-bold min-w-[120px]">{c.cmd}</span>
                      <span className="text-white/60 text-[11px]">{c.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {item.type === 'whoami' && (
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-2">
                <div className="text-lg font-bold text-white flex items-center gap-2">
                  <span>👨‍💻 {item.name}</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-[#F5A623]/20 text-[#FFC15E] border border-[#F5A623]/30">
                    {item.role}
                  </span>
                </div>
                <p className="text-white/80 text-xs">{item.bio}</p>
                <div className="text-[11px] text-white/50 pt-1 border-t border-white/[0.05]">
                  🎓 {item.university} | 📍 {item.location}
                </div>
                <div className="text-[#FFC15E] text-xs font-bold">{item.status}</div>
              </div>
            )}

            {item.type === 'skills' && (
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-2.5">
                <div className="text-[#FFC15E] font-bold">CORE TECHNICAL ARSENAL:</div>
                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-[#F5A623] font-bold">Frontend: </span>
                    <span className="text-white/80">{item.skills.frontend.join(', ')}</span>
                  </div>
                  <div>
                    <span className="text-[#F5A623] font-bold">Backend & DB: </span>
                    <span className="text-white/80">{item.skills.backend.join(', ')}</span>
                  </div>
                  <div>
                    <span className="text-[#F5A623] font-bold">AI / ML & Tools: </span>
                    <span className="text-white/80">{item.skills.tools.join(', ')}</span>
                  </div>
                </div>
              </div>
            )}

            {item.type === 'projects' && (
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-3">
                <div className="text-[#FFC15E] font-bold">FEATURED PRODUCTION BUILDS:</div>
                {item.projects.map((p, pIdx) => (
                  <div key={pIdx} className="pb-2 border-b border-white/[0.05] last:border-0 last:pb-0">
                    <div className="flex items-center gap-2 font-bold text-white">
                      <span>• {p.title}</span>
                      <span className="text-[10px] text-[#F5A623]">({p.tags.join(', ')})</span>
                    </div>
                    <p className="text-white/70 text-[11px] mt-0.5">{p.description}</p>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer" className="text-[#FFC15E] text-[11px] underline mt-1 inline-block">
                        Live: {p.live} ↗
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}

            {item.type === 'github' && (
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-2">
                <div className="text-[#FFC15E] font-bold">GITHUB PROFILE METRICS:</div>
                <div className="text-xs text-white/80">📊 {item.totalCommits}</div>
                <div className="text-xs text-white/80">🔥 {item.streak}</div>
                <div className="text-xs text-[#F5A623] underline">
                  <a href={item.profile} target="_blank" rel="noreferrer">{item.profile} ↗</a>
                </div>
              </div>
            )}

            {item.type === 'contact' && (
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-1.5">
                <div className="text-[#FFC15E] font-bold">DIRECT CONTACT CHANNELS:</div>
                <div className="text-xs text-white/80">📧 Email: <a href={`mailto:${item.email}`} className="text-[#F5A623] underline">{item.email}</a></div>
                <div className="text-xs text-white/80">💼 LinkedIn: <a href={item.linkedin} target="_blank" rel="noreferrer" className="text-[#F5A623] underline">{item.linkedin}</a></div>
                <div className="text-xs text-white/80">🐙 GitHub: <a href={item.github} target="_blank" rel="noreferrer" className="text-[#F5A623] underline">{item.github}</a></div>
              </div>
            )}

            {item.type === 'easter-egg' && (
              <div className="p-4 rounded-xl bg-[#F5A623]/15 border border-[#F5A623]/40 text-[#FFC15E] font-bold animate-pulse space-y-1">
                <div>🎉 {item.text}</div>
                <div className="text-xs text-white/80 font-normal">Opening Contact window in 1s...</div>
              </div>
            )}

            {item.type === 'theme' && (
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-1 text-xs">
                <div className="text-[#FFC15E] font-bold">ACTIVE PALETTE: {item.name}</div>
                <div>Primary Accent: <span className="text-[#F5A623] font-bold">{item.primary}</span></div>
                <div>Hover Glow: <span className="text-[#FFC15E] font-bold">{item.hover}</span></div>
                <div>Matrix Matrix: <span className="text-emerald-400 font-bold">{item.matrix}</span></div>
              </div>
            )}

            {item.type === 'history' && (
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs space-y-1">
                <div className="text-white/40 font-bold">SESSION COMMAND HISTORY:</div>
                {item.items.map((h, hIdx) => (
                  <div key={hIdx} className="text-white/70">{hIdx + 1}. {h}</div>
                ))}
              </div>
            )}

            {item.type === 'error' && (
              <div className="text-red-400 text-xs">❌ {item.text}</div>
            )}

            {item.type === 'success' && (
              <div className="text-emerald-400 text-xs">✅ {item.text}</div>
            )}

            {item.type === 'info' && (
              <div className="text-[#FFC15E] text-xs">ℹ️ {item.text}</div>
            )}
          </div>
        ))}

        {/* Live Input Line */}
        <div className="flex items-center gap-2 pt-2">
          <span className="text-[#FFC15E] font-bold">ayush@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            className="flex-1 bg-transparent text-white outline-none border-none font-mono-code text-xs sm:text-sm caret-[#F5A623]"
            placeholder="type command (e.g. help, skills, sudo hire-me)..."
          />
        </div>

        <div ref={bottomRef} />
      </div>
    </div>
  );
}
