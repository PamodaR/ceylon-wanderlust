import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="text-center">
        <p className="text-7xl font-bold text-primary-600">404</p>
        <h1 className="mt-4 font-heading text-3xl font-bold text-gray-900">
          Page Not Found
        </h1>
        <p className="mt-3 max-w-md text-gray-500">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/tours" className="btn-secondary">
            Browse Tours
          </Link>
        </div>
      </div>
    </div>
  );
}
