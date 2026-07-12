"use client";

import { products } from "@/content/products";
import { VideoLoop } from "./VideoLoop";
import { Reveal } from "./Reveal";

export function Ecosystem() {
  return (
    <section id="ecosystem" className="bg-hyped-purple py-24 md:py-40">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] uppercase leading-[0.85] tracking-tight">
            The Ecosystem
          </h2>
          <p className="mt-4 text-hyped-muted">
            Four surfaces. One culture.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {products.map((product) => (
            <Reveal key={product.id}>
              <a
                href={product.href}
                {...(product.status === "live" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group block overflow-hidden rounded-[12px] border border-hyped-white/5 bg-hyped-purple transition-colors hover:border-hyped-cyan/40"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <VideoLoop
                    asset={product.video}
                    playMode="hover"
                    className="h-full w-full"
                  />
                </div>

                <div className="p-6">
                  <span className={`text-xs font-medium uppercase tracking-widest ${product.id === "max" ? "text-hyped-cyan" : "text-hyped-muted"}`}>
                    {product.accentLabel}
                  </span>
                  <h3 className="mt-2 font-display text-2xl uppercase leading-[0.9] tracking-tight md:text-3xl">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-hyped-muted">
                    {product.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-hyped-muted/70">
                    {product.description}
                  </p>
                  <span className={`mt-4 inline-block text-sm font-medium uppercase tracking-wide ${product.status === "live" ? "text-hyped-cyan" : "text-hyped-muted"}`}>
                    {product.cta}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
