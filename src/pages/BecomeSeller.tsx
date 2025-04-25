
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Store, HandHelping, UserRoundPlus, Package } from "lucide-react";

const BecomeSeller = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-marketplace-obsidian">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Become a Seller</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Join our community of creators and start selling your digital products today
            </p>
            <Link to="/register">
              <Button size="lg" className="px-8">
                Start Selling
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=500"
                alt="Seller working on computer"
                className="rounded-lg w-full h-[300px] object-cover mb-6"
              />
              <h2 className="text-2xl font-bold mb-4">Why Sell with Us?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Store className="h-6 w-6 text-marketplace-indigo flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Global Marketplace</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Reach millions of potential customers worldwide
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <HandHelping className="h-6 w-6 text-marketplace-indigo flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Seller Support</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Get dedicated support to help you succeed
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Package className="h-6 w-6 text-marketplace-indigo flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Easy Product Management</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Intuitive tools to manage your digital products
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">How to Get Started</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-marketplace-indigo text-white flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Create an Account</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Sign up for a free seller account
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-marketplace-indigo text-white flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Upload Your Products</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Add your digital products with detailed descriptions
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-marketplace-indigo text-white flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Start Selling</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Begin earning money from your digital products
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Ready to Start?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Join our community of successful sellers today
                </p>
                <Link to="/register">
                  <Button className="w-full">Create Seller Account</Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Have Questions?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Check out our seller guidelines or contact our support team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/help/selling">
                <Button variant="outline">
                  Seller Guidelines
                </Button>
              </Link>
              <Link to="/help-center">
                <Button variant="outline">
                  Contact Support
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

export default BecomeSeller;
