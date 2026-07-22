"use client";

import { useState } from "react";
import { site } from "@/content/site";

type FormState = "idle" | "loading" | "success" | "error";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "waitlist" }),
      });

      if (res.ok) {
        setState("success");
        setEmail("");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  const disabled = state === "loading" || state === "success";

  return (
    <section
      id="waitlist"
      className="reveal px-6 py-[120px] md:px-10 md:py-[160px]"
    >
      <div className="divider mb-[120px] md:mb-[160px]" />
      <div className="mx-auto max-w-[1200px]">
        <p className="font-mono text-[11px] tracking-[.26em] text-[var(--accent-secondary)]">
          JOIN THE FIRST WAVE
        </p>
        <h2 className="mt-6 font-display font-[800] uppercase text-[clamp(24px,3.5vw,36px)] leading-[.92]">
          {site.mantra}
        </h2>
        <p className="mt-4 max-w-[480px] text-[15px] leading-[1.6] text-hyped-bright">
          First access to everything we build.
          Be part of the culture from day one.
        </p>

        {state === "success" ? (
          <p className="mt-8 font-mono text-[14px] tracking-[.1em] text-[var(--accent)]">
            Locked in. Still hyped.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex max-w-[480px] flex-col gap-3.5 sm:flex-row">
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="absolute -left-[9999px] opacity-0"
              aria-hidden="true"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email"
              required
              disabled={disabled}
              className="glass-static min-w-0 flex-1 !rounded-lg font-mono text-[13px] tracking-[.06em] text-hyped-white placeholder:text-hyped-dim outline-none transition-[border-color] focus:!border-[var(--accent)] disabled:opacity-50"
              style={{ padding: "16px 18px" }}
            />
            <button
              type="submit"
              disabled={disabled}
              className="cta-pulse rounded-lg font-mono text-[12px] font-bold tracking-[.18em] bg-[var(--accent)] text-[#0A0A0A] transition-[filter,transform] hover:brightness-[1.12] hover:-translate-y-0.5 disabled:opacity-50"
              style={{ padding: "16px 28px" }}
            >
              {state === "loading" ? "..." : "LOCK IN"}
            </button>
          </form>
        )}

        {state === "error" && (
          <p className="mt-4 font-mono text-[13px] tracking-[.1em] text-hyped-rekt">
            Something went wrong. Try again.
          </p>
        )}
      </div>
    </section>
  );
}
