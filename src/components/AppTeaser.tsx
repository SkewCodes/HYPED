import { products } from "@/content/products";
import { Slash } from "./Slash";
import { Reveal } from "./Reveal";

export function AppTeaser() {
  return (
    <section id="apps" className="relative py-24 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <div className="flex items-center gap-3">
            <Slash size="sm" />
            <span className="text-xs font-semibold uppercase tracking-widest text-hyped-cyan">
              What&apos;s Coming
            </span>
          </div>

          <h2 className="mt-10 font-display text-[clamp(2.5rem,6vw,5rem)] font-extrabold uppercase tracking-tight">
            Four Apps.
            <br />
            One Ecosystem.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {products.map((product) => (
            <Reveal key={product.id}>
              <div
                className="group relative overflow-hidden rounded-2xl border border-hyped-muted/10 bg-hyped-carbon p-6 transition-colors hover:border-[var(--pa)]/30 md:p-8"
                style={{ "--pa": product.accent } as React.CSSProperties}
              >
                {/* Left accent bar */}
                <div
                  className="absolute top-0 left-0 h-full w-1 transition-opacity group-hover:opacity-100 opacity-40"
                  style={{ backgroundColor: product.accent }}
                />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <Slash size="sm" className="[&_path]:text-[var(--pa)]" />
                      <h3 className="font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">
                        {product.id}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-hyped-muted md:text-base">
                      {product.tagline}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-hyped-muted/60">
                      {product.description}
                    </p>
                  </div>

                  <div className="shrink-0">
                    {product.status === "live" ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-hyped-cyan/30 bg-hyped-cyan/10 px-3 py-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-hyped-cyan animate-pulse" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-hyped-cyan">
                          Live
                        </span>
                      </span>
                    ) : (
                      <span className="inline-flex rounded-full border border-hyped-muted/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-hyped-muted/50">
                        Soon
                      </span>
                    )}
                  </div>
                </div>

                {/* Glow on hover */}
                <div
                  className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full opacity-0 blur-[80px] transition-opacity group-hover:opacity-20"
                  style={{ backgroundColor: product.accent }}
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <p className="text-sm text-hyped-muted">
            More soon.{" "}
            <a
              href="#waitlist"
              className="font-semibold text-hyped-cyan transition-opacity hover:opacity-80"
            >
              Lock in to be first &rarr;
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
