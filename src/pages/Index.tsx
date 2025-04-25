
import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/ui/categories-section";
import FeaturedProducts from "../components/FeaturedProducts";
import TrendingSection from "../components/TrendingSection";
import PricingSection from "../components/PricingSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-marketplace-obsidian">
      <Header />
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <TrendingSection />
      <TestimonialsSection />
      <PricingSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
