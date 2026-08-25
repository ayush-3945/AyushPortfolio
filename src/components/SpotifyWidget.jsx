import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { getLiveSpotifyStatus } from '../services/spotify';

export default function SpotifyWidget() {
  const fallbackSongs = portfolioData.songs;
  const [currentIdx, setCurrentIdx] = useState(0);
  const [liveData, setLiveData] = useState(null);

  // Poll Spotify API every 8 seconds
  useEffect(() => {
    let isMounted = true;

    const fetchLive = async () => {
      const data = await getLiveSpotifyStatus();
      if (isMounted && data) {
        setLiveData(data);
      }
    };

    fetchLive();
    const interval = setInterval(fetchLive, 8000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  const song = liveData || fallbackSongs[currentIdx];
  const isPlaying = liveData ? liveData.isPlaying : true;
  const statusLabel = liveData ? liveData.statusLabel : 'LAST PLAYED';

  const handleClick = (e) => {
    e.stopPropagation();
    if (liveData?.songUrl) {
      window.open(liveData.songUrl, '_blank');
    } else {
      setCurrentIdx((prev) => (prev + 1) % fallbackSongs.length);
    }
  };

  return (
    <div
      onClick={handleClick}
      title={liveData?.songUrl ? 'Click to open on Spotify' : 'Click to skip track'}
      className="glass-bento rounded-2xl p-5 cursor-pointer group flex flex-col justify-between min-h-[140px] relative overflow-hidden select-none hover:border-purple-500/40 transition-all shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
    >
      {/* Top Handle Indicator */}
      <div className="w-8 h-1 rounded-full bg-white/20 mx-auto mb-2"></div>

      <div className="flex items-center justify-between gap-3.5 my-auto">
        
        {/* Left Glowing Star / Album Art */}
        <div className="relative w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(255,255,255,0.35)] text-black overflow-hidden border border-white/20">
          {song.albumArt ? (
            <img src={song.albumArt} alt={song.title} className="w-full h-full object-cover" />
          ) : (
            <span className="text-xl">★</span>
          )}
        </div>

        {/* Middle Track Info */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 text-[10px] font-mono-code text-white/40 uppercase tracking-widest mb-0.5">
            {liveData?.isLive && <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_6px_#c084fc]"></span>}
            <span>{statusLabel}</span>
          </div>
          <h4 className="text-white font-extrabold text-sm tracking-tight truncate group-hover:text-purple-300 transition-colors">
            {song.title}
          </h4>
          <p className="text-white/60 text-xs truncate mt-0.5">
            {song.artist}
          </p>
        </div>

        {/* Right Animated Green Equalizer Bars */}
        <div className="flex items-end gap-1 h-5 flex-shrink-0">
          <span className={`w-1 bg-[#1db954] rounded-full ${isPlaying ? 'eq-bar-1' : 'h-1'}`}></span>
          <span className={`w-1 bg-[#1db954] rounded-full ${isPlaying ? 'eq-bar-2' : 'h-2'}`}></span>
          <span className={`w-1 bg-[#1db954] rounded-full ${isPlaying ? 'eq-bar-3' : 'h-3'}`}></span>
          <span className={`w-1 bg-[#1db954] rounded-full ${isPlaying ? 'eq-bar-4' : 'h-1'}`}></span>
        </div>

      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between text-[9px] font-mono-code text-white/30 pt-2 border-t border-white/[0.04]">
        <span>{liveData ? '🟢 Real-time Spotify Connected' : `Playlist Mode (${currentIdx + 1}/${fallbackSongs.length})`}</span>
        <span className="text-purple-400 font-semibold">{liveData ? 'Open on Spotify ↗' : 'DHH / Synthpop'}</span>
      </div>
    </div>
  );
}
