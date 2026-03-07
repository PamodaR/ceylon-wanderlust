import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taxi Service",
  description:
    "Book a reliable taxi in Sri Lanka. Airport transfers, city tours, and intercity travel with comfortable vehicles and experienced drivers.",
};

export default function TaxiServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
