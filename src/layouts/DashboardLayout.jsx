
import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  UserRound,
  Building2,
  Heart,
  PlusSquare,
  CreditCard,
  FileText,
  LockKeyhole,
  LogOut,
  Settings,
  X,
} from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const menuItems = [
  { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { label: "Profile", path: "/dashboard/profile", icon: UserRound },
  { label: "My Properties", path: "/dashboard/my-properties", icon: Building2 },
  { label: "Favorite Properties", path: "/dashboard/favorites", icon: Heart },
  { label: "Add Property", path: "/dashboard/add-property", icon: PlusSquare },
  { label: "Payments", path: "/dashboard/payments", icon: CreditCard },
  { label: "Invoices", path: "/dashboard/invoices", icon: FileText },
  {
    label: "Change Password",
    path: "/dashboard/change-password",
    icon: LockKeyhole,
  },
];

function DashboardSidebar({ mobile = false, onClose }) {
  return (
    <aside
      className={`fixed bottom-0 left-0 top-0 z-50 flex flex-col bg-[#192b45] text-white ${
        mobile ? "w-[260px] shadow-2xl" : "hidden w-[235px] lg:flex"
      }`}
    >
      <div className="flex h-[62px] shrink-0 items-center justify-between border-b border-white/10 px-6">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          <Building2 size={22} />
          <span>Yellowbeeai</span>
        </NavLink>

        {mobile && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close sidebar"
            className="rounded p-1 text-slate-300 hover:bg-white/10 hover:text-white"
          >
            <X size={20} />
          </button>
        )}
      </div>

      <div className="flex shrink-0 flex-col items-center border-b border-white/10 px-4 py-7">
        <img
          src="https://i.pravatar.cc/100?img=47"
          alt="Profile"
          className="h-14 w-14 rounded-full border-2 border-white object-cover"
        />
        <p className="mt-2 text-sm font-medium">Mary Smith</p>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-5">
        {menuItems.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === "/dashboard"}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded px-3 py-2.5 text-[12px] transition ${
                isActive
                  ? "bg-[#253b59] text-white"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            <Icon size={15} />
            {label}
          </NavLink>
        ))}

        <button
          type="button"
          onClick={() => {
            window.location.href = "/";
          }}
          className="flex w-full items-center gap-3 rounded px-3 py-2.5 text-left text-[12px] text-slate-300 hover:bg-white/10 hover:text-white"
        >
          <LogOut size={15} />
          Sign Out
        </button>
      </nav>
    </aside>
  );
}

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const currentPage =
    menuItems.find((item) => item.path === location.pathname)?.label ||
    "Dashboard";

  // Close drawer after navigation
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  // Prevent background scrolling when drawer is open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  // Close drawer with Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f3f6fa]">
      {/* Desktop Sidebar */}
      <DashboardSidebar />

      {/* Mobile Backdrop */}
      <div
        onClick={() => setSidebarOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden ${
          sidebarOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />

      {/* Mobile Sidebar Drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-[260px] transition-transform duration-300 ease-in-out lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <DashboardSidebar
          mobile
          onClose={() => setSidebarOpen(false)}
        />
      </div>

      <div className="min-h-screen lg:ml-[235px]">
        {/* Existing Navbar - unchanged */}
        <Navbar />

        {/* Mobile Dashboard Toolbar */}
        <div className="flex h-[65px] items-center justify-between border-b border-[#e8edf2] bg-white px-4 sm:px-6 lg:hidden">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
              Account
            </p>
            <h2 className="text-base font-semibold text-[#192b45]">
              {currentPage}
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="flex items-center gap-2 rounded-md border border-[#e2e8f0] bg-white px-3 py-2 text-sm font-medium text-[#192b45] transition hover:bg-[#f3f6fa]"
          >
            <Settings size={16} />
            Manage
          </button>
        </div>

        <main className="min-h-[calc(100vh-80px)] px-4 py-6 sm:px-6 xl:px-8">
          <div className="mx-auto max-w-[1500px]">
            <Outlet />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
