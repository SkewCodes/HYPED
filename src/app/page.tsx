import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Ticker } from "@/components/Ticker";
import { Products } from "@/components/Products";
import { HypedTV } from "@/components/HypedTV";
import { Ecosystem } from "@/components/Ecosystem";
import { Waitlist } from "@/components/Waitlist";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Story />
        <Ticker />
        <Products />
        <HypedTV />
        <Ecosystem />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
