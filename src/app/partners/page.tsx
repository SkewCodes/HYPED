import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageLayout } from "@/components/PageLayout";
import { PartnersContent } from "@/components/Partners";

export const metadata: Metadata = {
  title: "Network — HYPED",
  description: "Built on the strongest foundation in DeFi. Growing with the people who show up.",
  openGraph: {
    title: "Network — HYPED",
    description: "Built on the strongest foundation in DeFi. Growing with the people who show up.",
    url: `${site.url}/partners`,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Network — HYPED",
    description: "Built on the strongest foundation in DeFi. Growing with the people who show up.",
  },
};

export default function PartnersPage() {
  return (
    <PageLayout>
      <PartnersContent />
    </PageLayout>
  );
}
