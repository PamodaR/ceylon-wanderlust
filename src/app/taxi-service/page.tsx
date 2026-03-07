"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { TaxiBookingFormData } from "@/types";

const vehicleTypes = [
  {
    value: "sedan" as const,
    label: "Sedan",
    description: "Comfortable for up to 3 passengers",
    priceRange: "LKR 50 - 80 / km",
  },
  {
    value: "suv" as const,
    label: "SUV",
    description: "Spacious for up to 5 passengers",
    priceRange: "LKR 70 - 100 / km",
  },
  {
    value: "van" as const,
    label: "Van",
    description: "Perfect for groups up to 8 passengers",
    priceRange: "LKR 90 - 130 / km",
  },
  {
    value: "luxury" as const,
    label: "Luxury",
    description: "Premium vehicles for a VIP experience",
    priceRange: "LKR 150 - 250 / km",
  },
];

const features = [
  {
    title: "Airport Transfers",
    description: "Reliable pickup and drop-off at Bandaranaike International Airport.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
  },
  {
    title: "City Tours",
    description: "Explore Colombo, Kandy, Galle, and other cities at your own pace.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5z" />
      </svg>
    ),
  },
  {
    title: "Intercity Travel",
    description: "Comfortable long-distance travel between any two cities in Sri Lanka.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
  {
    title: "24/7 Availability",
    description: "Book anytime, day or night. We're always ready to serve you.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function TaxiServicePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaxiBookingFormData>();

  const onSubmit = async (data: TaxiBookingFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/taxi-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to submit");

      setSubmitStatus("success");
      reset();
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 py-20">
        <div className="container-custom mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4 font-heading text-4xl font-bold text-white sm:text-5xl">
            Taxi Service
          </h1>
          <p className="mx-auto max-w-2xl text-primary-100">
            Reliable, comfortable, and affordable taxi services across Sri Lanka.
            From airport transfers to intercity travel, we&apos;ve got you covered.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  {feature.icon}
                </div>
                <h3 className="mb-2 font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form & Vehicle Types */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
              Book Your Ride
            </h2>
            <p className="mx-auto max-w-xl text-gray-500">
              Fill in the details below and we&apos;ll arrange your ride. You&apos;ll
              receive a confirmation with the final price within 1 hour.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-5">
            {/* Vehicle Types */}
            <div className="lg:col-span-2">
              <h3 className="mb-4 text-lg font-bold text-gray-900">
                Our Vehicles
              </h3>
              <div className="space-y-4">
                {vehicleTypes.map((vehicle) => (
                  <div
                    key={vehicle.value}
                    className="rounded-xl border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {vehicle.label}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {vehicle.description}
                        </p>
                      </div>
                      <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-600">
                        {vehicle.priceRange}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-8">
                {submitStatus === "success" && (
                  <div className="mb-6 rounded-lg bg-green-50 p-4 text-sm text-green-700">
                    Your taxi booking request has been submitted! We&apos;ll confirm
                    your ride within 1 hour.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 rounded-lg bg-red-50 p-4 text-sm text-red-700">
                    Something went wrong. Please try again or call us directly.
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="customerName" className="input-label">
                        Full Name *
                      </label>
                      <input
                        id="customerName"
                        type="text"
                        className="input-field"
                        placeholder="John Doe"
                        {...register("customerName", {
                          required: "Name is required",
                        })}
                      />
                      {errors.customerName && (
                        <p className="input-error">
                          {errors.customerName.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="input-label">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="input-field"
                        placeholder="+94 77 123 4567"
                        {...register("phone", {
                          required: "Phone is required",
                        })}
                      />
                      {errors.phone && (
                        <p className="input-error">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="input-label">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="input-field"
                      placeholder="john@example.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="input-error">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="pickupLocation" className="input-label">
                        Pickup Location *
                      </label>
                      <input
                        id="pickupLocation"
                        type="text"
                        className="input-field"
                        placeholder="e.g., Colombo Airport"
                        {...register("pickupLocation", {
                          required: "Pickup location is required",
                        })}
                      />
                      {errors.pickupLocation && (
                        <p className="input-error">
                          {errors.pickupLocation.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="dropoffLocation" className="input-label">
                        Drop-off Location *
                      </label>
                      <input
                        id="dropoffLocation"
                        type="text"
                        className="input-field"
                        placeholder="e.g., Kandy Hotel"
                        {...register("dropoffLocation", {
                          required: "Drop-off location is required",
                        })}
                      />
                      {errors.dropoffLocation && (
                        <p className="input-error">
                          {errors.dropoffLocation.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-3">
                    <div>
                      <label htmlFor="date" className="input-label">
                        Date *
                      </label>
                      <input
                        id="date"
                        type="date"
                        className="input-field"
                        min={new Date().toISOString().split("T")[0]}
                        {...register("date", {
                          required: "Date is required",
                        })}
                      />
                      {errors.date && (
                        <p className="input-error">{errors.date.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="time" className="input-label">
                        Time *
                      </label>
                      <input
                        id="time"
                        type="time"
                        className="input-field"
                        {...register("time", {
                          required: "Time is required",
                        })}
                      />
                      {errors.time && (
                        <p className="input-error">{errors.time.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="vehicleType" className="input-label">
                        Vehicle Type *
                      </label>
                      <select
                        id="vehicleType"
                        className="input-field"
                        {...register("vehicleType", {
                          required: "Vehicle type is required",
                        })}
                      >
                        <option value="">Select...</option>
                        {vehicleTypes.map((v) => (
                          <option key={v.value} value={v.value}>
                            {v.label}
                          </option>
                        ))}
                      </select>
                      {errors.vehicleType && (
                        <p className="input-error">
                          {errors.vehicleType.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="specialRequests" className="input-label">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      id="specialRequests"
                      rows={3}
                      className="input-field resize-none"
                      placeholder="Child seats, extra luggage, etc."
                      {...register("specialRequests")}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      "Book Taxi"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
