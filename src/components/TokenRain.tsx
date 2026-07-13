"use client";

import { useRef, useCallback, useEffect } from "react";

const TOKENS = [
  { color: "#F7931A", logoUrl: "/tokens/btc.png" },
  { color: "#627EEA", logoUrl: "/tokens/eth.png" },
  { color: "#9945FF", logoUrl: "/tokens/sol.png" },
  { color: "#C2A633", logoUrl: "/tokens/doge.png" },
  { color: "#3D7B30", logoUrl: "/tokens/pepe.png" },
  { color: "#F3A63B", logoUrl: "/tokens/bonk.png" },
  { color: "#1C1C1C", logoUrl: "/tokens/rndr.png" },
  { color: "#1A1A1A", logoUrl: "/tokens/wld.png" },
  { color: "#1A1A1A", logoUrl: "/tokens/tao.png" },
  { color: "#28A0F0", logoUrl: "/tokens/arb.png" },
  { color: "#4DA2FF", logoUrl: "/tokens/sui.png" },
  { color: "#A67C52", logoUrl: "/tokens/wif.png" },
  { color: "#D4A843", logoUrl: "/tokens/floki.png" },
  { color: "#C8A961", logoUrl: "/tokens/trump.png" },
];

const REPEL_RADIUS = 180;
const REPEL_STRENGTH = 2.5;
const CURSOR_GLOW_RADIUS = 280;

interface Coin {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  radius: number;
  opacity: number;
  tiltSpeed: number;
  tiltPhase: number;
  tokenIndex: number;
}

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function createCoin(w: number, h: number, initialSpawn: boolean): Coin {
  const depth = Math.random();
  const tokenIndex = Math.floor(Math.random() * TOKENS.length);
  const mobile = w < 768;

  let radius: number;
  let velocityY: number;
  let opacity: number;

  if (depth < 0.33) {
    radius = rand(14, 20);
    velocityY = rand(0.2, 0.4);
    opacity = rand(0.12, 0.22);
  } else if (depth < 0.66) {
    radius = rand(20, 30);
    velocityY = rand(0.4, 0.7);
    opacity = rand(0.22, 0.38);
  } else {
    radius = rand(30, 42);
    velocityY = rand(0.7, 1.0);
    opacity = rand(0.35, 0.55);
  }

  if (mobile) radius = Math.min(radius, 28);

  return {
    x: rand(0, w),
    y: initialSpawn ? rand(-h * 0.6, h) : rand(-250, -60),
    velocityX: 0,
    velocityY,
    radius,
    opacity,
    tiltSpeed: rand(0.006, 0.018),
    tiltPhase: rand(0, Math.PI * 2),
    tokenIndex,
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

    const images = new Map<number, HTMLImageElement>();
    TOKENS.forEach((t, i) => {
      const img = new Image();
      img.src = t.logoUrl;
      images.set(i, img);
    });

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
      const count = w < 768 ? 16 : 28;
      coins = Array.from({ length: count }, () => createCoin(w, h, true));
    }

    function drawCursorGlow() {
      if (smoothMouseX < -1000) return;
      const grad = ctx!.createRadialGradient(
        smoothMouseX, smoothMouseY, 0,
        smoothMouseX, smoothMouseY, CURSOR_GLOW_RADIUS,
      );
      grad.addColorStop(0, "rgba(0,240,255,.07)");
      grad.addColorStop(0.5, "rgba(0,240,255,.02)");
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
      const { x, y, radius, opacity, tokenIndex } = coin;
      const token = TOKENS[tokenIndex];

      const yFade = 1 - Math.max(0, (y - h * 0.35) / (h * 0.65));
      const boost = nearCursor * 0.35;
      const alpha = Math.min(1, (opacity + boost)) * Math.max(0, yFade);
      if (alpha <= 0) return;

      const scaleX = Math.max(tilt, 0.08);

      ctx!.save();
      ctx!.globalAlpha = alpha;
      ctx!.translate(x, y);
      ctx!.scale(scaleX, 1);

      ctx!.beginPath();
      ctx!.arc(0, 0, radius, 0, Math.PI * 2);
      ctx!.fillStyle = "rgba(18,18,24,0.92)";
      ctx!.shadowColor = nearCursor > 0.3 ? "rgba(0,240,255,.6)" : token.color;
      ctx!.shadowBlur = radius * (0.8 + nearCursor * 1.2);
      ctx!.fill();
      ctx!.shadowBlur = 0;

      ctx!.strokeStyle = nearCursor > 0.3
        ? `rgba(0,240,255,${0.1 + nearCursor * 0.2})`
        : "rgba(255,255,255,0.06)";
      ctx!.lineWidth = 1;
      ctx!.stroke();

      const img = images.get(tokenIndex);
      if (img && img.complete && img.naturalWidth > 0 && tilt > 0.3) {
        ctx!.save();
        ctx!.beginPath();
        ctx!.arc(0, 0, radius * 0.88, 0, Math.PI * 2);
        ctx!.clip();
        const size = radius * 1.9;
        ctx!.drawImage(img, -size / 2, -size / 2, size, size);
        ctx!.restore();
      }

      if (tilt < 0.55) {
        ctx!.fillStyle = `rgba(255,255,255,${0.04 * (1 - tilt)})`;
        ctx!.fillRect(-radius, radius * 0.01, radius * 2, (1 - tilt) * 2.5);
      }

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
        coin.x += Math.sin(frame * 0.008 + coin.tiltPhase) * 0.2 + coin.velocityX;

        const dx = coin.x - smoothMouseX;
        const dy = coin.y - smoothMouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let nearCursor = 0;

        if (dist < REPEL_RADIUS && dist > 0) {
          const force = ((REPEL_RADIUS - dist) / REPEL_RADIUS) * REPEL_STRENGTH;
          coin.velocityX += (dx / dist) * force * 0.3;
          coin.y += (dy / dist) * force * 0.5;
          nearCursor = 1 - dist / REPEL_RADIUS;
        } else if (dist < CURSOR_GLOW_RADIUS) {
          nearCursor = (1 - dist / CURSOR_GLOW_RADIUS) * 0.5;
        }

        coin.velocityX *= 0.94;

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
      className="absolute inset-0"
      style={{ pointerEvents: "none" }}
    />
  );
}
