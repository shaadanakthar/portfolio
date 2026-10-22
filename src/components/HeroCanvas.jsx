import React, { useEffect, useRef } from 'react';
import { Cpu, Network, Sparkles, Terminal } from 'lucide-react';

export default function HeroCanvas() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight || 460);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight || 460;
      initNodes();
    };

    window.addEventListener('resize', handleResize);

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Node class for the neural network
    const nodes = [];
    const nodeCount = Math.min(26, Math.floor(width / 22));

    const initNodes = () => {
      nodes.length = 0;
      for (let i = 0; i < nodeCount; i++) {
        // distribute in subtle structured layers
        const layer = i % 4; // 0: input, 1: hidden1, 2: hidden2, 3: output
        const layerX = (width * 0.15) + (layer * (width * 0.23)) + (Math.random() * 20 - 10);
        const layerY = (height * 0.15) + Math.random() * (height * 0.7);

        nodes.push({
          x: layerX,
          y: layerY,
          originX: layerX,
          originY: layerY,
          vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4,
          vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2.5 + 2,
          layer,
          color: layer === 0 ? '#3B82F6' : layer === 3 ? '#8B5CF6' : '#22D3EE',
          pulse: Math.random() * Math.PI * 2,
        });
      }
    };

    initNodes();

    // Mouse tracking for subtle interactive pull
    let mouse = { x: -1000, y: -1000, active: false };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Signals traveling across edges
    const signals = [];
    const spawnSignal = () => {
      if (nodes.length < 2 || prefersReducedMotion) return;
      const fromIdx = Math.floor(Math.random() * nodes.length);
      // find a node in adjacent or higher layer
      const eligibleTargets = nodes.filter((n, idx) => idx !== fromIdx && Math.abs(n.layer - nodes[fromIdx].layer) <= 1);
      if (eligibleTargets.length > 0) {
        const toNode = eligibleTargets[Math.floor(Math.random() * eligibleTargets.length)];
        signals.push({
          from: nodes[fromIdx],
          to: toNode,
          progress: 0,
          speed: 0.015 + Math.random() * 0.015,
          color: Math.random() > 0.5 ? '#3B82F6' : '#8B5CF6',
        });
      }
    };

    let signalTimer = 0;

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background grid coordinate points
      ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
      const step = 40;
      for (let x = 20; x < width; x += step) {
        for (let y = 20; y < height; y += step) {
          ctx.beginPath();
          ctx.arc(x, y, 0.7, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Update and draw connections
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];

        // Move nodes slightly around their origin
        if (!prefersReducedMotion) {
          a.x += a.vx;
          a.y += a.vy;

          if (Math.abs(a.x - a.originX) > 25) a.vx *= -1;
          if (Math.abs(a.y - a.originY) > 25) a.vy *= -1;

          // Mouse attraction
          if (mouse.active) {
            const dx = mouse.x - a.x;
            const dy = mouse.y - a.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
              a.x += (dx / dist) * 0.8;
              a.y += (dy / dist) * 0.8;
            }
          }
        }

        // Draw connections to nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.25;
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Update and draw signals
      signalTimer++;
      if (signalTimer % 20 === 0 && signals.length < 12) {
        spawnSignal();
      }

      for (let i = signals.length - 1; i >= 0; i--) {
        const s = signals[i];
        s.progress += s.speed;

        if (s.progress >= 1) {
          signals.splice(i, 1);
          continue;
        }

        const currX = s.from.x + (s.to.x - s.from.x) * s.progress;
        const currY = s.from.y + (s.to.y - s.from.y) * s.progress;

        ctx.fillStyle = s.color;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(currX, currY, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.pulse += 0.03;
        const pulseFactor = prefersReducedMotion ? 1 : 1 + Math.sin(node.pulse) * 0.2;

        // Outer glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 3.5);
        gradient.addColorStop(0, `${node.color}55`);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 3.5 * pulseFactor, 0, Math.PI * 2);
        ctx.fill();

        // Core node
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] md:h-[480px] rounded-2xl overflow-hidden glass-panel border border-white/10 shadow-card bg-surface-200/80 flex flex-col justify-between"
    >
      {/* Top Header Bar inside the canvas card */}
      <div className="relative z-10 flex items-center justify-between px-4 py-3 border-b border-white/5 bg-surface-300/60 backdrop-blur-md">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60"></div>
          </div>
          <span className="text-xs font-mono text-zinc-400 pl-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-primary-400" />
            neural_graph::v2.4
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1.5"></span>
            active
          </span>
        </div>
      </div>

      {/* Main Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-crosshair"
      />

      {/* Bottom Floating Telemetry Badges */}
      <div className="relative z-10 grid grid-cols-3 gap-2 p-3 m-3 rounded-xl bg-surface-300/80 border border-white/5 backdrop-blur-md">
        <div className="flex flex-col">
          <span className="text-[10px] font-mono uppercase text-zinc-500">Architecture</span>
          <span className="text-xs font-mono text-zinc-200 font-semibold flex items-center gap-1">
            <Network className="w-3 h-3 text-primary-400" />
            FeedForward
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-mono uppercase text-zinc-500">Domain</span>
          <span className="text-xs font-mono text-zinc-200 font-semibold flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-accent-400" />
            Vision & GenAI
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-mono uppercase text-zinc-500">Paradigm</span>
          <span className="text-xs font-mono text-zinc-200 font-semibold flex items-center gap-1">
            <Cpu className="w-3 h-3 text-cyan-400" />
            Full-Stack AI
          </span>
        </div>
      </div>
    </div>
  );
}
