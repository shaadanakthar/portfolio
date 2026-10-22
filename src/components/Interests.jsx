import React from 'react';
import { Cpu, TrendingUp, Scan, Sparkles, Layers, Wrench } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Interests() {
  const { areasOfInterest } = portfolioData;

  const getInterestIcon = (icon) => {
    switch (icon) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-primary-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      case 'ScanFace':
        return <Scan className="w-5 h-5 text-accent-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-violet-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-amber-400" />;
      default:
        return <Cpu className="w-5 h-5 text-primary-400" />;
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-surface-300/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-primary-400 mb-2">
            <span>05</span>
            <span className="w-8 h-[1px] bg-primary-500/50"></span>
            <span>Domains</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Areas of Interest &amp; Exploration
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
            Key fields of research, technology stacks, and applied development that drive my learning journey.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {areasOfInterest.map((item, index) => (
            <div
              key={item.title}
              className="p-5 rounded-2xl glass-panel bg-surface-200/70 border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-3.5">
                <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-primary-500/10 transition-colors">
                  {getInterestIcon(item.icon)}
                </div>
                <span className="text-[10px] font-mono text-zinc-600">
                  DOM_0{index + 1}
                </span>
              </div>
              <h3 className="text-base font-semibold text-white mb-1.5 group-hover:text-primary-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
