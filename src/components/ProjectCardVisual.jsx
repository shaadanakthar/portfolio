import React from 'react';
import { ShoppingBag, Scan, Sparkles, BarChart3, Check } from 'lucide-react';

export default function ProjectCardVisual({ type }) {
  switch (type) {
    case 'ecommerce':
      // Schematic visual for GadgetHub
      return (
        <div className="w-full h-48 bg-gradient-to-br from-surface-300 via-surface-200 to-surface-300 border-b border-white/5 p-4 flex flex-col justify-between relative overflow-hidden group-hover:border-primary-500/20 transition-all">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl pointer-events-none" />
          
          {/* Top Bar */}
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5 text-[11px] text-zinc-300">
              <ShoppingBag className="w-3.5 h-3.5 text-primary-400" />
              GadgetHub // Store API
            </span>
            <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-zinc-400">
              MongoDB Store
            </span>
          </div>

          {/* Schematic UI Cards */}
          <div className="grid grid-cols-2 gap-2 my-2">
            <div className="p-2.5 rounded-lg bg-surface-100/90 border border-white/10 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="w-6 h-6 rounded bg-primary-500/15 flex items-center justify-center text-[10px] font-mono text-primary-400">
                  G1
                </div>
                <span className="text-[10px] font-mono text-emerald-400">$189.00</span>
              </div>
              <div className="mt-2">
                <div className="h-1.5 w-16 bg-white/20 rounded"></div>
                <div className="h-1 w-10 bg-white/10 rounded mt-1"></div>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-surface-100/90 border border-white/10 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="w-6 h-6 rounded bg-accent-500/15 flex items-center justify-center text-[10px] font-mono text-accent-400">
                  G2
                </div>
                <span className="text-[10px] font-mono text-emerald-400">$349.00</span>
              </div>
              <div className="mt-2">
                <div className="h-1.5 w-14 bg-white/20 rounded"></div>
                <div className="h-1 w-8 bg-white/10 rounded mt-1"></div>
              </div>
            </div>
          </div>

          {/* Bottom Route Wire */}
          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 pt-2 border-t border-white/5">
            <span>GET /api/gadgets</span>
            <span className="text-emerald-400/90">200 OK • auth::jwt</span>
          </div>
        </div>
      );

    case 'computervision':
      // Schematic visual for AI Attendance System
      return (
        <div className="w-full h-48 bg-gradient-to-br from-surface-300 via-surface-200 to-surface-300 border-b border-white/5 p-4 flex flex-col justify-between relative overflow-hidden group-hover:border-accent-500/20 transition-all">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Top Bar */}
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5 text-[11px] text-zinc-300">
              <Scan className="w-3.5 h-3.5 text-accent-400" />
              OpenCV Frame // Multi-Face
            </span>
            <span className="px-2 py-0.5 rounded bg-accent-500/10 border border-accent-500/20 text-[10px] text-accent-300">
              Live Stream
            </span>
          </div>

          {/* Facial Recognition Bounding Box Simulation */}
          <div className="relative flex items-center justify-center my-1 py-1">
            <div className="relative border-2 border-dashed border-accent-400/80 rounded-lg p-3 w-40 flex flex-col items-center justify-center bg-accent-500/5">
              <div className="absolute -top-2 left-2 bg-accent-500 text-white font-mono text-[9px] px-1.5 py-0.2 rounded">
                STUDENT_ID: #4092
              </div>
              <div className="w-10 h-10 rounded-full border border-accent-400/50 flex items-center justify-center my-1 bg-white/5">
                <div className="w-4 h-4 rounded-full bg-accent-400/40 animate-ping"></div>
              </div>
              <span className="text-[10px] font-mono text-zinc-300">Embedding: 128D</span>
              <div className="absolute -bottom-2 right-2 bg-emerald-500/90 text-white font-mono text-[9px] px-1.5 py-0.2 rounded flex items-center gap-1">
                <Check className="w-2.5 h-2.5" />
                Logged
              </div>
            </div>
          </div>

          {/* Bottom Stream Telemetry */}
          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 pt-2 border-t border-white/5">
            <span>InsightFace Vector Index</span>
            <span className="text-zinc-400">FPS: 30 • MongoDB Sync</span>
          </div>
        </div>
      );

    case 'genai':
      // Schematic visual for Code Mentor AI
      return (
        <div className="w-full h-48 bg-gradient-to-br from-surface-300 via-surface-200 to-surface-300 border-b border-white/5 p-4 flex flex-col justify-between relative overflow-hidden group-hover:border-cyan-500/20 transition-all">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Top Bar */}
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5 text-[11px] text-zinc-300">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Streamlit + Gemini LLM
            </span>
            <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-[10px] text-cyan-300">
              Assistant UI
            </span>
          </div>

          {/* Code Explain Window Mockup */}
          <div className="my-1 p-2 rounded-lg bg-surface-100/90 border border-white/10 font-mono text-[10px] space-y-1">
            <div className="text-zinc-500 flex items-center justify-between">
              <span>def quicksort(arr):</span>
              <span className="text-cyan-400 text-[9px]">Analyzing...</span>
            </div>
            <div className="text-zinc-400 pl-3">if len(arr) &lt;= 1: return arr</div>
            <div className="p-1.5 rounded bg-cyan-950/40 border border-cyan-500/20 text-cyan-200 text-[9px] mt-1 flex items-start gap-1">
              <Sparkles className="w-3 h-3 text-cyan-400 shrink-0 mt-0.5" />
              <span>Explanation: Divides array around pivot for O(N log N) average complexity.</span>
            </div>
          </div>

          {/* Bottom Stream Telemetry */}
          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 pt-2 border-t border-white/5">
            <span>Gemini API Streaming</span>
            <span className="text-cyan-400/90">Prompt Tuned</span>
          </div>
        </div>
      );

    case 'analytics':
      // Schematic visual for Student Performance Prediction
      return (
        <div className="w-full h-48 bg-gradient-to-br from-surface-300 via-surface-200 to-surface-300 border-b border-white/5 p-4 flex flex-col justify-between relative overflow-hidden group-hover:border-emerald-500/20 transition-all">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Top Bar */}
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5 text-[11px] text-zinc-300">
              <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
              ML Pipeline // Feature Selection
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-300">
              Academic Model
            </span>
          </div>

          {/* Predictive Feature Weights Chart Simulation */}
          <div className="my-1 space-y-1.5">
            <div>
              <div className="flex justify-between text-[9px] font-mono text-zinc-400 mb-0.5">
                <span>Attendance Rate</span>
                <span>Weight: 0.38</span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-400 h-full rounded-full" style={{ width: '76%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[9px] font-mono text-zinc-400 mb-0.5">
                <span>Internal Test Scores</span>
                <span>Weight: 0.44</span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary-400 h-full rounded-full" style={{ width: '88%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[9px] font-mono text-zinc-400 mb-0.5">
                <span>Assignment Completion</span>
                <span>Weight: 0.18</span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                <div className="bg-accent-400 h-full rounded-full" style={{ width: '42%' }}></div>
              </div>
            </div>
          </div>

          {/* Bottom Stream Telemetry */}
          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 pt-2 border-t border-white/5">
            <span>Regression / Classification</span>
            <span className="text-zinc-400">Train / Test Split</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}
