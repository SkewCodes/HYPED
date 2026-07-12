import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { CultureTicker } from "@/components/CultureTicker";
import { WhatIsHyped } from "@/components/WhatIsHyped";
import { TheCulture } from "@/components/TheCulture";
import { AppTeaser } from "@/components/AppTeaser";
import { BuiltBy } from "@/components/BuiltBy";
import { Ecosystem } from "@/components/Ecosystem";
import { WaitlistCTA } from "@/components/WaitlistCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CultureTicker />
        <WhatIsHyped />
        <TheCulture />
        <AppTeaser />
        <Ecosystem />
        <BuiltBy />
        <WaitlistCTA />
      </main>
      <Footer />
    </>
  );
}
