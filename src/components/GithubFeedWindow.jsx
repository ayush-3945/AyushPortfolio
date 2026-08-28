import React, { useState, useEffect } from 'react';
import { GitCommit, ExternalLink, RefreshCw, AlertCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function GithubFeedWindow() {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGithubEvents = async () => {
    setLoading(true);
    setError(null);
    try {
      // Get the username from the github URL (e.g., https://github.com/ayush-3945)
      const username = portfolioData.personal.github.split('/').pop();
      const response = await fetch(`https://api.github.com/users/${username}/events/public`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch GitHub activity');
      }
      
      const data = await response.json();
      
      // Extract PushEvents and flatten commits
      const recentCommits = [];
      data.forEach(event => {
        if (event.type === 'PushEvent' && event.payload) {
          if (event.payload.commits && event.payload.commits.length > 0) {
            // GitHub returns commits from oldest to newest in a push event, so we reverse it
            const eventCommits = [...event.payload.commits].reverse();
            eventCommits.forEach(commit => {
              recentCommits.push({
                id: commit.sha,
                message: commit.message,
                repoName: event.repo.name,
                repoUrl: `https://github.com/${event.repo.name}`,
                commitUrl: `https://github.com/${event.repo.name}/commit/${commit.sha}`,
                date: new Date(event.created_at)
              });
            });
          } else {
            // Fallback for PushEvent without commits array
            const branch = event.payload.ref ? event.payload.ref.replace('refs/heads/', '') : 'main';
            recentCommits.push({
              id: event.payload.head ? event.payload.head.substring(0, 7) : event.id,
              message: `Pushed updates to ${branch}`,
              repoName: event.repo.name,
              repoUrl: `https://github.com/${event.repo.name}`,
              commitUrl: `https://github.com/${event.repo.name}/commits/${branch}`,
              date: new Date(event.created_at)
            });
          }
        } else if (event.type === 'CreateEvent') {
          recentCommits.push({
            id: event.id,
            message: `Created ${event.payload.ref_type} ${event.payload.ref || ''}`,
            repoName: event.repo.name,
            repoUrl: `https://github.com/${event.repo.name}`,
            commitUrl: `https://github.com/${event.repo.name}`,
            date: new Date(event.created_at)
          });
        } else if (event.type === 'PullRequestEvent' && event.payload.action === 'opened') {
          recentCommits.push({
            id: event.id,
            message: `Opened PR: ${event.payload.pull_request.title}`,
            repoName: event.repo.name,
            repoUrl: `https://github.com/${event.repo.name}`,
            commitUrl: event.payload.pull_request.html_url,
            date: new Date(event.created_at)
          });
        }
      });
      
      // Show latest 15 commits
      setCommits(recentCommits.slice(0, 15));
    } catch (err) {
      console.error('Error fetching GitHub feed:', err);
      setError('Failed to load recent activity. You might have hit the GitHub API rate limit.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGithubEvents();
  }, []);

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-white/[0.08] pb-3 flex items-center justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase flex items-center gap-2">
            <span>Live Commits</span>
            <span className="text-[#FFC15E] text-xl">🐙</span>
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={fetchGithubEvents}
            disabled={loading}
            className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white/60 hover:text-white transition-colors"
            title="Refresh Feed"
          >
            <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
          </button>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F5A623]/10 text-[#FFC15E] font-bold text-xs hover:bg-[#F5A623]/20 transition-colors"
          >
            <span>View Profile</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>

      <div className="min-h-[300px]">
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="animate-pulse flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="w-8 h-8 rounded-full bg-white/[0.05] shrink-0"></div>
                <div className="space-y-2 flex-1">
                  <div className="h-4 bg-white/[0.05] rounded w-3/4"></div>
                  <div className="h-3 bg-white/[0.05] rounded w-1/4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center h-[200px] text-center space-y-3">
            <AlertCircle size={32} className="text-red-400" />
            <p className="text-white/70 text-sm">{error}</p>
            <button 
              onClick={fetchGithubEvents}
              className="px-4 py-2 bg-white/[0.05] hover:bg-white/[0.1] rounded-lg text-xs font-bold"
            >
              Try Again
            </button>
          </div>
        ) : commits.length === 0 ? (
          <div className="flex items-center justify-center h-[200px] text-white/50 text-sm">
            No recent commits found.
          </div>
        ) : (
          <div className="space-y-3 relative before:absolute before:inset-0 before:ml-[19px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/[0.08] before:to-transparent">
            {commits.map((commit, i) => (
              <div key={commit.id + i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Timeline Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#07090e] bg-[#111622] text-[#FFC15E] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-110">
                  <GitCommit size={16} />
                </div>
                
                {/* Commit Card */}
                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:border-[#F5A623]/30 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <a 
                      href={commit.repoUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-[10px] font-mono-code font-bold text-white/50 hover:text-[#FFC15E] transition-colors uppercase tracking-wider"
                    >
                      {commit.repoName.split('/').pop()}
                    </a>
                    <span className="text-[10px] text-white/40">{formatDate(commit.date)}</span>
                  </div>
                  
                  <a 
                    href={commit.commitUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-sm text-white/90 font-medium hover:text-white mb-2 line-clamp-2"
                  >
                    {commit.message.split('\n')[0]}
                  </a>
                  
                  <div className="flex items-center gap-1.5 text-xs text-white/40 font-mono-code">
                    <GitCommit size={12} />
                    <span>{commit.id.substring(0, 7)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
