import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  ShieldAlert, 
  Clock, 
  Layers, 
  X, 
  ChevronRight,
  Cpu,
  Terminal,
  Lock,
  Radio,
  FileCheck2,
  KeyRound,
  Activity,
  Sparkles
} from 'lucide-react';
import { projects } from '../data/portfolioData';

// Visual Cyber Banner Graphic Generator for the 6 Proposed Projects
const renderCyberVisual = (id) => {
  switch (id) {
    case 'ai-phishing':
      return (
        <div className="w-full h-44 rounded-xl bg-gradient-to-br from-purple-950 via-[#131127] to-[#0A0915] p-4 flex flex-col justify-between border border-purple-500/20 relative overflow-hidden group-hover:border-purple-400/50 transition-all">
          <div className="absolute -right-4 -bottom-4 w-28 h-28 bg-purple-600/20 rounded-full blur-2xl" />
          <div className="flex items-center justify-between z-10">
            <span className="text-[10px] font-mono text-purple-400 bg-purple-900/40 px-2 py-0.5 rounded border border-purple-500/30">
              AI_CLASSIFIER_v1.0
            </span>
            <Cpu className="w-5 h-5 text-purple-400" />
          </div>
          <div className="space-y-1.5 font-mono text-[11px] text-zinc-400 z-10">
            <div className="flex items-center justify-between bg-black/40 px-2 py-1 rounded">
              <span className="text-zinc-500">Target:</span>
              <span className="text-rose-400">Suspicious Domain Spoof</span>
            </div>
            <div className="flex items-center justify-between bg-black/40 px-2 py-1 rounded">
              <span className="text-zinc-500">Algorithm:</span>
              <span className="text-emerald-400">NLP Vector Feature Analysis</span>
            </div>
            <div className="flex items-center justify-between bg-black/40 px-2 py-1 rounded">
              <span className="text-zinc-500">Status:</span>
              <span className="text-purple-300 font-bold">Planned Architecture</span>
            </div>
          </div>
        </div>
      );

    case 'iot-smart-security':
      return (
        <div className="w-full h-44 rounded-xl bg-gradient-to-br from-purple-950 via-[#131127] to-[#0A0915] p-4 flex flex-col justify-between border border-purple-500/20 relative overflow-hidden group-hover:border-purple-400/50 transition-all">
          <div className="absolute -left-4 -bottom-4 w-28 h-28 bg-indigo-600/20 rounded-full blur-2xl" />
          <div className="flex items-center justify-between z-10">
            <span className="text-[10px] font-mono text-purple-400 bg-purple-900/40 px-2 py-0.5 rounded border border-purple-500/30">
              MQTT_TLS_BROKER
            </span>
            <Radio className="w-5 h-5 text-indigo-400" />
          </div>
          <div className="space-y-1.5 font-mono text-[11px] text-zinc-400 z-10">
            <div className="flex items-center justify-between bg-black/40 px-2 py-1 rounded">
              <span>Sensor Nodes:</span>
              <span className="text-emerald-400">ENCRYPTED // AES-128</span>
            </div>
            <div className="flex items-center justify-between bg-black/40 px-2 py-1 rounded">
              <span>Tamper Sensor:</span>
              <span className="text-purple-300">Intrusion Alert Logic</span>
            </div>
            <div className="flex items-center justify-between bg-black/40 px-2 py-1 rounded">
              <span>Status:</span>
              <span className="text-cyan-400">Planned Prototype</span>
            </div>
          </div>
        </div>
      );

    case 'blockchain-doc-verification':
      return (
        <div className="w-full h-44 rounded-xl bg-gradient-to-br from-purple-950 via-[#131127] to-[#0A0915] p-4 flex flex-col justify-between border border-purple-500/20 relative overflow-hidden group-hover:border-purple-400/50 transition-all">
          <div className="absolute -right-4 -top-4 w-28 h-28 bg-purple-600/20 rounded-full blur-2xl" />
          <div className="flex items-center justify-between z-10">
            <span className="text-[10px] font-mono text-purple-400 bg-purple-900/40 px-2 py-0.5 rounded border border-purple-500/30">
              LEDGER_HASH_CHAIN
            </span>
            <FileCheck2 className="w-5 h-5 text-purple-400" />
          </div>
          <div className="space-y-1.5 font-mono text-[11px] text-zinc-400 z-10">
            <div className="bg-black/40 px-2 py-1 rounded text-zinc-300 truncate">
              SHA-256 Digest Verification
            </div>
            <div className="flex items-center justify-between bg-black/40 px-2 py-1 rounded">
              <span>Ledger State:</span>
              <span className="text-emerald-400">Immutable & Decentralized</span>
            </div>
            <div className="flex items-center justify-between bg-black/40 px-2 py-1 rounded">
              <span>Status:</span>
              <span className="text-purple-300">Planned Architecture</span>
            </div>
          </div>
        </div>
      );

    case 'password-strength-analyzer':
      return (
        <div className="w-full h-44 rounded-xl bg-gradient-to-br from-purple-950 via-[#131127] to-[#0A0915] p-4 flex flex-col justify-between border border-purple-500/20 relative overflow-hidden group-hover:border-purple-400/50 transition-all">
          <div className="flex items-center justify-between z-10">
            <span className="text-[10px] font-mono text-purple-400 bg-purple-900/40 px-2 py-0.5 rounded border border-purple-500/30">
              ENTROPY_EVALUATOR
            </span>
            <KeyRound className="w-5 h-5 text-purple-400" />
          </div>
          <div className="space-y-1.5 font-mono text-[11px] text-zinc-400 z-10">
            <div className="flex items-center justify-between bg-black/40 px-2 py-1 rounded">
              <span>Shannon Entropy:</span>
              <span className="text-purple-300">Bit-strength Calculations</span>
            </div>
            <div className="flex items-center justify-between bg-black/40 px-2 py-1 rounded">
              <span>Breach DB Checks:</span>
              <span className="text-emerald-400">Dictionary Match Engine</span>
            </div>
            <div className="flex items-center justify-between bg-black/40 px-2 py-1 rounded">
              <span>Status:</span>
              <span className="text-indigo-300">Planned Prototype</span>
            </div>
          </div>
        </div>
      );

    case 'network-traffic-dashboard':
      return (
        <div className="w-full h-44 rounded-xl bg-gradient-to-br from-purple-950 via-[#131127] to-[#0A0915] p-4 flex flex-col justify-between border border-purple-500/20 relative overflow-hidden group-hover:border-purple-400/50 transition-all">
          <div className="flex items-center justify-between z-10">
            <span className="text-[10px] font-mono text-purple-400 bg-purple-900/40 px-2 py-0.5 rounded border border-purple-500/30">
              PACKET_TELEMETRY
            </span>
            <Activity className="w-5 h-5 text-cyan-400" />
          </div>
          <div className="space-y-1.5 font-mono text-[11px] text-zinc-400 z-10">
            <div className="flex items-center justify-between bg-black/40 px-2 py-1 rounded">
              <span>Protocol Stream:</span>
              <span className="text-cyan-300">TCP / UDP / ICMP Header Inspection</span>
            </div>
            <div className="flex items-center justify-between bg-black/40 px-2 py-1 rounded">
              <span>Recon Defense:</span>
              <span className="text-amber-400">Port Scan Sweep Detection</span>
            </div>
            <div className="flex items-center justify-between bg-black/40 px-2 py-1 rounded">
              <span>Status:</span>
              <span className="text-emerald-400">Planned Architecture</span>
            </div>
          </div>
        </div>
      );

    case 'secure-login-auth':
      return (
        <div className="w-full h-44 rounded-xl bg-gradient-to-br from-purple-950 via-[#131127] to-[#0A0915] p-4 flex flex-col justify-between border border-purple-500/20 relative overflow-hidden group-hover:border-purple-400/50 transition-all">
          <div className="flex items-center justify-between z-10">
            <span className="text-[10px] font-mono text-purple-400 bg-purple-900/40 px-2 py-0.5 rounded border border-purple-500/30">
              ZERO_TRUST_AUTH
            </span>
            <Lock className="w-5 h-5 text-purple-400" />
          </div>
          <div className="space-y-1.5 font-mono text-[11px] text-zinc-400 z-10">
            <div className="flex items-center justify-between bg-black/40 px-2 py-1 rounded">
              <span>Hashing Algo:</span>
              <span className="text-purple-300">Salted Bcrypt (Adaptive Work Factor)</span>
            </div>
            <div className="flex items-center justify-between bg-black/40 px-2 py-1 rounded">
              <span>Two-Factor Auth:</span>
              <span className="text-emerald-400">TOTP (RFC 6238 Standard)</span>
            </div>
            <div className="flex items-center justify-between bg-black/40 px-2 py-1 rounded">
              <span>Status:</span>
              <span className="text-indigo-300">Planned Architecture</span>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { label: 'All Proposed Innovations (6)', value: 'all' },
    { label: 'Cybersecurity & Defense', value: 'cyber' },
    { label: 'AI & Intelligence', value: 'ai' },
    { label: 'IoT & Smart Devices', value: 'iot' },
    { label: 'Blockchain & Cryptography', value: 'blockchain' }
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'cyber') return p.category.includes('Cybersecurity') || p.category.includes('Network') || p.category.includes('Web Security');
    if (filter === 'ai') return p.category.includes('AI');
    if (filter === 'iot') return p.category.includes('IoT');
    if (filter === 'blockchain') return p.category.includes('Blockchain');
    return true;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Proposed Innovations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Turning Ideas Into Innovation.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto">
            Proposed project architectures and technical designs combining Cybersecurity, Artificial Intelligence, IoT, and Blockchain.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto rounded-full" />
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                filter === cat.value
                  ? 'bg-purple-600 text-white shadow-neon-sm border border-purple-400'
                  : 'bg-[#121124] text-zinc-400 hover:text-white border border-purple-500/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 6 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group glass-panel rounded-2xl p-5 border border-purple-500/20 hover:border-purple-400/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Cyber Banner Graphic */}
                <div className="mb-5 cursor-pointer" onClick={() => setSelectedProject(project)}>
                  {renderCyberVisual(project.id)}
                </div>

                {/* Status & Category */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider font-semibold">
                    {project.category}
                  </span>

                  <span className="text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full border bg-amber-950/50 text-amber-300 border-amber-500/30 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>{project.status}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 
                  onClick={() => setSelectedProject(project)}
                  className="text-lg font-heading font-bold text-white group-hover:text-purple-300 transition-colors mb-2 cursor-pointer line-clamp-1"
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-xs leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/50 text-purple-200 border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-purple-500/15 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-mono text-purple-300 hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>Architecture Specs</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-black/40 border border-purple-500/25 text-zinc-300 hover:text-white hover:border-purple-400 transition-colors"
                    title="View Shrushti's GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="glass-panel-glow max-w-2xl w-full rounded-2xl p-6 sm:p-8 border border-purple-500/40 relative space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-purple-950/50 text-zinc-300 hover:text-white border border-purple-500/30"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">
                  {selectedProject.category}
                </span>
                <span className="text-zinc-600">•</span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border bg-amber-950/50 text-amber-300 border-amber-500/30">
                  {selectedProject.status}
                </span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white">
                {selectedProject.title}
              </h3>
            </div>

            {/* Visual Screen */}
            <div>{renderCyberVisual(selectedProject.id)}</div>

            {/* Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono text-purple-300 uppercase tracking-wider">Project Concept</h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {/* Architectural Workflow */}
            {selectedProject.architecture && (
              <div className="p-4 rounded-xl bg-black/60 border border-purple-500/20 space-y-1.5 font-mono text-xs">
                <span className="text-purple-400 font-bold flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  Planned Architecture Pipeline:
                </span>
                <p className="text-zinc-300 leading-relaxed">
                  {selectedProject.architecture}
                </p>
              </div>
            )}

            {/* Key Features */}
            {selectedProject.keyFeatures && (
              <div className="space-y-2">
                <h4 className="text-xs font-mono text-purple-300 uppercase tracking-wider">Security & Functional Highlights</h4>
                <ul className="space-y-1.5 text-xs text-zinc-300">
                  {selectedProject.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono text-purple-300 uppercase tracking-wider">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((t, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-purple-950/60 text-purple-200 border border-purple-500/30 text-xs font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-purple-500/20 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">
                Proposed Research & Development Idea
              </span>

              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-neon-sm transition-all"
              >
                <Github className="w-4 h-4" />
                <span>Visit GitHub Profile</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
