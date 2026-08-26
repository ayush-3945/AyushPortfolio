import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, MapPin, Send, CheckCircle2, Github, Linkedin, Twitter } from 'lucide-react';

export default function ContactSection() {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: personal.web3FormsKey || '731fe9d4-4680-4740-98c3-132ccd3d28ed',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: 'Ayush Portfolio Live Contact Form',
          subject: `🚀 Portfolio Message from ${formData.name}`
        })
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        window.open(`mailto:${personal.email}?subject=Project inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`);
        setSubmitted(true);
      }
    } catch (err) {
      window.open(`mailto:${personal.email}?subject=Project inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`);
      setSubmitted(true);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 6000);
    }
  };

  return (
    <section id="contact" className="w-full max-w-[1580px] mx-auto px-4 sm:px-8 md:px-12 py-16 scroll-mt-20">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono-code text-[#F5A623] uppercase tracking-widest mb-1.5 font-bold">
            <span className="w-2 h-2 rounded-full bg-[#F5A623] shadow-[0_0_8px_#FFC15E]"></span>
            <span>GET IN TOUCH // 04</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] via-[#FFC15E] to-amber-200">Something Extraordinary</span>
          </h2>
        </div>
        <span className="text-xs font-mono-code text-white/40 tracking-widest uppercase">
          AVAILABLE FOR HIRE
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Form (7 cols) */}
        <div className="lg:col-span-7 glass-bento rounded-3xl p-7 sm:p-10 border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.7)] flex flex-col justify-between">
          {submitted ? (
            <div className="my-auto py-12 text-center space-y-3 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#F5A623]/15 border border-[#F5A623]/30 flex items-center justify-center text-[#FFC15E] mx-auto text-3xl shadow-[0_0_20px_rgba(245,166,35,0.3)]">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">Message Delivered to Ayush!</h3>
              <p className="text-white/60 text-sm max-w-md mx-auto">
                Thank you for reaching out. I have received your message in my inbox and will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono-code text-white/50 uppercase mb-2 tracking-wider">YOUR NAME</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm outline-none focus:border-[#F5A623] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono-code text-white/50 uppercase mb-2 tracking-wider">EMAIL ADDRESS</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm outline-none focus:border-[#F5A623] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono-code text-white/50 uppercase mb-2 tracking-wider">YOUR MESSAGE</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, ideas or opportunities..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm outline-none focus:border-[#F5A623] transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#F5A623] via-[#FFC15E] to-amber-500 text-black font-black text-xs tracking-widest uppercase hover:opacity-95 transition-all shadow-[0_10px_25px_rgba(245,166,35,0.35)] cursor-pointer disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                    <span>DISPATCHING MESSAGE...</span>
                  </>
                ) : (
                  <>
                    <span>SEND MESSAGE</span>
                    <Send size={14} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Info & Socials (5 cols) */}
        <div className="lg:col-span-5 glass-bento rounded-3xl p-7 sm:p-10 border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.7)] flex flex-col justify-between space-y-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">Direct Contact</h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                Whether you have an upcoming project, a hackathon collaboration, or an engineering role, my inbox is always open.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#F5A623]/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F5A623]/12 border border-[#F5A623]/25 flex items-center justify-center text-[#FFC15E] group-hover:scale-110 transition-transform">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-mono-code text-white/40 uppercase">EMAIL ADDRESS</div>
                  <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#FFC15E] transition-colors">
                    {personal.email}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <div className="w-10 h-10 rounded-xl bg-[#F5A623]/12 border border-[#F5A623]/25 flex items-center justify-center text-[#FFC15E]">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-mono-code text-white/40 uppercase">LOCATION</div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    {personal.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Socials Link Row */}
          <div className="pt-4 border-t border-white/[0.06]">
            <div className="text-[10px] font-mono-code text-white/40 uppercase mb-3">CONNECT ACROSS THE WEB</div>
            <div className="flex gap-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#F5A623]/40 text-white hover:text-[#FFC15E] transition-all flex items-center justify-center"
              >
                <Github size={18} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#F5A623]/40 text-white hover:text-[#FFC15E] transition-all flex items-center justify-center"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personal.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#F5A623]/40 text-white hover:text-[#FFC15E] transition-all flex items-center justify-center"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
