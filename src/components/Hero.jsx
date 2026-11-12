import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  Download, 
  ShieldCheck, 
  Terminal, 
  Lock, 
  Radio, 
  Cpu,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const phrases = personalInfo.typingPhrases;

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[phraseIndex];
      
      if (isDeleting) {
        setTypedText(currentPhrase.substring(0, typedText.length - 1));
        setTypingSpeed(40);
      } else {
        setTypedText(currentPhrase.substring(0, typedText.length + 1));
        setTypingSpeed(90);
      }

      if (!isDeleting && typedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setTypingSpeed(300);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, phraseIndex, phrases, typingSpeed]);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden cyber-grid"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Cyber Security Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono shadow-[0_0_15px_rgba(168,85,247,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="tracking-wide">STATUS: {personalInfo.status.nodeStatus}</span>
            </div>

            {/* Greeting & Name */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-mono uppercase tracking-[0.25em] text-purple-400 font-semibold">
                {personalInfo.heroGreeting}
              </p>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-heading font-extrabold tracking-tight text-white">
                SHRUSHTI <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-400">
                  ITGAMPALLI
                </span>
              </h1>
            </div>

            {/* Professional Title & Academic Node */}
            <div className="space-y-1">
              <p className="text-lg sm:text-xl font-medium text-purple-200">
                {personalInfo.professionalTitle}
              </p>
              <p className="text-xs sm:text-sm font-mono text-zinc-400">
                {personalInfo.college} • {personalInfo.branch}
              </p>
            </div>

            {/* Dynamic Typing Subtitle */}
            <div className="h-10 flex items-center justify-center lg:justify-start">
              <span className="text-zinc-400 text-sm sm:text-base font-mono mr-2">Specializing in:</span>
              <span className="text-purple-300 font-mono text-base sm:text-lg font-bold bg-purple-950/70 border border-purple-500/30 px-3 py-1 rounded-md shadow-[0_0_12px_rgba(168,85,247,0.25)]">
                {typedText}
                <span className="inline-block w-2 h-4 ml-1 bg-purple-400 cursor-blink align-middle"></span>
              </span>
            </div>

            {/* Hero Description Quote */}
            <p className="text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed italic border-l-2 border-purple-500/50 pl-4 py-1 bg-purple-950/20 rounded-r-lg">
              "{personalInfo.heroDescription}"
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
              {/* Explore My Work */}
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 shadow-[0_0_25px_rgba(168,85,247,0.45)] hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Download My Resume */}
              <a
                href={personalInfo.resumePath}
                download="Shrushti_Itgampalli_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-zinc-200 bg-[#121124] hover:bg-[#1C1835] border border-purple-500/30 hover:border-purple-400 hover:text-white shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>Download My Resume</span>
              </a>
            </div>

            {/* Social Profile Badges */}
            <div className="pt-3 flex items-center justify-center lg:justify-start gap-4">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Connect:</span>
              
              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#161426] border border-purple-500/30 text-zinc-300 hover:text-purple-300 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all"
                title="Shrushti's GitHub Profile"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#161426] border border-purple-500/30 text-zinc-300 hover:text-purple-300 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all"
                title="Shrushti's LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-[#161426] border border-purple-500/30 text-zinc-300 hover:text-purple-300 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all"
                title={`Email: ${personalInfo.email}`}
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Tagline Footer Highlight */}
            <div className="pt-2">
              <p className="text-xs font-mono text-purple-300/80 tracking-wide flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>"{personalInfo.tagline}"</span>
              </p>
            </div>

          </div>

          {/* Right Column: Hero Profile Image & Futuristic Cyber Rings */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 flex items-center justify-center">
              
              {/* Outer Rotating Cyber Tech Ring */}
              <div 
                className="absolute inset-0 rounded-full border border-dashed border-purple-500/30 animate-spin-slow pointer-events-none"
                style={{ animationDuration: '30s' }}
              />

              {/* Reverse Rotating Concentric Orbit */}
              <div 
                className="absolute inset-4 rounded-full border border-purple-500/20 animate-spin-slow pointer-events-none"
                style={{ animationDirection: 'reverse', animationDuration: '20s' }}
              >
                {/* Orbiting Satellite Dots */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_12px_#A855F7]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 bg-indigo-400 rounded-full shadow-[0_0_10px_#818CF8]" />
              </div>

              {/* Pulsing Cyber Glow Halo */}
              <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-purple-600/30 to-indigo-600/20 blur-xl animate-pulse" />

              {/* Radar Scanner Sweep Effect */}
              <div className="absolute inset-8 rounded-full overflow-hidden pointer-events-none opacity-40">
                <div className="w-full h-full animate-radar origin-center bg-gradient-to-r from-transparent via-purple-500/20 to-purple-400/30" />
              </div>

              {/* Actual Profile Photograph Frame */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full p-1.5 bg-gradient-to-br from-purple-400 via-indigo-500 to-purple-800 shadow-[0_0_35px_rgba(168,85,247,0.55),0_0_60px_rgba(147,51,234,0.3)]">
                
                {/* Inner Border Ring */}
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#080810] bg-[#11111C]">
                  <img
                    src={personalInfo.profileImage}
                    alt="Shrushti Itgampalli - Cybersecurity Engineering Student"
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Floating Cyber Badges */}
                {/* Badge 1: Defensive Mindset */}
                <div className="absolute -top-3 -right-2 bg-[#121124]/90 backdrop-blur-md border border-purple-500/40 rounded-xl px-3 py-1.5 flex items-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <div className="text-left">
                    <p className="text-[10px] font-mono text-zinc-400 uppercase">Focus</p>
                    <p className="text-xs font-bold text-white">Cyber Defense</p>
                  </div>
                </div>

                {/* Badge 2: Emerging Tech */}
                <div className="absolute -bottom-3 -left-3 bg-[#121124]/90 backdrop-blur-md border border-purple-500/40 rounded-xl px-3 py-1.5 flex items-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                  <Cpu className="w-4 h-4 text-purple-400" />
                  <div className="text-left">
                    <p className="text-[10px] font-mono text-zinc-400 uppercase">Domain</p>
                    <p className="text-xs font-bold text-white">AI × IoT × Web3</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

