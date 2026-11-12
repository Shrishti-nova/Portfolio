import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle, 
  ExternalLink, 
  ShieldCheck, 
  FileBadge, 
  Calendar, 
  Building2, 
  Sparkles,
  PlusCircle,
  X,
  Edit3
} from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCert, setSelectedCert] = useState(null);

  const categories = [
    'All', 
    'Cybersecurity Certifications', 
    'AI and ML Courses', 
    'IoT Workshops', 
    'Blockchain Workshops', 
    'Hackathons', 
    'College Competitions', 
    'Technical Events', 
    'Coding Achievements'
  ];

  const filteredCerts = certifications.filter((cert) => {
    if (activeCategory === 'All') return true;
    return cert.category === activeCategory;
  });

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#080810]/70">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            <span>Milestones & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Certifications & Achievements
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto">
            Organized certificate gallery with editable placeholders across cybersecurity, AI/ML, IoT, blockchain, hackathons, and collegiate technical achievements.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto rounded-full" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-purple-600 text-white shadow-neon-sm border border-purple-400'
                  : 'bg-[#121124] text-zinc-400 hover:text-white border border-purple-500/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group glass-panel rounded-2xl p-5 border border-purple-500/25 hover:border-purple-400/60 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 relative"
            >
              <div>
                {/* Header: Icon & Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-purple-300 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all">
                    <FileBadge className="w-5 h-5 text-purple-400" />
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border bg-purple-950/60 text-purple-300 border-purple-500/30">
                    Editable Slot
                  </span>
                </div>

                {/* Category Subtitle */}
                <span className="text-[11px] font-mono text-purple-400 font-semibold block mb-1">
                  {cert.category}
                </span>

                {/* Title */}
                <h3 className="text-sm font-heading font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                  {cert.title}
                </h3>

                {/* Issuer & Date */}
                <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono mb-3">
                  <span className="flex items-center gap-1 text-zinc-400">
                    <Building2 className="w-3.5 h-3.5 text-purple-400" />
                    {cert.issuer}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 mb-4">
                  {cert.description}
                </p>
              </div>

              {/* Skills / Topics */}
              <div className="pt-3 border-t border-purple-500/15">
                <div className="flex flex-wrap gap-1.5">
                  {cert.skillsCovered.map((s, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-purple-200 border border-purple-500/15"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Certificate Viewer Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="glass-panel-glow max-w-xl w-full rounded-2xl p-6 sm:p-8 border border-purple-500/40 relative space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-purple-950/50 text-zinc-300 hover:text-white border border-purple-500/30"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">
                  {selectedCert.category}
                </span>
                <span className="text-zinc-600">•</span>
                <span className="text-xs font-mono text-purple-300">
                  Editable Placeholder
                </span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white">
                {selectedCert.title}
              </h3>
              <p className="text-sm font-mono text-purple-300 mt-1">
                Issuing Body / Event: {selectedCert.issuer}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/60 border border-purple-500/20 text-xs text-zinc-300 leading-relaxed">
              {selectedCert.description}
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono text-purple-300 uppercase tracking-wider">
                Focus Areas & Learning Outcomes
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedCert.skillsCovered.map((s, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md bg-purple-950/60 text-purple-200 border border-purple-500/30 text-xs font-mono"
                  >
                    ✓ {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-purple-500/20 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>Ready for verification update</span>
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 rounded-xl bg-purple-600 text-white font-semibold shadow-neon-sm"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
