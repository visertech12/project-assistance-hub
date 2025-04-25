
import React from "react";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Check, 
  X, 
  AlertTriangle, 
  ShoppingBag, 
  DownloadCloud, 
  Clock, 
  MessageSquare,
  ChevronRight,
  FileText,
  HelpCircle
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto max-w-4xl">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Refund Policy</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our commitment to ensuring you're satisfied with your purchases while maintaining 
              a fair ecosystem for our creators.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500 dark:text-gray-400">
              <Calendar className="h-4 w-4" />
              <span>Last updated: April 15, 2023</span>
            </div>
          </motion.div>
          
          {/* Quick Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-10"
          >
            <Card className="border-0 shadow-md bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
              <CardHeader>
                <CardTitle>Policy Summary</CardTitle>
                <CardDescription>Key points of our refund policy</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium">14-Day Refund Window</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Eligible items can be refunded within 14 days of purchase if they meet our refund criteria.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium">Technical Issue Guarantee</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Refunds are available for items with verified technical issues that the author cannot resolve.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <X className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <p className="font-medium">Downloaded Items</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Items that have been downloaded are generally not eligible for refund unless they have major technical issues.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <X className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <p className="font-medium">Change of Mind</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Refunds are not available simply because you've changed your mind or made an incorrect purchase.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Left Sidebar + Main Content */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Table of Contents */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-64 space-y-6"
            >
              <div className="sticky top-24">
                <h3 className="text-lg font-semibold mb-3">On This Page</h3>
                <nav className="space-y-1">
                  <a href="#eligibility" className="block py-1.5 text-sm text-primary font-medium border-l-2 border-primary pl-3">
                    Refund Eligibility
                  </a>
                  <a href="#timeframe" className="block py-1.5 text-sm text-gray-600 dark:text-gray-300 border-l-2 border-transparent hover:border-gray-300 pl-3 transition-colors">
                    Timeframe
                  </a>
                  <a href="#process" className="block py-1.5 text-sm text-gray-600 dark:text-gray-300 border-l-2 border-transparent hover:border-gray-300 pl-3 transition-colors">
                    Refund Process
                  </a>
                  <a href="#exceptions" className="block py-1.5 text-sm text-gray-600 dark:text-gray-300 border-l-2 border-transparent hover:border-gray-300 pl-3 transition-colors">
                    Exceptions
                  </a>
                  <a href="#support" className="block py-1.5 text-sm text-gray-600 dark:text-gray-300 border-l-2 border-transparent hover:border-gray-300 pl-3 transition-colors">
                    Support Options
                  </a>
                </nav>
                
                <div className="mt-8">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <FileText className="h-4 w-4" />
                    Download as PDF
                  </Button>
                </div>
              </div>
            </motion.div>
            
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex-1"
            >
              <div className="space-y-10">
                <section id="eligibility" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4">Refund Eligibility</h2>
                  <Card className="border-0 shadow-sm">
                    <CardContent className="pt-6">
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="py-4">
                            <div className="flex items-center gap-2">
                              <ShoppingBag className="h-5 w-5 text-primary" />
                              <span className="font-medium">Item Compatibility</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600 dark:text-gray-300 pl-9">
                            <p className="mb-3">
                              Refunds may be granted if the item is legitimately incompatible with the software or platform it was advertised to work with, subject to the following conditions:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>You must be using the software/platform version specified in the item description.</li>
                              <li>You have contacted the author for support and given them reasonable time to address the issue.</li>
                              <li>The incompatibility is not due to third-party plugins or custom modifications.</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="item-2">
                          <AccordionTrigger className="py-4">
                            <div className="flex items-center gap-2">
                              <AlertTriangle className="h-5 w-5 text-primary" />
                              <span className="font-medium">Technical Issues</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600 dark:text-gray-300 pl-9">
                            <p className="mb-3">
                              Refunds may be available if the item has significant technical issues that:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>Prevent the core functionality from working as advertised</li>
                              <li>Have been reported to the author with adequate details to reproduce the issue</li>
                              <li>Have not been resolved within a reasonable timeframe (typically 7 days for critical issues)</li>
                            </ul>
                            <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg flex gap-3">
                              <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-1" />
                              <p className="text-sm">
                                Minor bugs, visual inconsistencies, or features working differently than expected (but still functioning) are generally not grounds for a refund.
                              </p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="item-3">
                          <AccordionTrigger className="py-4">
                            <div className="flex items-center gap-2">
                              <DownloadCloud className="h-5 w-5 text-primary" />
                              <span className="font-medium">Downloaded Items</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600 dark:text-gray-300 pl-9">
                            <p className="mb-3">
                              Once you have downloaded an item, you generally waive your right to a refund except in cases of:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>Severe technical issues that make the item unusable for its intended purpose</li>
                              <li>Significant missing functionality that was explicitly advertised</li>
                              <li>Security vulnerabilities that put your data or systems at risk</li>
                            </ul>
                            <p className="mt-3">
                              In these cases, you must contact support within 14 days of purchase and provide specific details about the issues encountered.
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                </section>
                
                <section id="timeframe" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4">Timeframe</h2>
                  <Card className="border-0 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Clock className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium">14-Day Window</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            All refund requests must be submitted within 14 days of purchase
                          </p>
                        </div>
                      </div>
                      <div className="prose prose-sm dark:prose-invert max-w-none">
                        <p>
                          Our refund timeframe is designed to be fair to both buyers and sellers. The 14-day window provides:
                        </p>
                        <ul>
                          <li>Sufficient time to test the item's functionality and compatibility</li>
                          <li>Opportunity to contact the author for support if you encounter issues</li>
                          <li>Protection for authors against unreasonable refund requests after extensive use</li>
                        </ul>
                        <p>
                          <strong>Important:</strong> The 14-day period begins on the date of purchase, not the date of download. We recommend testing items promptly after purchase to ensure you can request a refund if necessary.
                        </p>
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg not-prose">
                          <p className="text-sm">
                            <strong>Note:</strong> For subscription-based products, refunds are only available within the first 14 days of the initial subscription purchase or within 14 days of an automatic renewal.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>
                
                <section id="process" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4">Refund Process</h2>
                  <Card className="border-0 shadow-sm">
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <h3 className="text-lg font-medium">How to Request a Refund</h3>
                        <ol className="space-y-8">
                          <li className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                              1
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium">Contact the Author</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 mb-3">
                                Before requesting a refund, contact the item author through our messaging system to see if they can resolve your issue.
                              </p>
                              <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm" className="gap-1">
                                  <MessageSquare className="h-4 w-4" />
                                  Contact Author
                                </Button>
                              </div>
                            </div>
                          </li>
                          
                          <li className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                              2
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium">Submit a Refund Request</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                If the author cannot resolve the issue, submit a formal refund request through your account dashboard:
                              </p>
                              <ol className="list-decimal pl-5 mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                                <li>Navigate to "Purchases" in your account dashboard</li>
                                <li>Find the item and select "Request Refund"</li>
                                <li>Choose the appropriate reason for your refund</li>
                                <li>Provide detailed information about the issue</li>
                                <li>Submit any relevant screenshots or documentation</li>
                              </ol>
                            </div>
                          </li>
                          
                          <li className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                              3
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium">Review Process</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                Our support team will review your request within 3-5 business days. We may:
                              </p>
                              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                                <li>Approve your refund if it meets our eligibility criteria</li>
                                <li>Request additional information to help evaluate your claim</li>
                                <li>Suggest alternative solutions if a refund is not warranted</li>
                                <li>Deny the refund with an explanation if it doesn't meet our policy requirements</li>
                              </ul>
                            </div>
                          </li>
                        </ol>
                        
                        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <h4 className="font-medium mb-2">Refund Processing Time</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            Approved refunds will be processed within 5-7 business days. The refund will be issued to the original payment method used for the purchase. Please note that it may take additional time for the funds to appear in your account depending on your payment provider's policies.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>
                
                <section id="exceptions" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4">Exceptions & Special Cases</h2>
                  <Card className="border-0 shadow-sm">
                    <CardContent className="p-6">
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="exception-1">
                          <AccordionTrigger>Customized Items</AccordionTrigger>
                          <AccordionContent className="text-gray-600 dark:text-gray-300">
                            <p>
                              Items that have been customized or modified specifically for you based on your requirements are generally not eligible for refunds unless they completely fail to meet the agreed-upon specifications.
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="exception-2">
                          <AccordionTrigger>Bulk Purchases</AccordionTrigger>
                          <AccordionContent className="text-gray-600 dark:text-gray-300">
                            <p>
                              For bulk purchases (10+ items in a single transaction), special refund conditions may apply. Please contact our enterprise support team for details about your specific case.
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="exception-3">
                          <AccordionTrigger>Extended License Purchases</AccordionTrigger>
                          <AccordionContent className="text-gray-600 dark:text-gray-300">
                            <p>
                              Extended licenses may have different refund terms due to their higher value and commercial usage rights. Each case is evaluated individually based on the specific circumstances and usage.
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="exception-4">
                          <AccordionTrigger>Fraud Prevention</AccordionTrigger>
                          <AccordionContent className="text-gray-600 dark:text-gray-300">
                            <p>
                              We reserve the right to deny refunds in cases where we detect fraudulent activity, excessive refund requests, or abuse of our refund policy. We monitor patterns of purchase and refund behavior to protect our marketplace.
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="exception-5">
                          <AccordionTrigger>Service Disruptions</AccordionTrigger>
                          <AccordionContent className="text-gray-600 dark:text-gray-300">
                            <p>
                              In the event of major service disruptions or platform issues on our end that prevent you from accessing or using purchased items, extended refund windows may be offered at our discretion.
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                </section>
                
                <section id="support" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4">Support Options</h2>
                  <Card className="border-0 shadow-md bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex flex-col items-center text-center p-4">
                          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <HelpCircle className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-lg font-medium mb-2">Need Help?</h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Have questions about our refund policy or need assistance with a specific purchase?
                          </p>
                          <Button className="gap-2">
                            Contact Support
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="flex flex-col items-center text-center p-4">
                          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <FileText className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-lg font-medium mb-2">Submit a Claim</h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Ready to submit a refund request for an eligible purchase?
                          </p>
                          <Button variant="outline" className="gap-2">
                            Request a Refund
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>
              </div>
              
              {/* Policy Updates Section */}
              <div className="mt-12 border-t pt-8">
                <h2 className="text-xl font-bold mb-4">Policy Updates</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting to our website. Significant changes will be announced via our official communication channels. Your continued use of our platform constitutes agreement to the current version of this policy.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="h-4 w-4" />
                  <span>Previous version: January 10, 2023</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RefundPolicy;
