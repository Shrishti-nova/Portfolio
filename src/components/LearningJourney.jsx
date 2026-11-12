import React, { useState } from 'react';
import { 
  Compass, 
  TrendingUp, 
  BookOpen, 
  Sliders, 
  Check, 
  Edit3,
  Layers,
  Sparkles,
  Zap
} from 'lucide-react';
import { learningJourney as initialTracks } from '../data/portfolioData';

export default function LearningJourney() {
  const [tracks, setTracks] = useState(initialTracks);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleProgressChange = (index, newProgress) => {
    const updated = [...tracks];
    updated[index].progress = Number(newProgress);
    if (newProgress >= 90) updated[index].status = "Advanced / Mastered";
    else if (newProgress >= 75) updated[index].status = "Deep Dive / Active";
    else if (newProgress >= 50) updated[index].status = "In Progress / Exploring";
    else updated[index].status = "Early Foundations";
    setTracks(updated);
  };

  return (
    <section id="learning" className="py-24 relative overflow-hidden bg-[#080810]/70">
      
      {/* Background Ambience */}
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            <span>Continuous Evolution</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Always Learning. Always Exploring.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto">
            A real-time progression tracker capturing active study domains, hands-on experiments, and technical milestones.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto rounded-full" />
        </div>

        {/* Learning Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30">
                    {track.category}
                  </span>

                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-500/30">
                    {track.status}
                  </span>
                </div>

                {/* Topic Name */}
                <h3 className="text-lg font-heading font-bold text-white mb-2">
                  {track.topic}
                </h3>

                {/* Focus Scope */}
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {track.focus}
                </p>
              </div>

              {/* Progress Slider / Meter */}
              <div className="pt-4 border-t border-purple-500/15 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400">Mastery Level:</span>
                  <span className="text-purple-300 font-bold">{track.progress}%</span>
                </div>

                {/* Visual Progress Bar */}
                <div className="w-full h-2 rounded-full bg-black/60 border border-purple-500/20 overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-400 rounded-full shadow-[0_0_10px_#A855F7] transition-all duration-500"
                    style={{ width: `${track.progress}%` }}
                  />
                </div>

                {/* Manual Adjust Control */}
                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => setEditingIndex(editingIndex === idx ? null : idx)}
                    className="text-[11px] font-mono text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors"
                  >
                    <Sliders className="w-3 h-3" />
                    <span>{editingIndex === idx ? 'Done' : 'Adjust Progress'}</span>
                  </button>
                  <span className="text-[10px] font-mono text-zinc-500">Live Tracker</span>
                </div>

                {editingIndex === idx && (
                  <div className="pt-3 pb-1">
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={track.progress}
                      onChange={(e) => handleProgressChange(idx, e.target.value)}
                      className="w-full accent-purple-500 bg-purple-950/40 rounded-lg cursor-pointer"
                    />
                  </div>
                )}

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

