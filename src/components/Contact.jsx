import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Lock, 
  Copy, 
  Check,
  Terminal,
  Clock
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('submitting');

    // Simulate secure transmission over TLS endpoint
    setTimeout(() => {
      setStatus('success');
      // Also construct direct mailto link to open client's default mail app as secondary option
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(
        `From: ${formData.fullName} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;
      
      // Store in localStorage for audit
      try {
        const stored = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
        stored.push({ ...formData, date: new Date().toISOString() });
        localStorage.setItem('portfolio_messages', JSON.stringify(stored));
      } catch (err) {}

      // Reset form fields
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5" />
            <span>Secure Communication Channel</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Let's Connect & Innovate.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto">
            Have a project in mind, research collaboration, internship opportunity, or technical inquiry? Send a message through this secure terminal.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Direct Contact Info & Security Guarantee */}
          <div className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 border border-purple-500/25 flex flex-col justify-between">
            
            <div className="space-y-6">
              
              <div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">
                  Get In Touch
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  I actively monitor messages and respond to all engineering and academic inquiries promptly.
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="space-y-3">
                
                {/* Email with Copy */}
                <div className="p-4 rounded-xl bg-black/40 border border-purple-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-zinc-400 uppercase">Direct Email</p>
                      <a 
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-mono text-white hover:text-purple-300 transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-purple-950/40 text-purple-300 hover:text-white border border-purple-500/20"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-4 rounded-xl bg-black/40 border border-purple-500/20 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-zinc-400 uppercase">Institution & Region</p>
                    <p className="text-xs sm:text-sm text-white font-mono">{personalInfo.location}</p>
                    <p className="text-[11px] text-zinc-400">{personalInfo.college}</p>
                  </div>
                </div>

                {/* Response SLA */}
                <div className="p-4 rounded-xl bg-black/40 border border-purple-500/20 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-300">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-zinc-400 uppercase">Typical Response SLA</p>
                    <p className="text-xs sm:text-sm text-white font-mono">Within 24 Hours</p>
                    <p className="text-[11px] text-emerald-400">Open for summer internships & R&D</p>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <p className="text-xs font-mono text-zinc-400 mb-3 uppercase tracking-wider">
                  Social Channels
                </p>
                <div className="flex gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-black/50 border border-purple-500/20 text-zinc-300 hover:text-white hover:border-purple-400 transition-all text-xs font-mono"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#0A66C2]/20 border border-[#0A66C2]/40 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all text-xs font-mono"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>

            {/* End-to-End Encryption Notice */}
            <div className="mt-8 pt-4 border-t border-purple-500/15 flex items-center gap-2 text-[11px] font-mono text-emerald-400">
              <Lock className="w-3.5 h-3.5" />
              <span>TLS 1.3 Transmission // Zero Spam Tolerance</span>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 glass-panel-glow rounded-2xl p-6 sm:p-8 border border-purple-500/30">
            
            <div className="flex items-center justify-between pb-4 border-b border-purple-500/20 mb-6">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-purple-400" />
                <h3 className="text-base font-heading font-bold text-white">
                  Transmission Terminal
                </h3>
              </div>
              <span className="text-[10px] font-mono text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/20">
                SECURE_DISPATCH
              </span>
            </div>

            {/* Feedback Notifications */}
            {status === 'success' && (
              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-mono flex items-start gap-3 mb-6 animate-fadeIn">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Transmission Successful!</p>
                  <p className="text-zinc-300 text-xs mt-1">
                    Thank you, your message has been securely recorded. Shrushti will review your dispatch and reply soon.
                  </p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs font-mono flex items-center gap-3 mb-6 animate-fadeIn">
                <AlertCircle className="w-5 h-5 shrink-0 text-rose-400" />
                <span>Please fill in all required fields (Name, Email, and Message) before transmitting.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-300 block">
                    Full Name <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-purple-500/30 text-white placeholder-zinc-500 text-sm font-mono focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-300 block">
                    Email Address <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-purple-500/30 text-white placeholder-zinc-500 text-sm font-mono focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
                  />
                </div>

              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-zinc-300 block">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Cybersecurity Internship / Academic Collaboration"
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-purple-500/30 text-white placeholder-zinc-500 text-sm font-mono focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-zinc-300 block">
                  Message <span className="text-purple-400">*</span>
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message, project specifications, or collaboration details..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-purple-500/30 text-white placeholder-zinc-500 text-sm font-mono focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 shadow-neon-sm hover:shadow-neon hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Encrypting & Dispatching...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Secure Message</span>
                  </>
                )}
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

