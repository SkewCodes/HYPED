"use client";

import { useRef, useCallback, useEffect } from "react";

interface Band {
  color: string;
  baseY: number;
  amplitude: number;
  frequency: number;
  speed: number;
  opacity: number;
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
    phase: 0,
  },
  {
    color: "123, 47, 190",
    baseY: 0.45,
    amplitude: 0.15,
    frequency: 0.6,
    speed: 0.0003,
    opacity: 0.1,
    phase: 1.2,
  },
  {
    color: "79, 255, 176",
    baseY: 0.55,
    amplitude: 0.1,
    frequency: 1.0,
    speed: 0.0005,
    opacity: 0.07,
    phase: 2.5,
  },
  {
    color: "0, 180, 220",
    baseY: 0.3,
    amplitude: 0.08,
    frequency: 1.3,
    speed: 0.00035,
    opacity: 0.06,
    phase: 3.8,
  },
];

const CURSOR_RADIUS = 350;
const SCALE = 0.5;

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

    const offscreen = document.createElement("canvas");
    const oCtx = offscreen.getContext("2d");
    if (!oCtx) return;

    let w = 0;
    let h = 0;
    let ow = 0;
    let oh = 0;
    let rafId = 0;
    let mouseX = -9999;
    let mouseY = -9999;
    let smoothX = -9999;
    let smoothY = -9999;
    let isVisible = true;
    let lastFrameTime = 0;
    const FRAME_INTERVAL = 1000 / 30;

    function resize() {
      const rect = parent!.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas!.width = w;
      canvas!.height = h;
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;

      ow = Math.ceil(w * SCALE);
      oh = Math.ceil(h * SCALE);
      offscreen.width = ow;
      offscreen.height = oh;
    }

    function getWaveY(band: Band, nx: number, t: number): number {
      const wave1 = Math.sin(nx * Math.PI * 2 * band.frequency + t * band.speed * 1000 + band.phase);
      const wave2 = Math.sin(nx * Math.PI * 3.7 * band.frequency + t * band.speed * 700 + band.phase * 1.5) * 0.5;
      const wave3 = Math.sin(nx * Math.PI * 1.3 * band.frequency + t * band.speed * 500 + band.phase * 0.7) * 0.3;
      return band.baseY * oh + (wave1 + wave2 + wave3) * band.amplitude * oh;
    }

    function drawBand(band: Band, t: number) {
      const step = 4;
      const count = Math.ceil(ow / step);

      oCtx!.save();

      const gradient = oCtx!.createLinearGradient(0, 0, ow, 0);
      gradient.addColorStop(0, `rgba(${band.color}, 0)`);
      gradient.addColorStop(0.2, `rgba(${band.color}, ${band.opacity})`);
      gradient.addColorStop(0.5, `rgba(${band.color}, ${band.opacity * 1.3})`);
      gradient.addColorStop(0.8, `rgba(${band.color}, ${band.opacity})`);
      gradient.addColorStop(1, `rgba(${band.color}, 0)`);

      oCtx!.fillStyle = gradient;
      oCtx!.beginPath();
      oCtx!.moveTo(0, oh);

      let prevY = getWaveY(band, 0, t);
      oCtx!.lineTo(0, prevY);

      const cursorXScaled = smoothX > -1000 ? smoothX * SCALE : -9999;
      const cursorYScaled = smoothY > -1000 ? smoothY * SCALE : -9999;

      for (let i = 1; i <= count; i++) {
        const x = i * step;
        const nx = x / ow;
        let y = getWaveY(band, nx, t);

        if (cursorXScaled > -1000) {
          const dx = x - cursorXScaled;
          const dy = y - cursorYScaled;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const scaledRadius = CURSOR_RADIUS * SCALE;
          if (dist < scaledRadius) {
            const ci = (1 - dist / scaledRadius) * 0.4;
            y += dy * ci * -0.3;
          }
        }

        const cpX = x - step * 0.5;
        oCtx!.quadraticCurveTo(cpX, prevY, x, y);
        prevY = y;
      }

      oCtx!.lineTo(ow, oh);
      oCtx!.closePath();
      oCtx!.fill();
      oCtx!.restore();
    }

    function drawCursorGlow() {
      if (smoothX < -1000) return;
      const sx = smoothX * SCALE;
      const sy = smoothY * SCALE;
      const sr = CURSOR_RADIUS * SCALE;
      const grad = oCtx!.createRadialGradient(sx, sy, 0, sx, sy, sr);
      grad.addColorStop(0, "rgba(0,240,255,.08)");
      grad.addColorStop(0.3, "rgba(0,240,255,.03)");
      grad.addColorStop(1, "rgba(0,240,255,0)");
      oCtx!.fillStyle = grad;
      oCtx!.fillRect(sx - sr, sy - sr, sr * 2, sr * 2);
    }

    function animate(ts: number) {
      rafId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const delta = ts - lastFrameTime;
      if (delta < FRAME_INTERVAL) return;
      lastFrameTime = ts - (delta % FRAME_INTERVAL);

      oCtx!.clearRect(0, 0, ow, oh);

      if (mouseX > -1000) {
        smoothX += (mouseX - smoothX) * 0.05;
        smoothY += (mouseY - smoothY) * 0.05;
      }

      drawCursorGlow();

      for (let i = 0; i < BANDS.length; i++) {
        drawBand(BANDS[i], ts);
      }

      ctx!.clearRect(0, 0, w, h);
      ctx!.imageSmoothingEnabled = true;
      ctx!.imageSmoothingQuality = "high";
      ctx!.drawImage(offscreen, 0, 0, ow, oh, 0, 0, w, h);
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
      oCtx!.clearRect(0, 0, ow, oh);
      for (const band of BANDS) {
        drawBand(band, 0);
      }
      ctx!.imageSmoothingEnabled = true;
      ctx!.imageSmoothingQuality = "high";
      ctx!.drawImage(offscreen, 0, 0, ow, oh, 0, 0, w, h);
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
      style={{ pointerEvents: "none", filter: "blur(40px)", willChange: "transform" }}
    />
  );
}
