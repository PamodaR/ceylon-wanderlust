"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { TourBookingFormData } from "@/types";

interface Props {
  tourSlug: string;
  tourTitle: string;
  maxPeople: number;
  price: number;
}

export default function TourBookingForm({
  tourSlug,
  tourTitle,
  maxPeople,
  price,
}: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TourBookingFormData>({
    defaultValues: {
      tourSlug,
      tourTitle,
      numberOfPeople: 1,
    },
  });

  const onSubmit = async (data: TourBookingFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/tour-booking", {
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
    <div className="rounded-2xl bg-white p-6 shadow-lg">
      <div className="mb-6">
        <p className="text-sm text-gray-500">Starting from</p>
        <p className="text-3xl font-bold text-primary-600">
          LKR {price.toLocaleString()}
        </p>
        <p className="text-sm text-gray-400">per person</p>
      </div>

      {submitStatus === "success" && (
        <div className="mb-6 rounded-lg bg-green-50 p-4 text-sm text-green-700">
          Thank you! Your booking inquiry has been submitted. We&apos;ll contact
          you within 24 hours.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 rounded-lg bg-red-50 p-4 text-sm text-red-700">
          Something went wrong. Please try again or contact us directly.
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input type="hidden" {...register("tourSlug")} />
        <input type="hidden" {...register("tourTitle")} />

        <div>
          <label htmlFor="name" className="input-label">
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            className="input-field"
            placeholder="John Doe"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="input-error">{errors.name.message}</p>
          )}
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

        <div>
          <label htmlFor="phone" className="input-label">
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            className="input-field"
            placeholder="+94 77 123 4567"
            {...register("phone", { required: "Phone number is required" })}
          />
          {errors.phone && (
            <p className="input-error">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="numberOfPeople" className="input-label">
            Number of People *
          </label>
          <select
            id="numberOfPeople"
            className="input-field"
            {...register("numberOfPeople", {
              required: "Please select number of people",
              valueAsNumber: true,
            })}
          >
            {Array.from({ length: maxPeople }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? "person" : "people"}
              </option>
            ))}
          </select>
          {errors.numberOfPeople && (
            <p className="input-error">{errors.numberOfPeople.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="preferredDate" className="input-label">
            Preferred Date *
          </label>
          <input
            id="preferredDate"
            type="date"
            className="input-field"
            min={new Date().toISOString().split("T")[0]}
            {...register("preferredDate", {
              required: "Please select a date",
            })}
          />
          {errors.preferredDate && (
            <p className="input-error">{errors.preferredDate.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="input-label">
            Special Requests (Optional)
          </label>
          <textarea
            id="message"
            rows={3}
            className="input-field resize-none"
            placeholder="Any dietary requirements, accessibility needs, etc."
            {...register("message")}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Submitting...
            </span>
          ) : (
            "Send Booking Inquiry"
          )}
        </button>
      </form>
    </div>
  );
}
