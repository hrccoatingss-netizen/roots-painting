import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roots Painting - Professional Painting in Green Bay, WI | 14+ Years Experience",
  description:
    "Roots Painting provides professional interior and exterior painting, cabinet painting, deck staining, and color consultation in Green Bay, WI. 5.0 stars from 89 reviews. Call (906) 914-4021 for a free estimate.",
  keywords:
    "painting company Green Bay WI, interior painting, exterior painting, cabinet painting, deck staining, color consultation, painter near me, Green Bay painter",
  openGraph: {
    title: "Roots Painting - Professional Painting in Green Bay, WI",
    description:
      "14+ years of trusted painting services in Green Bay, WI. Interior, exterior, cabinets, decks & more. 5.0 stars from 89 reviews.",
    url: "https://rootspainting.com",
    siteName: "Roots Painting",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roots Painting - Professional Painting in Green Bay, WI",
    description:
      "14+ years of trusted painting services in Green Bay, WI. 5.0 stars from 89 reviews.",
  },
  metadataBase: new URL("https://rootspainting.com"),
  alternates: { canonical: "/" },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://rootspainting.com",
  name: "Roots Painting",
  description:
    "Professional painting services in Green Bay, WI. Interior, exterior, cabinet painting, deck & fence staining, and color consultation.",
  url: "https://rootspainting.com",
  telephone: "+19069144021",
  email: "info@rootspainting.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Green Bay",
    addressRegion: "WI",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Green Bay", addressRegion: "WI" },
    { "@type": "City", name: "Howard", addressRegion: "WI" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "89",
  },
  priceRange: "$$",
  openingHours: "Mo-Fr 07:00-18:00",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
