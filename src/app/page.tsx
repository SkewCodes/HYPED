import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { ManifestoWall } from "@/components/ManifestoWall";
import { Ecosystem } from "@/components/Ecosystem";
import { Receipts } from "@/components/Receipts";
import { WaitlistCTA } from "@/components/WaitlistCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <ManifestoWall />
        <Ecosystem />
        <Receipts />
        <WaitlistCTA />
      </main>
      <Footer />
    </>
  );
}
