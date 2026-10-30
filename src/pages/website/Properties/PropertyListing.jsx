
import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  ArrowLeftRight,
  Bath,
  BedDouble,
  CarFront,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Heart,
  LayoutGrid,
  List,
  MapPin,
  Maximize,
  Search,
  Share2,
  SlidersHorizontal,
} from "lucide-react";

const propertyImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=85",
];

const baseProperties = [
  {
    id: 1,
    title: "Modern Family House",
    address: "Central Park South, NYC",
    city: "New York",
    price: 230000,
    type: "For Sale",
    category: "House",
    beds: 6,
    baths: 3,
    area: 720,
    garages: 2,
    image: propertyImages[0],
    featured: true,
  },
  {
    id: 2,
    title: "Luxury Villa House",
    address: "Sunset Boulevard, Los Angeles",
    city: "Los Angeles",
    price: 120000,
    type: "For Rent",
    category: "Villa",
    beds: 4,
    baths: 3,
    area: 950,
    garages: 2,
    image: propertyImages[1],
    featured: true,
  },
  {
    id: 3,
    title: "Green Garden Family Home",
    address: "Richmond District, San Francisco",
    city: "San Francisco",
    price: 350000,
    type: "For Sale",
    category: "House",
    beds: 3,
    baths: 2,
    area: 650,
    garages: 1,
    image: propertyImages[2],
    featured: true,
  },
  {
    id: 4,
    title: "Contemporary Stone Villa",
    address: "Brickell Avenue, Miami",
    city: "Miami",
    price: 180000,
    type: "For Rent",
    category: "Villa",
    beds: 5,
    baths: 4,
    area: 1100,
    garages: 2,
    image: propertyImages[3],
    featured: true,
  },
  {
    id: 5,
    title: "Classic Family Residence",
    address: "Lincoln Park, Chicago",
    city: "Chicago",
    price: 275000,
    type: "For Sale",
    category: "House",
    beds: 4,
    baths: 2,
    area: 850,
    garages: 2,
    image: propertyImages[4],
    featured: true,
  },
  {
    id: 6,
    title: "Elegant Rental Villa",
    address: "Downtown, Houston",
    city: "Houston",
    price: 150000,
    type: "For Rent",
    category: "Villa",
    beds: 3,
    baths: 2,
    area: 600,
    garages: 1,
    image: propertyImages[5],
    featured: false,
  },
  {
    id: 7,
    title: "Premium Modern Home",
    address: "Midtown, Atlanta",
    city: "Atlanta",
    price: 420000,
    type: "For Sale",
    category: "House",
    beds: 6,
    baths: 4,
    area: 1250,
    garages: 3,
    image: propertyImages[6],
    featured: true,
  },
  {
    id: 8,
    title: "Comfortable City Apartment",
    address: "Downtown, Orlando",
    city: "Orlando",
    price: 95000,
    type: "For Rent",
    category: "Apartment",
    beds: 2,
    baths: 1,
    area: 450,
    garages: 1,
    image: propertyImages[1],
    featured: false,
  },
  {
    id: 9,
    title: "Spacious Miami Residence",
    address: "Coral Way, Miami",
    city: "Miami",
    price: 510000,
    type: "For Sale",
    category: "Villa",
    beds: 5,
    baths: 4,
    area: 1200,
    garages: 3,
    image: propertyImages[3],
    featured: true,
  },
  {
    id: 10,
    title: "Urban Family Apartment",
    address: "Manhattan, New York",
    city: "New York",
    price: 190000,
    type: "For Rent",
    category: "Apartment",
    beds: 3,
    baths: 2,
    area: 550,
    garages: 1,
    image: propertyImages[5],
    featured: false,
  },
  {
    id: 11,
    title: "California Dream House",
    address: "Beverly Hills, Los Angeles",
    city: "Los Angeles",
    price: 580000,
    type: "For Sale",
    category: "House",
    beds: 6,
    baths: 4,
    area: 1300,
    garages: 3,
    image: propertyImages[4],
    featured: true,
  },
  {
    id: 12,
    title: "Charming Garden Villa",
    address: "Lincoln Square, Chicago",
    city: "Chicago",
    price: 210000,
    type: "For Rent",
    category: "Villa",
    beds: 4,
    baths: 3,
    area: 780,
    garages: 2,
    image: propertyImages[2],
    featured: false,
  },
  {
    id: 13,
    title: "Bright Downtown Home",
    address: "Market Street, San Francisco",
    city: "San Francisco",
    price: 320000,
    type: "For Sale",
    category: "Apartment",
    beds: 3,
    baths: 2,
    area: 700,
    garages: 1,
    image: propertyImages[0],
    featured: true,
  },
  {
    id: 14,
    title: "Peaceful Family Villa",
    address: "Buckhead, Atlanta",
    city: "Atlanta",
    price: 160000,
    type: "For Rent",
    category: "Villa",
    beds: 4,
    baths: 3,
    area: 900,
    garages: 2,
    image: propertyImages[6],
    featured: false,
  },
];

const initialFilters = {
  keyword: "",
  location: "Any",
  category: "Any",
  status: "Any",
  beds: "Any",
  baths: "Any",
  minArea: 0,
  maxArea: 1300,
  minPrice: 0,
  maxPrice: 600000,
  features: [],
};

const popularTags = [
  "Houses",
  "Real Home",
  "Baths",
  "Beds",
  "Garages",
  "Family",
  "Real Estates",
  "Properties",
  "Location",
  "Price",
];

function SectionBox({ title, children }) {
  return (
    <section className="rounded-[3px] border border-[#e8ebf0] bg-white p-4">
      <h2 className="border-b border-[#edf0f4] pb-3 text-[14px] font-semibold text-[#292d32]">
        {title}
      </h2>
      <div className="pt-4">{children}</div>
    </section>
  );
}

function FilterSelect({ label, value, onChange, options, icon: Icon }) {
  return (
    <label className="relative block">
      <span className="sr-only">{label}</span>
      <Icon
        size={13}
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#7d858f]"
      />
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full appearance-none rounded-[3px] border border-[#e3e6eb] bg-white py-[11px] pl-8 pr-8 text-[11px] text-[#737b85] outline-none focus:border-[#ff385c]"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown
        size={13}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#8b929b]"
      />
    </label>
  );
}

function RangeFilter({
  label,
  min,
  max,
  minValue,
  maxValue,
  onMinChange,
  onMaxChange,
  formatValue,
  step,
}) {
  return (
    <div>
      <p className="mb-3 text-[11px] font-medium text-[#343941]">{label}</p>

      <div className="space-y-3">
        <div>
          <div className="mb-1 flex justify-between text-[10px] text-[#858c96]">
            <span>Minimum</span>
            <span>{formatValue(minValue)}</span>
          </div>
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={minValue}
            aria-label={`${label} minimum`}
            onChange={(event) => {
              const next = Number(event.target.value);
              onMinChange(Math.min(next, maxValue));
            }}
            style={{
              background: `linear-gradient(to right, #ff385c 0%, #ff385c ${((minValue - min) / (max - min)) * 100}%, #e5e7eb ${((minValue - min) / (max - min)) * 100}%, #e5e7eb 100%)`,
            }}
            className="h-1 w-full cursor-pointer appearance-none rounded-full accent-[#ff385c]"
          />
        </div>

        <div>
          <div className="mb-1 flex justify-between text-[10px] text-[#858c96]">
            <span>Maximum</span>
            <span>{formatValue(maxValue)}</span>
          </div>
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={maxValue}
            aria-label={`${label} maximum`}
            onChange={(event) => {
              const next = Number(event.target.value);
              onMaxChange(Math.max(next, minValue));
            }}
            className="h-1 w-full cursor-pointer rounded-full accent-[#ff385c]"
          />
        </div>
      </div>
    </div>
  );
}

function PropertyCard({ property }) {
  const [favorite, setFavorite] = useState(false);
  const [copied, setCopied] = useState(false);

  async function shareProperty() {
    const url = `${window.location.origin}/properties/${property.id}`;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1500);
      } else {
        window.prompt("Copy this property link:", url);
      }
    } catch {
      window.prompt("Copy this property link:", url);
    }
  }

  return (
    <article className="group grid min-w-0 overflow-hidden rounded-[3px] border border-[#e9edf2] bg-white shadow-[0_2px_5px_rgba(25,43,69,0.025)] transition hover:shadow-md sm:grid-cols-[39%_61%]">
      <div className="relative h-[210px] overflow-hidden sm:h-[164px]">
        <Link to={`/properties/${property.id}`} aria-label={property.title}>
          <img
            src={property.image}
            alt={property.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </Link>

        {property.featured && (
          <span className="absolute left-2 top-2 rounded-[2px] bg-[#18bd78] px-2 py-1 text-[9px] text-white">
            Featured
          </span>
        )}

        <span
          className={`absolute right-2 top-2 rounded-[2px] px-2 py-1 text-[9px] text-white ${
            property.type === "For Sale" ? "bg-[#ff4a55]" : "bg-[#ffae00]"
          }`}
        >
          {property.type}
        </span>

        <span className="absolute bottom-2 left-2 rounded-[2px] bg-[#40306b] px-2 py-1 text-[9px] text-white">
          Family Home
        </span>
      </div>

      <div className="flex min-w-0 flex-col justify-between p-3 sm:p-3.5">
        <div>
          <Link
            to={`/properties/${property.id}`}
            className="line-clamp-1 text-[13px] font-semibold text-[#30343a] hover:text-[#ff385c]"
          >
            {property.title}
          </Link>

          <p className="mt-1.5 flex items-center gap-1 text-[9px] text-[#858c96]">
            <MapPin size={11} className="shrink-0 text-[#17bb77]" />
            <span className="truncate">
              {property.address}, {property.city}
            </span>
          </p>

          <div className="mt-4 grid grid-cols-2 gap-x-2 gap-y-3 text-[10px] text-[#737b85]">
            <span className="flex items-center gap-1.5">
              <BedDouble size={12} />
              {property.beds} Bedrooms
            </span>
            <span className="flex items-center gap-1.5">
              <Bath size={12} />
              {property.baths} Bathrooms
            </span>
            <span className="flex items-center gap-1.5">
              <Maximize size={12} />
              {property.area} sq ft
            </span>
            <span className="flex items-center gap-1.5">
              <CarFront size={12} />
              {property.garages} Garages
            </span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-2 border-t border-[#f0f2f5] pt-3">
          <p className="text-[13px] font-semibold text-[#34383e]">
            ${property.price.toLocaleString("en-US")}
            {property.type === "For Rent" && (
              <span className="text-[10px] font-normal text-[#858c96]">
                /mo
              </span>
            )}
          </p>

          <div className="flex items-center gap-2.5 text-[#737b85]">
            <button
              type="button"
              title="Compare property"
              aria-label="Compare property"
              onClick={() => window.alert(`Property: ${property.title}`)}
              className="hover:text-[#ff385c]"
            >
              <ArrowLeftRight size={13} />
            </button>

            <button
              type="button"
              title={copied ? "Link copied" : "Share property"}
              aria-label="Share property"
              onClick={shareProperty}
              className="hover:text-[#ff385c]"
            >
              {copied ? <Check size={13} /> : <Share2 size={13} />}
            </button>

            <button
              type="button"
              title={favorite ? "Remove favorite" : "Add favorite"}
              aria-label={favorite ? "Remove favorite" : "Add favorite"}
              onClick={() => setFavorite((current) => !current)}
              className={favorite ? "text-[#ff385c]" : "hover:text-[#ff385c]"}
            >
              <Heart size={13} fill={favorite ? "currentColor" : "none"} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function PropertyFilters({ filters, updateFilter, onReset }) {
  return (
    <SectionBox title="Find Your House">
      <div className="space-y-3">
        <input
          type="search"
          value={filters.keyword}
          onChange={(event) => updateFilter("keyword", event.target.value)}
          placeholder="Enter Keyword..."
          aria-label="Search properties by keyword"
          className="w-full rounded-[3px] border border-[#e3e6eb] px-3 py-[11px] text-[11px] outline-none placeholder:text-[#8b929b] focus:border-[#ff385c]"
        />

        <FilterSelect
          label="Location"
          value={filters.location}
          onChange={(value) => updateFilter("location", value)}
          icon={MapPin}
          options={[
            { label: "Location", value: "Any" },
            { label: "New York", value: "New York" },
            { label: "Los Angeles", value: "Los Angeles" },
            { label: "San Francisco", value: "San Francisco" },
            { label: "Atlanta", value: "Atlanta" },
            { label: "Miami", value: "Miami" },
            { label: "Chicago", value: "Chicago" },
            { label: "Houston", value: "Houston" },
            { label: "Orlando", value: "Orlando" },
          ]}
        />

        <FilterSelect
          label="Property Type"
          value={filters.category}
          onChange={(value) => updateFilter("category", value)}
          icon={LayoutGrid}
          options={[
            { label: "Property Type", value: "Any" },
            { label: "House", value: "House" },
            { label: "Villa", value: "Villa" },
            { label: "Apartment", value: "Apartment" },
          ]}
        />

        <FilterSelect
          label="Property Status"
          value={filters.status}
          onChange={(value) => updateFilter("status", value)}
          icon={SlidersHorizontal}
          options={[
            { label: "Property Status", value: "Any" },
            { label: "For Sale", value: "For Sale" },
            { label: "For Rent", value: "For Rent" },
          ]}
        />

        <FilterSelect
          label="Bedrooms"
          value={filters.beds}
          onChange={(value) => updateFilter("beds", value)}
          icon={BedDouble}
          options={[
            { label: "Bedrooms", value: "Any" },
            { label: "2+ Bedrooms", value: "2" },
            { label: "3+ Bedrooms", value: "3" },
            { label: "4+ Bedrooms", value: "4" },
            { label: "5+ Bedrooms", value: "5" },
            { label: "6 Bedrooms", value: "6" },
          ]}
        />

        <FilterSelect
          label="Bathrooms"
          value={filters.baths}
          onChange={(value) => updateFilter("baths", value)}
          icon={Bath}
          options={[
            { label: "Bathrooms", value: "Any" },
            { label: "1+ Bathrooms", value: "1" },
            { label: "2+ Bathrooms", value: "2" },
            { label: "3+ Bathrooms", value: "3" },
            { label: "4+ Bathrooms", value: "4" },
          ]}
        />

        <div className="space-y-6 pt-2">
          <RangeFilter
            label="Area Size"
            min={0}
            max={1300}
            minValue={filters.minArea}
            maxValue={filters.maxArea}
            onMinChange={(value) => updateFilter("minArea", value)}
            onMaxChange={(value) => updateFilter("maxArea", value)}
            formatValue={(value) => `${value} sq ft`}
            step={50}
          />

          <RangeFilter
            label="Price Range"
            min={0}
            max={600000}
            minValue={filters.minPrice}
            maxValue={filters.maxPrice}
            onMinChange={(value) => updateFilter("minPrice", value)}
            onMaxChange={(value) => updateFilter("maxPrice", value)}
            formatValue={(value) => `$${value.toLocaleString("en-US")}`}
            step={10000}
          />
        </div>

        <details className="group pt-1">
          <summary className="flex cursor-pointer list-none items-center gap-1.5 text-[10px] font-medium text-[#ff385c]">
            <SlidersHorizontal size={12} />
            Advanced Features
            <ChevronDown
              size={12}
              className="transition group-open:rotate-180"
            />
          </summary>

          <div className="mt-3 space-y-2 rounded bg-[#f7f8fa] p-3">
            {["Garage", "Swimming Pool", "Garden", "Balcony"].map((feature) => (
              <label
                key={feature}
                className="flex items-center gap-2 text-[11px] text-[#68717d]"
              >
                <input
                  type="checkbox"
                  checked={filters.features.includes(feature)}
                  onChange={(event) => {
                    const nextFeatures = event.target.checked
                      ? [...filters.features, feature]
                      : filters.features.filter((item) => item !== feature);

                    updateFilter("features", nextFeatures);
                  }}
                  className="accent-[#ff385c]"
                />
                {feature}
              </label>
            ))}
          </div>
        </details>

        <button
          type="button"
          onClick={onReset}
          className="w-full bg-[#ff385c] py-3 text-[10px] font-semibold uppercase tracking-wide text-white transition hover:bg-[#e72e50]"
        >
          Reset Filters
        </button>
      </div>
    </SectionBox>
  );
}

function FeaturedSidebar() {
  const [active, setActive] = useState(0);
  const featuredProperties = baseProperties.filter((property) => property.featured);
  const property = featuredProperties[active % featuredProperties.length];

  return (
    <SectionBox title="Feature Properties">
      <div className="mb-3 flex justify-end gap-3">
        <button
          type="button"
          aria-label="Previous featured property"
          onClick={() =>
            setActive(
              (current) =>
                (current - 1 + featuredProperties.length) %
                featuredProperties.length
            )
          }
          className="text-[#20252c] hover:text-[#ff385c]"
        >
          <ChevronLeft size={20} strokeWidth={3} />
        </button>
        <button
          type="button"
          aria-label="Next featured property"
          onClick={() =>
            setActive((current) => (current + 1) % featuredProperties.length)
          }
          className="text-[#20252c] hover:text-[#ff385c]"
        >
          <ChevronRight size={20} strokeWidth={3} />
        </button>
      </div>

      <Link
        to={`/properties/${property.id}`}
        className="group relative block h-[135px] overflow-hidden"
      >
        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-2 top-2 bg-[#18bd78] px-2 py-1 text-[9px] text-white">
          ${property.price.toLocaleString("en-US")}
        </span>
        <span className="absolute right-2 top-2 bg-[#ff4a55] px-2 py-1 text-[9px] text-white">
          {property.type}
        </span>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 pb-3 pt-8 text-white">
          <p className="text-[11px] font-semibold">{property.title}</p>
          <p className="mt-1 flex items-center gap-1 text-[10px] text-white/80">
            <MapPin size={10} />
            {property.city}
          </p>
        </div>
      </Link>
    </SectionBox>
  );
}

function RecentProperties() {
  return (
    <SectionBox title="Recent Properties">
      <div className="space-y-3">
        {baseProperties.slice(0, 3).map((property) => (
          <Link
            key={property.id}
            to={`/properties/${property.id}`}
            className="group flex items-center gap-3"
          >
            <img
              src={property.image}
              alt={property.title}
              loading="lazy"
              className="h-[48px] w-[58px] shrink-0 rounded-[2px] object-cover"
            />
            <div className="min-w-0">
              <p className="truncate text-[11px] text-[#555d68] group-hover:text-[#ff385c]">
                {property.title}
              </p>
              <p className="mt-1 text-[10px] text-[#8a919b]">
                ${property.price.toLocaleString("en-US")}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </SectionBox>
  );
}

function PopularTags({ onSelect }) {
  return (
    <SectionBox title="Popular Tags">
      <div className="flex flex-wrap gap-1.5">
        {popularTags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => onSelect(tag)}
            className="rounded-[2px] border border-[#dfe3e8] px-2 py-1 text-[10px] text-[#4f5660] transition hover:border-[#ff385c] hover:bg-[#ff385c] hover:text-white"
          >
            {tag}
          </button>
        ))}
      </div>
    </SectionBox>
  );
}

export default function PropertyListing() {
  const [searchParams] = useSearchParams();

  const [filters, setFilters] = useState(() => ({
    ...initialFilters,
    keyword: searchParams.get("keyword") || "",
    location: searchParams.get("location") || "Any",
    category: searchParams.get("propertyType") || "Any",
    status: searchParams.get("type") || "Any",
  }));

  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("Top Selling");
  const [view, setView] = useState("list");

  function updateFilter(key, value) {
    setFilters((current) => ({ ...current, [key]: value }));
    setPage(1);
  }

  function resetFilters() {
    setFilters({ ...initialFilters });
    setPage(1);
  }

  function selectTag(tag) {
    const next = { ...filters };

    if (tag === "Houses") {
      next.category = "House";
    } else if (tag === "Location") {
      next.location = "New York";
    } else if (tag === "Price") {
      next.minPrice = 0;
      next.maxPrice = 230000;
    } else if (tag === "Beds") {
      next.beds = "4";
    } else if (tag === "Baths") {
      next.baths = "3";
    } else if (tag === "Garages") {
      next.keyword = "House";
    } else if (tag === "Properties" || tag === "Real Estates") {
      next.category = "Any";
    } else {
      next.keyword = tag;
    }

    setFilters(next);
    setPage(1);
  }

  const filteredProperties = useMemo(() => {
    let result = baseProperties.filter((property) => {
      const searchText =
        `${property.title} ${property.address} ${property.city} ${property.category}`.toLowerCase();

      const keywordMatch =
        !filters.keyword.trim() ||
        searchText.includes(filters.keyword.trim().toLowerCase());

      const locationMatch =
        filters.location === "Any" || property.city === filters.location;

      const categoryMatch =
        filters.category === "Any" || property.category === filters.category;

      const statusMatch =
        filters.status === "Any" || property.type === filters.status;

      const bedsMatch =
        filters.beds === "Any" || property.beds >= Number(filters.beds);

      const bathsMatch =
        filters.baths === "Any" || property.baths >= Number(filters.baths);

      const areaMatch =
        property.area >= filters.minArea && property.area <= filters.maxArea;

      const priceMatch =
        property.price >= filters.minPrice &&
        property.price <= filters.maxPrice;

      // Only apply advanced features when the sample property data supports them.
      const featureMatch = filters.features.every((feature) => {
        if (feature === "Garage") return property.garages > 0;
        // The sample dataset doesn't include pool, garden, or balcony fields.
        return false;
      });

      return (
        keywordMatch &&
        locationMatch &&
        categoryMatch &&
        statusMatch &&
        bedsMatch &&
        bathsMatch &&
        areaMatch &&
        priceMatch &&
        featureMatch
      );
    });

    if (sortBy === "Price: Low to High") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === "Price: High to Low") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === "Newest") {
      result = [...result].sort((a, b) => b.id - a.id);
    }

    return result;
  }, [filters, sortBy]);

  const pageSize = 7;
  const totalPages = Math.max(1, Math.ceil(filteredProperties.length / pageSize));

  // Keep the page in range if filters reduce the number of results.
  const currentPage = Math.min(page, totalPages);
  const visibleProperties = filteredProperties.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <>
      <section className="bg-[#f3f6fa] px-5 pb-5 pt-6 sm:px-8">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-2 flex items-center gap-2 text-[11px] text-[#7c8591]">
            <Link to="/" className="hover:text-[#ff385c]">
              Home
            </Link>
            <span>/</span>
            <span>Listings</span>
          </div>
          <h1 className="text-[24px] font-semibold tracking-tight text-[#292e35]">
            Property Listing
          </h1>
        </div>
      </section>

      <main className="min-h-screen bg-[#f3f6fa] px-5 pb-14 pt-3 sm:px-8">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-start gap-5 lg:grid-cols-[minmax(0,2.1fr)_minmax(255px,0.9fr)]">
          <section className="min-w-0">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <p className="text-[11px] text-[#7c8591]">
                {filteredProperties.length} Search results
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <label className="flex items-center gap-2 text-[10px] text-[#707984]">
                  <span className="font-semibold uppercase tracking-wide">
                    Sort by:
                  </span>
                  <select
                    value={sortBy}
                    onChange={(event) => {
                      setSortBy(event.target.value);
                      setPage(1);
                    }}
                    className="max-w-[145px] bg-transparent py-1 text-[10px] outline-none"
                  >
                    <option>Top Selling</option>
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </label>

                <div className="flex gap-1">
                  <button
                    type="button"
                    aria-label="List view"
                    onClick={() => setView("list")}
                    className={`flex h-7 w-7 items-center justify-center rounded-[2px] border ${
                      view === "list"
                        ? "border-[#202a35] bg-[#202a35] text-white"
                        : "border-[#cbd1d9] bg-white text-[#444c57]"
                    }`}
                  >
                    <List size={15} />
                  </button>
                  <button
                    type="button"
                    aria-label="Grid view"
                    onClick={() => setView("grid")}
                    className={`flex h-7 w-7 items-center justify-center rounded-[2px] border ${
                      view === "grid"
                        ? "border-[#202a35] bg-[#202a35] text-white"
                        : "border-[#cbd1d9] bg-white text-[#444c57]"
                    }`}
                  >
                    <LayoutGrid size={14} />
                  </button>
                </div>
              </div>
            </div>

            {visibleProperties.length > 0 ? (
              <div
                className={
                  view === "list"
                    ? "space-y-4"
                    : "grid grid-cols-1 gap-4 sm:grid-cols-2"
                }
              >
                {visibleProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="rounded border border-[#e8ebf0] bg-white px-5 py-14 text-center">
                <Search size={28} className="mx-auto mb-3 text-[#9ba3ad]" />
                <h2 className="text-base font-semibold text-[#30343a]">
                  No properties found
                </h2>
                <p className="mt-2 text-sm text-[#7c8591]">
                  Try changing your filters or resetting them.
                </p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-5 rounded bg-[#ff385c] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#e72e50]"
                >
                  Reset Filters
                </button>
              </div>
            )}

            {filteredProperties.length > pageSize && (
              <nav
                aria-label="Property listing pages"
                className="mt-7 flex flex-wrap items-center gap-1"
              >
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() => setPage((current) => Math.max(1, current - 1))}
                  className="flex h-8 items-center gap-1 border border-[#e0e5eb] bg-white px-3 text-[10px] text-[#65707c] hover:border-[#ff385c] hover:text-[#ff385c] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronLeft size={12} />
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                  (pageNumber) => (
                    <button
                      key={pageNumber}
                      type="button"
                      aria-current={
                        currentPage === pageNumber ? "page" : undefined
                      }
                      onClick={() => setPage(pageNumber)}
                      className={`h-8 min-w-8 border px-2 text-[10px] ${
                        currentPage === pageNumber
                          ? "border-[#ff385c] bg-[#ff385c] text-white"
                          : "border-[#e0e5eb] bg-white text-[#65707c] hover:border-[#ff385c] hover:text-[#ff385c]"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  )
                )}

                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() =>
                    setPage((current) => Math.min(totalPages, current + 1))
                  }
                  className="flex h-8 items-center gap-1 border border-[#e0e5eb] bg-white px-3 text-[10px] text-[#65707c] hover:border-[#ff385c] hover:text-[#ff385c] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next <ChevronRight size={12} />
                </button>
              </nav>
            )}
          </section>

          <aside className="space-y-4">
            <PropertyFilters
              filters={filters}
              updateFilter={updateFilter}
              onReset={resetFilters}
            />
            <FeaturedSidebar />
            <RecentProperties />
            <PopularTags onSelect={selectTag} />
          </aside>
        </div>
      </main>
    </>
  );
}
