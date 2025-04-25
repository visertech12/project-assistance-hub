
import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SellingGuide = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/help-center')}
          className="mb-6 hover:bg-gray-100"
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Back to Help Center
        </Button>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose dark:prose-invert max-w-none"
        >
          <h1>Selling on Our Marketplace</h1>
          
          <h2>Getting Started as a Seller</h2>
          <p>Follow these steps to begin selling:</p>
          <ol>
            <li>Create your seller account</li>
            <li>Complete your profile</li>
            <li>Submit required documentation</li>
            <li>Set up your payment information</li>
          </ol>

          <h2>Product Requirements</h2>
          <p>Your items must meet these criteria:</p>
          <ul>
            <li>Original, high-quality work</li>
            <li>Well-documented code or content</li>
            <li>Properly licensed assets</li>
            <li>Clear description and features list</li>
          </ul>

          <h2>Pricing and Commissions</h2>
          <p>Understanding our pricing structure:</p>
          <ul>
            <li>Set your own prices</li>
            <li>Platform commission: 30%</li>
            <li>Payment processing fees included</li>
            <li>Monthly or immediate payout options</li>
          </ul>

          <h2>Marketing Your Products</h2>
          <p>Tips for successful selling:</p>
          <ul>
            <li>Use high-quality screenshots</li>
            <li>Write detailed descriptions</li>
            <li>Provide regular updates</li>
            <li>Engage with customer feedback</li>
          </ul>

          <h2>Support and Updates</h2>
          <p>Maintain your products by:</p>
          <ul>
            <li>Responding to customer inquiries promptly</li>
            <li>Providing regular updates</li>
            <li>Fixing reported issues</li>
            <li>Maintaining documentation</li>
          </ul>

          <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h3>Seller Resources</h3>
            <p>Access our seller dashboard for analytics, sales reports, and marketing tools.</p>
          </div>
        </motion.article>
      </main>

      <Footer />
    </div>
  );
};

export default SellingGuide;
