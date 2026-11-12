import React from 'react';
import { 
  Shield, 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUp, 
  Heart, 
  Sparkles,
  Lock
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Specializations', href: '#specializations' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Learning', href: '#learning' },
    { name: 'GitHub', href: '#github' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#05050B] border-t border-purple-500/20 pt-16 pb-12 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-32 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-purple-500/15">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-950/70 border border-purple-500/40 flex items-center justify-center text-purple-400 shadow-neon-sm">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl tracking-wider text-white">
                  {personalInfo.fullName.toUpperCase()}
                </span>
                <p className="text-xs font-mono text-purple-400">
                  {personalInfo.professionalTitle.split('|')[0].trim()}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              "Exploring Cybersecurity, AI, IoT & Blockchain to Build a Smarter and Safer Digital Future."
            </p>

            <div className="p-3 rounded-xl bg-purple-950/20 border border-purple-500/20 text-xs font-mono text-purple-300 max-w-sm">
              <span className="text-white font-bold">{personalInfo.brandStatement}</span>
              <p className="text-[11px] text-zinc-400 mt-1">"{personalInfo.brandSubtitle}"</p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono text-purple-300 uppercase tracking-widest">
              Navigation Map
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-zinc-400 hover:text-purple-300 transition-colors py-1 flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-purple-500/60" />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Back To Top */}
          <div className="md:col-span-3 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <h4 className="text-xs font-mono text-purple-300 uppercase tracking-widest">
                Connect Directly
              </h4>
              <div className="flex gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#121124] border border-purple-500/30 text-zinc-300 hover:text-white hover:border-purple-400 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#121124] border border-purple-500/30 text-zinc-300 hover:text-white hover:border-purple-400 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-[#121124] border border-purple-500/30 text-zinc-300 hover:text-white hover:border-purple-400 transition-colors"
                  aria-label="Email Shrushti"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-950/60 border border-purple-500/30 text-xs font-mono text-purple-300 hover:text-white hover:border-purple-400 transition-all shadow-neon-sm"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top [^]</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div>
            © {currentYear} {personalInfo.fullName}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-2 text-purple-300 font-semibold tracking-wider">
            <span>"{personalInfo.footerTagline}"</span>
          </div>

          <div className="flex items-center gap-1.5 text-zinc-400">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>Encrypted & Built for Performance</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

