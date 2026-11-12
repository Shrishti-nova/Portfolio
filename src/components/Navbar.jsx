import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Terminal, 
  Menu, 
  X, 
  FileText, 
  Sun, 
  Moon, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenTerminal, darkMode, setDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Detect active section
      const sections = ['hero', 'about', 'specializations', 'skills', 'projects', 'certifications', 'education', 'learning', 'github', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080810]/85 dark:bg-[#080810]/85 backdrop-blur-xl border-b border-purple-500/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a 
            href="#hero" 
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Shrushti Itgampalli Portfolio Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/40 text-purple-400 group-hover:border-purple-400 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all">
              <Shield className="w-5 h-5 transition-transform group-hover:scale-110" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#080810] animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg tracking-wider text-white group-hover:text-purple-300 transition-colors">
                SHRUSHTI<span className="text-purple-400">.</span>ITG
              </span>
              <span className="text-[10px] font-mono tracking-widest text-purple-400/80 uppercase">
                CYBER // SEC
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-[#121124]/70 border border-purple-500/20 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const target = link.href.replace('#', '');
              const isActive = activeSection === target;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 relative ${
                    isActive
                      ? 'text-white bg-purple-600/30 text-purple-200 shadow-[0_0_12px_rgba(168,85,247,0.3)] border border-purple-500/30'
                      : 'text-zinc-400 hover:text-white hover:bg-purple-900/20'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons: Terminal, Theme Toggle, Resume */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Cyber Terminal Button */}
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-purple-950/40 text-purple-300 border border-purple-500/30 hover:border-purple-400 hover:bg-purple-900/40 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all"
              title="Launch Cyber Command Terminal"
            >
              <Terminal className="w-3.5 h-3.5 text-purple-400" />
              <span>[CLI]</span>
            </button>

            {/* Dark / Light Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-[#161426] text-zinc-300 hover:text-purple-300 border border-purple-500/20 hover:border-purple-500/40 transition-colors"
              aria-label="Toggle Theme"
              title="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-purple-400" />}
            </button>

            {/* Resume Button */}
            <a
              href={personalInfo.resumePath}
              download="Shrushti_Itgampalli_Resume.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.35)] transition-all hover:scale-105"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu & Terminal Buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-lg bg-purple-950/50 text-purple-300 border border-purple-500/30"
              title="Launch Terminal"
            >
              <Terminal className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#161426] text-zinc-300 hover:text-white border border-purple-500/20"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-purple-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0C0B18]/95 backdrop-blur-2xl border-b border-purple-500/30 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-zinc-300 hover:text-purple-300 font-medium py-2 text-sm border-b border-purple-950/40"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-purple-400" />
              </a>
            ))}

            <div className="pt-4 flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  setDarkMode(!darkMode);
                  setMobileMenuOpen(false);
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-[#161426] text-xs text-zinc-300 border border-purple-500/20"
              >
                {darkMode ? <Sun className="w-3.5 h-3.5 text-amber-300" /> : <Moon className="w-3.5 h-3.5 text-purple-400" />}
                <span>{darkMode ? 'Light Theme' : 'Dark Theme'}</span>
              </button>

              <a
                href={personalInfo.resumePath}
                download="Shrushti_Itgampalli_Resume.pdf"
                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-purple-600 text-xs font-semibold text-white shadow-neon-sm"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Get Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

