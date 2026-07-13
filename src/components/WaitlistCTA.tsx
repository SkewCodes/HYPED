"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export function WaitlistCTA() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "lockin" }),
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
      id="lockin"
      className="px-6 py-[130px] md:px-10"
      style={{ borderTop: "1px solid rgba(244,242,247,.07)" }}
    >
      <div className="mx-auto max-w-[680px] text-center">
        <span className="font-mono text-xs tracking-[.28em] text-[var(--accent)]">04 — FIRST ACCESS</span>
        <h2 className="mt-[18px] font-display font-[800] uppercase text-[clamp(72px,9vw,150px)] leading-[.85]">
          Lock in.
        </h2>
        <p className="mx-auto mt-[22px] max-w-[420px] text-[17px] leading-[1.6] text-hyped-muted">
          First access to every launch. Zero spam. Full hype.
        </p>

        <form onSubmit={handleSubmit} className="mx-auto mt-9 flex max-w-[560px] gap-3.5">
          {/* Honeypot */}
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
            className="min-w-0 flex-1 bg-transparent font-mono text-[13px] tracking-[.06em] text-hyped-white placeholder:text-hyped-muted outline-none transition-[border-color] disabled:opacity-50"
            style={{ border: "1px solid rgba(244,242,247,.18)", padding: "17px 18px" }}
            onFocus={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(244,242,247,.18)"; }}
          />
          <button
            type="submit"
            disabled={disabled}
            className="font-mono text-xs font-bold tracking-[.18em] bg-[var(--accent)] text-hyped-void transition-[filter,transform] hover:brightness-[1.12] hover:-translate-y-0.5 disabled:opacity-50"
            style={{ padding: "17px 30px" }}
          >
            {state === "loading" ? "..." : state === "success" ? "LOCKED IN" : "LOCK IN"}
          </button>
        </form>

        {state === "success" && (
          <p className="mt-[18px] font-mono text-[13px] tracking-[.1em] text-[var(--accent)]">
            ✓ YOU&apos;RE LOCKED IN.
          </p>
        )}
        {state === "error" && (
          <p className="mt-[18px] font-mono text-[13px] tracking-[.1em] text-hyped-rekt">
            THAT EMAIL&apos;S REKT. TRY AGAIN.
          </p>
        )}
      </div>
    </section>
  );
}
