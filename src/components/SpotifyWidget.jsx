import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function SpotifyWidget() {
  const songs = portfolioData.songs;
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(38);

  const song = songs[currentIdx];

  // Simulate progress bar movement
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 1200);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % songs.length);
    setProgress(0);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + songs.length) % songs.length);
    setProgress(0);
  };

  const togglePlay = (e) => {
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="glass-bento rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden group">
      {/* Ambient Spotify Green Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/20 transition-all"></div>

      {/* Top Header */}
      <div className="flex items-center justify-between mb-3 text-xs">
        <div className="flex items-center gap-2 text-white/50 font-mono-code text-[11px]">
          <span className="text-[#1db954] text-sm font-bold">●</span>
          <span>{isPlaying ? 'NOW PLAYING' : 'PAUSED'}</span>
        </div>

        {/* Audio Equalizer animation */}
        {isPlaying ? (
          <div className="flex items-end gap-0.5 h-4">
            <span className="w-1 bg-[#1db954] rounded-full eq-bar-1"></span>
            <span className="w-1 bg-[#1db954] rounded-full eq-bar-2"></span>
            <span className="w-1 bg-[#1db954] rounded-full eq-bar-3"></span>
            <span className="w-1 bg-[#1db954] rounded-full eq-bar-4"></span>
          </div>
        ) : (
          <span className="text-[10px] text-white/40 font-mono-code">PAUSED</span>
        )}
      </div>

      {/* Song Info */}
      <div className="flex items-center gap-3.5 my-1">
        <div className="relative w-14 h-14 rounded-xl overflow-hidden shadow-lg flex-shrink-0 border border-white/10">
          <img
            src={song.cover}
            alt={song.title}
            className={`w-full h-full object-cover ${isPlaying ? 'scale-105 transition-transform duration-700' : 'grayscale'}`}
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="min-w-0 flex-1">
          <h4 className="text-white font-bold text-sm tracking-tight truncate group-hover:text-[#38bdf8] transition-colors">
            {song.title}
          </h4>
          <p className="text-white/60 text-xs truncate font-medium mt-0.5">
            {song.artist}
          </p>
          <span className="inline-block mt-1 text-[10px] font-mono-code px-1.5 py-0.5 rounded bg-white/[0.06] text-white/50 border border-white/[0.08]">
            {song.genre}
          </span>
        </div>
      </div>

      {/* Controls & Progress */}
      <div className="mt-3 pt-2 border-t border-white/[0.06]">
        {/* Progress bar */}
        <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden mb-2.5 cursor-pointer">
          <div
            className="bg-gradient-to-r from-[#1db954] to-[#0ea5e9] h-full rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="flex items-center justify-between text-xs">
          <span className="text-[10px] font-mono-code text-white/40">{song.duration}</span>

          {/* Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              title="Previous Track"
              className="p-1 text-white/60 hover:text-white hover:scale-110 transition-all cursor-pointer"
            >
              ⏮
            </button>
            <button
              onClick={togglePlay}
              title={isPlaying ? 'Pause' : 'Play'}
              className="w-7 h-7 rounded-full bg-white text-black font-bold flex items-center justify-center text-xs hover:bg-[#38bdf8] hover:text-white transition-all shadow-md cursor-pointer"
            >
              {isPlaying ? '⏸' : '▶'}
            </button>
            <button
              onClick={handleNext}
              title="Next Track"
              className="p-1 text-white/60 hover:text-white hover:scale-110 transition-all cursor-pointer"
            >
              ⏭
            </button>
          </div>

          <span className="text-[10px] font-mono-code text-[#1db954]">{currentIdx + 1}/{songs.length}</span>
        </div>
      </div>
    </div>
  );
}
