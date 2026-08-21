import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function SpotifyWidget() {
  const songs = portfolioData.songs;
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const song = songs[currentIdx];

  const handleNextTrack = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % songs.length);
  };

  return (
    <div
      onClick={handleNextTrack}
      className="glass-bento rounded-2xl p-5 cursor-pointer group flex flex-col justify-between min-h-[140px] relative overflow-hidden select-none hover:border-emerald-500/30 transition-all"
    >
      {/* Top Handle Indicator */}
      <div className="w-8 h-1 rounded-full bg-white/20 mx-auto mb-2"></div>

      <div className="flex items-center justify-between gap-3 my-auto">
        
        {/* Left Glowing Star Card Icon */}
        <div className="relative w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(255,255,255,0.4)] text-black">
          <span className="text-xl">★</span>
        </div>

        {/* Middle Track Info */}
        <div className="min-w-0 flex-1">
          <div className="text-[10px] font-mono-code text-white/40 uppercase tracking-widest mb-0.5">
            LAST PLAYED
          </div>
          <h4 className="text-white font-extrabold text-sm tracking-tight truncate group-hover:text-emerald-400 transition-colors">
            {song.title}
          </h4>
          <p className="text-white/60 text-xs truncate mt-0.5">
            {song.artist}
          </p>
        </div>

        {/* Right Animated Green Equalizer Bars */}
        <div className="flex items-end gap-1 h-5 flex-shrink-0">
          <span className="w-1 bg-[#1db954] rounded-full eq-bar-1"></span>
          <span className="w-1 bg-[#1db954] rounded-full eq-bar-2"></span>
          <span className="w-1 bg-[#1db954] rounded-full eq-bar-3"></span>
          <span className="w-1 bg-[#1db954] rounded-full eq-bar-4"></span>
        </div>

      </div>

      {/* Subtle Hint on Hover */}
      <div className="flex items-center justify-between text-[9px] font-mono-code text-white/30 pt-2 border-t border-white/[0.04]">
        <span>Click to skip track ({currentIdx + 1}/{songs.length})</span>
        <span className="text-emerald-400 font-semibold">{song.genre}</span>
      </div>
    </div>
  );
}
