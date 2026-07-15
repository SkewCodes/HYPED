"use client";

import { useEffect, useRef } from "react";

export default function Aurora() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let ticking = false;

    function onMouseMove(e: MouseEvent) {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = el!.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30;
        el!.style.setProperty("--mx", `${x}px`);
        el!.style.setProperty("--my", `${y}px`);
        ticking = false;
      });
    }

    function onMouseLeave() {
      el!.style.setProperty("--mx", "0px");
      el!.style.setProperty("--my", "0px");
    }

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden hero-canvas-fade"
      style={{ "--mx": "0px", "--my": "0px" } as React.CSSProperties}
    >
      <div className="aurora-orb aurora-orb-1" />
      <div className="aurora-orb aurora-orb-2" />
      <div className="aurora-orb aurora-orb-3" />
      <div className="aurora-orb aurora-orb-4" />

      <div
        className="aurora-glow"
        style={{
          transform: "translate(calc(-50% + var(--mx)), calc(-50% + var(--my)))",
        }}
      />
    </div>
  );
}
