import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageLayout } from "@/components/PageLayout";
import { ProductsContent } from "@/components/Products";

export const metadata: Metadata = {
  title: "Ecosystem — HYPED",
  description: "The home for locking in. Starting with daily discipline, expanding into on-chain markets.",
  openGraph: {
    title: "Ecosystem — HYPED",
    description: "Starting with the daily grind. Expanding into on-chain markets. Built from the culture.",
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
