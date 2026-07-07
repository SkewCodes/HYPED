import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { CultureTicker } from "@/components/CultureTicker";
import { ProductGrid } from "@/components/ProductGrid";
import { ManifestoStrip } from "@/components/ManifestoStrip";
import { StatsStrip } from "@/components/StatsStrip";
import { HypedTV } from "@/components/HypedTV";
import { WaitlistCTA } from "@/components/WaitlistCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CultureTicker />
        <ProductGrid />
        <ManifestoStrip />
        <StatsStrip />
        <HypedTV />
        <WaitlistCTA />
      </main>
      <Footer />
    </>
  );
}
