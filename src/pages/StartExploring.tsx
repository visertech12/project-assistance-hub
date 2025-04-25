
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, Star, Package, HandHelping } from "lucide-react";

const StartExploring = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-marketplace-obsidian">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Start Your Journey</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Discover thousands of high-quality digital assets to enhance your projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="p-6">
              <div className="h-12 w-12 rounded-lg bg-marketplace-indigo/10 flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-marketplace-indigo" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Browse Categories</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Explore our vast collection of scripts, themes, plugins, and more.
              </p>
              <Link to="/products">
                <Button className="w-full">View Categories</Button>
              </Link>
            </Card>

            <Card className="p-6">
              <div className="h-12 w-12 rounded-lg bg-marketplace-indigo/10 flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-marketplace-indigo" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Featured Items</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Check out our hand-picked selection of top-rated products.
              </p>
              <Link to="/products">
                <Button className="w-full">View Featured</Button>
              </Link>
            </Card>

            <Card className="p-6">
              <div className="h-12 w-12 rounded-lg bg-marketplace-indigo/10 flex items-center justify-center mb-4">
                <Package className="h-6 w-6 text-marketplace-indigo" />
              </div>
              <h3 className="text-xl font-semibold mb-2">New Arrivals</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Discover the latest additions to our marketplace.
              </p>
              <Link to="/products">
                <Button className="w-full">View New Items</Button>
              </Link>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-marketplace-indigo/10 to-marketplace-emerald/10 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help Getting Started?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Check out our comprehensive guides and documentation to make the most of your purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/help/buying">
                <Button variant="outline" size="lg">
                  Buying Guide
                </Button>
              </Link>
              <Link to="/help-center">
                <Button variant="outline" size="lg">
                  Help Center
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StartExploring;
