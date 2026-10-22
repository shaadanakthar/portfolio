import React from 'react';
import { Code2, Brain, Layout, Database } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-primary-400" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-accent-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      default:
        return <Code2 className="w-5 h-5 text-primary-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-primary-400 mb-2">
            <span>02</span>
            <span className="w-8 h-[1px] bg-primary-500/50"></span>
            <span>Technical Skills</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Tools &amp; Technologies
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
                Core competencies across programming languages, machine learning architectures, web engineering, and modern developer tooling.
              </p>
            </div>
            <div className="text-xs font-mono text-zinc-500 bg-surface-200/80 px-3 py-1.5 rounded-lg border border-white/5 w-fit">
              No arbitrary % metrics • Resume-verified stack
            </div>
          </div>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((cat, idx) => (
            <div
              key={cat.category}
              className="group relative rounded-2xl glass-panel bg-surface-200/70 border border-white/10 p-6 flex flex-col justify-between glass-panel-hover"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 group-hover:border-primary-500/30 transition-colors">
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500 bg-white/5 px-2 py-0.5 rounded-md">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-white mb-1.5 tracking-tight group-hover:text-primary-300 transition-colors">
                  {cat.category}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {cat.description}
                </p>

                {/* Items */}
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-surface-300/80 border border-white/5 hover:border-white/20 transition-all text-xs font-medium text-zinc-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-400/80"></span>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Accent Indicator */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>{cat.items.length} Technologies</span>
                <span className="text-zinc-400 group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
