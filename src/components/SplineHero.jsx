import React, { useEffect, useState, useRef } from 'react';
import { Sparkles, Terminal, RotateCw, AlertTriangle, Layers } from 'lucide-react';

export default function SplineHero({
  sceneUrl = 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode',
  onSwitchToCanvas,
}) {
  const [loading, setLoading] = useState(true);
  const [scriptLoaded, setScriptLoaded] = useState(() => {
    return typeof window !== 'undefined' && typeof customElements !== 'undefined'
      ? !!customElements.get('spline-viewer')
      : false;
  });
  const [loadError, setLoadError] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (scriptLoaded) return;

    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.72/build/spline-viewer.js';
    script.async = true;

    script.onload = () => {
      setScriptLoaded(true);
    };

    script.onerror = () => {
      console.error('Failed to load Spline 3D viewer script from CDN.');
      setLoadError(true);
      setLoading(false);
    };

    document.head.appendChild(script);

    // Timeout fallback after 8 seconds if 3D scene takes too long
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, [scriptLoaded]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[420px] md:h-[500px] rounded-2xl overflow-hidden glass-panel border border-white/10 shadow-card bg-surface-200/90 flex flex-col justify-between"
    >
      {/* Top Header Bar */}
      <div className="relative z-20 flex items-center justify-between px-4 py-3 border-b border-white/5 bg-surface-300/80 backdrop-blur-md">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60"></div>
          </div>
          <span className="text-xs font-mono text-zinc-300 pl-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-accent-400" />
            spline_3d::interactive_core
          </span>
        </div>

        <div className="flex items-center space-x-2">
          {onSwitchToCanvas && (
            <button
              type="button"
              onClick={onSwitchToCanvas}
              className="text-[11px] font-mono text-zinc-400 hover:text-white px-2 py-0.5 rounded bg-white/5 border border-white/5 transition-colors"
              title="Switch back to 2D Canvas"
            >
              2D Canvas View
            </button>
          )}
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-primary-500/10 text-primary-400 border border-primary-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse mr-1.5"></span>
            3D WebGL
          </span>
        </div>
      </div>

      {/* 3D Spline Canvas Container */}
      <div className="relative flex-1 w-full h-full overflow-hidden flex items-center justify-center">
        {/* Loading Spinner */}
        {loading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-surface-200/80 backdrop-blur-sm transition-opacity duration-300">
            <div className="w-10 h-10 border-2 border-primary-500/30 border-t-primary-500 rounded-full animate-spin mb-3"></div>
            <p className="text-xs font-mono text-zinc-400 flex items-center gap-2">
              <RotateCw className="w-3.5 h-3.5 animate-spin text-primary-400" />
              Initializing 3D Spline Scene...
            </p>
          </div>
        )}

        {/* Error Fallback */}
        {loadError ? (
          <div className="p-6 text-center max-w-sm">
            <AlertTriangle className="w-8 h-8 text-amber-400 mx-auto mb-2" />
            <h4 className="text-sm font-semibold text-white mb-1">WebGL / Network Notice</h4>
            <p className="text-xs text-zinc-400 mb-3">
              Unable to load external 3D Spline asset. You can switch to the native 2D Canvas neural graph.
            </p>
            {onSwitchToCanvas && (
              <button
                type="button"
                onClick={onSwitchToCanvas}
                className="px-3 py-1.5 rounded-lg bg-primary-500 text-white text-xs font-medium"
              >
                Switch to 2D Canvas
              </button>
            )}
          </div>
        ) : (
          scriptLoaded && (
            <spline-viewer
              url={sceneUrl}
              onLoad={() => setLoading(false)}
              style={{
                width: '100%',
                height: '100%',
                display: 'block',
              }}
            />
          )
        )}
      </div>

      {/* Bottom Floating Telemetry Badges */}
      <div className="relative z-20 grid grid-cols-3 gap-2 p-3 m-3 rounded-xl bg-surface-300/80 border border-white/5 backdrop-blur-md">
        <div className="flex flex-col">
          <span className="text-[10px] font-mono uppercase text-zinc-500">Render Engine</span>
          <span className="text-xs font-mono text-zinc-200 font-semibold flex items-center gap-1">
            <Layers className="w-3 h-3 text-primary-400" />
            Spline WebGL
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-mono uppercase text-zinc-500">Controls</span>
          <span className="text-xs font-mono text-zinc-200 font-semibold flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-accent-400" />
            Mouse Orbit / Pan
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-mono uppercase text-zinc-500">Lighting</span>
          <span className="text-xs font-mono text-zinc-200 font-semibold flex items-center gap-1">
            <Terminal className="w-3 h-3 text-cyan-400" />
            Realtime Shader
          </span>
        </div>
      </div>
    </div>
  );
}
