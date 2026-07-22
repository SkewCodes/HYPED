"use client";

import { useRef, useCallback, useEffect } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

const PARTICLE_COUNT = 45;
const FRAME_INTERVAL = 1000 / 15;

function createParticle(w: number, h: number): Particle {
  const isCyan = Math.random() > 0.35;
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.3,
    vy: -(Math.random() * 0.4 + 0.1),
    size: Math.random() * 1.8 + 0.6,
    opacity: Math.random() * 0.5 + 0.1,
    color: isCyan ? "0, 240, 255" : "139, 92, 246",
  };
}

export function Particles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mountedRef = useRef(false);

  const refCallback = useCallback((canvas: HTMLCanvasElement | null) => {
    if (!canvas || mountedRef.current) return;
    mountedRef.current = true;
    canvasRef.current = canvas;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    let w = 0;
    let h = 0;
    let rafId = 0;
    let isVisible = true;
    let lastFrameTime = 0;
    let particles: Particle[] = [];

    function resize() {
      const rect = parent!.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas!.width = w;
      canvas!.height = h;
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;

      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(createParticle(w, h));
      }
    }

    function animate(ts: number) {
      rafId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const delta = ts - lastFrameTime;
      if (delta < FRAME_INTERVAL) return;
      lastFrameTime = ts - (delta % FRAME_INTERVAL);

      ctx!.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        p.vx += (Math.random() - 0.5) * 0.02;
        p.vx *= 0.99;

        if (p.y < -10 || p.x < -10 || p.x > w + 10) {
          particles[i] = createParticle(w, h);
          particles[i].y = h + 10;
        }

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${p.color}, ${p.opacity})`;
        ctx!.fill();
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting; },
      { threshold: 0 },
    );
    observer.observe(canvas);

    resize();

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!prefersReduced) {
      window.addEventListener("resize", resize);
      rafId = requestAnimationFrame(animate);
    }

    return () => {
      mountedRef.current = false;
      cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    return () => { mountedRef.current = false; };
  }, []);

  return (
    <canvas
      ref={refCallback}
      className="absolute inset-0 hero-canvas-fade"
      style={{
        pointerEvents: "none",
        willChange: "transform",
      }}
    />
  );
}
