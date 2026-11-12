import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Sparkles,
  ShieldAlert
} from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Foundations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Education & Academic Journey
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto">
            Comprehensive computer science and engineering coursework with specialized depth in cybersecurity architecture and defense.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Institution Card */}
          <div className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 border border-purple-500/25 relative overflow-hidden">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-purple-950/70 border border-purple-500/40 flex items-center justify-center text-purple-300 shadow-neon-sm">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30 uppercase">
                  {education.status}
                </span>
                <h3 className="text-xl font-heading font-bold text-white mt-1">
                  {education.institution}
                </h3>
                <p className="text-xs text-zinc-400 flex items-center gap-1 font-mono mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" />
                  {education.location}
                </p>
              </div>
            </div>

            {/* Degree & Branch */}
            <div className="p-4 rounded-xl bg-black/40 border border-purple-500/20 mb-6 space-y-1">
              <p className="text-sm font-semibold text-purple-200">
                {education.degree}
              </p>
              <p className="text-xs font-mono text-zinc-300">
                Branch: <span className="text-purple-400 font-bold">{education.branch}</span>
              </p>
              <p className="text-xs font-mono text-zinc-400">
                Academic Term: {education.academicYear}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
              {education.overview}
            </p>

            {/* Key Coursework Badges */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Key Core Coursework</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-purple-950/40 text-zinc-200 border border-purple-500/20 hover:border-purple-400/40 transition-colors"
                  >
                    • {course}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Modern Vertical Timeline with Glowing Purple Nodes */}
          <div className="lg:col-span-7 relative pl-4 sm:pl-8">
            
            {/* Glowing Vertical Line */}
            <div className="absolute top-4 bottom-4 left-4 sm:left-8 w-0.5 bg-gradient-to-b from-purple-500 via-indigo-500 to-purple-800 shadow-[0_0_10px_#A855F7]" />

            <div className="space-y-8">
              {education.milestones.map((milestone, idx) => (
                <div key={idx} className="relative pl-8 sm:pl-10 group">
                  
                  {/* Glowing Node Indicator */}
                  <div className="absolute -left-2.5 top-1.5 w-6 h-6 rounded-full bg-[#080810] border-2 border-purple-400 group-hover:border-purple-300 flex items-center justify-center shadow-[0_0_15px_#A855F7] transition-all">
                    <div className="w-2 h-2 rounded-full bg-purple-400 group-hover:scale-125 transition-transform" />
                  </div>

                  {/* Milestone Card */}
                  <div className="glass-panel p-5 rounded-2xl border border-purple-500/20 hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-purple-400 bg-purple-950/60 px-2.5 py-0.5 rounded border border-purple-500/30">
                        {milestone.year}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400">STAGE 0{idx + 1}</span>
                    </div>

                    <h4 className="text-base font-heading font-bold text-white group-hover:text-purple-300 transition-colors mb-1.5">
                      {milestone.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {milestone.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

