import Link from "next/link";
import TourCard from "@/components/TourCard";
import { getFeaturedTours } from "@/data/tours";

const stats = [
  { value: "500+", label: "Happy Travelers" },
  { value: "50+", label: "Tour Packages" },
  { value: "10+", label: "Years Experience" },
  { value: "24/7", label: "Customer Support" },
];

const whyChooseUs = [
  {
    title: "Expert Local Guides",
    description:
      "Our knowledgeable guides bring Sri Lanka's history and culture to life with authentic experiences.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Best Price Guarantee",
    description:
      "We offer competitive prices without compromising on quality. No hidden fees, ever.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Customizable Tours",
    description:
      "Every trip is tailored to your interests, pace, and budget for a truly personalized experience.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
  {
    title: "Safe & Reliable",
    description:
      "Your safety is our priority. All vehicles are insured and drivers are fully licensed.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "United Kingdom",
    text: "An absolutely incredible experience! The Sigiriya tour was the highlight of our Sri Lanka trip. Our guide was knowledgeable and friendly.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    location: "Australia",
    text: "The Yala Safari exceeded all expectations. We spotted leopards, elephants, and so many birds. The team's attention to detail was impressive.",
    rating: 5,
  },
  {
    name: "Emma Hofmann",
    location: "Germany",
    text: "From the scenic train ride to Ella to the breathtaking Nine Arches Bridge, every moment was magical. Highly recommend Ceylon Wanderlust!",
    rating: 5,
  },
];

export default function HomePage() {
  const featuredTours = getFeaturedTours();

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M20 10 C20 10 30 0 40 10 C50 20 40 30 40 30 C40 30 30 20 20 10Z'/%3E%3Cpath d='M60 50 C60 50 70 40 80 50 C90 60 80 70 80 70 C80 70 70 60 60 50Z'/%3E%3Cpath d='M0 50 C0 50 10 40 20 50 C30 60 20 70 20 70 C20 70 10 60 0 50Z'/%3E%3Cpath d='M40 70 C40 70 50 60 60 70 C70 80 60 90 60 90 C60 90 50 80 40 70Z'/%3E%3Ccircle cx='10' cy='30' r='2'/%3E%3Ccircle cx='50' cy='10' r='1.5'/%3E%3Ccircle cx='70' cy='30' r='2'/%3E%3Ccircle cx='30' cy='60' r='1.5'/%3E%3Ccircle cx='70' cy='70' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} /><div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpolygon fill='%23ffffff' fill-opacity='0.1' points='50%2C10 90%2C90 10%2C90'/%3E%3Cpolygon fill='%23ffffff' fill-opacity='0.07' points='80%2C20 110%2C90 50%2C90'/%3E%3Cpolygon fill='%23ffffff' fill-opacity='0.07' points='20%2C20 -10%2C90 50%2C90'/%3E%3Ccircle fill='%23ffffff' fill-opacity='0.08' cx='50' cy='15' r='8'/%3E%3C/svg%3E\")" }} />
        </div>

        <div className="container-custom relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-4 inline-block rounded-full bg-accent-500/20 px-4 py-2 text-sm font-medium text-accent-300">
              Welcome to Sri Lanka
            </span>
            <h1 className="mb-6 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Discover the{" "}
              <span className="text-accent-400">Pearl of the</span>{" "}
              Indian Ocean
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-primary-100 sm:text-xl">
              Explore ancient temples, pristine beaches, lush tea plantations,
              and incredible wildlife. Let us craft your perfect Sri Lankan
              adventure.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/tours" className="btn-accent !px-8 !py-4 text-base">
                Explore Tours
              </Link>
              <Link href="/contact" className="btn-secondary !border-white/30 !px-8 !py-4 text-base !text-white hover:!bg-white/10">
                Plan Your Trip
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="h-6 w-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-16 z-10 px-4 sm:px-6 lg:px-8">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-2 gap-4 rounded-2xl bg-white p-6 shadow-xl md:grid-cols-4 md:p-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-primary-600 sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary-600">
              Top Experiences
            </span>
            <h2 className="mb-4 font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
              Featured Tours
            </h2>
            <p className="mx-auto max-w-2xl text-gray-500">
              Handpicked tours that showcase the best of Sri Lanka, from ancient
              heritage sites to thrilling wildlife encounters.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featuredTours.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/tours" className="btn-primary !px-8">
              View All Tours
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary-600">
              Why Travel With Us
            </span>
            <h2 className="mb-4 font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose Ceylon Wanderlust
            </h2>
            <p className="mx-auto max-w-2xl text-gray-500">
              We go above and beyond to make your Sri Lankan adventure truly
              memorable.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Taxi Service */}
      <section className="section-padding bg-primary-700">
        <div className="container-custom mx-auto text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-white sm:text-4xl">
            Need a Ride? We&apos;ve Got You Covered
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-primary-100">
            Book our reliable taxi service for airport transfers, city tours, or
            intercity travel. Comfortable vehicles and experienced drivers at
            your service.
          </p>
          <Link href="/taxi-service" className="btn-accent !px-8 !py-4 text-base">
            Book a Taxi
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary-600">
              Testimonials
            </span>
            <h2 className="mb-4 font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
              What Our Travelers Say
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-accent-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-400">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600">
        <div className="container-custom mx-auto text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-white sm:text-4xl">
            Ready to Explore Sri Lanka?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-accent-100">
            Contact us today and let our travel experts help you plan the
            perfect Sri Lankan getaway.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-accent-600 shadow-sm transition-all hover:bg-gray-50">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
