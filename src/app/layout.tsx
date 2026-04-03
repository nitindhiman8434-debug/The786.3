import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnnouncementBar from "@/components/layout/AnnouncementBar";

export const metadata: Metadata = {
  title: {
    default: "THE786 — Anonymous Luxury with an Arabic Soul",
    template: "%s | THE786",
  },
  description:
    "Premium long-wear perfumes crafted for modern India. Discover oud, rare jasmine, and the mystery of the Midnight Courtyard.",
  keywords: [
    "luxury perfume",
    "Indian perfume",
    "oud perfume",
    "premium fragrance",
    "THE786",
    "attar",
    "long lasting perfume",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "THE786",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-midnight text-ivory font-sans">
        <AnnouncementBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
