
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  
  const plans = [
    {
      id: "basic",
      name: "Basic",
      description: "Perfect for individual developers and small projects",
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        "5 downloads per month",
        "Access to basic items",
        "Community support",
        "License for 1 project",
        "Updates for 6 months"
      ],
      isFeatured: false
    },
    {
      id: "pro",
      name: "Professional",
      description: "Ideal for professionals and growing businesses",
      monthlyPrice: 59,
      annualPrice: 590,
      features: [
        "25 downloads per month",
        "Access to all items",
        "Priority support",
        "License for 5 projects",
        "Updates for 12 months",
        "API access",
        "Team collaboration (3 seats)"
      ],
      isFeatured: true
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "For large teams and organizations with advanced needs",
      monthlyPrice: 129,
      annualPrice: 1290,
      features: [
        "Unlimited downloads",
        "Access to exclusive items",
        "24/7 dedicated support",
        "Extended license for unlimited projects",
        "Lifetime updates",
        "Advanced API access",
        "Team collaboration (10 seats)",
        "Custom integration services",
        "White-label options"
      ],
      isFeatured: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-marketplace-obsidian/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Choose Your Plan</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Find the perfect plan that suits your needs. All plans include access to our marketplace community.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mt-6 space-x-3">
            <span className={`text-sm ${!isAnnual ? 'text-marketplace-indigo font-medium' : 'text-gray-500'}`}>Monthly</span>
            <Switch 
              checked={isAnnual} 
              onCheckedChange={setIsAnnual} 
              className="data-[state=checked]:bg-marketplace-indigo"
            />
            <span className={`text-sm ${isAnnual ? 'text-marketplace-indigo font-medium' : 'text-gray-500'}`}>
              Annual <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full ml-1">Save 20%</span>
            </span>
          </div>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`rounded-2xl overflow-hidden relative ${
                plan.isFeatured 
                  ? "neo-card ring-2 ring-marketplace-indigo shadow-lg transform md:-translate-y-4" 
                  : "neo-card"
              }`}
            >
              {plan.isFeatured && (
                <div className="absolute top-0 left-0 right-0 bg-marketplace-indigo text-white text-center text-sm py-1">
                  Most Popular
                </div>
              )}
              
              <div className={`p-6 ${plan.isFeatured ? "pt-9" : ""}`}>
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">/{isAnnual ? 'year' : 'month'}</span>
                </div>
                
                <Button className={`w-full mb-6 ${
                  plan.isFeatured ? "btn-primary" : "btn-outline"
                }`}>
                  {plan.isFeatured ? "Get Started" : "Choose Plan"}
                </Button>
                
                <div className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-2">
                        <Check className="h-5 w-5" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enterprise CTA */}
        <div className="mt-16 bg-gradient-to-r from-marketplace-indigo/10 to-marketplace-emerald/10 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Need a custom solution?</h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-md">
                Contact our team for personalized enterprise solutions that fit your specific needs.
              </p>
            </div>
            <Button className="btn-secondary">Contact Sales</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
