import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, Shield, CornerDownLeft } from 'lucide-react';
import { personalInfo, technicalSkills, projects, certifications } from '../data/portfolioData';

export default function CyberTerminal({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: '===================================================' },
    { type: 'system', text: 'SHRUSHTI ITGAMPALLI // SECURE CYBER TERMINAL v2.4' },
    { type: 'system', text: 'CONNECTED PROTOCOL: TLS 1.3 // NODE: GNDEC_BIDAR' },
    { type: 'system', text: 'Type "help" to list all available commands.' },
    { type: 'system', text: '===================================================' },
  ]);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'user', text: `shrushti@cyber:~$ ${input}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `AVAILABLE CYBER COMMANDS:
  whoami      - Display Shrushti's identity, college, and security focus
  skills      - List categorized engineering and cybersecurity competencies
  projects    - List the 6 proposed cybersecurity & emerging tech architectures
  certs       - Display certification categories & achievement milestones
  contact     - Display official direct contact channels
  clear       - Clear the current terminal buffer
  matrix      - Trigger defensive cryptography matrix telemetry
  exit        - Close the interactive terminal`
        });
        break;

      case 'whoami':
        newHistory.push({
          type: 'output',
          text: `USER: ${personalInfo.fullName}
TITLE: ${personalInfo.professionalTitle}
COLLEGE: ${personalInfo.college}
DEGREE: ${personalInfo.degree} - ${personalInfo.branch}
TAGLINE: "${personalInfo.tagline}"
STATUS: Open for Cybersecurity Internships & Emerging Tech R&D`
        });
        break;

      case 'skills':
        const skillsText = technicalSkills.map(
          (c) => `[${c.category.toUpperCase()}]: ${c.skills.map(s => s.name).join(', ')}`
        ).join('\n');
        newHistory.push({ type: 'output', text: skillsText });
        break;

      case 'projects':
        const projText = projects.map(
          (p) => `* [PLANNED ARCHITECTURE] ${p.title} (${p.technologies.join(', ')})`
        ).join('\n');
        newHistory.push({ type: 'output', text: projText });
        break;

      case 'certs':
        const certText = certifications.map(
          (c) => `• [${c.category}] ${c.title}`
        ).join('\n');
        newHistory.push({ type: 'output', text: certText });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `EMAIL:    ${personalInfo.email}
GITHUB:   ${personalInfo.github}
LINKEDIN: ${personalInfo.linkedin}
LOCATION: ${personalInfo.location}`
        });
        break;

      case 'matrix':
        newHistory.push({
          type: 'output',
          text: `[DECRYPTING STREAM] ... 
SHA-256: 01001001 01010100 01000111 01000001
AES-256-GCM KEY: VERIFIED_TAMPER_RESISTANT
MQTT_NODE: SECURE // 127.0.0.1:8883
ZERO_TRUST_STATUS: CYBER_DEFENSE_ESTABLISHED`
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${cmd}". Type "help" for a list of valid commands.`
        });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="w-full max-w-3xl h-[520px] rounded-2xl bg-[#0C0B18] border border-purple-500/40 shadow-[0_0_40px_rgba(168,85,247,0.35)] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Title Bar */}
        <div className="bg-[#141226] px-4 py-3 border-b border-purple-500/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <button onClick={onClose} className="w-3 h-3 rounded-full bg-rose-500 hover:opacity-80" />
              <div className="w-3 h-3 rounded-full bg-amber-500 opacity-60" />
              <div className="w-3 h-3 rounded-full bg-emerald-500 opacity-60" />
            </div>
            <div className="ml-3 flex items-center gap-2 font-mono text-xs text-purple-300">
              <Shield className="w-3.5 h-3.5 text-purple-400" />
              <span>shrushti@sec-terminal:~ (bash)</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded text-zinc-400 hover:text-white hover:bg-purple-950/50"
            title="Close Terminal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Screen Body */}
        <div className="flex-1 p-5 overflow-y-auto font-mono text-xs sm:text-sm space-y-2 text-zinc-300 select-text">
          {history.map((item, idx) => (
            <div
              key={idx}
              className={`leading-relaxed whitespace-pre-wrap ${
                item.type === 'system'
                  ? 'text-purple-400/90 font-semibold'
                  : item.type === 'user'
                  ? 'text-emerald-400 font-bold'
                  : item.type === 'error'
                  ? 'text-rose-400'
                  : 'text-zinc-200'
              }`}
            >
              {item.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Prompt Input Bar */}
        <form onSubmit={handleCommand} className="bg-[#121124] p-3 border-t border-purple-500/30 flex items-center gap-2 font-mono text-xs sm:text-sm">
          <span className="text-purple-400 font-bold">shrushti@cyber:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help' for commands..."
            className="flex-1 bg-transparent text-white focus:outline-none placeholder-zinc-600"
            autoFocus
          />
          <button type="submit" className="text-zinc-400 hover:text-purple-400">
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
}
