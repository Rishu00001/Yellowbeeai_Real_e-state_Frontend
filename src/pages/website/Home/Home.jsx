
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  ArrowUpRight,
  Bath,
  BedDouble,
  CarFront,
  ChevronDown,
  Heart,
  MapPin,
  Maximize,
  Search,
  SlidersHorizontal,
} from "lucide-react";

import {
  PopularPlaces,
  WhyChooseUs,
  AgentsSection,
  TestimonialsSection,
  PartnersSection,
} from "../../../components/home/HomeSections";

const properties = [
  {
    id: 1,
    title: "Real Luxury Family House Villa",
    address: "Est St, 77 - Central Park South, NYC",
    price: 150000,
    type: "For Sale",
    beds: 6,
    baths: 3,
    area: 720,
    garages: 2,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=85",
    tag: "FEATURED",
  },
  {
    id: 2,
    title: "Modern Family House",
    address: "West Avenue, Los Angeles, CA",
    price: 350000,
    type: "For Sale",
    beds: 5,
    baths: 3,
    area: 850,
    garages: 2,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
    tag: "FOR SALE",
  },
  {
    id: 3,
    title: "Contemporary Villa",
    address: "Lake View Drive, Miami, FL",
    price: 2500,
    type: "For Rent",
    beds: 4,
    baths: 2,
    area: 690,
    garages: 1,
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
    tag: "FOR RENT",
  },
  {
    id: 4,
    title: "Elegant Modern Residence",
    address: "Highland Avenue, Chicago, IL",
    price: 420000,
    type: "For Sale",
    beds: 6,
    baths: 4,
    area: 920,
    garages: 2,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
    tag: "FEATURED",
  },
  {
    id: 5,
    title: "Luxury Garden House",
    address: "Palm Street, Orlando, FL",
    price: 1800,
    type: "For Rent",
    beds: 3,
    baths: 2,
    area: 620,
    garages: 1,
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1000&q=85",
    tag: "FOR RENT",
  },
  {
    id: 6,
    title: "Private Poolside Villa",
    address: "Sunset Boulevard, Houston, TX",
    price: 525000,
    type: "For Sale",
    beds: 5,
    baths: 4,
    area: 1050,
    garages: 2,
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1000&q=85",
    tag: "FOR SALE",
  },
];

const popularProperties = [
  { ...properties[1], id: 7, price: 350000 },
  { ...properties[0], id: 8, price: 150000 },
  { ...properties[3], id: 9, price: 420000 },
  { ...properties[5], id: 10, price: 525000 },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}) {
  return (
    <div className={`mb-9 ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#ff385c]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#192b45] sm:text-3xl lg:text-[38px]">
        {title}
      </h2>

      {description && (
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#7a8493]">
          {description}
        </p>
      )}
    </div>
  );
}

function PropertyCard({ property }) {
  const [favorite, setFavorite] = useState(false);

  const detailsPath = `/properties/${property.id}`;

  return (
    <article className="group overflow-hidden rounded-lg border border-[#e9edf2] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Property Image */}
      <div className="relative h-[225px] overflow-hidden">
        <Link to={detailsPath}>
          <img
            src={property.image}
            alt={property.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </Link>

        <span
          className={`absolute left-4 top-4 rounded px-3 py-1.5 text-[10px] font-bold tracking-wider text-white ${
            property.type === "For Rent"
              ? "bg-[#192b45]"
              : "bg-[#ff385c]"
          }`}
        >
          {property.tag}
        </span>

        <button
          type="button"
          aria-label={
            favorite ? "Remove from favorites" : "Add to favorites"
          }
          onClick={() => setFavorite((value) => !value)}
          className={`absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm transition ${
            favorite
              ? "text-[#ff385c]"
              : "text-[#192b45] hover:text-[#ff385c]"
          }`}
        >
          <Heart
            size={17}
            fill={favorite ? "currentColor" : "none"}
          />
        </button>
      </div>

      {/* Property Information */}
      <div className="p-5">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-[#ff385c]">
          {property.type}
        </p>

        <Link to={detailsPath}>
          <h3 className="text-[17px] font-bold text-[#192b45] transition hover:text-[#ff385c]">
            {property.title}
          </h3>
        </Link>

        <p className="mt-2 flex items-start gap-1.5 text-xs leading-5 text-[#87909e]">
          <MapPin
            size={14}
            className="mt-0.5 shrink-0 text-[#ff385c]"
          />
          {property.address}
        </p>

        {/* Property Features */}
        <div className="my-5 grid grid-cols-2 gap-y-3 border-b border-t border-[#edf0f4] py-4 text-xs text-[#697586] sm:grid-cols-4">
          <span className="flex items-center gap-1.5">
            <BedDouble size={15} className="text-[#ff385c]" />
            {property.beds} Beds
          </span>

          <span className="flex items-center gap-1.5">
            <Bath size={15} className="text-[#ff385c]" />
            {property.baths} Baths
          </span>

          <span className="flex items-center gap-1.5">
            <Maximize size={14} className="text-[#ff385c]" />
            {property.area} sqft
          </span>

          <span className="flex items-center gap-1.5">
            <CarFront size={15} className="text-[#ff385c]" />
            {property.garages} Garage
          </span>
        </div>

        {/* Price and Details */}
        <div className="flex items-center justify-between gap-3">
          <p className="text-lg font-bold text-[#192b45]">
            ${property.price.toLocaleString("en-US")}

            {property.type === "For Rent" && (
              <span className="text-xs font-normal text-[#87909e]">
                {" "}/mo
              </span>
            )}
          </p>

          <Link
            to={detailsPath}
            className="flex items-center gap-1 text-xs font-semibold text-[#192b45] transition hover:text-[#ff385c]"
          >
            Details
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}

function HeroSection() {
  const [listingType, setListingType] = useState("For Sale");
  const [keyword, setKeyword] = useState("");
  const [propertyType, setPropertyType] = useState("All Types");
  const [location, setLocation] = useState("Any Location");
  const [advancedOpen, setAdvancedOpen] = useState(false);

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  return (
    <section className="relative isolate overflow-hidden bg-[#192b45]">
      <img
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=90"
        alt="Luxury home exterior"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101f35]/95 via-[#192b45]/75 to-[#192b45]/20" />

      <div className="mx-auto grid min-h-[570px] max-w-[1240px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div className="max-w-xl text-white">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
            <span className="h-px w-9 bg-[#ff385c]" />
            Welcome to Yellowbeeai
          </p>

          <h1 className="text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-[62px]">
            Find Your
            <span className="block text-[#ff6b85]">
              Dream House
            </span>
          </h1>

          <p className="mt-6 max-w-md text-sm leading-7 text-white/75 sm:text-base">
            We have over a million properties for you. Discover a place where
            comfort meets your lifestyle.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#featured"
              className="inline-flex items-center gap-2 rounded bg-[#ff385c] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#e72e50]"
            >
              Explore Properties
              <ArrowRight size={16} />
            </a>

            <a
              href="#popular-places"
              className="rounded border border-white/50 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#192b45]"
            >
              Explore Locations
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/20 pt-6">
            <div>
              <p className="text-2xl font-bold">1M+</p>
              <p className="mt-1 text-xs text-white/65">
                Properties Listed
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">25K+</p>
              <p className="mt-1 text-xs text-white/65">
                Happy Customers
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">2K+</p>
              <p className="mt-1 text-xs text-white/65">
                Expert Agents
              </p>
            </div>
          </div>
        </div>

        {/* Search Form */}
        <div className="w-full rounded-xl bg-white p-5 shadow-2xl sm:p-7">
          <p className="text-xl font-bold text-[#192b45]">
            Search for a Property
          </p>

          <p className="mt-1 text-sm text-[#87909e]">
            Find a place that feels like home.
          </p>

          <div className="mt-6 flex border-b border-[#e8edf2]">
            {["For Sale", "For Rent"].map((type) => (
              <button
                type="button"
                key={type}
                onClick={() => setListingType(type)}
                className={`border-b-2 px-5 py-3 text-sm font-semibold transition ${
                  listingType === type
                    ? "border-[#ff385c] text-[#ff385c]"
                    : "border-transparent text-[#87909e] hover:text-[#192b45]"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <form
            className="mt-5 space-y-4"
            onSubmit={(event) => {
              event.preventDefault();

              const params = new URLSearchParams({
                type: listingType,
                keyword,
                propertyType,
                location,
              });

              if (minPrice) params.set("minPrice", minPrice);
              if (maxPrice) params.set("maxPrice", maxPrice);

              window.location.href = `/properties?${params.toString()}`;
            }}
          >
            <label className="block">
              <span className="mb-2 block text-xs font-semibold text-[#344054]">
                Keyword
              </span>

              <span className="flex items-center gap-2 rounded border border-[#e3e8ef] px-3 focus-within:border-[#ff385c]">
                <Search size={16} className="text-[#98a2b3]" />

                <input
                  value={keyword}
                  onChange={(event) => setKeyword(event.target.value)}
                  placeholder="Enter property name or keyword"
                  className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-[#a0a8b5]"
                />
              </span>
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label>
                <span className="mb-2 block text-xs font-semibold text-[#344054]">
                  Property Type
                </span>

                <span className="relative block">
                  <select
                    value={propertyType}
                    onChange={(event) => setPropertyType(event.target.value)}
                    className="w-full appearance-none rounded border border-[#e3e8ef] bg-white px-3 py-3 pr-8 text-sm text-[#667085] outline-none focus:border-[#ff385c]"
                  >
                    <option>All Types</option>
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>Condo</option>
                  </select>

                  <ChevronDown
                    size={15}
                    className="pointer-events-none absolute right-3 top-3.5 text-[#98a2b3]"
                  />
                </span>
              </label>

              <label>
                <span className="mb-2 block text-xs font-semibold text-[#344054]">
                  Location
                </span>

                <span className="relative block">
                  <select
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    className="w-full appearance-none rounded border border-[#e3e8ef] bg-white px-3 py-3 pr-8 text-sm text-[#667085] outline-none focus:border-[#ff385c]"
                  >
                    <option>Any Location</option>
                    <option>New York</option>
                    <option>Los Angeles</option>
                    <option>San Francisco</option>
                    <option>Miami</option>
                    <option>Chicago</option>
                    <option>Houston</option>
                  </select>

                  <ChevronDown
                    size={15}
                    className="pointer-events-none absolute right-3 top-3.5 text-[#98a2b3]"
                  />
                </span>
              </label>
            </div>

            <button
              type="button"
              onClick={() => setAdvancedOpen((open) => !open)}
              className="flex items-center gap-2 text-xs font-semibold text-[#667085] transition hover:text-[#ff385c]"
            >
              <SlidersHorizontal size={15} />
              Advanced Search

              <ChevronDown
                size={14}
                className={`transition ${
                  advancedOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {advancedOpen && (
              <div className="grid grid-cols-2 gap-3 rounded bg-[#f7f9fc] p-4">
                <label className="text-xs font-medium text-[#475467]">
                  Min Price

                  <input
                    type="number"
                    value={minPrice}
                    onChange={(event) => setMinPrice(event.target.value)}
                    placeholder="$0"
                    className="mt-2 w-full rounded border border-[#e3e8ef] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#ff385c]"
                  />
                </label>

                <label className="text-xs font-medium text-[#475467]">
                  Max Price

                  <input
                    type="number"
                    value={maxPrice}
                    onChange={(event) => setMaxPrice(event.target.value)}
                    placeholder="$1,000,000"
                    className="mt-2 w-full rounded border border-[#e3e8ef] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#ff385c]"
                  />
                </label>
              </div>
            )}

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded bg-[#ff385c] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#e72e50]"
            >
              <Search size={17} />
              Search Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function FeaturedProperties() {
  const [filter, setFilter] = useState("All");

  const filteredProperties = useMemo(
    () =>
      filter === "All"
        ? properties
        : properties.filter((property) => property.type === filter),
    [filter]
  );

  return (
    <section
      id="featured"
      className="bg-[#f7f9fc] px-5 py-16 sm:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Handpicked for you"
            title="Featured Properties"
            description="Explore our carefully selected properties and find the right place to call home."
          />

          <div className="mb-9 flex flex-wrap gap-2">
            {["All", "For Sale", "For Rent"].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`rounded px-4 py-2.5 text-xs font-semibold transition ${
                  filter === item
                    ? "bg-[#ff385c] text-white"
                    : "border border-[#e3e8ef] bg-white text-[#667085] hover:border-[#ff385c] hover:text-[#ff385c]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 rounded border border-[#192b45] px-6 py-3 text-sm font-semibold text-[#192b45] transition hover:border-[#ff385c] hover:bg-[#ff385c] hover:text-white"
          >
            View More Properties
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function PopularProperties() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Explore our listings"
            title="Discover Popular Properties"
            description="Browse popular homes selected for their comfort, location and style."
          />

          <Link
            to="/properties"
            className="mb-9 inline-flex items-center gap-2 text-sm font-semibold text-[#ff385c]"
          >
            View All
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {popularProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FinancingBanner() {
  return (
    <section className="px-5 py-8 sm:px-8 lg:py-12">
      <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-7 overflow-hidden rounded-xl bg-[#192b45] p-7 text-white sm:p-10 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#ff6b85]">
            Your next chapter starts here
          </p>

          <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
            Ready to find your dream property?
          </h2>

          <p className="mt-3 text-sm leading-6 text-white/70">
            Let our experienced team help you discover a home that suits your
            needs and your budget.
          </p>
        </div>

        <Link
          to="/contact"
          className="inline-flex shrink-0 items-center gap-2 rounded bg-[#ff385c] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#e72e50]"
        >
          Talk to an Expert
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <PopularPlaces />
      <FeaturedProperties />
      <WhyChooseUs />
      <PopularProperties />
      <FinancingBanner />
      <AgentsSection />
      <TestimonialsSection />
      <PartnersSection />
    </>
  );
}
