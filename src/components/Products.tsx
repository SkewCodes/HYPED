import { products } from "@/content/products";

export function ProductsContent() {
  const hero = products[0]; // hyped.max
  const trade = products[1]; // hyped.trade
  const comingSoon = products.slice(2); // hyped.launch + hyped.bet

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
        <section className="py-[80px] md:py-[120px]">
          <h1 className="font-display font-[900] uppercase text-[clamp(44px,8vw,120px)] leading-[.85] tracking-[.01em]">
            Built from the culture.
          </h1>
          <p className="mt-8 max-w-[560px] text-[17px] leading-[1.7] text-hyped-muted md:text-[19px]">
            One community. One ecosystem. Starting with the daily grind.
          </p>
        </section>

        {/* HERO — hyped.max */}
        <section
          className="py-[80px] md:py-[120px]"
          style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}
        >
          <div
            className="p-8 sm:p-10 md:p-14"
            style={{
              border: "1px solid rgba(0,240,255,.15)",
              background: "radial-gradient(ellipse 80% 70% at 50% 100%,rgba(0,240,255,.04),transparent 70%)",
            }}
          >
            <span className="font-mono text-[12px] tracking-[.24em] text-[var(--accent)]">
              {hero.label}
            </span>
            <h2 className="mt-4 font-display font-[900] uppercase text-[clamp(40px,6vw,80px)] leading-[.88]">
              {hero.name}
            </h2>
            <p className="mt-2 font-display font-[800] uppercase text-[clamp(20px,2.5vw,32px)] leading-[.92] text-[var(--accent)]">
              {hero.tagline}
            </p>
            <p className="mt-8 max-w-[540px] text-[17px] leading-[1.8] text-hyped-muted md:text-[18px]">
              {hero.description}
            </p>
            <a
              href={hero.href}
              className="mt-10 inline-block font-mono text-[12px] font-bold tracking-[.18em] bg-[var(--accent)] text-hyped-void px-7 py-4 transition-[filter,transform] hover:brightness-[1.12] hover:-translate-y-0.5"
            >
              {hero.cta}
            </a>
          </div>
        </section>

        {/* Transition */}
        <section
          className="py-[80px] md:py-[120px]"
          style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}
        >
          <h2 className="font-display font-[800] uppercase text-[clamp(32px,5vw,64px)] leading-[.9]">
            Then the ecosystem grows with you.
          </h2>

          {/* hyped.trade — Live */}
          <div
            className="mt-16 p-8 sm:p-10 md:p-12"
            style={{
              border: "1px solid rgba(255,255,255,.08)",
              background: "radial-gradient(ellipse 80% 70% at 50% 55%,rgba(0,217,126,.04),transparent 70%)",
            }}
          >
            <span className="font-mono text-[12px] tracking-[.24em] text-[var(--accent)]">
              {trade.label}
            </span>
            <h3 className="mt-4 font-display font-[800] uppercase text-[clamp(36px,5vw,64px)] leading-[.9]">
              {trade.name}
            </h3>
            <p className="mt-2 text-[17px] leading-[1.6] text-hyped-muted">
              {trade.tagline}
            </p>
            <p className="mt-6 max-w-[480px] text-[16px] leading-[1.7] text-hyped-muted">
              {trade.description}
            </p>
            <a
              href={trade.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block font-mono text-[12px] font-bold tracking-[.18em] bg-[var(--accent)] text-hyped-void px-6 py-3.5 transition-[filter,transform] hover:brightness-[1.12] hover:-translate-y-0.5"
            >
              {trade.cta}
            </a>
          </div>

          {/* hyped.launch + hyped.bet — Coming Soon */}
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {comingSoon.map((product) => (
              <div
                key={product.id}
                className="group p-8 transition-[border-color] duration-300 hover:border-[rgba(255,255,255,.15)]"
                style={{
                  border: "1px solid rgba(255,255,255,.08)",
                  background: "rgba(15,10,28,.4)",
                }}
              >
                <span className="font-mono text-[11px] tracking-[.24em] text-[var(--accent)]">
                  {product.label}
                </span>
                <h3 className="mt-4 font-display font-[800] uppercase text-[28px] leading-[.9] sm:text-[32px]">
                  {product.name}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.6] text-hyped-white">
                  {product.tagline}
                </p>
                <p className="mt-2 text-[15px] leading-[1.6] text-hyped-muted">
                  {product.description}
                </p>
                <a
                  href={product.href}
                  className="mt-6 inline-block font-mono text-[11px] tracking-[.18em] text-hyped-muted transition-colors hover:text-[var(--accent)]"
                >
                  {product.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom */}
        <section
          className="py-[80px] md:py-[120px]"
          style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}
        >
          <p className="text-[17px] leading-[1.8] text-hyped-muted md:text-[19px]">
            The community comes first. The ecosystem grows around it.
          </p>
          <a
            href="/story"
            className="mt-8 inline-flex items-center gap-2 font-mono text-[12px] tracking-[.18em] text-[var(--accent)] transition-colors hover:text-hyped-white"
          >
            Read the Story →
          </a>
        </section>
      </div>
    </article>
  );
}
