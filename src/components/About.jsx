import React from 'react';
import { 
  ShieldCheck, 
  Terminal, 
  Binary, 
  Cpu, 
  Radio, 
  Blocks, 
  Lock, 
  Award,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { aboutMe, personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#080810]/70">
      
      {/* Decorative Cyber Grid & Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest">
            <Terminal className="w-3.5 h-3.5" />
            <span>Identity & Vision</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            {aboutMe.heading}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto rounded-full" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Glassmorphic About Card & Bio */}
          <div className="lg:col-span-7 flex flex-col justify-between glass-panel rounded-2xl p-6 sm:p-8 border border-purple-500/25 relative overflow-hidden">
            
            {/* Cyber Corner Markers */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-purple-400" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-purple-400" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-400" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-400" />

            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-purple-500/20 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-mono text-xs text-purple-300 uppercase tracking-widest">
                    SYSTEM PROFILE // SHRUSHTI_ITGAMPALLI
                  </span>
                </div>
                <span className="text-xs font-mono text-zinc-400">GNDEC_BIDAR::CSE_CYBER</span>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
                {aboutMe.paragraphs.map((p, idx) => (
                  <p key={idx} className={idx === 0 ? "font-medium text-white" : ""}>
                    {p}
                  </p>
                ))}
              </div>

              {/* Core Pillars */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {aboutMe.keyAttributes.map((attr, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-500/20 hover:border-purple-400/50 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                      <h4 className="text-xs font-bold font-heading text-white">{attr.title}</h4>
                    </div>
                    <p className="text-xs text-zinc-400 leading-snug pl-6">{attr.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats Strip */}
            <div className="mt-8 pt-6 border-t border-purple-500/20 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {aboutMe.stats.map((stat, idx) => (
                <div key={idx} className="p-2 rounded-lg bg-black/40 border border-purple-500/15">
                  <div className="text-lg sm:text-xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-white mt-0.5">{stat.label}</div>
                  <div className="text-[10px] text-zinc-400 font-mono">{stat.sub}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Futuristic Cyber Technology Illustration & Live Node Terminal */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Cyber Security Architecture Terminal Illustration */}
            <div className="glass-panel-glow rounded-2xl p-6 border border-purple-500/30 relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-purple-500/20">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 font-mono text-xs text-zinc-400">sec-core-daemon.sh</span>
                </div>
                <span className="text-[10px] font-mono text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30">
                  v2.6.4_STABLE
                </span>
              </div>

              {/* Code / Architecture Telemetry Screen */}
              <div className="font-mono text-xs space-y-2.5 pt-4 text-zinc-300">
                <p className="text-purple-400">
                  <span className="text-zinc-500">$</span> init_cyber_stack --student "Shrushti"
                </p>
                <div className="pl-4 space-y-1.5 border-l border-purple-500/30 text-[11px]">
                  <p className="text-emerald-400">✓ Threat Intelligence Engine: ACTIVE</p>
                  <p className="text-purple-300">✓ Cryptography Primitives: SHA256 / AES / RSA</p>
                  <p className="text-indigo-300">✓ Smart Node Interconnect: IoT MQTT Gateway</p>
                  <p className="text-cyan-300">✓ AI Anomaly Classifier: TENSOR_READY</p>
                  <p className="text-zinc-400">✓ Immutable Audit Ledger: BLOCKCHAIN_VERIFIED</p>
                </div>
                <div className="p-3 mt-3 rounded-lg bg-black/60 border border-purple-500/25">
                  <p className="text-zinc-400 text-[11px] leading-relaxed">
                    <span className="text-purple-400 font-bold">CORE PHILOSOPHY:</span> "The future of technology depends on combining bold innovation with rigorous security."
                  </p>
                </div>
              </div>
            </div>

            {/* Futuristic Tech Stack Grid Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel p-4 rounded-xl border border-purple-500/20 hover:border-purple-400/50 transition-all hover:-translate-y-1">
                <div className="w-8 h-8 rounded-lg bg-purple-900/50 border border-purple-500/40 flex items-center justify-center text-purple-300 mb-2 shadow-[0_0_12px_rgba(168,85,247,0.3)]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-heading font-bold text-white">Security First</h4>
                <p className="text-xs text-zinc-400 mt-1">Defending systems from reconnaissance to mitigation.</p>
              </div>

              <div className="glass-panel p-4 rounded-xl border border-purple-500/20 hover:border-purple-400/50 transition-all hover:-translate-y-1">
                <div className="w-8 h-8 rounded-lg bg-purple-900/50 border border-purple-500/40 flex items-center justify-center text-purple-300 mb-2 shadow-[0_0_12px_rgba(168,85,247,0.3)]">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-heading font-bold text-white">AI Automation</h4>
                <p className="text-xs text-zinc-400 mt-1">Leveraging models to detect anomalies and phishing patterns.</p>
              </div>

              <div className="glass-panel p-4 rounded-xl border border-purple-500/20 hover:border-purple-400/50 transition-all hover:-translate-y-1">
                <div className="w-8 h-8 rounded-lg bg-purple-900/50 border border-purple-500/40 flex items-center justify-center text-purple-300 mb-2 shadow-[0_0_12px_rgba(168,85,247,0.3)]">
                  <Radio className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-heading font-bold text-white">Connected IoT</h4>
                <p className="text-xs text-zinc-400 mt-1">Bridging embedded smart devices with safe communications.</p>
              </div>

              <div className="glass-panel p-4 rounded-xl border border-purple-500/20 hover:border-purple-400/50 transition-all hover:-translate-y-1">
                <div className="w-8 h-8 rounded-lg bg-purple-900/50 border border-purple-500/40 flex items-center justify-center text-purple-300 mb-2 shadow-[0_0_12px_rgba(168,85,247,0.3)]">
                  <Blocks className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-heading font-bold text-white">Decentralization</h4>
                <p className="text-xs text-zinc-400 mt-1">Exploring cryptographic tamper resistance via blockchain.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

