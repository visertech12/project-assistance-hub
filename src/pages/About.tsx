
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Timeline from "@/components/about/Timeline";
import Mission from "@/components/about/Mission";
import Team from "@/components/about/Team";
import Stats from "@/components/about/Stats";
import Partners from "@/components/about/Partners";
import { Mail, MapPin, Phone } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-marketplace-obsidian">
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            About CodeMarket
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Building the future of digital asset distribution, one line of code at a time.
          </p>
        </section>

        <div className="space-y-24">
          <Mission />
          <Stats />
          <Timeline />
          <Team />
          
          {/* Contact Info Section */}
          <section className="py-12">
            <h2 className="text-3xl font-bold gradient-text text-center mb-12">Get in Touch</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card p-6 text-center">
                <Phone className="w-8 h-8 mx-auto mb-4 text-marketplace-indigo" />
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div className="glass-card p-6 text-center">
                <Mail className="w-8 h-8 mx-auto mb-4 text-marketplace-indigo" />
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600 dark:text-gray-300">contact@codemarket.com</p>
              </div>
              <div className="glass-card p-6 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-4 text-marketplace-indigo" />
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-600 dark:text-gray-300">123 Tech Street, San Francisco, CA</p>
              </div>
            </div>
          </section>
          
          <Partners />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
