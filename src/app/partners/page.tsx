import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageLayout } from "@/components/PageLayout";
import { PartnersContent } from "@/components/Partners";

export const metadata: Metadata = {
  title: "Network — HYPED",
  description: "Built on Hyperliquid. Growing with the people who show up. The Hyped network.",
  openGraph: {
    title: "Network — HYPED",
    description: "Built on Hyperliquid. Growing with the people who show up.",
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
