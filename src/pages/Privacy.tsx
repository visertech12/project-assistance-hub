
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-marketplace-obsidian">
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-8 space-y-8">
        <h1 className="text-3xl font-bold text-center">Privacy Policy</h1>
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar Table of Contents */}
          <div className="md:col-span-1">
            <div className="sticky top-24 p-4 glass-card">
              <h3 className="text-lg font-semibold mb-4">Contents</h3>
              <nav className="space-y-2">
                <a href="#data-collection" className="block text-sm hover:text-marketplace-indigo">Data Collection</a>
                <a href="#cookies" className="block text-sm hover:text-marketplace-indigo">Cookies</a>
                <a href="#third-party" className="block text-sm hover:text-marketplace-indigo">Third-party Services</a>
                <a href="#user-rights" className="block text-sm hover:text-marketplace-indigo">User Rights</a>
                <a href="#gdpr" className="block text-sm hover:text-marketplace-indigo">GDPR Compliance</a>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-3">
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Last updated: April 23, 2025
            </p>

            <section id="data-collection" className="mb-8 glass-card p-6">
              <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, or otherwise contact us.
              </p>
            </section>

            <section id="cookies" className="mb-8 glass-card p-6">
              <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.
              </p>
            </section>

            <section id="third-party" className="mb-8 glass-card p-6">
              <h2 className="text-2xl font-semibold mb-4">Third-party Services</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We may use third-party services to monitor and analyze the use of our service, and to show advertisements to you.
              </p>
            </section>

            <section id="user-rights" className="mb-8 glass-card p-6">
              <h2 className="text-2xl font-semibold mb-4">User Rights</h2>
              <p className="text-gray-600 dark:text-gray-300">
                You have certain rights under applicable data protection laws. These may include the right to request access, correction, erasure, restriction, and portability of your personal information.
              </p>
            </section>

            <section id="gdpr" className="mb-8 glass-card p-6">
              <h2 className="text-2xl font-semibold mb-4">GDPR Compliance</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We are compliant with the General Data Protection Regulation (GDPR). We process your data according to the provisions of this regulation.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
