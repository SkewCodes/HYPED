"use client";

import { useState } from "react";
import { VideoLoop } from "./VideoLoop";
import { Slash } from "./Slash";
import type { MediaAsset } from "@/content/products";

const waitlistAsset: MediaAsset = {
  mp4: "/media/waitlist-loop.mp4",
  webm: "/media/waitlist-loop.webm",
  poster: "/media/waitlist-loop-poster.webp",
  aspect: "21/9",
};

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
    <section id="waitlist" className="relative py-24 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <VideoLoop asset={waitlistAsset} playMode="always" dim={70} className="h-full w-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 text-center">
        <Slash size="lg" />

        <h2 className="mt-8 font-display text-[clamp(3rem,8vw,6rem)] font-extrabold uppercase tracking-tight">
          Lock In
        </h2>
        <p className="mx-auto mt-4 max-w-md text-hyped-muted">
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
            className="flex-1 rounded-xl border border-hyped-muted/30 bg-hyped-carbon/80 px-5 py-4 text-sm text-hyped-white backdrop-blur-sm placeholder:text-hyped-muted focus:border-hyped-cyan focus:outline-none disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={state === "loading" || state === "success"}
            className="rounded-xl bg-hyped-cyan px-8 py-4 text-sm font-bold text-hyped-black uppercase tracking-wide transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {state === "loading" ? "..." : state === "success" ? "Locked In" : "Lock In"}
          </button>
        </form>

        {state === "success" && (
          <div className="mt-8 inline-flex items-center gap-2 rounded-xl border border-hyped-cyan/20 bg-hyped-carbon/80 px-6 py-4 backdrop-blur-sm">
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
