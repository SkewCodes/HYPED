import type { Metadata } from "next";
import { Anton, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";

// STAND-IN: Anton replaces Tusker Grotesk until license is purchased.
// TODO: Replace with next/font/local Tusker woff2 (weights 6500/8500).
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display-face",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body-face",
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
    <html
      lang="en"
      className={`${anton.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <script
          defer
          data-domain={site.plausibleDomain}
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body className="bg-hyped-void text-hyped-white font-body antialiased">
        {children}
      </body>
    </html>
  );
}
