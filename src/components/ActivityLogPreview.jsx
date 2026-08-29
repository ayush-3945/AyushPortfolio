import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ActivityLogPreview() {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchGithubEvents = async () => {
    setLoading(true);
    setError(null);
    try {
      const username = portfolioData.personal.github.split('/').pop();
      const response = await fetch(`https://api.github.com/users/${username}/events/public`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch GitHub activity');
      }
      
      const data = await response.json();
      
      const recentCommits = [];
      data.forEach(event => {
        if (event.type === 'PushEvent' && event.payload) {
          if (event.payload.commits && event.payload.commits.length > 0) {
            const eventCommits = [...event.payload.commits].reverse();
            eventCommits.forEach(commit => {
              recentCommits.push({
                id: commit.sha,
                message: commit.message,
                repoName: event.repo.name.split('/').pop().toUpperCase(),
                repoUrl: `https://github.com/${event.repo.name}`,
                commitUrl: `https://github.com/${event.repo.name}/commit/${commit.sha}`,
                date: new Date(event.created_at)
              });
            });
          } else {
            const branch = event.payload.ref ? event.payload.ref.replace('refs/heads/', '') : 'main';
            recentCommits.push({
              id: event.payload.head ? event.payload.head.substring(0, 7) : event.id,
              message: `Pushed updates to ${branch}`,
              repoName: event.repo.name.split('/').pop().toUpperCase(),
              repoUrl: `https://github.com/${event.repo.name}`,
              commitUrl: `https://github.com/${event.repo.name}/commits/${branch}`,
              date: new Date(event.created_at)
            });
          }
        }
      });
      
      setCommits(recentCommits.slice(0, 3)); // Show only top 3 for preview
    } catch (err) {
      console.error('Error fetching Activity Log Preview:', err);
      setError('Unable to fetch live activity.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGithubEvents();
  }, []);

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-CA', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).format(date).replace(/-/g, '.');
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-12">
      {/* Terminal Syslog Container Preview */}
      <div className="rounded-xl bg-[#0b0e14] border border-white/[0.08] shadow-lg overflow-hidden relative">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 border-b border-white/[0.05] bg-black/20">
          <div className="flex items-center gap-2 text-[#FFC15E] font-mono-code text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <span className="text-amber-500">◆</span>
            <span>TAIL -F ~/ACTIVITY.LOG</span>
          </div>
          <div className="flex items-center gap-4 text-[10px] sm:text-xs font-mono-code uppercase tracking-wider text-white/40">
            <span className="text-emerald-400">LATEST {commits.length} COMMITS</span>
          </div>
        </div>

        {/* Log Entries */}
        <div className="p-4 space-y-2 font-mono-code text-xs sm:text-[13px] overflow-x-auto scrollbar-subtle">
          <div className="min-w-[650px]">
            {loading ? (
              <div className="space-y-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex items-center gap-4 text-white/20 animate-pulse py-1">
                    <div className="w-20 h-3 bg-white/[0.03] rounded"></div>
                    <div className="flex items-center gap-2 w-20">
                      <div className="w-1 h-1 rounded-full bg-white/[0.05]"></div>
                      <div className="h-3 bg-white/[0.03] rounded w-10"></div>
                    </div>
                    <div className="w-28 h-3 bg-white/[0.03] rounded"></div>
                    <div className="flex-1 h-3 bg-white/[0.03] rounded"></div>
                    <div className="w-14 h-3 bg-white/[0.03] rounded"></div>
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="text-red-400 py-2 flex items-center gap-2">
                <span className="text-red-500">◆</span> {error}
              </div>
            ) : commits.length === 0 ? (
              <div className="text-white/40 py-2">No recent activity found.</div>
            ) : (
              commits.map((commit, idx) => (
                <div key={commit.id + idx} className="flex items-start sm:items-center gap-4 py-1 group transition-colors hover:bg-white/[0.02] -mx-4 px-4 rounded-lg">
                  {/* Date */}
                  <div className="text-white/40 shrink-0 w-[75px]">
                    {formatDate(commit.date)}
                  </div>
                  
                  {/* Status */}
                  <div className="flex items-center gap-1.5 shrink-0 w-[75px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.4)]"></span>
                    <span className="text-emerald-400/90 font-bold tracking-wide">COMMIT</span>
                  </div>

                  {/* Repo */}
                  <div className="text-white/30 shrink-0 w-[120px] truncate" title={commit.repoName}>
                    [{commit.repoName}]
                  </div>

                  {/* Message */}
                  <div className="text-white/70 flex-1 truncate group-hover:text-white transition-colors" title={commit.message.split('\n')[0]}>
                    {commit.message.split('\n')[0]}
                  </div>

                  {/* Hash / Link */}
                  <a 
                    href={commit.commitUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-end gap-1.5 text-[#38bdf8] hover:text-[#7dd3fc] shrink-0 w-[70px] transition-colors"
                  >
                    <span className="tracking-wider">{commit.id.substring(0, 7)}</span>
                    <ExternalLink size={10} strokeWidth={2.5} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              ))
            )}
          </div>
        </div>

        {/* View Full Log Link */}
        <div className="border-t border-white/[0.05] bg-black/20 p-2 flex justify-center">
          <button 
            onClick={() => navigate('/activity')}
            className="flex items-center gap-2 text-[11px] font-mono-code font-bold tracking-wider text-white/50 hover:text-white hover:bg-white/[0.05] px-4 py-1.5 rounded-lg transition-colors"
          >
            VIEW FULL ACTIVITY LOG
            <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </section>
  );
}
