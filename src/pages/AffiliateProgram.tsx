import React from "react";
import { motion } from "framer-motion";
import { 
  DollarSign, 
  ChevronRight, 
  Link, 
  BarChart, 
  Users, 
  Clock,
  CheckCircle,
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
import { useIsMobile } from "@/hooks/use-mobile";

const stats = [
  { 
    icon: <Users className="h-6 w-6 text-blue-500" />, 
    value: "10,000+",
    label: "Active Affiliates",
    increase: "+24% this year"
  },
  { 
    icon: <DollarSign className="h-6 w-6 text-green-500" />, 
    value: "$2.5M+",
    label: "Affiliate Earnings",
    increase: "+32% this year"
  },
  { 
    icon: <BarChart className="h-6 w-6 text-purple-500" />, 
    value: "$120",
    label: "Average Commission",
    increase: "+8% this month"
  }
];

const tiers = [
  {
    name: "Basic",
    commission: "10%",
    threshold: "$0 - $1,000",
    color: "from-blue-400 to-blue-600"
  },
  {
    name: "Silver",
    commission: "15%",
    threshold: "$1,001 - $10,000",
    color: "from-slate-400 to-slate-600"
  },
  {
    name: "Gold",
    commission: "20%",
    threshold: "$10,001 - $50,000",
    color: "from-yellow-400 to-amber-600"
  },
  {
    name: "Platinum",
    commission: "25%",
    threshold: "$50,001+",
    color: "from-purple-400 to-purple-600"
  }
];

const faqs = [
  {
    question: "How do I join the affiliate program?",
    answer: "To join our affiliate program, you need to create an account on our platform and apply through the Affiliate Dashboard. After reviewing your application, we'll provide you with unique tracking links and promotional materials."
  },
  {
    question: "When do affiliates get paid?",
    answer: "We process affiliate payments on the 1st of each month for all qualified earnings from the previous month. Payment methods include PayPal, bank transfer, or store credit with a 5% bonus."
  },
  {
    question: "What's the cookie duration?",
    answer: "Our affiliate tracking cookies last for 60 days. This means if a user clicks on your affiliate link and makes a purchase within 60 days, you'll receive the commission even if they don't buy immediately."
  },
  {
    question: "Are there any restrictions on promotion methods?",
    answer: "Yes, we prohibit spam, misleading claims, trademark bidding, and incentivized traffic. Please review our full Affiliate Terms & Conditions for complete details on allowed promotion methods."
  },
  {
    question: "Can I promote specific products?",
    answer: "Absolutely! You can create custom affiliate links for specific products or categories. This allows you to tailor your promotions to your audience's interests and potentially increase conversion rates."
  }
];

const steps = [
  {
    title: "Sign Up",
    description: "Create your free affiliate account and complete your profile",
    icon: <Users className="h-6 w-6" />
  },
  {
    title: "Get Links",
    description: "Access your unique tracking links and promotional materials",
    icon: <Link className="h-6 w-6" />
  },
  {
    title: "Promote",
    description: "Share links on your website, social media, or email list",
    icon: <BarChart className="h-6 w-6" />
  },
  {
    title: "Earn",
    description: "Earn commissions when your referrals make purchases",
    icon: <DollarSign className="h-6 w-6" />
  }
];

const AffiliateProgram = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                  Earn By Sharing What You Love
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Join thousands of content creators, bloggers, and influencers who earn commission by referring customers to our marketplace.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="gap-2">
                    Join as Affiliate
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hidden md:block"
              >
                <img 
                  src="https://placehold.co/600x400/e2e8f0/4338ca?text=Affiliate+Program&font=montserrat" 
                  alt="Affiliate Program" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-white dark:bg-gray-800">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Real-Time Affiliate Program Stats</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Join thousands of satisfied affiliates who are already earning with us
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-md h-full">
                    <CardHeader className="pb-2">
                      <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 mb-4">
                        {stat.icon}
                      </div>
                      <CardTitle className="text-3xl font-bold">{stat.value}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500 dark:text-gray-400">{stat.label}</p>
                      <p className="text-sm text-green-500 font-medium mt-1">{stat.increase}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section - IMPROVED */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Our affiliate program is designed to be simple, transparent, and profitable
              </p>
            </motion.div>
            
            <div className="relative">
              {/* Desktop and tablet connector lines (hidden on mobile) */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-y-1/2 z-0" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4 relative z-10">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    <Card className="border-0 shadow-md h-full bg-white dark:bg-gray-800">
                      <CardHeader className="pb-2">
                        <div className="rounded-full w-14 h-14 flex items-center justify-center bg-primary/10 mb-2 mx-auto md:mx-0">
                          <div className="absolute -left-2 -top-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                            {index + 1}
                          </div>
                          {step.icon}
                        </div>
                        <CardTitle className="text-xl text-center md:text-left">{step.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-500 dark:text-gray-400 text-center md:text-left">{step.description}</p>
                      </CardContent>
                    </Card>
                    
                    {/* Connector arrows between cards (only visible on tablet and desktop) */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="bg-white dark:bg-gray-900 rounded-full p-1">
                          <ChevronRight className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Mobile step indicator - only visible on small screens */}
            <div className="flex justify-center mt-8 md:hidden">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-medium">Swipe to see all steps</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </div>
            </div>
          </div>
        </section>

        {/* Commission Tiers */}
        <section className="py-16 px-4 bg-white dark:bg-gray-800">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Commission Structure</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Earn more as you grow with our tiered commission rates
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="grid md:grid-cols-4 gap-4">
                {tiers.map((tier, index) => (
                  <Card key={tier.name} className="border-0 shadow-md overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${tier.color}`}></div>
                    <CardHeader>
                      <CardTitle>{tier.name}</CardTitle>
                      <CardDescription>Tier {index + 1}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-4xl font-bold text-primary mb-4">{tier.commission}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Sales Volume: {tier.threshold}
                      </p>
                    </CardContent>
                    <CardFooter className="bg-gray-50 dark:bg-gray-700/50">
                      <p className="text-sm">
                        {index < tiers.length - 1 
                          ? `Upgrade to ${tiers[index + 1].name} for ${tiers[index + 1].commission} commission!` 
                          : "Our highest tier with maximum earnings!"}
                      </p>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Why Join Our Affiliate Program?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We offer one of the most competitive and rewarding affiliate programs in the industry
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Industry-Leading Commissions",
                  description: "Earn up to 25% commission on every sale you refer to our platform"
                },
                {
                  title: "60-Day Cookie Duration",
                  description: "Long cookie window gives you more opportunity to earn commissions"
                },
                {
                  title: "Real-Time Reporting",
                  description: "Track your performance with detailed analytics and insights"
                },
                {
                  title: "Custom Promotional Assets",
                  description: "Access banners, product widgets, and other marketing materials"
                },
                {
                  title: "Dedicated Affiliate Manager",
                  description: "Get personalized support to maximize your earnings"
                },
                {
                  title: "Monthly Payments",
                  description: "Reliable payments via PayPal, bank transfer, or store credit"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-md h-full">
                    <CardHeader className="pb-2">
                      <div className="mb-2">
                        <CheckCircle className="h-8 w-8 text-green-500" />
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500 dark:text-gray-400">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-4 bg-white dark:bg-gray-800">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Everything you need to know about our affiliate program
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
                        <AccordionTrigger className="text-left">
                          <div className="flex items-center gap-2">
                            <HelpCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span>{faq.question}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-600 dark:text-gray-300 pl-6">
                            {faq.answer}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Earning?</h2>
              <p className="text-lg mb-8 text-white/90">
                Join our affiliate program today and start earning commission on every sale you refer.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="secondary" className="gap-2">
                  Apply Now
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                  Contact Support
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

export default AffiliateProgram;
