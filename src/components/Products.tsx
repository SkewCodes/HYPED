import { products } from "@/content/products";

export function ProductsContent() {
  const hero = products[0];
  const trade = products[1];
  const comingSoon = products.slice(2);

  return (
    <article className="px-6 md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="pt-16 pb-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-[.1em] text-hyped-muted transition-colors hover:text-hyped-white"
          >
            &larr; Back
          </a>
        </div>

        {/* Header */}
        <section className="py-[60px] md:py-[100px]">
          <h1 className="font-display font-[900] uppercase text-[clamp(32px,5vw,56px)] leading-[.9] tracking-[.01em]">
            Built from the culture.
          </h1>
          <p className="mt-6 max-w-[520px] text-[16px] leading-[1.7] text-hyped-muted md:text-[17px]">
            Every product serves the person who locks in — from daily discipline to on-chain markets and beyond.
          </p>
        </section>

        {/* HERO — hyped.max */}
        <section
          className="py-[60px] md:py-[100px]"
          style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}
        >
          <div
            className="p-7 sm:p-9 md:p-10"
            style={{
              border: "1px solid rgba(0,240,255,.15)",
              background: "radial-gradient(ellipse 80% 70% at 50% 100%,rgba(0,240,255,.04),transparent 70%)",
            }}
          >
            <span className="font-mono text-[11px] tracking-[.24em] text-[var(--accent)]">
              {hero.label}
            </span>
            <h2 className="mt-3 font-display font-[900] uppercase text-[clamp(28px,4vw,44px)] leading-[.9]">
              {hero.name}
            </h2>
            <p className="mt-2 font-display font-[800] uppercase text-[clamp(16px,2vw,22px)] leading-[.95] text-[var(--accent)]">
              {hero.tagline}
            </p>
            <p className="mt-6 max-w-[500px] text-[16px] leading-[1.8] text-hyped-muted md:text-[17px]">
              {hero.description}
            </p>
            <a
              href={hero.href}
              className="mt-8 inline-block font-mono text-[11px] font-bold tracking-[.18em] bg-[var(--accent)] text-hyped-void px-6 py-3.5 transition-[filter,transform] hover:brightness-[1.12] hover:-translate-y-0.5"
            >
              {hero.cta}
            </a>
          </div>
        </section>

        {/* Transition */}
        <section
          className="py-[60px] md:py-[100px]"
          style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}
        >
          <h2 className="font-display font-[800] uppercase text-[clamp(24px,3.5vw,36px)] leading-[.92]">
            Then the ecosystem grows with you.
          </h2>

          {/* hyped.trade */}
          <div
            className="mt-12 p-7 sm:p-9 md:p-10"
            style={{
              border: "1px solid rgba(255,255,255,.08)",
              background: "rgba(15,10,28,.4)",
            }}
          >
            <span className="font-mono text-[11px] tracking-[.24em] text-[var(--accent)]">
              {trade.label}
            </span>
            <h3 className="mt-3 font-display font-[800] uppercase text-[clamp(24px,3.5vw,36px)] leading-[.92]">
              {trade.name}
            </h3>
            <p className="mt-2 text-[15px] leading-[1.6] text-hyped-muted">
              {trade.tagline}
            </p>
            <p className="mt-4 max-w-[460px] text-[15px] leading-[1.7] text-hyped-muted">
              {trade.description}
            </p>
            <a
              href={trade.href}
              className="mt-6 inline-block font-mono text-[11px] tracking-[.18em] text-hyped-muted transition-colors hover:text-[var(--accent)]"
            >
              {trade.cta}
            </a>
          </div>

          {/* hyped.launch + hyped.bet */}
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {comingSoon.map((product) => (
              <div
                key={product.id}
                className="group p-7 transition-[border-color] duration-300 hover:border-[rgba(255,255,255,.15)]"
                style={{
                  border: "1px solid rgba(255,255,255,.08)",
                  background: "rgba(15,10,28,.4)",
                }}
              >
                <span className="font-mono text-[11px] tracking-[.24em] text-[var(--accent)]">
                  {product.label}
                </span>
                <h3 className="mt-3 font-display font-[800] uppercase text-[22px] leading-[.92] sm:text-[24px]">
                  {product.name}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-hyped-white">
                  {product.tagline}
                </p>
                <p className="mt-1.5 text-[14px] leading-[1.6] text-hyped-muted">
                  {product.description}
                </p>
                <a
                  href={product.href}
                  className="mt-5 inline-block font-mono text-[11px] tracking-[.18em] text-hyped-muted transition-colors hover:text-[var(--accent)]"
                >
                  {product.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom */}
        <section
          className="py-[60px] md:py-[100px]"
          style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}
        >
          <p className="text-[16px] leading-[1.8] text-hyped-muted md:text-[17px]">
            Identity first. Products second. The community is the foundation.
          </p>
          <a
            href="/story"
            className="mt-6 inline-flex items-center gap-2 font-mono text-[12px] tracking-[.18em] text-[var(--accent)] transition-colors hover:text-hyped-white"
          >
            Read the Manifesto →
          </a>
        </section>
      </div>
    </article>
  );
}
