import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Terminal as TerminalIcon } from 'lucide-react';

export default function ActivityLogSection() {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState(false);

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
        } else if (event.type === 'CreateEvent') {
          recentCommits.push({
            id: event.id,
            message: `Created ${event.payload.ref_type} ${event.payload.ref || ''}`,
            repoName: event.repo.name.split('/').pop().toUpperCase(),
            repoUrl: `https://github.com/${event.repo.name}`,
            commitUrl: `https://github.com/${event.repo.name}`,
            date: new Date(event.created_at)
          });
        } else if (event.type === 'PullRequestEvent' && event.payload.action === 'opened') {
          recentCommits.push({
            id: event.id,
            message: `Opened PR: ${event.payload.pull_request.title}`,
            repoName: event.repo.name.split('/').pop().toUpperCase(),
            repoUrl: `https://github.com/${event.repo.name}`,
            commitUrl: event.payload.pull_request.html_url,
            date: new Date(event.created_at)
          });
        }
      });
      
      setCommits(recentCommits.slice(0, 20)); // Store top 20
    } catch (err) {
      console.error('Error fetching Activity Log:', err);
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

  const displayedCommits = expanded ? commits : commits.slice(0, 5);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-12 mb-24">
      {/* Header section (similar to other sections in the portfolio) */}
      <div className="mb-6 md:mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-white/40 font-mono-code text-xs font-bold tracking-widest">[ 03 ]</span>
          <span className="text-[#F5A623] font-mono-code text-xs font-bold tracking-widest uppercase">// ACTIVITY</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white flex items-center gap-3">
          System log
        </h2>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-4">
          <p className="text-white/50 text-sm md:text-base max-w-xl font-mono-code">
            A reverse-chronological syslog — commits synced live from GitHub. Every line is a real, dated event.
          </p>
          <div className="flex items-center gap-2 text-xs font-mono-code text-white/40">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
            COMMIT git commit (synced)
          </div>
        </div>
      </div>

      {/* Terminal Syslog Container */}
      <div className="rounded-xl bg-[#0b0e14] border border-white/[0.08] shadow-xl overflow-hidden relative">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/[0.05] bg-black/20">
          <div className="flex items-center gap-2 text-[#FFC15E] font-mono-code text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <span className="text-amber-500">◆</span>
            <span>TAIL -F ~/ACTIVITY.LOG</span>
          </div>
          <div className="flex items-center gap-4 text-[10px] sm:text-xs font-mono-code uppercase tracking-wider text-white/40">
            <span className="hidden sm:inline">{displayedCommits.length} LINES</span>
            <span className="text-emerald-400">{commits.length} COMMITS</span>
          </div>
        </div>

        {/* Log Entries */}
        <div className="p-4 sm:p-6 space-y-3 font-mono-code text-xs sm:text-sm overflow-x-auto scrollbar-subtle">
          <div className="min-w-[700px]">
            {loading ? (
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="flex items-center gap-6 text-white/20 animate-pulse">
                    <div className="w-24 h-4 bg-white/[0.03] rounded"></div>
                    <div className="flex items-center gap-2 w-24">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/[0.05]"></div>
                      <div className="h-4 bg-white/[0.03] rounded w-12"></div>
                    </div>
                    <div className="w-32 h-4 bg-white/[0.03] rounded"></div>
                    <div className="flex-1 h-4 bg-white/[0.03] rounded"></div>
                    <div className="w-16 h-4 bg-white/[0.03] rounded"></div>
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="text-red-400 py-4 flex items-center gap-2">
                <span className="text-red-500">◆</span> {error}
              </div>
            ) : commits.length === 0 ? (
              <div className="text-white/40 py-4">No recent activity found.</div>
            ) : (
              displayedCommits.map((commit, idx) => (
                <div key={commit.id + idx} className="flex items-start sm:items-center gap-4 sm:gap-6 py-1 group transition-colors hover:bg-white/[0.02] -mx-4 px-4 rounded-lg">
                  {/* Date */}
                  <div className="text-white/40 shrink-0 w-[85px]">
                    {formatDate(commit.date)}
                  </div>
                  
                  {/* Status */}
                  <div className="flex items-center gap-2 shrink-0 w-[85px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.4)]"></span>
                    <span className="text-emerald-400/90 font-bold tracking-wide">COMMIT</span>
                  </div>

                  {/* Repo */}
                  <div className="text-white/30 shrink-0 w-[140px] truncate" title={commit.repoName}>
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
                    className="flex items-center justify-end gap-1.5 text-[#38bdf8] hover:text-[#7dd3fc] shrink-0 w-[80px] transition-colors"
                  >
                    <span className="tracking-wider">{commit.id.substring(0, 7)}</span>
                    <ExternalLink size={12} strokeWidth={2.5} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Expand/Collapse Action */}
      {!loading && !error && commits.length > 5 && (
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 px-4 py-2 text-xs font-mono-code text-white/50 hover:text-white border border-white/[0.05] hover:border-white/20 rounded-lg transition-all hover:bg-white/[0.02]"
          >
            {expanded ? 'COLLAPSE LOG' : 'FULL LOG →'}
          </button>
        </div>
      )}
    </section>
  );
}
