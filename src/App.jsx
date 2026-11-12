import React, { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Specializations from './components/Specializations';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import LearningJourney from './components/LearningJourney';
import GitHubSection from './components/GitHubSection';
import LinkedInSection from './components/LinkedInSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CyberTerminal from './components/CyberTerminal';
import BackToTop from './components/BackToTop';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [darkMode]);

  // Keyboard shortcut to toggle terminal: Ctrl + ` or Alt + T
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey && e.key === '`') || (e.altKey && e.key.toLowerCase() === 't')) {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`min-h-screen relative font-sans ${darkMode ? 'bg-[#080810] text-white' : 'bg-[#F4F4F8] text-[#0F0F1A]'}`}>
      
      {/* Particle & Cyber Node Background (Only active in dark mode or subtle) */}
      <ParticleBackground />

      {/* Futuristic Fixed Navigation */}
      <Navbar 
        onOpenTerminal={() => setTerminalOpen(true)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Specializations />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <LearningJourney />
        <GitHubSection />
        <LinkedInSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Cyber CLI Terminal Overlay */}
      <CyberTerminal 
        isOpen={terminalOpen} 
        onClose={() => setTerminalOpen(false)} 
      />

      {/* Floating Back to Top Button */}
      <BackToTop />

    </div>
  );
}

