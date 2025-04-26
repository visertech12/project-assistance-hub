
import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, FileText, Book, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const BuyingGuide = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Finding the Right Product",
      icon: <FileText className="h-5 w-5" />,
      content: "Browse our extensive collection of digital assets using the search bar or category filters. Each product listing includes detailed information about features, compatibility, and usage rights."
    },
    {
      title: "Understanding Pricing and Licensing",
      icon: <Book className="h-5 w-5" />,
      content: [
        { label: "Regular License", desc: "For single end product use" },
        { label: "Extended License", desc: "For multiple projects and commercial applications" },
        { label: "Custom License", desc: "Contact us for specific needs" }
      ]
    },
    {
      title: "Making a Purchase",
      icon: <BookOpen className="h-5 w-5" />,
      steps: [
        "Click the 'Buy Now' or 'Add to Cart' button",
        "Review your cart and proceed to checkout",
        "Choose your payment method",
        "Complete the purchase"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/help-center')}
          className="mb-6 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Back to Help Center
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-4">
              How to Buy Items on Our Marketplace
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              A comprehensive guide to help you navigate our marketplace and make successful purchases
            </p>
          </div>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.section
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-semibold">{section.title}</h2>
                </div>

                {section.content && typeof section.content === 'string' && (
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {section.content}
                  </p>
                )}

                {section.content && Array.isArray(section.content) && (
                  <div className="grid gap-4 md:grid-cols-3">
                    {section.content.map((item, idx) => (
                      <Card key={idx} className="border-none shadow-md hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <h3 className="font-semibold mb-2">{item.label}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}

                {section.steps && (
                  <ol className="space-y-4">
                    {section.steps.map((step, idx) => (
                      <li key={idx} className="flex items-center gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                          {idx + 1}
                        </span>
                        <span className="text-gray-600 dark:text-gray-300">{step}</span>
                      </li>
                    ))}
                  </ol>
                )}
              </motion.section>
            ))}

            <Separator className="my-8" />

            <section className="space-y-6">
              <h2 className="text-2xl font-semibold">After Purchase</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Immediate Access</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Download your items immediately</li>
                      <li>• Access them anytime from your downloads section</li>
                      <li>• Receive update notifications when available</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Refund Policy</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Item doesn't work as described</li>
                      <li>• Technical issues can't be resolved</li>
                      <li>• You haven't downloaded the item yet</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Card className="mt-12 border-none bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-700">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Need More Help?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Our support team is always ready to assist you with purchases, licensing, or technical issues.
                </p>
                <Button className="bg-primary hover:bg-primary/90">Contact Support</Button>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default BuyingGuide;

