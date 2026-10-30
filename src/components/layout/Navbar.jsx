import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Building2 } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Listing", path: "/properties" },
  { label: "Property", path: "/properties" },
  { label: "Pages", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  // Only one of Listing and Property should be active on /properties.
  function isLinkActive(item) {
    const path = location.pathname;

    if (item.label === "Listing") {
      return path === "/properties";
    }

    if (item.label === "Property") {
      return path.startsWith("/properties/") ;
    }

    if (item.path === "/") {
      return path === "/";
    }

    if (item.path === "/about") {
      return path === "/about";
    }

    if (item.path === "/blog") {
      return path === "/blog" || path.startsWith("/blog/");
    }

    return path === item.path;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e7ebf0] bg-white shadow-[0_2px_5px_rgba(25,43,69,0.03)]">
      <div className="flex min-h-[68px] items-center gap-6 px-5 sm:px-7 lg:px-8">
        {/* Website logo: hidden on dashboard because sidebar has its own logo */}
        {!isDashboard && (
          <Link
            to="/"
            className="flex shrink-0 items-center gap-2 text-[#192b45]"
          >
            <Building2 size={26} strokeWidth={1.8} />

            <span className="text-xl font-bold tracking-tight">
              Yellowbeeai
            </span>
          </Link>
        )}

        {/* Desktop navigation */}
        <nav
          className={`hidden items-center gap-6 lg:flex xl:gap-7 ${
            isDashboard ? "ml-8" : "ml-5"
          }`}
        >
          {navLinks.map((item) => {
            const active = isLinkActive(item);
            const hasDropdown = ["Listing", "Property", "Pages", "Blog"].includes(
              item.label
            );

            return (
              <Link
                key={item.label}
                to={item.path}
                className={`group relative flex items-center gap-1.5 whitespace-nowrap py-2 text-[13px] font-medium tracking-[0.1px] transition-colors duration-200 ${
                  active
                    ? "text-[#192b45]"
                    : "text-[#667085] hover:text-[#ff385c]"
                }`}
              >
                <span>{item.label}</span>

                {hasDropdown && (
                  <ChevronDown
                    size={13}
                    strokeWidth={1.8}
                    className={`transition-colors ${
                      active
                        ? "text-[#ff385c]"
                        : "text-[#98a2b3] group-hover:text-[#ff385c]"
                    }`}
                  />
                )}

                {/* Active underline */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-[#ff385c] transition-all duration-200 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Profile dropdown */}
        <div className="relative ml-auto hidden shrink-0 sm:block">
          <button
            type="button"
            onClick={() => setProfileOpen((open) => !open)}
            aria-expanded={profileOpen}
            className="flex items-center gap-2 rounded-full px-2 py-1.5 transition hover:bg-[#f5f7fa]"
          >
            <img
              src="https://i.pravatar.cc/100?img=47"
              alt="User profile"
              className="h-8 w-8 rounded-full object-cover ring-1 ring-[#e7ebf0]"
            />

            <span className="text-[13px] font-medium text-[#475467]">
              Hi, Mary!
            </span>

            <ChevronDown size={14} className="text-[#98a2b3]" />
          </button>

          {profileOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 overflow-hidden rounded-md border border-[#e7ebf0] bg-white py-1 shadow-lg">
              <Link
                to="/dashboard"
                onClick={() => setProfileOpen(false)}
                className="block px-4 py-2.5 text-[13px] font-medium text-[#475467] transition hover:bg-[#f5f7fa] hover:text-[#ff385c]"
              >
                Dashboard
              </Link>

              <Link
                to="/dashboard/profile"
                onClick={() => setProfileOpen(false)}
                className="block px-4 py-2.5 text-[13px] font-medium text-[#475467] transition hover:bg-[#f5f7fa] hover:text-[#ff385c]"
              >
                My Profile
              </Link>

              <button
                type="button"
                onClick={() => {
                  setProfileOpen(false);
                  window.location.href = "/";
                }}
                className="block w-full px-4 py-2.5 text-left text-[13px] font-medium text-[#475467] transition hover:bg-[#f5f7fa] hover:text-[#ff385c]"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#e7ebf0] text-[#192b45] transition hover:bg-[#f5f7fa] lg:hidden"
        >
          {mobileOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileOpen && (
        <nav className="border-t border-[#e7ebf0] bg-white px-5 py-3 lg:hidden">
          {navLinks.map((item) => {
            const active = isLinkActive(item);

            return (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`block border-b border-[#f0f2f5] py-3 text-[13px] font-medium transition-colors last:border-0 ${
                  active
                    ? "text-[#192b45]"
                    : "text-[#667085] hover:text-[#ff385c]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            to="/dashboard"
            onClick={() => setMobileOpen(false)}
            className="block py-3 text-[13px] font-semibold text-[#ff385c] hover:text-[#d92347]"
          >
            My Dashboard
          </Link>
        </nav>
      )}
    </header>
  );
}