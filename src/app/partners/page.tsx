import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageLayout } from "@/components/PageLayout";
import { PartnersContent } from "@/components/Partners";

export const metadata: Metadata = {
  title: "Partners — HYPED",
  description: "Built on Hyperliquid. Partnered with TrueNorth. Growing with the ambitious.",
  openGraph: {
    title: "Partners — HYPED",
    description: "Built on Hyperliquid. Partnered with TrueNorth. Growing with the ambitious.",
    url: `${site.url}/partners`,
    siteName: site.name,
    type: "website",
  },
};

export default function PartnersPage() {
  return (
    <PageLayout>
      <PartnersContent />
    </PageLayout>
  );
}
