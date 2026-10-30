
import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

// Website pages
import Home from "../pages/website/Home/Home";
import About from "../pages/website/About/About";
import Contact from "../pages/website/Contact/Contact";
import PropertyListing from "../pages/website/Properties/PropertyListing";
import SingleProperty from "../pages/website/Properties/SingleProperty";
import AgentListing from "../pages/website/Agents/AgentListing";
import AddListing from "../pages/website/Listings/AddListing";
import Blog from "../pages/website/Blog/Blog";
import BlogDetails from "../pages/website/Blog/BlogDetails";

// Dashboard pages
import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/dashboard/Profile";
import MyProperties from "../pages/dashboard/MyProperties";
import FavoriteProperties from "../pages/dashboard/FavoriteProperties";
import AddProperty from "../pages/dashboard/AddProperty";
import Payments from "../pages/dashboard/Payments";
import Invoices from "../pages/dashboard/Invoices";
import ChangePassword from "../pages/dashboard/ChangePassword";

import NotFound from "../pages/NotFound";
import PropertyDetails from "../components/property/PropertyDetails";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Website routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/properties" element={<PropertyListing />} />
        <Route path="/properties/:id" element={<PropertyDetailsn />} />

        <Route path="/agents" element={<AgentListing />} />
        <Route path="/add-listing" element={<AddListing />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
      </Route>

      {/* Dashboard routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="my-properties" element={<MyProperties />} />
        <Route path="favorites" element={<FavoriteProperties />} />
        <Route path="add-property" element={<AddProperty />} />
        <Route path="payments" element={<Payments />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="change-password" element={<ChangePassword />} />
      </Route>

      {/* 404 route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}