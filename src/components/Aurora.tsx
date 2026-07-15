"use client";

import { useRef, useCallback, useEffect } from "react";

interface Band {
  color: string;
  baseY: number;
  amplitude: number;
  frequency: number;
  speed: number;
  opacity: number;
  blur: number;
  phase: number;
}

const BANDS: Band[] = [
  {
    color: "0, 240, 255",
    baseY: 0.35,
    amplitude: 0.12,
    frequency: 0.8,
    speed: 0.0004,
    opacity: 0.12,
    blur: 80,
    phase: 0,
  },
  {
    color: "123, 47, 190",
    baseY: 0.45,
    amplitude: 0.15,
    frequency: 0.6,
    speed: 0.0003,
    opacity: 0.1,
    blur: 100,
    phase: 1.2,
  },
  {
    color: "79, 255, 176",
    baseY: 0.55,
    amplitude: 0.1,
    frequency: 1.0,
    speed: 0.0005,
    opacity: 0.07,
    blur: 60,
    phase: 2.5,
  },
  {
    color: "0, 180, 220",
    baseY: 0.3,
    amplitude: 0.08,
    frequency: 1.3,
    speed: 0.00035,
    opacity: 0.06,
    blur: 120,
    phase: 3.8,
  },
];

const CURSOR_RADIUS = 350;

export default function Aurora() {
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

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let rafId = 0;
    let mouseX = -9999;
    let mouseY = -9999;
    let smoothX = -9999;
    let smoothY = -9999;
    let isVisible = true;

    function resize() {
      const rect = parent!.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function getWaveY(band: Band, nx: number, t: number): number {
      const wave1 = Math.sin(nx * Math.PI * 2 * band.frequency + t * band.speed * 1000 + band.phase);
      const wave2 = Math.sin(nx * Math.PI * 3.7 * band.frequency + t * band.speed * 700 + band.phase * 1.5) * 0.5;
      const wave3 = Math.sin(nx * Math.PI * 1.3 * band.frequency + t * band.speed * 500 + band.phase * 0.7) * 0.3;
      return band.baseY * h + (wave1 + wave2 + wave3) * band.amplitude * h;
    }

    function drawBand(band: Band, t: number) {
      const step = 8;
      const count = Math.ceil(w / step);

      ctx!.save();

      const gradient = ctx!.createLinearGradient(0, 0, w, 0);
      gradient.addColorStop(0, `rgba(${band.color}, 0)`);
      gradient.addColorStop(0.2, `rgba(${band.color}, ${band.opacity})`);
      gradient.addColorStop(0.5, `rgba(${band.color}, ${band.opacity * 1.3})`);
      gradient.addColorStop(0.8, `rgba(${band.color}, ${band.opacity})`);
      gradient.addColorStop(1, `rgba(${band.color}, 0)`);

      ctx!.filter = `blur(${band.blur}px)`;
      ctx!.fillStyle = gradient;

      ctx!.beginPath();
      ctx!.moveTo(0, h);

      let prevY = getWaveY(band, 0, t);
      ctx!.lineTo(0, prevY);

      for (let i = 1; i <= count; i++) {
        const x = i * step;
        const nx = x / w;
        let y = getWaveY(band, nx, t);

        if (smoothX > -1000) {
          const dx = x - smoothX;
          const dy = y - smoothY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CURSOR_RADIUS) {
            const ci = (1 - dist / CURSOR_RADIUS) * 0.4;
            y += dy * ci * -0.3;
          }
        }

        const cpX = x - step * 0.5;
        ctx!.quadraticCurveTo(cpX, prevY, x, y);
        prevY = y;
      }

      ctx!.lineTo(w, h);
      ctx!.closePath();
      ctx!.fill();

      ctx!.filter = "none";
      ctx!.restore();
    }

    function drawCursorGlow() {
      if (smoothX < -1000) return;
      const grad = ctx!.createRadialGradient(
        smoothX, smoothY, 0,
        smoothX, smoothY, CURSOR_RADIUS,
      );
      grad.addColorStop(0, "rgba(0,240,255,.06)");
      grad.addColorStop(0.3, "rgba(0,240,255,.02)");
      grad.addColorStop(1, "rgba(0,240,255,0)");
      ctx!.fillStyle = grad;
      ctx!.fillRect(
        smoothX - CURSOR_RADIUS,
        smoothY - CURSOR_RADIUS,
        CURSOR_RADIUS * 2,
        CURSOR_RADIUS * 2,
      );
    }

    function animate(ts: number) {
      if (!isVisible) {
        rafId = requestAnimationFrame(animate);
        return;
      }

      ctx!.clearRect(0, 0, w, h);

      if (mouseX > -1000) {
        smoothX += (mouseX - smoothX) * 0.05;
        smoothY += (mouseY - smoothY) * 0.05;
      }

      drawCursorGlow();

      for (let i = 0; i < BANDS.length; i++) {
        drawBand(BANDS[i], ts);
      }

      rafId = requestAnimationFrame(animate);
    }

    function onMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      if (smoothX < -1000) {
        smoothX = mouseX;
        smoothY = mouseY;
      }
    }

    function onMouseLeave() {
      mouseX = -9999;
      mouseY = -9999;
      smoothX = -9999;
      smoothY = -9999;
    }

    const observer = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting; },
      { threshold: 0 },
    );
    observer.observe(canvas);

    resize();

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      for (const band of BANDS) {
        drawBand(band, 0);
      }
    } else {
      document.addEventListener("mousemove", onMouseMove, { passive: true });
      document.addEventListener("mouseleave", onMouseLeave);
      window.addEventListener("resize", resize);
      rafId = requestAnimationFrame(animate);
    }

    return () => {
      mountedRef.current = false;
      cancelAnimationFrame(rafId);
      observer.disconnect();
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
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
      style={{ pointerEvents: "none" }}
    />
  );
}
