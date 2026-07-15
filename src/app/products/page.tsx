import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageLayout } from "@/components/PageLayout";
import { ProductsContent } from "@/components/Products";

export const metadata: Metadata = {
  title: "Ecosystem — HYPED",
  description: "Four products. One identity. Built from the culture, for the person who locks in.",
  openGraph: {
    title: "Ecosystem — HYPED",
    description: "Four products. One identity. Built from the culture, for the person who locks in.",
    url: `${site.url}/products`,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecosystem — HYPED",
    description: "Four products. One identity. Built from the culture, for the person who locks in.",
  },
};

export default function ProductsPage() {
  return (
    <PageLayout>
      <ProductsContent />
    </PageLayout>
  );
}
