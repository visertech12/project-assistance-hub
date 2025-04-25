
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactSales = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-marketplace-indigo to-marketplace-emerald bg-clip-text text-transparent">
              Contact Our Sales Team
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get personalized support from our dedicated sales team to find the perfect solution for your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Talk to Sales</h2>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <textarea
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 h-32"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <Button className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <Card className="p-6 bg-gradient-to-br from-marketplace-indigo/5 to-marketplace-emerald/5">
                <CardContent>
                  <h3 className="text-xl font-semibold mb-4">Other Ways to Connect</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-marketplace-indigo/10">
                        <Mail className="h-5 w-5 text-marketplace-indigo" />
                      </div>
                      <div>
                        <p className="font-medium">Email Us</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">sales@example.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-marketplace-indigo/10">
                        <Phone className="h-5 w-5 text-marketplace-indigo" />
                      </div>
                      <div>
                        <p className="font-medium">Call Us</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-marketplace-indigo/10">
                        <MessageSquare className="h-5 w-5 text-marketplace-indigo" />
                      </div>
                      <div>
                        <p className="font-medium">Live Chat</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Available 24/7</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent>
                  <h3 className="text-xl font-semibold mb-4">FAQ</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium mb-2">What are your business hours?</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">We're available Monday through Friday, 9 AM to 6 PM EST.</p>
                    </div>
                    <div>
                      <p className="font-medium mb-2">What's your typical response time?</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">We typically respond within 24 business hours.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactSales;
