import { products } from "@/content/products";
import { Slash } from "./Slash";
import { Reveal } from "./Reveal";

export function AppTeaser() {
  return (
    <section id="apps" className="py-24 md:py-40">
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

        <div className="mt-16">
          {products.map((product) => (
            <Reveal key={product.id}>
              <div
                className="group flex items-center border-b border-hyped-muted/10 py-6 md:py-8"
                style={{ "--pa": product.accent } as React.CSSProperties}
              >
                <Slash size="md" className="shrink-0 [&_path]:text-(--pa)" />
                <h3 className="ml-4 font-display text-[clamp(1.5rem,4vw,3rem)] font-bold uppercase tracking-tight md:ml-6">
                  {product.id}
                </h3>
                <p className="ml-6 hidden text-sm text-hyped-muted sm:block md:ml-8 md:text-base">
                  {product.tagline}
                </p>
                <div className="ml-auto shrink-0 pl-4">
                  {product.status === "live" ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-hyped-cyan/30 bg-hyped-cyan/10 px-3 py-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-hyped-cyan" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-hyped-cyan">
                        Live
                      </span>
                    </span>
                  ) : (
                    <span className="text-xs font-medium uppercase tracking-wider text-hyped-muted/50">
                      Soon
                    </span>
                  )}
                </div>
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
