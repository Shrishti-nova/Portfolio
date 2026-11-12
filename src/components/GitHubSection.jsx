import React, { useState, useEffect } from 'react';
import { 
  Github, 
  ExternalLink, 
  BookMarked, 
  Users, 
  Code2, 
  Sparkles,
  ShieldCheck,
  FolderPlus
} from 'lucide-react';
import { githubConfig, personalInfo } from '../data/portfolioData';

export default function GitHubSection() {
  const [profileData, setProfileData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const userRes = await fetch(`https://api.github.com/users/${githubConfig.username}`);
        if (userRes.ok) {
          const userData = await userRes.json();
          setProfileData(userData);
        }

        const reposRes = await fetch(`https://api.github.com/users/${githubConfig.username}/repos?sort=updated&per_page=6`);
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          if (Array.isArray(reposData)) {
            setRepos(reposData);
          }
        }
      } catch (err) {
        console.warn("GitHub API rate limited or offline", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <section id="github" className="py-24 relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest">
            <Github className="w-3.5 h-3.5" />
            <span>Open Source & Repositories</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            {githubConfig.heading}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto">
            Direct integration with my official GitHub profile. As new cybersecurity and engineering repositories are published, they will sync live here.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto rounded-full" />
        </div>

        {/* GitHub Profile Banner Card */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-purple-500/25 mb-8 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center gap-5">
              <div className="relative w-16 h-16 rounded-2xl p-1 bg-gradient-to-br from-purple-400 to-indigo-600 shadow-neon-sm overflow-hidden">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.fullName}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-heading font-bold text-white">
                    {personalInfo.fullName}
                  </h3>
                  <span className="text-xs font-mono text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/25">
                    @{githubConfig.username}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 mt-1 max-w-xl">
                  {personalInfo.professionalTitle}
                </p>
                <p className="text-xs font-mono text-purple-400 mt-0.5">
                  {personalInfo.college}
                </p>
              </div>
            </div>

            {/* Profile CTA */}
            <div className="flex items-center gap-4">
              <a
                href={githubConfig.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-neon-sm transition-all hover:scale-105"
              >
                <Github className="w-4 h-4" />
                <span>Visit My GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

        {/* Repositories Display (Live or Clean Placeholder) */}
        {repos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-panel rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <BookMarked className="w-4 h-4 text-purple-400" />
                      <h4 className="text-base font-heading font-bold text-white group-hover:text-purple-300 transition-colors">
                        {repo.name}
                      </h4>
                    </div>
                    <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-purple-400 transition-colors" />
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-2">
                    {repo.description || "Cybersecurity and engineering repository."}
                  </p>
                </div>

                <div className="pt-3 border-t border-purple-500/15 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                    <span>{repo.language || "Code"}</span>
                  </span>
                  <span>{new Date(repo.updated_at).toLocaleDateString()}</span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="p-8 rounded-2xl glass-panel border border-dashed border-purple-500/30 text-center max-w-2xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-purple-400 mx-auto shadow-neon-sm">
              <FolderPlus className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-heading font-bold text-white">
                Upcoming Public Repositories
              </h4>
              <p className="text-xs text-zinc-400 max-w-md mx-auto leading-relaxed">
                Code repositories for planned cybersecurity architectures (AI Phishing Detection, IoT Security, Blockchain Verification, etc.) are being structured for public release.
              </p>
            </div>
            <a
              href={githubConfig.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-400 text-xs font-mono transition-all"
            >
              <Github className="w-4 h-4" />
              <span>Follow @{githubConfig.username} on GitHub</span>
            </a>
          </div>
        )}

      </div>
    </section>
  );
}
