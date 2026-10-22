import React, { useState } from 'react';
import { Mail, Send, Copy, Check, ExternalLink, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject.';
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 3000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatusMessage({
        type: 'error',
        text: 'Please correct the highlighted fields before sending.',
      });
      return;
    }

    // Build functional mailto URI to ensure real, transparent delivery without fake submissions
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Open mail client
    window.location.href = mailtoUrl;

    setStatusMessage({
      type: 'success',
      text: 'Opening your default mail client with your pre-filled inquiry. If your client did not launch, feel free to copy the direct email above!',
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-primary-400 mb-2">
            <span>06</span>
            <span className="w-8 h-[1px] bg-primary-500/50"></span>
            <span>Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Have an idea? Let's build something.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
            Open to internship opportunities, academic collaborations, open-source discussions, and technical exchanges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card with 1-click copy */}
            <div className="p-6 rounded-2xl glass-panel bg-surface-200/90 border border-white/10 shadow-card">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                Direct Email
              </span>
              <a
                href={`mailto:${personal.email}`}
                className="text-lg sm:text-xl font-bold text-white hover:text-primary-400 transition-colors break-all block mb-4"
              >
                {personal.email}
              </a>

              <div className="flex items-center space-x-3">
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-primary-500 text-white text-xs font-medium hover:bg-primary-600 transition-colors shadow-glow-sm"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Direct Email</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 text-xs font-medium transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Profiles & Links */}
            <div className="p-6 rounded-2xl glass-panel bg-surface-200/90 border border-white/10 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                Professional Networks
              </span>

              {/* LinkedIn */}
              <a
                href={personal.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-surface-100 border border-white/5 hover:border-primary-500/30 hover:bg-surface-50 transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-primary-300 transition-colors">
                      LinkedIn Profile
                    </div>
                    <div className="text-xs text-zinc-400 font-mono">
                      in/shaadan-akthar
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-primary-400 transition-colors" />
              </a>

              {/* GitHub Placeholder */}
              <div className="p-3.5 rounded-xl bg-surface-100 border border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-white/10 text-zinc-300">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">
                        GitHub Profile
                      </div>
                      <div className="text-xs text-zinc-400 font-mono">
                        {personal.github}
                      </div>
                    </div>
                  </div>
                  {personal.isGithubPlaceholder ? (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      Editable Placeholder
                    </span>
                  ) : (
                    <a
                      href={personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                {personal.isGithubPlaceholder && (
                  <p className="text-[11px] font-mono text-zinc-500 pt-1 border-t border-white/5">
                    💡 Tip: Update your GitHub profile link anytime in <code className="text-zinc-400">src/data/portfolioData.js</code>.
                  </p>
                )}
              </div>

            </div>

          </div>

          {/* Right Column: Accessible Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel bg-surface-200/90 border border-white/10 shadow-card">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Fill out the details below. This form triggers your system's default mail client with your inquiry formatted cleanly for direct delivery.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase text-zinc-300 mb-1.5">
                      Your Name <span className="text-primary-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Connor"
                      className={`w-full px-4 py-2.5 rounded-xl bg-surface-300 border text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? 'border-red-500/50 focus:ring-red-500'
                          : 'border-white/10 focus:border-primary-500 focus:ring-primary-500/30'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400 font-mono">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase text-zinc-300 mb-1.5">
                      Your Email <span className="text-primary-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-surface-300 border text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? 'border-red-500/50 focus:ring-red-500'
                          : 'border-white/10 focus:border-primary-500 focus:ring-primary-500/30'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400 font-mono">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono uppercase text-zinc-300 mb-1.5">
                    Subject <span className="text-primary-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. AI/ML Internship Opportunity"
                    className={`w-full px-4 py-2.5 rounded-xl bg-surface-300 border text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.subject
                        ? 'border-red-500/50 focus:ring-red-500'
                        : 'border-white/10 focus:border-primary-500 focus:ring-primary-500/30'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-400 font-mono">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase text-zinc-300 mb-1.5">
                    Message <span className="text-primary-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, team opportunity, or inquiry..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-surface-300 border text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 transition-all resize-y ${
                      errors.message
                        ? 'border-red-500/50 focus:ring-red-500'
                        : 'border-white/10 focus:border-primary-500 focus:ring-primary-500/30'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400 font-mono">{errors.message}</p>
                  )}
                </div>

                {/* Status Message */}
                {statusMessage && (
                  <div
                    className={`p-3.5 rounded-xl text-xs flex items-start space-x-2.5 ${
                      statusMessage.type === 'success'
                        ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                        : 'bg-red-500/10 text-red-300 border border-red-500/20'
                    }`}
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{statusMessage.text}</span>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-accent-600 text-white font-medium text-sm shadow-glow-md hover:brightness-110 active:scale-95 transition-all"
                  >
                    <span>Launch Mail Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>

              {/* Static portfolio honest transparency notice */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-start space-x-2 text-[11px] font-mono text-zinc-500">
                <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-zinc-400" />
                <span>
                  Delivery Note: Operates via direct mailto protocol. No third-party data tracking or unauthenticated form backends used.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
