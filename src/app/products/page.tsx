import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageLayout } from "@/components/PageLayout";
import { ProductsContent } from "@/components/Products";

export const metadata: Metadata = {
  title: "Products — HYPED",
  description: "Four products. One ecosystem. All coming to Hyperliquid. Trade, launch, bet, and lock in.",
  openGraph: {
    title: "Products — HYPED",
    description: "Four products. One ecosystem. All coming to Hyperliquid.",
    url: `${site.url}/products`,
    siteName: site.name,
    type: "website",
  },
};

export default function ProductsPage() {
  return (
    <PageLayout>
      <ProductsContent />
    </PageLayout>
  );
}
