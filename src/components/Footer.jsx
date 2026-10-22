import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-surface-300 border-t border-white/5 py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/5">
          
          {/* Brand & Closing tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-mono text-white font-extrabold text-lg tracking-wider">
              SHAADAN<span className="text-primary-500">.</span>
            </span>
            <p className="text-xs text-zinc-400 mt-1 max-w-sm">
              Artificial Intelligence Engineering Student at AJIET Mangaluru.
            </p>
            <p className="text-xs font-mono text-zinc-500 mt-2 italic">
              “Designed with curiosity. Built with code.”
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs font-medium text-zinc-400">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center space-x-3">
            <a
              href={`mailto:${personal.email}`}
              className="p-2 rounded-xl bg-surface-200 border border-white/5 text-zinc-400 hover:text-white hover:border-white/20 transition-all"
              aria-label="Email Shaadan Akthar"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={personal.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-surface-200 border border-white/5 text-zinc-400 hover:text-white hover:border-white/20 transition-all"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-surface-200 border border-white/5 text-zinc-400 hover:text-white hover:border-white/20 transition-all"
              aria-label="GitHub profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-surface-200 border border-white/5 text-zinc-400 hover:text-primary-400 hover:border-primary-500/30 transition-all ml-2"
              aria-label="Back to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-3">
          <div>
            &copy; 2026 {personal.name}. All rights reserved.
          </div>
          <div className="flex items-center space-x-2 text-[11px]">
            <span>Crafted with React, Tailwind CSS &amp; Precision</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
