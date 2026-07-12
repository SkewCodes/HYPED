"use client";

import { useState } from "react";

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
        body: JSON.stringify({ email, source: "lockin" }),
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
    <section id="lockin" className="py-24 md:py-40">
      <div className="mx-auto max-w-[600px] px-6 text-center">
        <h2 className="font-display text-[clamp(2rem,5vw,4rem)] uppercase leading-[0.85] tracking-tight">
          Lock In.
        </h2>
        <p className="mt-4 text-hyped-muted">
          First access to every launch. Zero spam. Full hype.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
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
            placeholder="your@email"
            required
            disabled={state === "loading" || state === "success"}
            className="flex-1 rounded border border-hyped-white/10 bg-hyped-purple px-4 py-3.5 text-sm text-hyped-white placeholder:text-hyped-muted focus:border-hyped-cyan focus:outline-none disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={state === "loading" || state === "success"}
            className="rounded bg-hyped-cyan px-6 py-3.5 text-sm font-medium uppercase tracking-wide text-hyped-void disabled:opacity-50"
          >
            {state === "loading" ? "..." : state === "success" ? "Locked In" : "Lock In"}
          </button>
        </form>

        {state === "success" && (
          <div className="mt-8 flex flex-col items-center gap-3">
            <img
              src="/media/maxx-maxxed.webp"
              alt="Maxx the Bull — Maxxed"
              className="h-20 w-auto"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
            <p className="text-sm font-medium text-hyped-white">
              You&apos;re locked in.
            </p>
          </div>
        )}
        {state === "error" && (
          <p className="mt-4 text-sm text-hyped-rekt">{errorMsg || "That email's rekt. Try again."}</p>
        )}
      </div>
    </section>
  );
}
