import React from 'react';
import { GraduationCap, MapPin, Calendar, Compass, Code, Layers, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about, personal } = portfolioData;

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-surface-300/40 border-t border-white/5">
      {/* Background accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-primary-400 mb-2">
            <span>01</span>
            <span className="w-8 h-[1px] bg-primary-500/50"></span>
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Academic Foundations &amp; Engineering Focus
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Authentic Statement & Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Direct Resume Statement Card */}
            <div className="relative p-6 sm:p-8 rounded-2xl glass-panel bg-surface-200/90 border border-white/10 shadow-card">
              <div className="absolute -top-3.5 left-6 px-3 py-0.5 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-[11px] font-mono font-medium">
                Personal Statement
              </div>
              <blockquote className="text-zinc-200 text-base sm:text-lg leading-relaxed font-normal italic pt-2">
                {about.quote}
              </blockquote>
            </div>

            {/* Philosophy & Approach */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-surface-200/60 border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 mb-3">
                  <Code className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">Applied AI</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Moving beyond toy scripts into real problem-solving pipelines with practical utility.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface-200/60 border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center text-accent-400 mb-3">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">AI to UI Bridge</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Connecting models to clean React frontends and robust REST API backends.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface-200/60 border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">Active Prototyping</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Validating concepts early with fast, iterative development cycles.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Verified Academic & Profile Matrix */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Profile Matrix Card */}
            <div className="rounded-2xl glass-panel bg-surface-200/90 border border-white/10 p-6 shadow-card">
              <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-5">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Profile Snapshot
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-primary-500/10 text-primary-400 border border-primary-500/20">
                  Verified Data
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-white/5 text-primary-400 mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-500 uppercase">Degree Program</div>
                    <div className="text-sm font-semibold text-zinc-100">B.E. in Artificial Intelligence</div>
                    <div className="text-xs text-zinc-400">AJ Institute of Engineering and Technology</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-white/5 text-accent-400 mt-0.5">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-500 uppercase">Academic Timeline</div>
                    <div className="text-sm font-semibold text-zinc-100">Started September 2024</div>
                    <div className="text-xs text-zinc-400">Currently Pursuing (3rd-Year Student)</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-white/5 text-cyan-400 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-500 uppercase">Base Location</div>
                    <div className="text-sm font-semibold text-zinc-100">Mangaluru, Karnataka, India</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-white/5 text-emerald-400 mt-0.5">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-500 uppercase">Primary Specialization</div>
                    <div className="text-sm font-semibold text-zinc-100">AI / ML &amp; Full-Stack Software</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Factual Code Object Preview */}
            <div className="rounded-2xl bg-surface-300 border border-white/5 p-4 font-mono text-xs overflow-x-auto shadow-inner">
              <div className="text-zinc-500 pb-2 border-b border-white/5 flex items-center justify-between">
                <span># shaadan_manifest.json</span>
                <span className="text-[10px] text-zinc-600">utf-8</span>
              </div>
              <pre className="pt-3 text-zinc-300 leading-relaxed font-mono text-[11px]">
{`{
  "name": "${personal.name}",
  "status": "Engineering Undergrad",
  "major": "Artificial Intelligence",
  "specialties": ["ML", "Computer Vision", "Generative AI", "Full-Stack"],
  "focus": "Practical Application & Prototyping",
  "openForInternships": true
}`}
              </pre>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
