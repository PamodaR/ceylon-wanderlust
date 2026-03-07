import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tours, getTourBySlug } from "@/data/tours";
import TourBookingForm from "@/components/TourBookingForm";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tour = getTourBySlug(params.slug);
  if (!tour) return { title: "Tour Not Found" };

  return {
    title: tour.title,
    description: tour.shortDescription,
  };
}

export default function TourDetailPage({ params }: Props) {
  const tour = getTourBySlug(params.slug);

  if (!tour) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-900 to-primary-700 py-20">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/tours"
            className="mb-6 inline-flex items-center gap-2 text-sm text-primary-200 transition-colors hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Tours
          </Link>
          <div className="flex flex-wrap items-start gap-3">
            <span className="rounded-full bg-accent-500/20 px-3 py-1 text-sm font-medium capitalize text-accent-300">
              {tour.category}
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-primary-200">
              {tour.duration}
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-primary-200">
              {tour.location}
            </span>
          </div>
          <h1 className="mt-4 max-w-3xl font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {tour.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Tour Image Placeholder */}
              <div className="mb-8 overflow-hidden rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200">
                <div className="flex h-64 items-center justify-center sm:h-80 lg:h-96">
                  <div className="text-center">
                    <svg className="mx-auto h-16 w-16 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="mt-2 text-sm text-primary-500">Tour Image</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-10">
                <h2 className="mb-4 font-heading text-2xl font-bold text-gray-900">
                  About This Tour
                </h2>
                <p className="leading-relaxed text-gray-600">
                  {tour.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="mb-10">
                <h2 className="mb-4 font-heading text-2xl font-bold text-gray-900">
                  Tour Highlights
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {tour.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-3 rounded-lg bg-primary-50 p-3"
                    >
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included */}
              <div className="mb-10">
                <h2 className="mb-4 font-heading text-2xl font-bold text-gray-900">
                  What&apos;s Included
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {tour.includes.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <svg className="h-5 w-5 shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="rounded-2xl bg-gray-50 p-6">
                <h3 className="mb-4 font-heading text-lg font-bold text-gray-900">
                  Quick Info
                </h3>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                      <svg className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Duration</p>
                      <p className="text-sm font-semibold text-gray-900">{tour.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                      <svg className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Max Group Size</p>
                      <p className="text-sm font-semibold text-gray-900">{tour.maxPeople} people</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                      <svg className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Location</p>
                      <p className="text-sm font-semibold text-gray-900">{tour.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Booking Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <TourBookingForm
                  tourSlug={tour.slug}
                  tourTitle={tour.title}
                  maxPeople={tour.maxPeople}
                  price={tour.price}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
