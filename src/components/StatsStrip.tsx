"use client";

import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { useInView } from "@/hooks/useInView";
import { useEffect, useState } from "react";

// Renders the REAL value on the server (SEO / scrapers / reduced-motion see
// the truth), then replays the count-up when scrolled into view.
function CountUp({ target, suffix }: { target: string; suffix: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.5, once: true });
  const [display, setDisplay] = useState(target);

  useEffect(() => {
    if (!inView) return;
    const num = parseInt(target, 10);
    if (isNaN(num)) {
      setDisplay(target);
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(target);
      return;
    }

    const duration = 1200;
    const steps = 30;
    const increment = num / steps;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      setDisplay(Math.min(Math.round(increment * step), num).toString());
      if (step >= steps) clearInterval(interval);
    }, duration / steps);

    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function StatsStrip() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <div className="grid gap-8 sm:grid-cols-3">
            {site.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-[clamp(2.5rem,6vw,5rem)] font-extrabold uppercase tracking-tight text-hyped-white">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-sm uppercase tracking-wider text-hyped-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-hyped-muted">
            As of {site.statsAsOf}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
