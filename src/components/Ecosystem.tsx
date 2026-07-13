"use client";

import { useEffect, useRef, useState } from "react";

function TradeCard() {
  const [pnl, setPnl] = useState(12481);

  useEffect(() => {
    const timer = setInterval(() => {
      setPnl((prev) => prev + (Math.random() * 120 - 40));
    }, 900);
    return () => clearInterval(timer);
  }, []);

  const rounded = Math.round(pnl);
  const roe = Math.round(pnl / 36.6);

  return (
    <div className="relative h-[340px] overflow-hidden" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 55%,rgba(0,217,126,.08),transparent 70%)" }}>
      <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(244,242,247,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(244,242,247,.03) 1px,transparent 1px)", backgroundSize: "44px 44px" }} />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs tracking-[.14em] text-hyped-white">BTC-PERP</span>
          <span className="font-mono text-[11px] font-bold tracking-[.12em] bg-hyped-green text-hyped-void px-2.5 py-1">LONG 25×</span>
        </div>
        <span className="font-display font-[900] text-[84px] leading-none text-hyped-green" style={{ textShadow: "0 0 42px rgba(0,217,126,.45)" }}>
          +${rounded.toLocaleString("en-US")}
        </span>
        <div className="flex items-center gap-4">
          <svg width="120" height="30" viewBox="0 0 120 30" fill="none"><polyline points="0,26 18,22 36,24 54,16 72,18 90,9 105,12 120,3" stroke="#00D97E" strokeWidth="2" /></svg>
          <span className="font-mono text-[13px] font-bold tracking-[.08em] text-hyped-green">ROE +{roe}%</span>
        </div>
      </div>
      <span className="absolute top-[18px] left-[22px] pointer-events-none font-display font-[800] text-[56px] leading-none text-hyped-white/[.92]">01</span>
      <span className="absolute top-6 right-[22px] pointer-events-none font-mono text-[11px] font-bold tracking-[.22em] text-hyped-muted" style={{ border: "1px solid rgba(154,147,168,.4)", padding: "5px 10px" }}>SOON</span>
    </div>
  );
}

function LaunchCard() {
  return (
    <div className="relative h-[340px] overflow-hidden" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 45%,rgba(26,10,46,.85),transparent 78%)" }}>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
        <span className="font-mono text-[11px] tracking-[.3em] text-hyped-muted">$MAXX — BONDING CURVE</span>
        <span className="font-display font-[900] text-[96px] leading-none text-[var(--accent)]" style={{ textShadow: "0 0 46px rgba(0,240,255,.4)" }}>96%</span>
        <div className="relative h-2 w-60 overflow-hidden" style={{ background: "rgba(244,242,247,.12)" }}>
          <div className="absolute left-0 top-0 bottom-0 w-[96%] bg-[var(--accent)]" />
          <div className="absolute top-0 bottom-0 w-[60px] animate-[shimmer_2.2s_linear_infinite]" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,.5),transparent)" }} />
        </div>
        <span className="font-mono text-[11px] tracking-[.2em] text-hyped-white">GRADUATING — DEPLOY → LIQUID</span>
      </div>
      <span className="absolute top-[18px] left-[22px] pointer-events-none font-display font-[800] text-[56px] leading-none text-hyped-white/[.92]">02</span>
      <span className="absolute top-6 right-[22px] pointer-events-none font-mono text-[11px] font-bold tracking-[.22em] text-hyped-muted" style={{ border: "1px solid rgba(154,147,168,.4)", padding: "5px 10px" }}>SOON</span>
    </div>
  );
}

function BetCard() {
  return (
    <div className="relative h-[340px] overflow-hidden" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 55%,rgba(0,240,255,.05),transparent 70%)" }}>
      <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(244,242,247,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(244,242,247,.03) 1px,transparent 1px)", backgroundSize: "44px 44px" }} />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex w-[76%] flex-col items-center gap-4">
        <span className="font-mono text-[11px] tracking-[.32em] text-hyped-muted">WILL IT GRADUATE?</span>
        <div className="relative h-3.5 w-full overflow-hidden bg-hyped-rekt">
          <div className="absolute left-0 top-0 bottom-0 bg-hyped-green animate-[oddsShift_5s_ease-in-out_infinite]" style={{ width: "62%" }} />
        </div>
        <div className="flex w-full justify-between">
          <span className="font-mono text-[13px] font-bold text-hyped-green">YES 62¢</span>
          <span className="font-mono text-[13px] font-bold text-hyped-rekt">NO 38¢</span>
        </div>
        <span className="mt-1 font-mono text-xs tracking-[.14em] text-hyped-white" style={{ border: "1px solid rgba(244,242,247,.22)", padding: "9px 16px" }}>$100 → $161 IF YES</span>
      </div>
      <span className="absolute top-[18px] left-[22px] pointer-events-none font-display font-[800] text-[56px] leading-none text-hyped-white/[.92]">03</span>
      <span className="absolute top-6 right-[22px] pointer-events-none font-mono text-[11px] font-bold tracking-[.22em] text-hyped-muted" style={{ border: "1px solid rgba(154,147,168,.4)", padding: "5px 10px" }}>SOON</span>
    </div>
  );
}

function MaxCard() {
  return (
    <div className="relative h-[340px] overflow-hidden" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%,rgba(0,240,255,.06),transparent 72%)" }}>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex w-[72%] flex-col gap-2">
        <span className="mb-2 text-center font-mono text-[11px] tracking-[.3em] text-hyped-muted">SEASON I — LEADERBOARD</span>
        <div className="flex items-center gap-4 p-3" style={{ border: "1px solid rgba(244,242,247,.12)" }}>
          <span className="w-[34px] font-display font-[800] text-2xl">01</span>
          <span className="flex-1 font-mono text-xs tracking-[.1em] text-hyped-white">SKEW</span>
          <span className="font-mono text-xs text-hyped-muted">98,240 XP</span>
        </div>
        <div className="flex items-center gap-4 p-3" style={{ border: "1px solid var(--accent)", background: "rgba(0,240,255,.07)" }}>
          <span className="w-[34px] font-display font-[800] text-2xl text-[var(--accent)]">02</span>
          <span className="flex-1 font-mono text-xs font-bold tracking-[.1em] text-[var(--accent)]">YOU</span>
          <span className="inline-block animate-[floatUp_1.6s_ease-in-out_infinite] font-mono text-xs font-bold text-[var(--accent)]">↑</span>
          <span className="font-mono text-xs text-hyped-white">91,180 XP</span>
        </div>
        <div className="flex items-center gap-4 p-3 opacity-70" style={{ border: "1px solid rgba(244,242,247,.12)" }}>
          <span className="w-[34px] font-display font-[800] text-2xl">03</span>
          <span className="flex-1 font-mono text-xs tracking-[.1em] text-hyped-white">ANON</span>
          <span className="font-mono text-xs text-hyped-muted">84,555 XP</span>
        </div>
      </div>
      <span className="absolute top-[18px] left-[22px] pointer-events-none font-display font-[800] text-[56px] leading-none text-hyped-white/[.92]">04</span>
      <span className="absolute top-6 right-[22px] pointer-events-none font-mono text-[11px] font-bold tracking-[.22em] text-hyped-muted" style={{ border: "1px solid rgba(154,147,168,.4)", padding: "5px 10px" }}>SOON</span>
    </div>
  );
}

const cards = [
  { span: 7, label: "TRADE MAXXING", name: "hyped.trade", desc: "Execute at the edge. The perps terminal for traders who refuse CEX latency.", Card: TradeCard },
  { span: 5, label: "TRENCH MAXXING", name: "hyped.launch", desc: "Graduate tokens faster. From deploy to liquid in one flow.", Card: LaunchCard },
  { span: 5, label: "BET MAXXING", name: "hyped.bet", desc: "Predict everything. Markets for crypto, culture, and chaos.", Card: BetCard },
  { span: 7, label: "LIFE MAXXING", name: "hyped.max", desc: "The cultural home of maxxing — trade, build, life, stack. Streaks, leagues, and receipts for the grind.", Card: MaxCard },
];

export function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="px-6 py-[130px] md:px-10"
      style={{ background: "#0C0616", borderTop: "1px solid rgba(244,242,247,.07)" }}
    >
      <div className="mx-auto max-w-[1360px]">
        {/* Header */}
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs tracking-[.28em] text-[var(--accent)]">02 — THE ECOSYSTEM</span>
            <h2 className="mt-[18px] font-display font-[800] uppercase text-[clamp(64px,8vw,140px)] leading-[.85]">
              Four surfaces.
              <br />
              One culture.
            </h2>
          </div>
          <p className="m-0 max-w-[300px] text-[15px] leading-[1.6] text-hyped-muted">
            One account, one culture, four ways to maxx. Built in public, shipped in order.
          </p>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {cards.map(({ span, label, name, desc, Card }) => (
            <div
              key={name}
              className="group overflow-hidden bg-hyped-card text-hyped-white transition-[border-color,transform] duration-300 hover:border-[var(--accent)] hover:-translate-y-[5px]"
              style={{
                gridColumn: `span ${span}`,
                border: "1px solid rgba(244,242,247,.09)",
              }}
            >
              <Card />
              <div className="px-[26px] pb-[30px] pt-[26px]">
                <span className="font-mono text-[11px] tracking-[.26em] text-[var(--accent)]">{label}</span>
                <h3 className="mt-3 font-display font-[800] uppercase text-[44px] leading-[.9]">{name}</h3>
                <p className="mt-2.5 max-w-[440px] text-[15px] leading-[1.6] text-hyped-muted">{desc}</p>
                <a href="#lockin" className="mt-5 inline-block font-mono text-xs font-bold tracking-[.2em] text-[var(--accent)] transition-colors hover:text-hyped-white">
                  JOIN WAITLIST →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
