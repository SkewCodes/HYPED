import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { CultureTicker } from "@/components/CultureTicker";
import { WhyHyped } from "@/components/WhyHyped";
import { ProductGrid } from "@/components/ProductGrid";
import { ManifestoStrip } from "@/components/ManifestoStrip";
import { BuiltBy } from "@/components/BuiltBy";
import { Ecosystem } from "@/components/Ecosystem";
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
        <WhyHyped />
        <ProductGrid />
        <ManifestoStrip />
        <BuiltBy />
        <Ecosystem />
        <StatsStrip />
        <HypedTV />
        <WaitlistCTA />
      </main>
      <Footer />
    </>
  );
}
