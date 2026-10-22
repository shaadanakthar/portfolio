import React, { useState } from 'react';
import { ArrowDown, ArrowRight, MapPin, Terminal, Box, Activity } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import HeroCanvas from './HeroCanvas';
import SplineHero from './SplineHero';

export default function Hero() {
  const { personal } = portfolioData;
  const [visualMode, setVisualMode] = useState('spline'); // 'spline' or 'canvas'

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-between overflow-hidden bg-radial-gradient"
    >
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill / Location */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-surface-200/90 border border-white/10 shadow-sm mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-zinc-300">
                {personal.statusBadge}
              </span>
            </div>

            {/* Eyebrow */}
            <div className="flex items-center space-x-2 mb-3">
              <span className="text-xs md:text-sm font-mono tracking-widest text-primary-400 uppercase font-semibold">
                {personal.eyebrow}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Building Intelligent Solutions{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-cyan-400 to-accent-400">
                Through AI &amp; Code.
              </span>
            </h1>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mb-8 font-normal">
              Hi, I’m <span className="text-white font-medium">{personal.name}</span>. An Artificial Intelligence engineering student specializing in <span className="text-zinc-100 font-medium">machine learning</span>, <span className="text-zinc-100 font-medium">computer vision</span>, <span className="text-zinc-100 font-medium">generative AI</span>, and <span className="text-zinc-100 font-medium">full-stack development</span>. Dedicated to transforming theoretical AI models into usable, dependable software.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-accent-600 text-white font-medium text-sm shadow-glow-md hover:brightness-110 active:scale-95 transition-all"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-surface-200/90 border border-white/10 text-zinc-200 hover:text-white hover:bg-surface-100/90 hover:border-white/20 active:scale-95 font-medium text-sm transition-all"
              >
                <span>Get In Touch</span>
              </button>
            </div>

            {/* Location & Quick Meta */}
            <div className="flex items-center space-x-6 text-xs text-zinc-400 font-mono pt-4 border-t border-white/5 w-full">
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-primary-400" />
                <span>{personal.location}</span>
              </div>
              <div className="hidden sm:flex items-center space-x-1.5">
                <Terminal className="w-3.5 h-3.5 text-accent-400" />
                <span>AJIET Mangaluru</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Mode (3D Spline or 2D Neural Canvas) */}
          <div className="lg:col-span-5 w-full flex flex-col">
            {/* Visual View Mode Switcher */}
            <div className="flex items-center justify-end space-x-1.5 mb-2.5">
              <span className="text-[11px] font-mono text-zinc-500 mr-1">Visualizer:</span>
              <button
                type="button"
                onClick={() => setVisualMode('spline')}
                className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                  visualMode === 'spline'
                    ? 'bg-primary-500/20 text-primary-300 border border-primary-500/40 shadow-glow-sm'
                    : 'text-zinc-400 hover:text-zinc-200 bg-surface-200 border border-white/5'
                }`}
              >
                <Box className="w-3 h-3" />
                <span>Spline 3D</span>
              </button>
              <button
                type="button"
                onClick={() => setVisualMode('canvas')}
                className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                  visualMode === 'canvas'
                    ? 'bg-accent-500/20 text-accent-300 border border-accent-500/40 shadow-glow-sm'
                    : 'text-zinc-400 hover:text-zinc-200 bg-surface-200 border border-white/5'
                }`}
              >
                <Activity className="w-3 h-3" />
                <span>2D Graph</span>
              </button>
            </div>

            {/* Active Visualizer */}
            {visualMode === 'spline' ? (
              <SplineHero onSwitchToCanvas={() => setVisualMode('canvas')} />
            ) : (
              <HeroCanvas />
            )}
          </div>

        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="w-full flex justify-center items-center pt-8">
        <button
          type="button"
          onClick={() => scrollTo('about')}
          className="group flex flex-col items-center space-y-2 text-zinc-500 hover:text-zinc-300 transition-colors focus:outline-none"
          aria-label="Scroll down to About section"
        >
          <span className="text-[11px] font-mono tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-zinc-400 group-hover:text-primary-400 transition-colors" />
        </button>
      </div>
    </section>
  );
}
