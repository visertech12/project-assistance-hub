
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-marketplace-indigo/10 to-marketplace-emerald/10 z-[-1]" />
      <div className="absolute -left-40 bottom-0 w-80 h-80 rounded-full bg-marketplace-indigo/30 blur-3xl z-[-1]" />
      <div className="absolute -right-40 top-0 w-80 h-80 rounded-full bg-marketplace-emerald/20 blur-3xl z-[-1]" />
      
      <div className="container mx-auto px-4">
        <div className="glass-panel rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Supercharge Your Development?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are building amazing products faster with premium digital assets.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="btn-primary text-lg px-8 py-6 flex items-center">
              Start Exploring <ArrowRight className="ml-2 h-5 w-5 animate-pulse-slow" />
            </Button>
            <Button className="btn-outline text-lg px-8 py-6">
              Become a Seller
            </Button>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
            No credit card required • Free account available • Cancel anytime
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="h-16 w-16 rounded-2xl bg-marketplace-indigo/20 flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-marketplace-indigo" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
            <p className="text-gray-600 dark:text-gray-300">
              All payments are secured with industry-standard encryption and buyer protection.
            </p>
          </div>
          
          <div className="text-center">
            <div className="h-16 w-16 rounded-2xl bg-marketplace-indigo/20 flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-marketplace-indigo" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Every item is reviewed for quality and comes with a 30-day satisfaction guarantee.
            </p>
          </div>
          
          <div className="text-center">
            <div className="h-16 w-16 rounded-2xl bg-marketplace-indigo/20 flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-marketplace-indigo" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Continuous Updates</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Most items come with ongoing updates and dedicated support from the creators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
