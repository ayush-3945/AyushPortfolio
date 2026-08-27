import React, { useState, useRef, useCallback } from 'react';

const NODES = [
  {
    id: 'sensor',
    label: 'Sensor Input',
    icon: '📡',
    desc: 'Field hazard detection',
    detail: 'Gas leak detected — Sector 4',
  },
  {
    id: 'gemini',
    label: 'Gemini AI Analysis',
    icon: '🧠',
    desc: 'Image classification & severity',
    detail: 'Analyzing hazard image...',
  },
  {
    id: 'websocket',
    label: 'WebSocket Broadcast',
    icon: '⚡',
    desc: 'Real-time bi-directional sync',
    detail: 'Broadcasting to all channels...',
  },
  {
    id: 'routing',
    label: 'Role-Based Alerting',
    icon: '🔔',
    desc: 'JWT + RBAC dispatch engine',
    detail: 'Dispatching to role endpoints...',
  },
];

const ALERT_TARGETS = [
  { label: 'Admin notified', icon: '👨‍💼' },
  { label: 'Field Team notified', icon: '👷' },
  { label: 'Nearby Workers notified', icon: '⚠️' },
];

export default function CoalDarpanVisualizer() {
  const [viewMode, setViewMode] = useState('architecture'); // 'architecture' | 'simulation'
  const [simulating, setSimulating] = useState(false);
  const [activeNode, setActiveNode] = useState(null); // index of currently active node
  const [completedNodes, setCompletedNodes] = useState([]);
  const [showAlerts, setShowAlerts] = useState(false);
  const [latency, setLatency] = useState(null);
  const [packetPosition, setPacketPosition] = useState(-1); // -1 = not visible
  const timeoutsRef = useRef([]);

  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  };

  const addTimeout = (fn, ms) => {
    const id = setTimeout(fn, ms);
    timeoutsRef.current.push(id);
    return id;
  };

  const resetSimulation = useCallback(() => {
    clearAllTimeouts();
    setSimulating(false);
    setActiveNode(null);
    setCompletedNodes([]);
    setShowAlerts(false);
    setLatency(null);
    setPacketPosition(-1);
  }, []);

  const runSimulation = useCallback(() => {
    if (simulating) return;
    resetSimulation();
    setViewMode('simulation');
    setSimulating(true);

    // Stage 0: Packet enters Sensor Input (0ms)
    addTimeout(() => {
      setPacketPosition(0);
      setActiveNode(0);
    }, 300);

    // Stage 1: Sensor completes, move to Gemini (800ms)
    addTimeout(() => {
      setCompletedNodes([0]);
      setPacketPosition(1);
      setActiveNode(1);
    }, 1100);

    // Stage 2: Gemini completes, move to WebSocket (1600ms)
    addTimeout(() => {
      setCompletedNodes([0, 1]);
      setPacketPosition(2);
      setActiveNode(2);
    }, 2000);

    // Stage 3: WebSocket completes, move to Routing (2400ms)
    addTimeout(() => {
      setCompletedNodes([0, 1, 2]);
      setPacketPosition(3);
      setActiveNode(3);
    }, 2800);

    // Stage 4: Show fan-out alerts (3200ms)
    addTimeout(() => {
      setCompletedNodes([0, 1, 2, 3]);
      setShowAlerts(true);
      setPacketPosition(-1);
      const fakeLatency = Math.floor(Math.random() * (450 - 280 + 1)) + 280;
      setLatency(fakeLatency);
    }, 3600);

    // Stage 5: Reset button after showing results
    addTimeout(() => {
      setSimulating(false);
    }, 4200);
  }, [simulating, resetSimulation]);

  const isNodeActive = (idx) => activeNode === idx;
  const isNodeCompleted = (idx) => completedNodes.includes(idx);

  return (
    <section className="w-full max-w-[1580px] mx-auto px-4 sm:px-8 md:px-12 py-16 scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono-code text-[#F5A623] uppercase tracking-widest mb-1.5 font-bold">
            <span className="w-2 h-2 rounded-full bg-[#F5A623] animate-pulse shadow-[0_0_8px_#FFC15E]"></span>
            <span>SYSTEM ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            CoalDarpan{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] via-[#FFC15E] to-amber-200">
              AI Pipeline
            </span>
          </h2>
        </div>
        <span className="text-xs font-mono-code text-white/40 tracking-widest uppercase">
          LIVE VISUALIZER // 2026
        </span>
      </div>

      {/* View Mode Toggle */}
      <div className="flex items-center gap-2 mb-8">
        <button
          onClick={() => { resetSimulation(); setViewMode('architecture'); }}
          className={`px-4 py-2 rounded-xl text-xs font-mono-code font-bold uppercase tracking-wider transition-all cursor-pointer ${
            viewMode === 'architecture'
              ? 'bg-[#F5A623]/20 text-[#FFC15E] border border-[#F5A623]/40 shadow-[0_0_12px_rgba(245,166,35,0.2)]'
              : 'bg-white/[0.04] text-white/50 border border-white/[0.08] hover:text-white/80 hover:border-white/20'
          }`}
        >
          Architecture View
        </button>
        <button
          onClick={() => { resetSimulation(); setViewMode('simulation'); }}
          className={`px-4 py-2 rounded-xl text-xs font-mono-code font-bold uppercase tracking-wider transition-all cursor-pointer ${
            viewMode === 'simulation'
              ? 'bg-[#F5A623]/20 text-[#FFC15E] border border-[#F5A623]/40 shadow-[0_0_12px_rgba(245,166,35,0.2)]'
              : 'bg-white/[0.04] text-white/50 border border-white/[0.08] hover:text-white/80 hover:border-white/20'
          }`}
        >
          Live Simulation
        </button>
      </div>

      {/* Architecture Diagram */}
      <div className="glass-bento rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden border border-white/[0.08] hover:border-[#F5A623]/30 transition-all duration-500">
        {/* Ambient background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#F5A623]/8 via-amber-600/4 to-transparent rounded-full blur-3xl pointer-events-none"></div>

        {/* Pipeline Nodes — horizontal on desktop, vertical on mobile */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-3">
          {NODES.map((node, idx) => (
            <React.Fragment key={node.id}>
              {/* Node Card */}
              <div
                className={`relative w-full md:w-1/4 p-5 rounded-2xl border transition-all duration-500 ${
                  isNodeActive(idx)
                    ? 'bg-[#F5A623]/15 border-[#F5A623]/60 shadow-[0_0_30px_rgba(245,166,35,0.3)] scale-[1.03]'
                    : isNodeCompleted(idx)
                    ? 'bg-[#F5A623]/8 border-[#F5A623]/30 shadow-[0_0_15px_rgba(245,166,35,0.1)]'
                    : 'bg-white/[0.03] border-white/[0.08] hover:border-white/20'
                }`}
              >
                {/* Active pulse ring */}
                {isNodeActive(idx) && (
                  <div className="absolute inset-0 rounded-2xl border-2 border-[#F5A623]/50 animate-ping pointer-events-none"></div>
                )}

                {/* Completion checkmark */}
                {isNodeCompleted(idx) && !isNodeActive(idx) && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#F5A623] flex items-center justify-center text-black text-xs font-black shadow-[0_0_12px_rgba(245,166,35,0.5)]">
                    ✓
                  </div>
                )}

                <div className="text-2xl mb-2">{node.icon}</div>
                <div className={`font-mono-code font-bold text-sm tracking-wide transition-colors duration-300 ${
                  isNodeActive(idx) || isNodeCompleted(idx) ? 'text-[#FFC15E]' : 'text-white'
                }`}>
                  {node.label}
                </div>
                <div className="text-[11px] text-white/40 font-mono-code mt-1">
                  {node.desc}
                </div>

                {/* Live detail text during simulation */}
                {viewMode === 'simulation' && isNodeActive(idx) && (
                  <div className="mt-3 pt-2 border-t border-[#F5A623]/20 text-[11px] text-[#FFC15E] font-mono-code font-bold animate-pulse">
                    {node.detail}
                  </div>
                )}
              </div>

              {/* Directional Arrow between nodes */}
              {idx < NODES.length - 1 && (
                <div className="flex items-center justify-center shrink-0">
                  {/* Desktop: horizontal arrow */}
                  <div className={`hidden md:flex items-center gap-1 transition-all duration-500 ${
                    isNodeCompleted(idx) ? 'opacity-100' : 'opacity-30'
                  }`}>
                    <div className={`w-8 lg:w-12 h-[2px] transition-colors duration-500 ${
                      isNodeCompleted(idx) ? 'bg-[#F5A623]' : 'bg-white/20'
                    }`}>
                      {/* Animated packet dot */}
                      {packetPosition === idx + 1 && (
                        <div className="relative -top-[5px] w-3 h-3 rounded-full bg-[#FFC15E] shadow-[0_0_12px_#F5A623,0_0_24px_rgba(245,166,35,0.4)] animate-[packet_0.4s_ease-out]"></div>
                      )}
                    </div>
                    <div className={`w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent transition-colors duration-500 ${
                      isNodeCompleted(idx) ? 'border-l-[8px] border-l-[#F5A623]' : 'border-l-[8px] border-l-white/20'
                    }`}></div>
                  </div>

                  {/* Mobile: vertical arrow */}
                  <div className={`flex md:hidden flex-col items-center gap-1 transition-all duration-500 ${
                    isNodeCompleted(idx) ? 'opacity-100' : 'opacity-30'
                  }`}>
                    <div className={`h-6 w-[2px] transition-colors duration-500 ${
                      isNodeCompleted(idx) ? 'bg-[#F5A623]' : 'bg-white/20'
                    }`}></div>
                    <div className={`w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent transition-colors duration-500 ${
                      isNodeCompleted(idx) ? 'border-t-[8px] border-t-[#F5A623]' : 'border-t-[8px] border-t-white/20'
                    }`}></div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Fan-out Alert Targets */}
        {showAlerts && (
          <div className="relative z-10 mt-8 pt-6 border-t border-white/[0.06]">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              {ALERT_TARGETS.map((target, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F5A623]/12 border border-[#F5A623]/30 text-[#FFC15E] font-mono-code text-xs font-bold shadow-[0_0_15px_rgba(245,166,35,0.15)] animate-[alertFadeIn_0.4s_ease-out_both]"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <span>{target.icon}</span>
                  <span>{target.label}</span>
                  <span className="text-[#F5A623]">✓</span>
                </div>
              ))}
            </div>

            {/* Latency Readout */}
            {latency && (
              <div className="text-center mt-5 animate-[alertFadeIn_0.5s_ease-out_0.5s_both]">
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono-code text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
                  Resolved in {latency}ms
                </span>
              </div>
            )}
          </div>
        )}

        {/* Simulate Button */}
        {viewMode === 'simulation' && (
          <div className="relative z-10 mt-8 flex justify-center">
            <button
              onClick={runSimulation}
              disabled={simulating}
              className={`px-8 py-3.5 rounded-xl font-mono-code font-black text-xs tracking-widest uppercase transition-all flex items-center gap-2.5 cursor-pointer ${
                simulating
                  ? 'bg-white/[0.06] text-white/30 border border-white/[0.08] cursor-not-allowed'
                  : 'bg-[#F5A623] text-black hover:bg-[#FFC15E] shadow-[0_10px_30px_rgba(245,166,35,0.3)] hover:shadow-[0_15px_40px_rgba(245,166,35,0.45)] active:scale-[0.97]'
              }`}
            >
              {simulating ? (
                <>
                  <span className="inline-block w-3.5 h-3.5 border-2 border-white/30 border-t-white/70 rounded-full animate-spin"></span>
                  <span>Simulating...</span>
                </>
              ) : (
                <>
                  <span>🚨</span>
                  <span>Simulate Hazard Event</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Credibility Caption */}
      <div className="mt-5 text-center">
        <p className="text-xs font-mono-code text-white/35 tracking-wide">
          Real architecture from{' '}
          <a
            href="https://github.com/ayush-3945/ai-smart-issue-routing"
            target="_blank"
            rel="noreferrer"
            className="text-[#F5A623]/70 hover:text-[#FFC15E] underline underline-offset-2 transition-colors"
          >
            CoalDarpan
          </a>
          , a national hackathon project.
        </p>
      </div>
    </section>
  );
}
