import Link from "next/link";
import { Tour } from "@/types";

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <Link
      href={`/tours/${tour.slug}`}
      className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-gray-200">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
        <div className="h-full w-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
          <svg className="h-16 w-16 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        {/* Category Badge */}
        <span className="absolute left-3 top-3 z-20 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold capitalize text-primary-700 backdrop-blur-sm">
          {tour.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="mb-2 font-heading text-lg font-bold text-gray-900 transition-colors group-hover:text-primary-600">
          {tour.title}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-gray-500">
          {tour.shortDescription}
        </p>

        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {tour.duration}
            </span>
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {tour.location}
            </span>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-primary-600">
              LKR {tour.price.toLocaleString()}
            </p>
            <p className="text-xs text-gray-400">per person</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
