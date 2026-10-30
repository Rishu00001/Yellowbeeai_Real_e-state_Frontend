
import {
  ArrowRight,
  Building2,
  Check,
  MapPin,
  ShieldCheck,
  Wallet,
} from "lucide-react";

const cities = [
  {
    name: "New York",
    count: "2,345 Properties",
    image:
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Los Angeles",
    count: "1,890 Properties",
    image:
      "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "San Francisco",
    count: "1,260 Properties",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Atlanta",
    count: "980 Properties",
    image:
      "https://images.unsplash.com/photo-1575527048207-b1f3b1f2c7d9?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Miami",
    count: "1,520 Properties",
    image:
      "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Chicago",
    count: "1,125 Properties",
    image:
      "https://images.unsplash.com/photo-1494522358652-f30e61a60313?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Houston",
    count: "1,050 Properties",
    image:
      "https://images.unsplash.com/photo-1537819191377-d3305ffddce4?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Orlando",
    count: "870 Properties",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=700&q=85",
  },
];

const benefits = [
  {
    icon: Building2,
    title: "Wide Range of Properties",
    description:
      "Explore homes, apartments and villas to find a property that matches your lifestyle.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted by Thousands",
    description:
      "We work to make every step of your property search transparent and dependable.",
  },
  {
    icon: Wallet,
    title: "Financing Made Easy",
    description:
      "Get guidance to understand your options and make confident property decisions.",
  },
  {
    icon: MapPin,
    title: "We Are Here Near You",
    description:
      "Our local knowledge helps you discover the right neighbourhood for your needs.",
  },
];

const agents = [
  {
    name: "Carls John",
    role: "Real Estate Agent",
    image: "https://i.pravatar.cc/300?img=12",
  },
  {
    name: "Arling Tracy",
    role: "Real Estate Agent",
    image: "https://i.pravatar.cc/300?img=47",
  },
  {
    name: "Mark Web",
    role: "Real Estate Agent",
    image: "https://i.pravatar.cc/300?img=13",
  },
  {
    name: "Katy Grace",
    role: "Real Estate Agent",
    image: "https://i.pravatar.cc/300?img=44",
  },
  {
    name: "Chris Melo",
    role: "Real Estate Agent",
    image: "https://i.pravatar.cc/300?img=60",
  },
  {
    name: "Nina Thomas",
    role: "Real Estate Agent",
    image: "https://i.pravatar.cc/300?img=49",
  },
];

const testimonials = [
  {
    quote:
      "The team made our home search simple and stress-free. We found a place that suits our family perfectly.",
    name: "Lisa Smith",
    location: "New York",
    image: "https://i.pravatar.cc/100?img=45",
  },
  {
    quote:
      "Professional service, helpful advice and great communication throughout the entire buying process.",
    name: "Jhon Morris",
    location: "Los Angeles",
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    quote:
      "I appreciated the personal attention and the way every question was answered clearly and promptly.",
    name: "Mary Deshaw",
    location: "Chicago",
    image: "https://i.pravatar.cc/100?img=44",
  },
];

function SectionTitle({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`mb-9 ${centered ? "text-center" : ""}`}>
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#ff385c]">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-bold tracking-tight text-[#192b45] sm:text-3xl lg:text-[36px]">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 max-w-2xl text-sm leading-7 text-[#7a8493] ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function PopularPlaces() {
  return (
    <section
      id="popular-places"
      className="bg-white px-5 py-16 sm:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-[1240px]">
        <SectionTitle
          eyebrow="Explore locations"
          title="Popular Places"
          description="Find your next home in the neighbourhood you love."
          centered
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-5">
          {cities.map((city) => (
            <a
              key={city.name}
              href={`/properties?location=${encodeURIComponent(city.name)}`}
              className="group relative h-[190px] overflow-hidden rounded-lg sm:h-[225px]"
            >
              <img
                src={city.image}
                alt={city.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101f35]/90 via-[#101f35]/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <h3 className="text-base font-bold sm:text-lg">{city.name}</h3>
                <p className="mt-1 text-xs text-white/80">{city.count}</p>
              </div>
              <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-[#192b45] transition group-hover:bg-[#ff385c] group-hover:text-white">
                <ArrowRight size={15} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  return (
    <section className="bg-[#f7f9fc] px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-[1240px]">
        <SectionTitle
          eyebrow="Why choose us"
          title="We Help You Find Your Place"
          description="From the first search to the final decision, we are here to help."
          centered
        />

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, description }, index) => (
            <article
              key={title}
              className="rounded-lg border border-[#e9edf2] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-[#fff0f3] text-[#ff385c]">
                <Icon size={26} strokeWidth={1.7} />
              </div>
              <span className="mb-2 block text-xs font-semibold text-[#ff385c]">
                0{index + 1}
              </span>
              <h3 className="text-base font-bold text-[#192b45]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#7a8493]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AgentsSection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <SectionTitle
            eyebrow="Meet the team"
            title="Meet Our Agents"
            description="Get support from people who know the property market."
          />
          <a
            href="/agents"
            className="mb-9 inline-flex items-center gap-2 text-sm font-semibold text-[#ff385c] hover:text-[#192b45]"
          >
            View All Agents <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {agents.map((agent) => (
            <article
              key={agent.name}
              className="overflow-hidden rounded-lg border border-[#e9edf2] bg-white text-center transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-[175px] overflow-hidden bg-[#f3f6fa] sm:h-[205px]">
                <img
                  src={agent.image}
                  alt={agent.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition duration-500 hover:scale-105"
                />
              </div>
              <div className="px-3 py-4">
                <h3 className="text-sm font-bold text-[#192b45]">
                  {agent.name}
                </h3>
                <p className="mt-1 text-[11px] text-[#87909e]">{agent.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-[#f7f9fc] px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-[1240px]">
        <SectionTitle
          eyebrow="Client stories"
          title="What Our Clients Say"
          description="A few words from people who found their home with us."
          centered
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-lg border border-[#e9edf2] bg-white p-6 sm:p-8"
            >
              <div className="mb-5 text-3xl tracking-[0.15em] text-[#ff385c]">
                “
              </div>
              <p className="min-h-[100px] text-sm leading-7 text-[#667085]">
                {testimonial.quote}
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-[#edf0f4] pt-5">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-sm font-bold text-[#192b45]">
                    {testimonial.name}
                  </h3>
                  <p className="mt-1 text-xs text-[#87909e]">
                    {testimonial.location}
                  </p>
                </div>
                <div className="ml-auto text-sm tracking-widest text-[#ffb547]">
                  ★★★★★
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PartnersSection() {
  const partners = ["HOMES", "REALTY+", "URBAN LIVING", "HOUSELY", "ESTATE CO."];

  return (
    <section className="border-y border-[#edf0f4] bg-white px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-[1240px]">
        <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.2em] text-[#87909e]">
          Our trusted partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-16">
          {partners.map((partner) => (
            <div
              key={partner}
              className="text-sm font-extrabold tracking-[0.14em] text-[#b0b8c4] transition hover:text-[#192b45] sm:text-base"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
