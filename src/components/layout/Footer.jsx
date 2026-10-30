
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Properties", to: "/properties" },
  { label: "Our Agents", to: "/agents" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const recentPosts = [
  {
    title: "How to Find the Right Home for Your Family",
    category: "Property Guide",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=180&q=80",
  },
  {
    title: "Things to Consider Before Buying Property",
    category: "Buying Advice",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=180&q=80",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(event) {
    event.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className="bg-[#14243a] text-white">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 px-5 py-14 sm:px-8 sm:py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {/* Company information */}
        <div>
          <Link to="/" className="inline-flex items-center gap-2">
            <Building2 size={27} className="text-[#ff526f]" />
            <span className="text-xl font-bold tracking-tight">
              Yellowbeeai
            </span>
          </Link>

          <p className="mt-5 max-w-xs text-sm leading-7 text-white/65">
            Find your dream house with a team that understands what home means
            to you. Explore properties and discover your next chapter.
          </p>

          <div className="mt-5 space-y-3 text-sm text-white/70">
            <p className="flex items-start gap-3">
              <MapPin
                size={17}
                className="mt-0.5 shrink-0 text-[#ff526f]"
              />
              <span>123 Main Street, New York, NY</span>
            </p>

            <a
              href="tel:+12125550123"
              className="flex items-center gap-3 transition hover:text-white"
            >
              <Phone size={16} className="shrink-0 text-[#ff526f]" />
              +1 212 555 0123
            </a>

            <a
              href="mailto:info@yellowbeeai.com"
              className="flex items-center gap-3 break-all transition hover:text-white"
            >
              <Send size={15} className="shrink-0 text-[#ff526f]" />
              info@yellowbeeai.com
            </a>
          </div>

          {/* Social links */}
          <div className="mt-6 flex gap-2.5">
            {[
              { name: "Facebook", label: "f" },
              { name: "Twitter", label: "𝕏" },
              { name: "Instagram", label: "ig" },
              { name: "LinkedIn", label: "in" },
            ].map((social) => (
              <a
                key={social.name}
                href="https://example.com"
                aria-label={social.name}
                className="flex h-9 w-9 items-center justify-center rounded border border-white/15 text-xs font-semibold text-white/70 transition hover:border-[#ff526f] hover:bg-[#ff526f] hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-base font-bold">Navigation</h3>
          <span className="mt-3 block h-0.5 w-10 bg-[#ff526f]" />

          <ul className="mt-5 space-y-3">
            {footerLinks.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="inline-flex items-center gap-2 text-sm text-white/65 transition hover:translate-x-1 hover:text-white"
                >
                  <ArrowRight size={13} className="text-[#ff526f]" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent posts */}
        <div>
          <h3 className="text-base font-bold">Latest Updates</h3>
          <span className="mt-3 block h-0.5 w-10 bg-[#ff526f]" />

          <div className="mt-5 space-y-5">
            {recentPosts.map((post) => (
              <Link
                to="/blog"
                key={post.title}
                className="group flex gap-3"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="h-[65px] w-[75px] shrink-0 rounded object-cover"
                />

                <div>
                  <p className="text-sm font-medium leading-5 text-white/85 transition group-hover:text-[#ff7189]">
                    {post.title}
                  </p>
                  <p className="mt-2 text-xs text-white/45">
                    {post.category}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-base font-bold">Newsletter</h3>
          <span className="mt-3 block h-0.5 w-10 bg-[#ff526f]" />

          <p className="mt-5 text-sm leading-7 text-white/65">
            Subscribe to receive property updates, new listings and helpful
            real estate tips.
          </p>

          <form onSubmit={handleSubscribe} className="mt-5">
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>

            <div className="flex overflow-hidden rounded border border-white/15 bg-white/5 focus-within:border-[#ff526f]">
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setSubscribed(false);
                }}
                required
                placeholder="Your email address"
                className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-white outline-none placeholder:text-white/40"
              />

              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="flex w-12 shrink-0 items-center justify-center bg-[#ff385c] transition hover:bg-[#e72e50]"
              >
                <Send size={17} />
              </button>
            </div>

            {subscribed && (
              <p className="mt-3 text-xs text-emerald-300">
                Thanks for subscribing!
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 px-5 py-5 sm:px-8">
        <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-3 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Yellowbeeai. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link
              to="/contact"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              to="/contact"
              className="transition hover:text-white"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
