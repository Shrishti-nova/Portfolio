import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Bug, 
  Cpu, 
  Radio, 
  Blocks, 
  Network, 
  Lock, 
  Code2, 
  Sparkles,
  Layers,
  ArrowUpRight,
  BookmarkCheck,
  Compass
} from 'lucide-react';
import { specializations } from '../data/portfolioData';

// Map icon string names to actual Lucide icons
const iconMap = {
  ShieldAlert: ShieldAlert,
  Bug: Bug,
  Cpu: Cpu,
  Radio: Radio,
  Blocks: Blocks,
  Network: Network,
  Lock: Lock,
  Code2: Code2
};

export default function Specializations() {
  const [filter, setFilter] = useState('all');

  const filteredItems = specializations.filter((item) => {
    if (filter === 'demonstrated') return item.isCore;
    if (filter === 'learning') return !item.isCore;
    return true;
  });

  return (
    <section id="specializations" className="py-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            <span>Domains of Focus</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Specializations & Technical Focus
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto">
            Combining foundational security principles with cutting-edge frontiers in AI, connected IoT hardware, and decentralized cryptographic ledgers.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto rounded-full" />
        </div>

        {/* Filter Tabs: Clearly Distinguishing Learning vs Demonstrated */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              filter === 'all'
                ? 'bg-purple-600 text-white shadow-neon-sm border border-purple-400'
                : 'bg-[#121124] text-zinc-400 hover:text-white border border-purple-500/20'
            }`}
          >
            All Specializations (8)
          </button>
          
          <button
            onClick={() => setFilter('demonstrated')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              filter === 'demonstrated'
                ? 'bg-purple-600 text-white shadow-neon-sm border border-purple-400'
                : 'bg-[#121124] text-zinc-400 hover:text-white border border-purple-500/20'
            }`}
          >
            <BookmarkCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Demonstrated & Core Focus</span>
          </button>

          <button
            onClick={() => setFilter('learning')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              filter === 'learning'
                ? 'bg-purple-600 text-white shadow-neon-sm border border-purple-400'
                : 'bg-[#121124] text-zinc-400 hover:text-white border border-purple-500/20'
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-purple-300" />
            <span>Learning & Exploration Focus</span>
          </button>
        </div>

        {/* 8 Interactive Specialization Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((spec) => {
            const IconComponent = iconMap[spec.icon] || ShieldAlert;
            return (
              <div
                key={spec.id}
                className="group relative glass-panel rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                {/* Neon Corner Glow on Hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-tr-2xl -z-10 group-hover:bg-purple-500/15 transition-colors" />

                <div>
                  {/* Card Header: Icon & Type Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-purple-300 group-hover:text-purple-200 group-hover:border-purple-400 group-hover:shadow-[0_0_18px_rgba(168,85,247,0.5)] transition-all">
                      <IconComponent className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </div>

                    <span
                      className={`text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border ${
                        spec.isCore
                          ? 'bg-emerald-950/50 text-emerald-300 border-emerald-500/30'
                          : 'bg-purple-950/50 text-purple-300 border-purple-500/30'
                      }`}
                    >
                      {spec.isCore ? 'Demonstrated' : 'Learning Focus'}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-purple-300 transition-colors mb-2.5 flex items-center justify-between">
                    <span>{spec.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-purple-400" />
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {spec.description}
                  </p>
                </div>

                {/* Sub-Highlights */}
                <div className="pt-3 border-t border-purple-500/15">
                  <div className="flex flex-wrap gap-1.5">
                    {spec.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-purple-300/90 border border-purple-500/15"
                      >
                        #{h}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

