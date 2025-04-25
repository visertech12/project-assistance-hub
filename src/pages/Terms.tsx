
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Terms = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-marketplace-obsidian">
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-8 space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-gray-600 dark:text-gray-300">Last Updated: April 23, 2025</p>
        </div>
        
        {/* Quick Actions */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button variant="outline" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Download PDF
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Print Terms
          </Button>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar Table of Contents */}
          <div className="md:col-span-1">
            <div className="sticky top-24 glass-card p-4">
              <h3 className="text-lg font-semibold mb-4">Contents</h3>
              <nav className="space-y-2">
                <a href="#user-responsibilities" className="block text-sm hover:text-marketplace-indigo transition-colors">User Responsibilities</a>
                <a href="#licensing" className="block text-sm hover:text-marketplace-indigo transition-colors">Licensing</a>
                <a href="#seller-guidelines" className="block text-sm hover:text-marketplace-indigo transition-colors">Seller Guidelines</a>
                <a href="#refund-policy" className="block text-sm hover:text-marketplace-indigo transition-colors">Refund Policy</a>
                <a href="#privacy" className="block text-sm hover:text-marketplace-indigo transition-colors">Privacy & Data</a>
                <a href="#intellectual-property" className="block text-sm hover:text-marketplace-indigo transition-colors">Intellectual Property</a>
                <a href="#termination" className="block text-sm hover:text-marketplace-indigo transition-colors">Account Termination</a>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-3">
            <section id="user-responsibilities" className="mb-8 glass-card p-6">
              <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>By accessing or using this digital marketplace, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use our platform.</p>
                <p>You are responsible for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Maintaining the confidentiality of your account</li>
                  <li>All activities that occur under your account</li>
                  <li>Ensuring your content doesn't infringe on others' rights</li>
                  <li>Following our community guidelines</li>
                </ul>
              </div>
            </section>

            <section id="licensing" className="mb-8 glass-card p-6">
              <h2 className="text-2xl font-semibold mb-4">Licensing</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>All products purchased from our marketplace come with a standard license unless otherwise specified. This license grants you a non-exclusive right to use the product for a single project.</p>
                <p>Extended licenses are available for certain products, which grant you more extensive usage rights. Please refer to the specific license terms for each product before purchase.</p>
              </div>
            </section>

            <section id="seller-guidelines" className="mb-8 glass-card p-6">
              <h2 className="text-2xl font-semibold mb-4">Seller Guidelines</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>Sellers must ensure that their products do not infringe on any intellectual property rights. All products must be original works or properly licensed.</p>
                <p>Sellers are responsible for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Product quality and accuracy</li>
                  <li>Customer support and documentation</li>
                  <li>Maintaining and updating their products</li>
                  <li>Responding to customer inquiries</li>
                </ul>
              </div>
            </section>

            <section id="refund-policy" className="mb-8 glass-card p-6">
              <h2 className="text-2xl font-semibold mb-4">Refund Policy</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>Refunds may be issued at the discretion of the seller or our marketplace within 30 days of purchase if the product does not function as described.</p>
                <p>Due to the digital nature of the products, all sales are considered final unless there is a technical issue with the product.</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
