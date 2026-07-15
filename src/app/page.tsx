import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Waitlist } from "@/components/Waitlist";
import { Footer } from "@/components/Footer";

const cards = [
  {
    label: "MANIFESTO",
    title: "The brand for maxxing culture.",
    description: "There's a type of person the internet was supposed to be built for but never was. Hyped exists for them.",
    href: "/story",
  },
  {
    label: "ECOSYSTEM",
    title: "Built from the culture.",
    description: "Four products. One identity. Starting with the daily lock-in, expanding into on-chain markets.",
    href: "/products",
  },
  {
    label: "NETWORK",
    title: "The Network.",
    description: "Built on Hyperliquid. Growing with the people who show up.",
    href: "/partners",
  },
  {
    label: "HYPED TV",
    title: "The culture, live.",
    description: "Markets, building, the grind — streamed daily and on demand.",
    href: "/tv",
  },
] as const;

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        <section className="px-6 py-[100px] md:px-10 md:py-[140px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid gap-5 sm:grid-cols-2">
              {cards.map((card) => (
                <a
                  key={card.label}
                  href={card.href}
                  className="group relative p-8 transition-[border-color] duration-300 hover:border-[var(--accent)] sm:p-10"
                  style={{
                    border: "1px solid rgba(255,255,255,.08)",
                    background: "rgba(15,10,28,.4)",
                  }}
                >
                  <span className="font-mono text-[11px] tracking-[.24em] text-[var(--accent)]">
                    {card.label}
                  </span>
                  <h3 className="mt-4 font-display font-[800] uppercase text-[clamp(22px,2.5vw,36px)] leading-[.92]">
                    {card.title}
                  </h3>
                  <p className="mt-3 max-w-[360px] text-[15px] leading-[1.6] text-hyped-muted">
                    {card.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 font-mono text-[12px] tracking-[.14em] text-hyped-muted transition-colors group-hover:text-[var(--accent)]">
                    <span>Explore</span>
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="transition-transform group-hover:translate-x-1">
                      <path d="M1 5h11M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
