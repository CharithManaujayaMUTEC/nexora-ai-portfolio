import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEXORA — IT + AI Solutions",
  description:
    "NEXORA builds intelligent digital products, AI systems, cloud platforms, and scalable software experiences.",
  keywords: [
    "AI solutions",
    "software development",
    "IT solutions",
    "machine learning",
    "cloud engineering",
    "digital transformation"
  ],
  openGraph: {
    title: "NEXORA — IT + AI Solutions",
    description:
      "We design and engineer intelligent systems for ambitious businesses.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}