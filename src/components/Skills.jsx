import React, { useState } from 'react';
import { 
  Terminal, 
  Globe, 
  ShieldCheck, 
  Wrench, 
  Sparkles, 
  Cpu, 
  Code2, 
  CheckCircle,
  Database,
  Lock,
  Layers
} from 'lucide-react';
import { technicalSkills } from '../data/portfolioData';

const categoryIcons = {
  Programming: Terminal,
  "Web Development": Globe,
  Cybersecurity: ShieldCheck,
  "Tools & Environments": Wrench,
  "Emerging Technologies": Sparkles
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...technicalSkills.map((c) => c.category)];

  const displayedCategories = selectedCategory === 'All'
    ? technicalSkills
    : technicalSkills.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#080810]/60">
      
      {/* Background Accent */}
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Technical Skills & Domains
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto">
            Structured competency framework spanning low-level system programming, full-stack web applications, security defenses, and emerging computing paradigms.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto rounded-full" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-purple-600 text-white shadow-neon-sm border border-purple-400'
                  : 'bg-[#121124] text-zinc-400 hover:text-white border border-purple-500/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((group) => {
            const Icon = categoryIcons[group.category] || Layers;
            return (
              <div
                key={group.category}
                className="glass-panel rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.3)]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-white">
                        {group.category}
                      </h3>
                      <p className="text-[11px] text-zinc-400 font-mono">
                        {group.skills.length} core competencies
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/skill flex items-center justify-between p-3 rounded-xl bg-black/40 border border-purple-500/15 hover:border-purple-400/40 hover:bg-purple-950/30 transition-all"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-2 h-2 rounded-full bg-purple-400 group-hover/skill:scale-125 transition-transform" />
                          <span className="text-sm font-medium text-zinc-200 group-hover/skill:text-white">
                            {skill.name}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono text-purple-300/80 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/20">
                            {skill.type}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="mt-6 pt-4 border-t border-purple-500/15 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Verified in Curriculum
                  </span>
                  <span className="text-purple-400">SEC_TIER_1</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

