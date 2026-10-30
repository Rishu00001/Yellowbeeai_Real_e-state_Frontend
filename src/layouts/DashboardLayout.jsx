import { NavLink, Outlet } from "react-router-dom";
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

function DashboardSidebar() {
  return (
    <aside className="fixed bottom-0 left-0 top-0 z-40 hidden w-[235px] flex-col bg-[#192b45] text-white lg:flex">
      <NavLink
        to="/"
        className="flex h-[62px] items-center gap-2 border-b border-white/10 px-6 text-lg font-semibold"
      >
        <Building2 size={22} />
        <span>Yellowbeeai</span>
      </NavLink>

      <div className="flex flex-col items-center border-b border-white/10 px-4 py-7">
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
  return (
    <div className="min-h-screen bg-[#f3f6fa]">
      <DashboardSidebar />

      <div className="min-h-screen lg:ml-[235px]">
        <Navbar />

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