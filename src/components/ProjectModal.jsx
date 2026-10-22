import React, { useEffect } from 'react';
import { X, ExternalLink, AlertCircle, Info, Code2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-background/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl glass-panel bg-surface-200 border border-white/10 shadow-2xl p-6 sm:p-8 my-auto overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-mono text-primary-400 font-semibold">
              PROJECT {project.number}
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-xs font-mono text-zinc-400">
              {project.category}
            </span>
            <span className="text-zinc-600">•</span>
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium ${
                project.status.includes('Prototype')
                  ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                  : project.status.includes('Proposed')
                  ? 'bg-blue-500/15 text-blue-300 border border-blue-500/30'
                  : 'bg-purple-500/15 text-purple-300 border border-purple-500/30'
              }`}
            >
              {project.status}
            </span>
          </div>

          <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-zinc-400 text-sm mt-1">{project.tagline}</p>
        </div>

        {/* Modal Body */}
        <div className="space-y-6 max-h-[65vh] overflow-y-auto pr-1">
          {/* Overview */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-primary-400" />
              Project Overview
            </h3>
            <p className="text-sm text-zinc-200 leading-relaxed">
              {project.overview || project.description}
            </p>
          </div>

          {/* Problem & Approach Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-surface-300/80 border border-white/5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                The Problem
              </h4>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-300/80 border border-white/5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                Technical Approach
              </h4>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {project.approach}
              </p>
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2.5 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-accent-400" />
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-surface-100 border border-white/10 text-xs font-mono text-zinc-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Current Scope & Limitations (Guarantees factual accuracy) */}
          <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs text-amber-200/90 flex items-start space-x-3">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-amber-300 block mb-0.5 font-mono text-[11px] uppercase tracking-wide">
                Current Scope &amp; Implementation Status
              </span>
              <p className="leading-relaxed">{project.scopeLimitation}</p>
            </div>
          </div>

          {/* Links Section */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-zinc-400 font-mono">
              {project.githubUrl || project.liveUrl ? (
                <span className="text-emerald-400">Verified links available</span>
              ) : (
                <span className="text-zinc-500 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-500"></span>
                  {project.placeholderMessage || 'Links will be published upon repository release.'}
                </span>
              )}
            </div>

            <div className="flex items-center space-x-3">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-medium transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white/5 text-zinc-500 text-xs font-medium cursor-not-allowed border border-white/5"
                  title="Repository not yet published"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-zinc-600" />
                  <span>Repo Pending</span>
                </button>
              )}

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary-500 to-accent-600 text-white text-xs font-medium hover:brightness-110 transition-all shadow-glow-sm"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white/5 text-zinc-500 text-xs font-medium cursor-not-allowed border border-white/5"
                  title="Live deployment under development"
                >
                  <span>Demo In Progress</span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-600" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
