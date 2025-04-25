import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  CreditCard,
  UserCircle,
  HelpCircle,
  Download,
  Settings,
  ChevronRight,
  ThumbsUp,
  ThumbsDown
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const helpCategories = [
  {
    id: "buying",
    icon: <ShoppingCart className="h-6 w-6" />,
    title: "Buying",
    description: "How to purchase items, refunds, downloads",
    link: "/help/buying"
  },
  {
    id: "selling",
    icon: <CreditCard className="h-6 w-6" />,
    title: "Selling",
    description: "Selling products, payments, commissions",
    link: "/help/selling"
  },
  {
    id: "account",
    icon: <UserCircle className="h-6 w-6" />,
    title: "Account",
    description: "Login, profile, security settings"
  },
  {
    id: "downloads",
    icon: <Download className="h-6 w-6" />,
    title: "Downloads",
    description: "Access your purchased items"
  },
  {
    id: "licensing",
    icon: <HelpCircle className="h-6 w-6" />,
    title: "Licensing",
    description: "Item usage, commercial rights"
  },
  {
    id: "settings",
    icon: <Settings className="h-6 w-6" />,
    title: "Settings",
    description: "Preferences, notifications, privacy"
  }
];

const trendingArticles = [
  {
    id: 1,
    title: "How to download your purchased items",
    category: "Downloads",
    views: 4576
  },
  {
    id: 2,
    title: "Requesting a refund for an item",
    category: "Buying",
    views: 3982
  },
  {
    id: 3,
    title: "Setting up two-factor authentication",
    category: "Account",
    views: 3541
  },
  {
    id: 4,
    title: "Understanding item licensing options",
    category: "Licensing",
    views: 3210
  },
  {
    id: 5,
    title: "How to contact an item's author",
    category: "Buying",
    views: 2876
  },
  {
    id: 6,
    title: "Becoming a seller on our marketplace",
    category: "Selling",
    views: 2543
  }
];

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and various local payment methods depending on your location. We also support cryptocurrency payments including Bitcoin, Ethereum, and USDC."
  },
  {
    question: "How long will I have access to my purchases?",
    answer: "Once you purchase an item, you'll have lifetime access to download it from your account. We recommend downloading and backing up your purchases immediately after purchase. Some items may include updates, which you'll also have access to."
  },
  {
    question: "Can I use items in multiple projects?",
    answer: "This depends on the license type you purchase. Standard licenses typically allow use in a single end product (for you or a client). Extended licenses allow use in multiple projects or commercial applications with larger distribution. Please check the specific license details for each item before purchasing."
  },
  {
    question: "What is your refund policy?",
    answer: "We offer refunds within 14 days of purchase if the item doesn't work as described or if there are technical issues that the author cannot resolve. Refunds are not available for change of mind or if you've already downloaded the item. Visit our Refund Policy page for more details."
  }
];

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 dark:bg-gray-900">
        <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto text-center max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                How can we help you?
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Find answers to frequently asked questions and learn how to get the most out of our platform.
              </p>
              
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                <Input 
                  type="text"
                  placeholder="Search for answers..."
                  className="pl-12 h-14 text-lg rounded-full border shadow-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button className="absolute right-1.5 top-1.5 rounded-full">
                  Search
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white dark:bg-gray-800">
          <div className="container mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-center mb-12"
            >
              Browse Help Topics
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {helpCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card 
                    className="hover:shadow-md transition-shadow border-0 h-full cursor-pointer"
                    onClick={() => navigate(category.link)}
                  >
                    <CardHeader>
                      <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 mb-4">
                        {category.icon}
                      </div>
                      <CardTitle>{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Button variant="ghost" className="flex items-center gap-2">
                        View articles <ChevronRight className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-center">Trending Articles</h2>
              <p className="text-center text-gray-600 dark:text-gray-300 mt-3 max-w-2xl mx-auto">
                Our most popular help articles based on user activity
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {trendingArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-primary">
                          {article.category}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {article.views.toLocaleString()} views
                        </span>
                      </div>
                      <CardTitle className="text-lg">{article.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Button variant="ghost" size="sm" className="flex items-center gap-2">
                        Read article <ChevronRight className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white dark:bg-gray-800">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
              <p className="text-center text-gray-600 dark:text-gray-300 mt-3 max-w-2xl mx-auto">
                Quick answers to common questions about our platform
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-3xl mx-auto"
            >
              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="prose prose-sm dark:prose-invert max-w-none">
                            <p>{faq.answer}</p>
                          </div>
                          <div className="flex items-center justify-end gap-4 mt-4">
                            <span className="text-sm text-gray-500">Was this helpful?</span>
                            <Button variant="outline" size="sm" className="h-8 gap-1">
                              <ThumbsUp className="h-4 w-4" />
                              Yes
                            </Button>
                            <Button variant="outline" size="sm" className="h-8 gap-1">
                              <ThumbsDown className="h-4 w-4" />
                              No
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Our support team is always ready to assist you with any questions or issues.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2">
                  <UserCircle className="h-4 w-4" />
                  Contact Support
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <HelpCircle className="h-4 w-4" />
                  Visit Community Forums
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HelpCenter;
