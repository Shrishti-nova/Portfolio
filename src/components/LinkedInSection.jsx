import React from 'react';
import { 
  Linkedin, 
  ExternalLink, 
  UserCheck, 
  Sparkles, 
  ShieldCheck, 
  Send,
  MessageSquare
} from 'lucide-react';
import { linkedinConfig, personalInfo } from '../data/portfolioData';

export default function LinkedInSection() {
  return (
    <section id="linkedin" className="py-20 relative overflow-hidden bg-[#080810]/70">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-indigo-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main LinkedIn Card */}
        <div className="glass-panel-glow rounded-3xl p-8 sm:p-10 border border-purple-500/30 relative overflow-hidden">
          
          {/* Cyber Corner Glows */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-purple-600/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Avatar & Connection Details */}
            <div className="md:col-span-8 space-y-4">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest">
                <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                <span>Professional Network</span>
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                  Connect With Shrushti on LinkedIn
                </h3>
                <p className="text-xs sm:text-sm font-mono text-purple-300">
                  {linkedinConfig.headline}
                </p>
              </div>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                {linkedinConfig.connectionPitch}
              </p>

              {/* Highlights */}
              <div className="pt-2 space-y-2">
                {linkedinConfig.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right: Connect CTA & Profile Snapshot */}
            <div className="md:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-black/50 border border-purple-500/25 text-center space-y-5">
              
              <div className="relative w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-[#0A66C2] via-purple-500 to-indigo-500 shadow-neon-sm">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.fullName}
                  className="w-full h-full object-cover object-top rounded-full"
                  onError={(e) => { e.target.src = '/photo.jpg'; }}
                />
                <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-[#0A66C2] flex items-center justify-center text-white border-2 border-[#080810]">
                  <Linkedin className="w-3.5 h-3.5" />
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white font-heading">{personalInfo.fullName}</h4>
                <p className="text-[11px] font-mono text-zinc-400">{personalInfo.location}</p>
              </div>

              <a
                href={linkedinConfig.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white text-xs font-semibold shadow-[0_0_15px_rgba(10,102,194,0.4)] transition-all hover:scale-105"
              >
                <UserCheck className="w-4 h-4" />
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

