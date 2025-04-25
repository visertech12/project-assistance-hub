
import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, FileText, ShieldCheck, DollarSign, Package, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SellingGuide = () => {
  const navigate = useNavigate();

  const guidelines = [
    {
      title: "Product Quality Standards",
      icon: <ShieldCheck className="h-6 w-6 text-marketplace-indigo" />,
      content: [
        "High-resolution screenshots and previews",
        "Well-documented source code",
        "Regular updates and maintenance",
        "Responsive design for all devices",
        "Cross-browser compatibility",
        "Performance optimized"
      ]
    },
    {
      title: "Submission Requirements",
      icon: <Package className="h-6 w-6 text-marketplace-indigo" />,
      content: [
        "Complete product description",
        "Detailed feature list",
        "Installation instructions",
        "Usage examples",
        "Technical requirements",
        "Demo version or preview"
      ]
    },
    {
      title: "Revenue & Pricing",
      icon: <DollarSign className="h-6 w-6 text-marketplace-indigo" />,
      content: [
        "Competitive market analysis",
        "Flexible pricing tiers",
        "Volume discounts options",
        "Subscription model support",
        "Clear licensing terms",
        "Payment processing details"
      ]
    },
    {
      title: "Support Guidelines",
      icon: <MessageSquare className="h-6 w-6 text-marketplace-indigo" />,
      content: [
        "24-hour response time",
        "Detailed documentation",
        "Video tutorials",
        "Priority support options",
        "Bug fix guarantees",
        "Version update policy"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
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
            className="mb-12 text-center"
          >
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-marketplace-indigo to-marketplace-emerald bg-clip-text text-transparent">
              Seller Guidelines
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to know to become a successful seller on our marketplace
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {guidelines.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-marketplace-indigo/10">
                        {section.icon}
                      </div>
                      <h2 className="text-xl font-semibold">{section.title}</h2>
                    </div>
                    <ul className="space-y-2">
                      {section.content.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                          <div className="h-1.5 w-1.5 rounded-full bg-marketplace-indigo" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <FileText className="h-6 w-6 text-marketplace-indigo" />
              <h2 className="text-2xl font-semibold">Additional Resources</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-marketplace-indigo/5 to-marketplace-emerald/5">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Seller Dashboard</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Access analytics, manage listings, and track your performance
                  </p>
                  <Button className="w-full">Access Dashboard</Button>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-marketplace-indigo/5 to-marketplace-emerald/5">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Seller Community</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Connect with other sellers, share tips, and get support
                  </p>
                  <Button className="w-full">Join Community</Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SellingGuide;
