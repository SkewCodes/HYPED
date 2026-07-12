import { products } from "@/content/products";
import { Slash } from "./Slash";
import { Reveal } from "./Reveal";

export function AppTeaser() {
  return (
    <section id="apps" className="py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <div className="flex items-center gap-3">
            <Slash size="sm" />
            <span className="text-xs font-semibold uppercase tracking-widest text-hyped-cyan">
              What&apos;s Coming
            </span>
          </div>

          <h2 className="mt-8 font-display text-[clamp(2rem,5vw,4rem)] font-extrabold uppercase tracking-tight">
            Four Apps. One Ecosystem.
          </h2>
        </Reveal>

        <div className="mt-12 space-y-6">
          {products.map((product) => (
            <Reveal key={product.id}>
              <div
                className="flex items-center gap-4 border-b border-hyped-muted/10 pb-6 md:gap-6"
                style={{ "--pa": product.accent } as React.CSSProperties}
              >
                <Slash size="md" className="shrink-0 [&_path]:text-(--pa)" />
                <h3 className="font-display text-[clamp(1.25rem,3vw,2.5rem)] font-bold uppercase tracking-tight">
                  {product.id}
                </h3>
                <p className="hidden text-sm text-hyped-muted sm:block">
                  {product.tagline}
                </p>
                {product.status === "live" && (
                  <span className="ml-auto shrink-0 rounded border border-hyped-cyan/30 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-hyped-cyan">
                    Live
                  </span>
                )}
                {product.status === "soon" && (
                  <span className="ml-auto shrink-0 text-xs text-hyped-muted">
                    Soon
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <p className="text-sm text-hyped-muted">
            More soon.{" "}
            <a
              href="#waitlist"
              className="font-semibold text-hyped-cyan transition-opacity hover:opacity-80"
            >
              Lock in to be first.
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
