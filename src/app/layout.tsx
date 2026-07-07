import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/content/site";

const inter = localFont({
  src: [
    { path: "../../public/fonts/Inter-Regular.woff2", weight: "400" },
    { path: "../../public/fonts/Inter-Medium.woff2", weight: "500" },
    { path: "../../public/fonts/Inter-Bold.woff2", weight: "700" },
  ],
  variable: "--font-inter",
  display: "swap",
});

const clashDisplay = localFont({
  src: [
    { path: "../../public/fonts/ClashDisplay-Bold.woff2", weight: "700" },
    { path: "../../public/fonts/ClashDisplay-Extrabold.woff2", weight: "800" },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [{ url: site.ogImage, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${clashDisplay.variable}`}>
      <head>
        <script
          defer
          data-domain={site.plausibleDomain}
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body className="bg-hyped-black text-hyped-white font-body antialiased">
        {children}
      </body>
    </html>
  );
}
