import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";

import Index from "./pages/Index";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import AffiliateProgram from "./pages/AffiliateProgram";
import HelpCenter from "./pages/HelpCenter";
import RefundPolicy from "./pages/RefundPolicy";
import Products from "./pages/Products";
import BuyingGuide from "./pages/help/BuyingGuide";
import SellingGuide from "./pages/help/SellingGuide";
import StartExploring from "./pages/StartExploring";
import BecomeSeller from "./pages/BecomeSeller";
import ContactSales from "./pages/ContactSales";
import Dashboard from "./pages/Dashboard";
import BlogDetails from "./pages/BlogDetails";
import Downloads from "./pages/Downloads";
import DashboardLayout from "./layouts/DashboardLayout";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/affiliate-program" element={<AffiliateProgram />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/help/buying" element={<BuyingGuide />} />
            <Route path="/help/selling" element={<SellingGuide />} />
            <Route path="/start-exploring" element={<StartExploring />} />
            <Route path="/become-seller" element={<BecomeSeller />} />
            <Route path="/contact-sales" element={<ContactSales />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="downloads" element={<Downloads />} />
              <Route path="profile" element={<div>Profile page coming soon</div>} />
              <Route path="settings" element={<div>Settings page coming soon</div>} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
