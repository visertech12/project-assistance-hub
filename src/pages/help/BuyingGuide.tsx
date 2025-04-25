
import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BuyingGuide = () => {
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
          <h1>How to Buy Items on Our Marketplace</h1>
          
          <h2>Finding the Right Product</h2>
          <p>Browse our extensive collection of digital assets using the search bar or category filters. Each product listing includes detailed information about features, compatibility, and usage rights.</p>

          <h2>Understanding Pricing and Licensing</h2>
          <p>Our products come with different license types:</p>
          <ul>
            <li><strong>Regular License:</strong> For single end product use</li>
            <li><strong>Extended License:</strong> For multiple projects and commercial applications</li>
            <li><strong>Custom License:</strong> Contact us for specific needs</li>
          </ul>

          <h2>Making a Purchase</h2>
          <p>Once you've found your desired item:</p>
          <ol>
            <li>Click the "Buy Now" or "Add to Cart" button</li>
            <li>Review your cart and proceed to checkout</li>
            <li>Choose your payment method</li>
            <li>Complete the purchase</li>
          </ol>

          <h2>After Purchase</h2>
          <p>After completing your purchase:</p>
          <ul>
            <li>Download your items immediately</li>
            <li>Access them anytime from your downloads section</li>
            <li>Receive update notifications when available</li>
          </ul>

          <h2>Refund Policy</h2>
          <p>We offer refunds within 14 days if:</p>
          <ul>
            <li>The item doesn't work as described</li>
            <li>Technical issues can't be resolved</li>
            <li>You haven't downloaded the item yet</li>
          </ul>

          <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h3>Need More Help?</h3>
            <p>Contact our support team for assistance with purchases, licensing, or technical issues.</p>
          </div>
        </motion.article>
      </main>

      <Footer />
    </div>
  );
};

export default BuyingGuide;
