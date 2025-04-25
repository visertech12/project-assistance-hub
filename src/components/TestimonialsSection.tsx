
import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "David Chen",
    title: "CTO, TechStart Inc",
    avatar: "DC",
    rating: 5,
    text: "The quality of code I've found on this marketplace is outstanding. I've been able to accelerate our development cycles by weeks with the premium plugins I've purchased here.",
    verified: true
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "Frontend Lead, DesignPro",
    avatar: "SJ",
    rating: 5,
    text: "As a designer who codes, I've found incredible value in the UI components available here. The documentation is thorough and integration is seamless.",
    verified: true
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    title: "Independent Developer",
    avatar: "MR",
    rating: 4,
    text: "This platform has been instrumental in helping me launch my SaaS business. The support from sellers is prompt and helpful whenever I've had questions.",
    verified: true
  },
  {
    id: 4,
    name: "Emma Thompson",
    title: "Product Manager, EnterpriseApp",
    avatar: "ET",
    rating: 5,
    text: "Our team relies heavily on the enterprise solutions we've found here. The code quality and architecture have saved us countless development hours.",
    verified: true
  }
];

const TestimonialCard = ({ testimonial, isActive }: { testimonial: any; isActive: boolean }) => {
  return (
    <div 
      className={`neo-card p-6 rounded-xl transition-all duration-500 ${
        isActive 
          ? "opacity-100 transform translate-y-0" 
          : "opacity-40 transform translate-y-4"
      }`}
    >
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 rounded-full bg-marketplace-indigo/20 flex items-center justify-center text-marketplace-indigo font-bold text-lg mr-4">
          {testimonial.avatar}
        </div>
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-4 w-4 ${
              i < testimonial.rating 
                ? "fill-yellow-400 text-yellow-400" 
                : "text-gray-300"
            }`} 
          />
        ))}
        {testimonial.verified && (
          <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full flex items-center">
            Verified
          </span>
        )}
      </div>
      
      <p className="text-gray-700 dark:text-gray-300">{testimonial.text}</p>
    </div>
  );
};

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">What Our Customers Say</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Join thousands of satisfied developers and businesses who have found value in our marketplace.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Desktop Testimonials - Side by Side */}
          <div className="hidden md:grid grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial} 
                isActive={activeIndex === index || activeIndex === index - 2}
              />
            ))}
          </div>
          
          {/* Mobile Testimonials - Single Column */}
          <div className="md:hidden">
            <TestimonialCard 
              testimonial={testimonials[activeIndex]} 
              isActive={true} 
            />
            
            {/* Indicator Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === index 
                      ? "w-6 bg-marketplace-indigo" 
                      : "w-2 bg-gray-300 dark:bg-gray-700"
                  }`}
                >
                  <span className="sr-only">Testimonial {index + 1}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
            <div className="p-6 glass-panel rounded-xl">
              <div className="text-3xl font-bold gradient-text mb-1">97%</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Satisfaction Rate</p>
            </div>
            <div className="p-6 glass-panel rounded-xl">
              <div className="text-3xl font-bold gradient-text mb-1">12k+</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Happy Customers</p>
            </div>
            <div className="p-6 glass-panel rounded-xl">
              <div className="text-3xl font-bold gradient-text mb-1">4.8/5</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Average Rating</p>
            </div>
            <div className="p-6 glass-panel rounded-xl">
              <div className="text-3xl font-bold gradient-text mb-1">24/7</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
