import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  title:
    "Painted Roots LLC - Women-Owned Painting Company in Riverview, FL | Tampa Bay Area",
  description:
    "Painted Roots LLC is a women-owned painting company in Riverview, FL serving the Tampa Bay area. Interior & exterior painting with quality, care, and attention to detail. Call (813) 830-3279 for a free quote.",
  keywords:
    "painting company Riverview FL, women-owned painter Tampa Bay, interior painting, exterior painting, painter near me, Riverview painter, Tampa Bay painting",
  openGraph: {
    title: "Painted Roots LLC - Women-Owned Painting in Riverview, FL",
    description:
      "Tampa Bay's freshest painting team. Women-owned, locally rooted, and dedicated to quality. Interior & exterior painting services.",
    url: "https://paintedrootsllc.com",
    siteName: "Painted Roots LLC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Painted Roots LLC - Women-Owned Painting in Riverview, FL",
    description:
      "Tampa Bay's freshest painting team. Women-owned, locally rooted, and dedicated to quality.",
  },
  metadataBase: new URL("https://paintedrootsllc.com"),
  alternates: { canonical: "/" },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://paintedrootsllc.com",
  name: "Painted Roots LLC",
  description:
    "Women-owned painting company in Riverview, FL serving the Tampa Bay area. Interior and exterior painting with quality, care, and attention to detail.",
  url: "https://paintedrootsllc.com",
  telephone: "+18138303279",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Riverview",
    addressRegion: "FL",
    postalCode: "33579",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Riverview", addressRegion: "FL" },
    { "@type": "City", name: "Tampa", addressRegion: "FL" },
    { "@type": "City", name: "Brandon", addressRegion: "FL" },
    { "@type": "City", name: "Valrico", addressRegion: "FL" },
    { "@type": "City", name: "Lithia", addressRegion: "FL" },
    { "@type": "City", name: "Ruskin", addressRegion: "FL" },
    { "@type": "City", name: "Sun City Center", addressRegion: "FL" },
    { "@type": "City", name: "Apollo Beach", addressRegion: "FL" },
  ],
  priceRange: "$$",
  openingHours: "Mo-Fr 08:00-18:00",
  sameAs: ["https://www.facebook.com/PaintedRootsLLC/"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body className="bg-surface text-gray-900 antialiased font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
