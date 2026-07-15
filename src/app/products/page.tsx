import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageLayout } from "@/components/PageLayout";
import { ProductsContent } from "@/components/Products";

export const metadata: Metadata = {
  title: "Ecosystem — HYPED",
  description: "Built from the culture, for the person who locks in. Products that grow with the community.",
  openGraph: {
    title: "Ecosystem — HYPED",
    description: "Built from the culture, for the person who locks in. Products that grow with the community.",
    url: `${site.url}/products`,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecosystem — HYPED",
    description: "Built from the culture, for the person who locks in. Products that grow with the community.",
  },
};

export default function ProductsPage() {
  return (
    <PageLayout>
      <ProductsContent />
    </PageLayout>
  );
}
