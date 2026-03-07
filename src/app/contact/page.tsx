"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { ContactFormData } from "@/types";

const contactInfo = [
  {
    title: "Visit Us",
    details: ["No.107,Witharandeniya", "Tangalle, Sri Lanka"],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: "Call Us",
    details: ["+94 71 154 9021", "+94 70 3178177"],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    title: "Email Us",
    details: ["randima2013@gmail.com", "pamodarajapaksha11@gmail.com"],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: "Working Hours",
    details: ["Mon - Sat: 8:00 AM - 8:00 PM", "Sunday: 9:00 AM - 5:00 PM"],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
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
      {/* ── HERO ── colorful tropical Sri Lanka waterfall/jungle */}
      <section
        className="relative py-32"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1800&q=90')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Vibrant green-to-teal gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(6,78,59,0.65) 0%, rgba(15,118,110,0.45) 50%, rgba(0,0,0,0.35) 100%)",
          }}
        />

        {/* Bottom wave into white */}
        <div className="absolute bottom-0 left-0 right-0 leading-none">
          <svg viewBox="0 0 1440 64" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ height: "52px" }}>
            <path d="M0,32 C480,80 960,0 1440,32 L1440,64 L0,64 Z" fill="white" />
          </svg>
        </div>

        <div className="relative z-10 container-custom mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-5 py-2 backdrop-blur-sm">
            <svg className="h-4 w-4 text-emerald-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2-11 6 3-1 6.5-.5 8.5 2-4.5-.5-8 1-10 6 0-3-2-4-2-4s-1 3 0 6C5 32 2 36 2 36s4-6 8-6c1 0 2 .5 2.5 1.5C14.5 26 17 22 17 8z"/>
            </svg>
            <span className="text-xs font-semibold tracking-[0.2em] text-white uppercase">
              Nature &amp; Eco Tourism
            </span>
          </div>

          <h1 className="mb-5 font-heading text-5xl font-bold text-white sm:text-6xl drop-shadow-xl">
            Contact Us
          </h1>
          <p className="mx-auto max-w-xl text-white/90 text-lg leading-relaxed drop-shadow">
            Have a question or ready to plan your Sri Lankan adventure? Reach
            out to us — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* ── CONTACT INFO CARDS ── */}
      <section className="relative -mt-4 z-10 px-4 sm:px-6 lg:px-8 pb-6">
        <div className="container-custom mx-auto">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="rounded-2xl bg-white p-6 shadow-lg text-center"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                  {info.icon}
                </div>
                <h3 className="mb-2 font-semibold text-gray-900">{info.title}</h3>
                {info.details.map((detail) => (
                  <p key={detail} className="text-sm text-gray-500">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── with second nature background image */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1800&q=90')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Soft dark overlay so form card pops */}
        <div
          className="absolute inset-0"
          style={{
            background: "rgba(0,0,0,0.45)",
          }}
        />

        <div className="relative z-10 container-custom mx-auto">
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 text-center">
              <h2 className="mb-3 font-heading text-3xl font-bold text-white drop-shadow">
                Send Us a Message
              </h2>
              <p className="text-white/80">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>

            {/* White glassmorphism-style form card */}
            <div className="rounded-3xl bg-white/95 p-6 shadow-2xl sm:p-8 backdrop-blur-md">
              {submitStatus === "success" && (
                <div className="mb-6 rounded-lg bg-green-50 p-4 text-sm text-green-700">
                  Thank you for your message! We&apos;ll get back to you within 24 hours.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mb-6 rounded-lg bg-red-50 p-4 text-sm text-red-700">
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="input-label">Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      className="input-field"
                      placeholder="John Doe"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <p className="input-error">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="input-label">Email *</label>
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
                    {errors.email && <p className="input-error">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="input-label">Subject *</label>
                  <input
                    id="subject"
                    type="text"
                    className="input-field"
                    placeholder="What's this about?"
                    {...register("subject", { required: "Subject is required" })}
                  />
                  {errors.subject && <p className="input-error">{errors.subject.message}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="input-label">Message *</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="input-field resize-none"
                    placeholder="Tell us about your travel plans or ask any questions..."
                    {...register("message", {
                      required: "Message is required",
                      minLength: { value: 10, message: "Message must be at least 10 characters" },
                    })}
                  />
                  {errors.message && <p className="input-error">{errors.message.message}</p>}
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
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP PLACEHOLDER ── */}
      <section className="bg-gray-100">
        <div className="flex h-80 items-center justify-center">
          <div className="text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
            </svg>
            <p className="mt-3 text-sm text-gray-500">
              Google Maps integration — Add your API key to enable the map
            </p>
            <p className="mt-1 text-xs text-gray-400">
              No. 107, Witharandeniya, Tangalle, Sri Lanka
            </p>
          </div>
        </div>
      </section>
    </>
  );
}