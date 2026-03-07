import type { Metadata } from "next";
import TourCard from "@/components/TourCard";
import { tours } from "@/data/tours";

export const metadata: Metadata = {
  title: "Tours",
  description:
    "Explore our curated collection of Sri Lanka tours — from ancient heritage sites and wildlife safaris to scenic train rides and beach getaways.",
};

export default function ToursPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 py-20">
        <div className="container-custom mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4 font-heading text-4xl font-bold text-white sm:text-5xl">
            Our Tours
          </h1>
          <p className="mx-auto max-w-2xl text-primary-100">
            Discover the best of Sri Lanka with our carefully curated tour
            packages. From ancient temples to thrilling safaris, we have
            something for every traveler.
          </p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Showing{" "}
              <span className="font-semibold text-gray-900">
                {tours.length}
              </span>{" "}
              tours
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tours.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 px-4 py-16 text-center sm:px-6 lg:px-8">
        <div className="container-custom mx-auto">
          <h2 className="mb-4 font-heading text-2xl font-bold text-gray-900 sm:text-3xl">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="mx-auto mb-6 max-w-xl text-gray-500">
            We can create custom tour packages tailored to your interests,
            budget, and schedule. Get in touch with our travel experts.
          </p>
          <a href="/contact" className="btn-primary">
            Request Custom Tour
          </a>
        </div>
      </section>
    </>
  );
}
