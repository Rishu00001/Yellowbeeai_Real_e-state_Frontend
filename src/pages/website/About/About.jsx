import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  Home,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "2.5K+", label: "Properties Sold" },
  { value: "1.8K+", label: "Happy Clients" },
  { value: "150+", label: "Professional Agents" },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted & Transparent",
    description:
      "We believe in honest communication, transparent pricing, and building long-term relationships.",
  },
  {
    icon: Users,
    title: "Professional Team",
    description:
      "Our experienced real estate professionals help you make confident property decisions.",
  },
  {
    icon: Award,
    title: "Quality Properties",
    description:
      "We carefully select properties that meet high standards of quality, comfort, and value.",
  },
];

export default function About() {
  return (
    <div className="bg-white text-[#192b45]">
      {/* Hero Section */}
      <section className="relative flex min-h-[360px] items-center overflow-hidden bg-[#192b45]">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85"
            alt="Modern luxury home"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-[#14243b]/80" />

        <div className="relative mx-auto w-full max-w-7xl px-5 py-20 md:px-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[3px] text-[#ff385c]">
            About Our Company
          </p>

          <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white md:text-6xl">
            We Help You Find Your Perfect Place
          </h1>

          <div className="mt-6 flex items-center gap-2 text-sm text-white/80">
            <Link to="/" className="transition hover:text-[#ff385c]">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">About Us</span>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 md:grid-cols-2 md:px-10">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85"
            alt="Beautiful modern property"
            className="h-[420px] w-full rounded-xl object-cover"
          />

          <div className="absolute -bottom-6 -right-3 rounded-xl bg-[#ff385c] p-6 text-white shadow-xl md:-right-6">
            <p className="text-4xl font-bold">15+</p>
            <p className="mt-1 text-sm">Years of Excellence</p>
          </div>
        </div>

        <div className="pt-5 md:pt-0">
          <p className="mb-3 text-sm font-bold uppercase tracking-[2px] text-[#ff385c]">
            Who We Are
          </p>

          <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
            Making Real Estate Simple, Accessible & Reliable
          </h2>

          <p className="mb-5 leading-7 text-gray-500">
            We are dedicated to helping people find properties that truly feel
            like home. Whether you are buying your first house, looking for a
            rental property, or investing in real estate, we make the journey
            simple and stress-free.
          </p>

          <p className="mb-8 leading-7 text-gray-500">
            With a customer-first approach and a passion for real estate, we
            connect buyers, sellers, and property owners with the right
            opportunities.
          </p>

          <div className="mb-8 space-y-4">
            {[
              "Personalized property recommendations",
              "Experienced real estate professionals",
              "Transparent and reliable services",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="shrink-0 text-[#ff385c]" size={20} />
                <span className="text-sm font-medium text-gray-700">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <Link
            to="/properties"
            className="inline-flex items-center gap-3 rounded-md bg-[#ff385c] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#e92d50]"
          >
            Explore Properties
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#f7f8fa] py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-5 text-center md:grid-cols-4 md:px-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-4xl font-bold text-[#ff385c]">
                {stat.value}
              </h3>
              <p className="mt-3 text-sm font-medium text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-10">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[2px] text-[#ff385c]">
            Why Choose Us
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Your Property Journey Starts With Us
          </h2>

          <p className="mt-4 leading-7 text-gray-500">
            We combine local expertise, professional service, and a
            customer-focused approach to make every property journey easier.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#fff0f2] text-[#ff385c]">
                  <Icon size={27} />
                </div>

                <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>

                <p className="text-sm leading-7 text-gray-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-10">
        <div className="flex flex-col items-center justify-between gap-8 rounded-2xl bg-[#192b45] px-8 py-14 text-center md:flex-row md:px-14 md:text-left">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[2px] text-[#ff385c]">
              Let's Find Your Dream Home
            </p>

            <h2 className="max-w-xl text-3xl font-bold text-white">
              Ready to Discover Your Next Property?
            </h2>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-md bg-[#ff385c] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#e92d50]"
          >
            Contact Us
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
}
