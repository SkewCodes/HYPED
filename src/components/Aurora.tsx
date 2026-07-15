"use client";

import { useRef, useCallback, useEffect } from "react";

interface Band {
  color: string;
  baseY: number;
  amplitude: number;
  frequency: number;
  speed: number;
  thickness: number;
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
    thickness: 0.28,
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
    thickness: 0.32,
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
    thickness: 0.2,
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
    thickness: 0.15,
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
    let time = 0;

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

    function getWaveY(band: Band, x: number, t: number): number {
      const nx = x / w;
      const wave1 = Math.sin(nx * Math.PI * 2 * band.frequency + t * band.speed * 1000 + band.phase);
      const wave2 = Math.sin(nx * Math.PI * 3.7 * band.frequency + t * band.speed * 700 + band.phase * 1.5) * 0.5;
      const wave3 = Math.sin(nx * Math.PI * 1.3 * band.frequency + t * band.speed * 500 + band.phase * 0.7) * 0.3;
      return band.baseY * h + (wave1 + wave2 + wave3) * band.amplitude * h;
    }

    function cursorInfluence(x: number, y: number): number {
      if (smoothX < -1000) return 0;
      const dx = x - smoothX;
      const dy = y - smoothY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > CURSOR_RADIUS) return 0;
      return (1 - dist / CURSOR_RADIUS) * 0.4;
    }

    function drawBand(band: Band, t: number) {
      const steps = Math.ceil(w / 4);
      const stepW = w / steps;

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

      for (let i = 0; i <= steps; i++) {
        const x = i * stepW;
        let y = getWaveY(band, x, t);

        const ci = cursorInfluence(x, y);
        if (ci > 0 && smoothY > -1000) {
          const dy = y - smoothY;
          y += dy * ci * -0.3;
        }

        if (i === 0) {
          ctx!.lineTo(x, y);
        } else {
          const prevX = (i - 1) * stepW;
          const cpX = (prevX + x) / 2;
          const prevY = getWaveY(band, prevX, t);
          ctx!.quadraticCurveTo(cpX, prevY, x, y);
        }
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
      time = ts;
      ctx!.clearRect(0, 0, w, h);

      if (mouseX > -1000) {
        smoothX += (mouseX - smoothX) * 0.05;
        smoothY += (mouseY - smoothY) * 0.05;
      }

      drawCursorGlow();

      for (let i = 0; i < BANDS.length; i++) {
        drawBand(BANDS[i], time);
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

    resize();

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      for (const band of BANDS) {
        drawBand(band, 0);
      }
    } else {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseleave", onMouseLeave);
      window.addEventListener("resize", resize);
      rafId = requestAnimationFrame(animate);
    }

    return () => {
      mountedRef.current = false;
      cancelAnimationFrame(rafId);
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
