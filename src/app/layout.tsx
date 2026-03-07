import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const heading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ceylon Wanderlust | Discover Sri Lanka",
    template: "%s | Ceylon Wanderlust",
  },
  description:
    "Explore the beauty of Sri Lanka with Ceylon Wanderlust. We offer guided tours, taxi services, and unforgettable travel experiences across the island.",
  keywords: [
    "Sri Lanka tours",
    "Sri Lanka travel",
    "Ceylon tourism",
    "Sigiriya tours",
    "Yala safari",
    "Sri Lanka taxi service",
    "Sri Lanka holiday",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="font-body">
        <Navbar />
        <main className="min-h-screen pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
