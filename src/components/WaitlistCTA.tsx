"use client";

import { useState } from "react";
import { Slash } from "./Slash";

type FormState = "idle" | "loading" | "success" | "error";

export function WaitlistCTA() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "hero" }),
      });

      if (res.ok) {
        setState("success");
        setEmail("");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(
          (data as { error?: string }).error ?? "Something went wrong."
        );
        setState("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setState("error");
    }
  }

  return (
    <section id="waitlist" className="relative py-32 md:py-48 overflow-hidden">
      {/* Animated aurora background */}
      <div className="absolute inset-0 bg-hyped-carbon" />

      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 h-[500px] w-[500px] rounded-full blur-[150px] opacity-15 animate-aurora-1"
        style={{ background: "radial-gradient(circle, #00F0FF 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 right-1/4 h-[400px] w-[400px] rounded-full blur-[120px] opacity-10 animate-aurora-2"
        style={{ background: "radial-gradient(circle, #9D6BFF 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full blur-[100px] opacity-10"
        style={{ background: "radial-gradient(circle, #00F0FF 0%, transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 text-center">
        <Slash size="lg" className="!h-16 !w-12 drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]" />

        <h2 className="mt-8 font-display text-[clamp(3rem,8vw,7rem)] font-extrabold uppercase tracking-tight">
          Lock In
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base text-hyped-muted">
          Drop your email. Be first for everything.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-12 flex max-w-lg flex-col gap-3 sm:flex-row"
        >
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
            placeholder="your@email.com"
            required
            disabled={state === "loading" || state === "success"}
            className="flex-1 rounded-xl border border-hyped-muted/20 bg-hyped-black/80 px-5 py-4 text-sm text-hyped-white backdrop-blur-sm placeholder:text-hyped-muted/60 focus:border-hyped-cyan focus:outline-none focus:ring-1 focus:ring-hyped-cyan/30 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={state === "loading" || state === "success"}
            className="group relative overflow-hidden rounded-xl bg-hyped-cyan px-8 py-4 text-sm font-bold text-hyped-black uppercase tracking-wide disabled:opacity-50"
          >
            <span className="relative z-10">
              {state === "loading" ? "..." : state === "success" ? "Locked In" : "Lock In"}
            </span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
          </button>
        </form>

        {state === "success" && (
          <div className="mt-8 inline-flex items-center gap-2 rounded-xl border border-hyped-cyan/20 bg-hyped-black/60 px-6 py-4 backdrop-blur-sm">
            <span className="text-hyped-cyan text-lg">&#10003;</span>
            <p className="text-sm font-medium text-hyped-white">
              Locked in. You&apos;ll hear from us first.
            </p>
          </div>
        )}
        {state === "error" && (
          <p className="mt-4 text-sm text-hyped-danger">{errorMsg}</p>
        )}
      </div>
    </section>
  );
}
