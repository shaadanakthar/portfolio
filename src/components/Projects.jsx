import React, { useState } from 'react';
import { ExternalLink, AlertCircle, Info } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import ProjectCardVisual from './ProjectCardVisual';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-surface-300/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-primary-400 mb-2">
            <span>03</span>
            <span className="w-8 h-[1px] bg-primary-500/50"></span>
            <span>Featured Projects</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Selected Work &amp; Prototypes
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
                Hands-on applications across full-stack systems, computer vision workflows, and generative AI integrations.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-200/90 border border-white/5 text-xs font-mono text-zinc-400 w-fit">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>All statuses explicitly verified</span>
            </div>
          </div>
        </div>

        {/* 2x2 Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="group rounded-2xl glass-panel bg-surface-200/80 border border-white/10 overflow-hidden flex flex-col justify-between glass-panel-hover"
            >
              {/* Top Visual Schematic */}
              <div className="relative">
                <ProjectCardVisual type={proj.visualType} />
                
                {/* Status Badge Overlay */}
                <div className="absolute top-3 right-3 z-10">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium shadow-sm backdrop-blur-md ${
                      proj.status.includes('Prototype')
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        : proj.status.includes('Proposed')
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                        : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                    }`}
                  >
                    {proj.status}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category & Number */}
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                    <span className="text-primary-400 font-semibold">{proj.category}</span>
                    <span className="text-zinc-600">PROJ_{proj.number}</span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-medium mb-3">
                    {proj.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                    {proj.description}
                  </p>

                  {/* Explicit limitation notice for truth in advertising */}
                  {proj.scopeLimitation && (
                    <div className="mb-5 p-2.5 rounded-lg bg-surface-100/70 border border-white/5 text-[11px] font-mono text-zinc-400 flex items-start gap-2">
                      <AlertCircle className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
                      <span>{proj.scopeLimitation}</span>
                    </div>
                  )}
                </div>

                {/* Bottom Card Meta: Tech Tags & Actions */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-surface-100 border border-white/5 text-[11px] font-mono text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(proj)}
                      className="inline-flex items-center space-x-1.5 text-xs font-semibold text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>View Specifications</span>
                    </button>

                    <div className="flex items-center space-x-2">
                      {proj.githubUrl ? (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/5 text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
                          aria-label={`GitHub repo for ${proj.title}`}
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      ) : (
                        <span
                          className="px-2 py-1 rounded text-[10px] font-mono text-zinc-500 bg-white/5 border border-white/5 cursor-help"
                          title="Code repository placeholder - editable in portfolioData.js"
                        >
                          Repo TBA
                        </span>
                      )}

                      {proj.liveUrl ? (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-primary-500/20 text-primary-300 hover:bg-primary-500/30 transition-colors"
                          aria-label={`Live demo for ${proj.title}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setSelectedProject(proj)}
                          className="px-2.5 py-1 rounded text-[10px] font-mono text-zinc-400 hover:text-zinc-200 bg-surface-100 hover:bg-white/10 transition-colors"
                        >
                          Details &rarr;
                        </button>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detailed Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
