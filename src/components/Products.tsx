"use client";

import { useEffect, useState } from "react";
import { products } from "@/content/products";

function TradeHeroCard() {
  const [pnl, setPnl] = useState(12481);

  useEffect(() => {
    const timer = setInterval(() => {
      setPnl((prev) => prev + (Math.random() * 120 - 40));
    }, 900);
    return () => clearInterval(timer);
  }, []);

  const rounded = Math.round(pnl);
  const trade = products[0];

  return (
    <div
      className="group relative overflow-hidden"
      style={{
        background: "radial-gradient(ellipse 80% 70% at 50% 55%,rgba(0,217,126,.06),transparent 70%)",
        border: "1px solid rgba(255,255,255,.08)",
      }}
    >
      <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px)", backgroundSize: "44px 44px" }} />

      <div className="relative grid gap-8 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
        <div>
          <span className="font-mono text-[12px] tracking-[.24em] text-[var(--accent)]">{trade.label}</span>
          <h3 className="mt-3 font-display font-[800] uppercase text-[clamp(36px,5vw,64px)] leading-[.9]">{trade.name}</h3>
          <p className="mt-3 max-w-[400px] text-[17px] leading-[1.6] text-hyped-muted">{trade.description}</p>
          <a
            href={trade.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block font-mono text-[12px] font-bold tracking-[.18em] bg-[var(--accent)] text-hyped-void px-6 py-3.5 transition-[filter,transform] hover:brightness-[1.12] hover:-translate-y-0.5"
          >
            {trade.cta}
          </a>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs tracking-[.14em] text-hyped-white">BTC-PERP</span>
            <span className="font-mono text-[11px] font-bold tracking-[.12em] bg-hyped-green text-hyped-void px-2.5 py-1">LONG 25×</span>
          </div>
          <span className="font-display font-[900] text-[48px] leading-none text-hyped-green sm:text-[64px]" style={{ textShadow: "0 0 32px rgba(0,217,126,.35)" }}>
            +${rounded.toLocaleString("en-US")}
          </span>
          <div className="flex items-center gap-3">
            <svg width="100" height="24" viewBox="0 0 120 30" fill="none"><polyline points="0,26 18,22 36,24 54,16 72,18 90,9 105,12 120,3" stroke="#00D97E" strokeWidth="2" /></svg>
            <span className="font-mono text-[12px] font-bold tracking-[.08em] text-hyped-green">ROE +{Math.round(pnl / 36.6)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Products() {
  const secondaryProducts = products.slice(1);

  return (
    <section id="products" className="px-6 py-[100px] md:px-10 md:py-[140px]" style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}>
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mb-12 font-display font-[800] uppercase text-[clamp(40px,6vw,88px)] leading-[.88] md:mb-16">
          Built from the culture.
        </h2>

        <TradeHeroCard />

        <div className="mt-5 grid gap-5 sm:grid-cols-3">
          {secondaryProducts.map((product) => (
            <div
              key={product.id}
              className="group p-6 transition-[border-color] duration-300 hover:border-[var(--accent)]"
              style={{ border: "1px solid rgba(255,255,255,.08)", background: "rgba(15,10,28,.6)" }}
            >
              <span className="font-mono text-[11px] tracking-[.24em] text-[var(--accent)]">{product.label}</span>
              <h3 className="mt-3 font-display font-[800] uppercase text-[28px] leading-[.9] sm:text-[32px]">{product.name}</h3>
              <p className="mt-2 text-[15px] leading-[1.6] text-hyped-muted">{product.description}</p>
              <a
                href={product.href}
                className="mt-5 inline-block font-mono text-[11px] tracking-[.18em] text-hyped-muted transition-colors hover:text-[var(--accent)]"
              >
                {product.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
