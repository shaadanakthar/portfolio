import React from 'react';
import { GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-primary-400 mb-2">
            <span>04</span>
            <span className="w-8 h-[1px] bg-primary-500/50"></span>
            <span>Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Academic Background
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
            Formal undergraduate engineering curriculum in Artificial Intelligence.
          </p>
        </div>

        {/* Timeline / Card */}
        <div className="max-w-3xl">
          <div className="relative pl-6 sm:pl-8 border-l-2 border-primary-500/30 space-y-12">
            
            {/* Timeline Node */}
            <div className="relative group">
              {/* Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary-500 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
              </div>

              {/* Education Card */}
              <div className="rounded-2xl glass-panel bg-surface-200/80 border border-white/10 p-6 sm:p-8 shadow-card glass-panel-hover">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-primary-500/10 text-primary-300 border border-primary-500/30">
                    <Calendar className="w-3.5 h-3.5 mr-1.5 text-primary-400" />
                    {education.period}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">
                    Undergraduate Degree
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1">
                  {education.degree}
                </h3>

                <div className="text-base font-medium text-primary-400 mb-4 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>{education.institution}</span>
                </div>

                <div className="flex items-center text-xs font-mono text-zinc-400 mb-6">
                  <MapPin className="w-3.5 h-3.5 mr-1.5 text-zinc-500" />
                  <span>{education.location}</span>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed border-t border-white/5 pt-4">
                  {education.description}
                </p>

                {/* Factual Academic Attributes */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-zinc-400">
                  <div className="flex items-center space-x-2 p-2.5 rounded-lg bg-surface-100 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Specialization: Artificial Intelligence</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2.5 rounded-lg bg-surface-100 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Status: Active Undergrad (3rd Year)</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
