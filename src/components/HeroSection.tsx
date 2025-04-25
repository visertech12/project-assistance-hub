
import React from "react";
import { Search, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-marketplace-indigo/10 to-marketplace-emerald/10 z-[-1]" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-marketplace-indigo/20 to-transparent z-[-1]" />
      
      {/* Glassmorphic Elements */}
      <div className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-marketplace-indigo/30 blur-3xl z-[-1]" />
      <div className="absolute bottom-20 right-[10%] w-32 h-32 rounded-full bg-marketplace-emerald/20 blur-3xl z-[-1]" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-marketplace-indigo/10 text-marketplace-indigo text-sm font-medium animate-pulse-slow">
              Over 10,000+ digital products available
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Discover Premium <span className="gradient-text">Digital Assets</span> for Developers
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Find high-quality code, scripts, themes and plugins for your next project. All assets are carefully reviewed by our expert team.
            </p>
            
            {/* Search Input */}
            <div className="relative mt-8">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-500" />
              </div>
              <Input 
                type="search" 
                className="pl-10 pr-4 py-3 rounded-lg w-full border border-gray-200 dark:border-gray-700 shadow-sm focus:ring-2 focus:ring-marketplace-indigo dark:bg-gray-800 h-14"
                placeholder="Search scripts, plugins, themes..." 
              />
              <Button className="absolute right-2 top-2 btn-primary flex items-center">
                Explore <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            
            {/* Stats Ticker */}
            <div className="flex flex-wrap md:flex-nowrap gap-x-8 gap-y-4 pt-8 text-center md:text-left">
              <div className="w-full md:w-1/3">
                <p className="text-3xl font-bold gradient-text">15,000+</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Digital Products</p>
              </div>
              <div className="w-full md:w-1/3">
                <p className="text-3xl font-bold gradient-text">8,500+</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Satisfied Sellers</p>
              </div>
              <div className="w-full md:w-1/3">
                <p className="text-3xl font-bold gradient-text">2M+</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Downloads</p>
              </div>
            </div>
          </div>
          
          {/* Featured Product Card */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="neo-card rounded-2xl p-6 max-w-md w-full relative animate-float">
              <div className="absolute -top-3 -right-3 bg-marketplace-indigo text-white text-sm font-medium py-1 px-3 rounded-full">
                Featured
              </div>
              <div className="bg-gray-800 h-48 w-full rounded-lg overflow-hidden relative mb-5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&h=280" 
                    alt="Dashboard preview" 
                    className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <div className="flex items-center text-white">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    </div>
                    <span className="ml-2 text-xs">(128 reviews)</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">AdminPro Dashboard</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                Complete admin dashboard solution with 10+ page templates, charts, and custom widgets
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-marketplace-indigo/20 flex items-center justify-center text-marketplace-indigo font-medium text-sm">
                    TD
                  </div>
                  <span className="ml-2 text-sm">TechDev</span>
                </div>
                <div className="text-lg font-bold text-marketplace-indigo">$49</div>
              </div>
              <Button className="btn-primary w-full mt-4">View Details</Button>
              <div className="text-xs text-center text-gray-500 mt-3">
                Last updated 2 days ago • WordPress Theme
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
