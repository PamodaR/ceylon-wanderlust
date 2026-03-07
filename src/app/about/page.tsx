import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Ceylon Wanderlust — your trusted travel partner in Sri Lanka. Meet our team and discover our passion for creating unforgettable experiences.",
};

const team = [
  {
    name: "Rajitha Perera",
    role: "Founder & CEO",
    bio: "With over 15 years in Sri Lankan tourism, Rajitha's passion for sharing his homeland's beauty drives everything we do.",
  },
  {
    name: "Dilini Fernando",
    role: "Head of Operations",
    bio: "Dilini ensures every tour runs seamlessly, from logistics to last-minute requests. Her attention to detail is unmatched.",
  },
  {
    name: "Kasun Silva",
    role: "Lead Tour Guide",
    bio: "A certified historian and nature enthusiast, Kasun brings Sri Lanka's stories to life with his engaging and knowledgeable tours.",
  },
  {
    name: "Amaya De Silva",
    role: "Customer Relations",
    bio: "Amaya is your first point of contact, dedicated to making your booking experience smooth and enjoyable from start to finish.",
  },
];

const values = [
  {
    title: "Authentic Experiences",
    description:
      "We believe in real, immersive travel that connects you with Sri Lanka's true culture, nature, and people — beyond the tourist trail.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Sustainable Tourism",
    description:
      "We're committed to eco-friendly practices that protect Sri Lanka's natural beauty and support local communities for generations to come.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
      </svg>
    ),
  },
  {
    title: "Safety First",
    description:
      "Your well-being is our top priority. All our vehicles are insured, drivers are licensed, and guides are certified professionals.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative py-32"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800&q=90')",
          backgroundSize: "cover",
          backgroundPosition: "center 55%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(6,78,59,0.70) 0%, rgba(15,118,110,0.50) 50%, rgba(0,0,0,0.40) 100%)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 leading-none">
          <svg viewBox="0 0 1440 64" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ height: "52px" }}>
            <path d="M0,32 C480,80 960,0 1440,32 L1440,64 L0,64 Z" fill="white" />
          </svg>
        </div>
        <div className="relative z-10 container-custom mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-5 py-2 backdrop-blur-sm">
            <svg className="h-4 w-4 text-emerald-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2-11 6 3-1 6.5-.5 8.5 2-4.5-.5-8 1-10 6 0-3-2-4-2-4s-1 3 0 6C5 32 2 36 2 36s4-6 8-6c1 0 2 .5 2.5 1.5C14.5 26 17 22 17 8z" />
            </svg>
            <span className="text-xs font-semibold tracking-[0.2em] text-white uppercase">Ceylon Wanderlust</span>
          </div>
          <h1 className="mb-5 font-heading text-5xl font-bold text-white sm:text-6xl drop-shadow-xl">
            About Us
          </h1>
          <p className="mx-auto max-w-2xl text-white/90 text-lg leading-relaxed drop-shadow">
            We are a passionate team of travel enthusiasts dedicated to
            showcasing the best of Sri Lanka to the world.
          </p>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary-600">
                Our Story
              </span>
              <h2 className="mb-6 font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
                Born From a Love for Sri Lanka
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Ceylon Wanderlust was founded in 2014 with a simple mission: to
                  share the incredible beauty, rich history, and warm hospitality
                  of Sri Lanka with travelers from around the world.
                </p>
                <p>
                  What started as a small family-run tour operation has grown
                  into a trusted travel company serving hundreds of travelers
                  each year. But our core values remain the same — authentic
                  experiences, personal service, and a deep respect for our
                  island&apos;s heritage.
                </p>
                <p>
                  From the misty highlands of Nuwara Eliya to the golden beaches
                  of the south coast, from the ancient ruins of Anuradhapura to
                  the bustling streets of Colombo, we know Sri Lanka like the
                  back of our hand — and we can&apos;t wait to show it to you.
                </p>
              </div>
            </div>
            <div
              className="relative h-80 overflow-hidden rounded-2xl shadow-xl lg:h-96"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1586016413664-864c0dd76f53?w=900&q=85')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "linear-gradient(to top, rgba(6,78,59,0.75) 0%, transparent 60%)",
                }}
              />
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <p className="text-lg font-bold text-white drop-shadow">Since 2014</p>
                <p className="text-sm text-white/80">Crafting Unforgettable Journeys</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ── with nature background image + parallax */}
      <section
        className="relative py-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1448375240586-882707db888b?w=1800&q=90')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark forest-green overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(2,44,34,0.82) 0%, rgba(6,78,59,0.70) 50%, rgba(0,0,0,0.65) 100%)",
          }}
        />

        {/* Top wave from white */}
        <div className="absolute top-0 left-0 right-0 leading-none rotate-180">
          <svg viewBox="0 0 1440 64" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ height: "48px" }}>
            <path d="M0,32 C480,80 960,0 1440,32 L1440,64 L0,64 Z" fill="white" />
          </svg>
        </div>

        {/* Bottom wave to white */}
        <div className="absolute bottom-0 left-0 right-0 leading-none">
          <svg viewBox="0 0 1440 64" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ height: "48px" }}>
            <path d="M0,32 C480,80 960,0 1440,32 L1440,64 L0,64 Z" fill="white" />
          </svg>
        </div>

        <div className="relative z-10 container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              What Drives Us
            </span>
            <h2 className="mb-4 font-heading text-3xl font-bold text-white sm:text-4xl drop-shadow">
              Our Values
            </h2>
            <div className="mx-auto h-1 w-16 rounded-full bg-emerald-400 opacity-80" />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl p-8 text-center backdrop-blur-sm"
                style={{
                  background: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.18)",
                }}
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl text-emerald-300"
                  style={{ background: "rgba(255,255,255,0.12)" }}
                >
                  {value.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{value.title}</h3>
                <p className="leading-relaxed text-white/75">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary-600">
              The People Behind Your Journey
            </span>
            <h2 className="mb-4 font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mx-auto max-w-2xl text-gray-500">
              A dedicated team of professionals who are passionate about making
              your Sri Lankan adventure unforgettable.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary-400 to-primary-600">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="mb-3 text-sm font-medium text-primary-600">{member.role}</p>
                <p className="text-sm leading-relaxed text-gray-500">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative py-24 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1800&q=90')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(6,78,59,0.78) 0%, rgba(0,0,0,0.55) 100%)",
          }}
        />
        <div className="absolute top-0 left-0 right-0 leading-none rotate-180">
          <svg viewBox="0 0 1440 64" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ height: "48px" }}>
            <path d="M0,32 C480,80 960,0 1440,32 L1440,64 L0,64 Z" fill="white" />
          </svg>
        </div>
        <div className="relative z-10 container-custom mx-auto text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-white sm:text-4xl drop-shadow-lg">
            Ready to Start Your Adventure?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-white/85 leading-relaxed">
            Let us help you plan an unforgettable trip to Sri Lanka.
            Our team is ready to create a personalized itinerary just for you.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/tours" className="btn-accent !px-8 !py-4 text-base">
              Browse Tours
            </Link>
            <Link
              href="/contact"
              className="btn-secondary !border-white/30 !px-8 !py-4 text-base !text-white hover:!bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}