import React, { useEffect, useState } from 'react';

export default function GlowCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let animationFrameId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering over clickable elements
      const target = e.target;
      const isInteractive = target.closest('button, a, input, textarea, .cursor-pointer, .glass-bento');
      setIsHovered(!!isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Smooth Lerp Physics Loop for trailing ambient glow
    const followLoop = () => {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;
      setTrailingPos({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(followLoop);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    animationFrameId = requestAnimationFrame(followLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden hidden md:block transition-opacity duration-300">
      {/* 1. Large Soft Emerald Ambient Spotlight that tracks cursor */}
      <div
        className="absolute rounded-full blur-[75px] opacity-75 transition-transform duration-75 ease-out"
        style={{
          width: '400px',
          height: '400px',
          transform: `translate(${trailingPos.x - 200}px, ${trailingPos.y - 200}px)`,
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.16) 0%, rgba(5, 150, 105, 0.06) 50%, transparent 75%)',
        }}
      />

      {/* 2. Precision Inner Light Aura */}
      <div
        className={`absolute rounded-full border border-emerald-400/30 transition-all duration-150 ease-out backdrop-blur-[1px] ${
          isHovered
            ? 'w-10 h-10 -ml-5 -mt-5 bg-emerald-500/15 border-emerald-400/70 shadow-[0_0_20px_rgba(16,185,129,0.5)] scale-110'
            : 'w-6 h-6 -ml-3 -mt-3 bg-emerald-400/10 shadow-[0_0_12px_rgba(16,185,129,0.25)]'
        }`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />

      {/* 3. Center Micro Pointer Dot */}
      <div
        className="absolute w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-emerald-300 shadow-[0_0_10px_#34d399] transition-transform duration-75"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
    </div>
  );
}
