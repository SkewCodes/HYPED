"use client";

import { useEffect, useRef } from "react";

export function NetworkGraph({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas!.clientWidth;
      h = canvas!.clientHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      ctx!.scale(dpr, dpr);
    }

    type Node = { x: number; y: number; r: number; connected: number[] };

    function generate(): Node[] {
      const nodes: Node[] = [];
      const count = Math.min(Math.floor((w * h) / 8000), 50);

      for (let i = 0; i < count; i++) {
        const margin = 20;
        nodes.push({
          x: margin + Math.random() * (w - margin * 2),
          y: margin + Math.random() * (h - margin * 2),
          r: Math.random() * 2 + 1,
          connected: [],
        });
      }

      for (let i = 0; i < nodes.length; i++) {
        const dists: { j: number; d: number }[] = [];
        for (let j = 0; j < nodes.length; j++) {
          if (i === j) continue;
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          dists.push({ j, d: Math.sqrt(dx * dx + dy * dy) });
        }
        dists.sort((a, b) => a.d - b.d);
        const connectCount = Math.min(2 + Math.floor(Math.random() * 2), dists.length);
        for (let c = 0; c < connectCount; c++) {
          if (dists[c].d < 200) {
            nodes[i].connected.push(dists[c].j);
          }
        }
      }

      return nodes;
    }

    function draw(nodes: Node[]) {
      ctx!.clearRect(0, 0, w, h);

      for (const node of nodes) {
        for (const j of node.connected) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const alpha = Math.max(0.02, 0.08 * (1 - dist / 200));

          ctx!.beginPath();
          ctx!.moveTo(node.x, node.y);
          ctx!.lineTo(other.x, other.y);
          ctx!.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
          ctx!.lineWidth = 0.5;
          ctx!.stroke();
        }
      }

      for (const node of nodes) {
        ctx!.beginPath();
        ctx!.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(0, 240, 255, ${0.2 + node.r * 0.15})`;
        ctx!.fill();

        ctx!.beginPath();
        ctx!.arc(node.x, node.y, node.r + 3, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(0, 240, 255, 0.03)`;
        ctx!.fill();
      }
    }

    resize();
    const nodes = generate();
    draw(nodes);

    const ro = new ResizeObserver(() => {
      resize();
      const newNodes = generate();
      draw(newNodes);
    });
    ro.observe(canvas);

    return () => ro.disconnect();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`h-full w-full ${className}`}
    />
  );
}
