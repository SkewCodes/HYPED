"use client";

import { useRef, useCallback, useEffect } from "react";

const PALETTE = [
  "#F7931A", "#627EEA", "#9945FF", "#C2A633", "#3D7B30",
  "#F3A63B", "#28A0F0", "#4DA2FF", "#A67C52", "#00F0FF",
  "#FF3B4E", "#00D97E", "#FFD166", "#D4A843",
];

const REPEL_RADIUS = 200;
const REPEL_STRENGTH = 2.8;
const ATTRACT_RADIUS = 350;
const CURSOR_GLOW_RADIUS = 380;

interface Coin {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  radius: number;
  opacity: number;
  tiltSpeed: number;
  tiltPhase: number;
  colorIndex: number;
  depth: number;
}

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function createCoin(w: number, h: number, initialSpawn: boolean): Coin {
  const depth = Math.random();
  const colorIndex = Math.floor(Math.random() * PALETTE.length);
  const mobile = w < 768;

  let radius: number;
  let velocityY: number;
  let opacity: number;

  if (depth < 0.33) {
    radius = rand(16, 24);
    velocityY = rand(0.15, 0.35);
    opacity = rand(0.1, 0.18);
  } else if (depth < 0.66) {
    radius = rand(24, 36);
    velocityY = rand(0.35, 0.65);
    opacity = rand(0.2, 0.35);
  } else {
    radius = rand(36, 52);
    velocityY = rand(0.6, 0.9);
    opacity = rand(0.3, 0.5);
  }

  if (mobile) radius = Math.min(radius, 32);

  return {
    x: rand(0, w),
    y: initialSpawn ? rand(-h * 0.6, h) : rand(-300, -80),
    velocityX: 0,
    velocityY,
    radius,
    opacity,
    tiltSpeed: rand(0.006, 0.018),
    tiltPhase: rand(0, Math.PI * 2),
    colorIndex,
    depth,
  };
}

export default function TokenRain() {
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
    let coins: Coin[] = [];
    let frame = 0;
    let rafId = 0;
    let mouseX = -9999;
    let mouseY = -9999;
    let smoothMouseX = -9999;
    let smoothMouseY = -9999;

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

    function spawnCoins() {
      const count = w < 768 ? 14 : 22;
      coins = Array.from({ length: count }, () => createCoin(w, h, true));
    }

    function drawCursorGlow() {
      if (smoothMouseX < -1000) return;
      const grad = ctx!.createRadialGradient(
        smoothMouseX, smoothMouseY, 0,
        smoothMouseX, smoothMouseY, CURSOR_GLOW_RADIUS,
      );
      grad.addColorStop(0, "rgba(0,240,255,.08)");
      grad.addColorStop(0.4, "rgba(0,240,255,.03)");
      grad.addColorStop(1, "rgba(0,240,255,0)");
      ctx!.fillStyle = grad;
      ctx!.fillRect(
        smoothMouseX - CURSOR_GLOW_RADIUS,
        smoothMouseY - CURSOR_GLOW_RADIUS,
        CURSOR_GLOW_RADIUS * 2,
        CURSOR_GLOW_RADIUS * 2,
      );
    }

    function drawCoin(coin: Coin, tilt: number, nearCursor: number) {
      const { x, y, radius, opacity, colorIndex, depth } = coin;
      const color = PALETTE[colorIndex];

      const yFade = 1 - Math.max(0, (y - h * 0.35) / (h * 0.65));
      const boost = nearCursor * 0.4;
      const alpha = Math.min(1, (opacity + boost)) * Math.max(0, yFade);
      if (alpha <= 0) return;

      const scaleX = Math.max(tilt, 0.08);

      ctx!.save();
      ctx!.globalAlpha = alpha;
      ctx!.translate(x, y);
      ctx!.scale(scaleX, 1);

      if (depth < 0.33) {
        ctx!.filter = "blur(1.5px)";
      } else if (depth < 0.5) {
        ctx!.filter = "blur(0.5px)";
      }

      ctx!.beginPath();
      ctx!.arc(0, 0, radius, 0, Math.PI * 2);
      ctx!.fillStyle = "rgba(18,18,24,0.88)";

      const glowColor = nearCursor > 0.3 ? "rgba(0,240,255,.6)" : color;
      ctx!.shadowColor = glowColor;
      ctx!.shadowBlur = radius * (0.6 + nearCursor * 1.5);
      ctx!.fill();
      ctx!.shadowBlur = 0;

      ctx!.strokeStyle = nearCursor > 0.3
        ? `rgba(0,240,255,${0.15 + nearCursor * 0.3})`
        : `${color}33`;
      ctx!.lineWidth = 1;
      ctx!.stroke();

      const innerRadius = radius * 0.55;
      const innerGrad = ctx!.createRadialGradient(0, 0, 0, 0, 0, innerRadius);
      innerGrad.addColorStop(0, `${color}30`);
      innerGrad.addColorStop(1, `${color}08`);
      ctx!.beginPath();
      ctx!.arc(0, 0, innerRadius, 0, Math.PI * 2);
      ctx!.fillStyle = innerGrad;
      ctx!.fill();

      if (tilt > 0.4) {
        ctx!.beginPath();
        ctx!.arc(-radius * 0.25, -radius * 0.25, radius * 0.15, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255,255,255,${0.06 * tilt})`;
        ctx!.fill();
      }

      ctx!.filter = "none";
      ctx!.restore();
    }

    function animate() {
      frame++;
      ctx!.clearRect(0, 0, w, h);

      if (mouseX > -1000) {
        smoothMouseX += (mouseX - smoothMouseX) * 0.08;
        smoothMouseY += (mouseY - smoothMouseY) * 0.08;
      }

      drawCursorGlow();

      for (let i = 0; i < coins.length; i++) {
        const coin = coins[i];

        coin.y += coin.velocityY;
        coin.x += Math.sin(frame * 0.006 + coin.tiltPhase) * 0.6 + coin.velocityX;

        const dx = coin.x - smoothMouseX;
        const dy = coin.y - smoothMouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let nearCursor = 0;

        if (dist < REPEL_RADIUS && dist > 0) {
          const force = ((REPEL_RADIUS - dist) / REPEL_RADIUS) * REPEL_STRENGTH;
          coin.velocityX += (dx / dist) * force * 0.3;
          coin.y += (dy / dist) * force * 0.5;
          nearCursor = 1 - dist / REPEL_RADIUS;
        } else if (dist < ATTRACT_RADIUS && dist > 0) {
          const pull = ((ATTRACT_RADIUS - dist) / ATTRACT_RADIUS) * 0.15;
          coin.velocityX -= (dx / dist) * pull;
          coin.y -= (dy / dist) * pull * 0.3;
          nearCursor = (1 - dist / ATTRACT_RADIUS) * 0.4;
        } else if (dist < CURSOR_GLOW_RADIUS) {
          nearCursor = (1 - dist / CURSOR_GLOW_RADIUS) * 0.2;
        }

        coin.velocityX *= 0.93;

        if (coin.y - coin.radius > h) {
          coins[i] = createCoin(w, h, false);
        }
        if (coin.x < -coin.radius * 2) coin.x = w + coin.radius;
        if (coin.x > w + coin.radius * 2) coin.x = -coin.radius;

        const tilt = 0.35 + 0.65 * Math.abs(Math.sin(frame * coin.tiltSpeed + coin.tiltPhase));
        drawCoin(coin, tilt, nearCursor);
      }

      rafId = requestAnimationFrame(animate);
    }

    function onMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      if (smoothMouseX < -1000) {
        smoothMouseX = mouseX;
        smoothMouseY = mouseY;
      }
    }

    function onMouseLeave() {
      mouseX = -9999;
      mouseY = -9999;
      smoothMouseX = -9999;
      smoothMouseY = -9999;
    }

    resize();
    spawnCoins();

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      for (const coin of coins) {
        const tilt = 0.35 + 0.65 * Math.abs(Math.sin(coin.tiltPhase));
        drawCoin(coin, tilt, 0);
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
