import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  UserRound,
  Building2,
  Heart,
  PlusCircle,
  CreditCard,
  FileText,
  LockKeyhole,
} from "lucide-react";

const links = [
  { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard, end: true },
  { label: "Profile", path: "/dashboard/profile", icon: UserRound },
  { label: "My Properties", path: "/dashboard/my-properties", icon: Building2 },
  { label: "Favorite Properties", path: "/dashboard/favorites", icon: Heart },
  { label: "Add Property", path: "/dashboard/add-property", icon: PlusCircle },
  { label: "Payments", path: "/dashboard/payments", icon: CreditCard },
  { label: "Invoices", path: "/dashboard/invoices", icon: FileText },
  { label: "Change Password", path: "/dashboard/change-password", icon: LockKeyhole },
];

export default function DashboardSidebar() {
  return (
    <nav className="rounded border border-gray-200 bg-white p-3">
      {links.map(({ label, path, icon: Icon, end }) => (
        <NavLink
          key={path}
          to={path}
          end={end}
          className={({ isActive }) =>
            `mb-1 flex items-center gap-3 rounded px-3 py-3 text-sm transition ${
              isActive
                ? "bg-blue-50 font-semibold text-blue-700"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`
          }
        >
          <Icon size={18} />
          {label}
        </NavLink>
      ))}
    </nav>
  );
}