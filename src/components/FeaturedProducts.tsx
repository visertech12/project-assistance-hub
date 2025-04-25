
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

// Sample product data
const productCategories = [
  {
    id: "scripts",
    name: "Scripts",
    products: [
      {
        id: 1,
        title: "DataFusion API Integration",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&h=180",
        price: 29,
        rating: 4.7,
        reviews: 124,
        author: "WebTools Inc",
        authorInitial: "WT",
        category: "JavaScript",
        sales: 1240
      },
      {
        id: 2,
        title: "CloudSync Backend",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&h=180",
        price: 39,
        rating: 4.9,
        reviews: 86,
        author: "ServerPro",
        authorInitial: "SP",
        category: "Node.js",
        sales: 890
      },
      {
        id: 3, 
        title: "ReactFlow Charts",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&h=180",
        price: 19,
        rating: 4.5,
        reviews: 67,
        author: "UIDevs",
        authorInitial: "UD",
        category: "React",
        sales: 567
      },
      {
        id: 4,
        title: "TypeScript Utilities Bundle",
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=300&h=180",
        price: 15,
        rating: 4.6,
        reviews: 52,
        author: "CodeMasters",
        authorInitial: "CM",
        category: "TypeScript",
        sales: 320
      }
    ]
  },
  {
    id: "wordpress",
    name: "WordPress",
    products: [
      {
        id: 5,
        title: "Elixir - Premium WP Theme",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300&h=180",
        price: 59,
        rating: 4.8,
        reviews: 210,
        author: "ThemeFusion",
        authorInitial: "TF",
        category: "Theme",
        sales: 1850
      },
      {
        id: 6,
        title: "WP Performance Optimizer",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&h=180",
        price: 24,
        rating: 4.7,
        reviews: 95,
        author: "WPExperts",
        authorInitial: "WE",
        category: "Plugin",
        sales: 760
      },
      {
        id: 7,
        title: "MultiVendor Marketplace",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&h=180",
        price: 79,
        rating: 4.9,
        reviews: 137,
        author: "CommerceLab",
        authorInitial: "CL",
        category: "Plugin",
        sales: 920
      },
      {
        id: 8,
        title: "Portfolio Pro",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&h=180",
        price: 39,
        rating: 4.6,
        reviews: 84,
        author: "ArtistThemes",
        authorInitial: "AT",
        category: "Theme",
        sales: 630
      }
    ]
  },
  {
    id: "ecommerce",
    name: "eCommerce",
    products: [
      {
        id: 9,
        title: "ShopMaster - Complete Store",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300&h=180",
        price: 89,
        rating: 4.9,
        reviews: 176,
        author: "EcomExperts",
        authorInitial: "EE",
        category: "Full Solution",
        sales: 1560
      },
      {
        id: 10,
        title: "Payment Gateway Bundle",
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=300&h=180",
        price: 45,
        rating: 4.7,
        reviews: 92,
        author: "PayTech",
        authorInitial: "PT",
        category: "Payments",
        sales: 840
      },
      {
        id: 11,
        title: "Inventory Manager PRO",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&h=180",
        price: 59,
        rating: 4.8,
        reviews: 108,
        author: "StockMasters",
        authorInitial: "SM",
        category: "Inventory",
        sales: 730
      },
      {
        id: 12,
        title: "UX Checkout Enhancer",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&h=180",
        price: 29,
        rating: 4.6,
        reviews: 73,
        author: "UXimprove",
        authorInitial: "UX",
        category: "Conversion",
        sales: 590
      }
    ]
  },
  {
    id: "utilities",
    name: "Utilities",
    products: [
      {
        id: 13,
        title: "FileVault - Secure Storage",
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=300&h=180",
        price: 19,
        rating: 4.5,
        reviews: 64,
        author: "SecureTech",
        authorInitial: "ST",
        category: "Security",
        sales: 420
      },
      {
        id: 14,
        title: "CodeFormatter Ultimate",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&h=180",
        price: 15,
        rating: 4.7,
        reviews: 89,
        author: "DevTools",
        authorInitial: "DT",
        category: "Development",
        sales: 670
      },
      {
        id: 15,
        title: "MediaOptimizer Suite",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&h=180",
        price: 35,
        rating: 4.8,
        reviews: 112,
        author: "MediaPro",
        authorInitial: "MP",
        category: "Media",
        sales: 890
      },
      {
        id: 16,
        title: "SEO Toolkit Advanced",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300&h=180",
        price: 49,
        rating: 4.9,
        reviews: 156,
        author: "RankBooster",
        authorInitial: "RB",
        category: "Marketing",
        sales: 1240
      }
    ]
  }
];

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="neo-card rounded-xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
      <Link to={`/product/${product.id}`} className="block">
        <div className="h-40 relative overflow-hidden group">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
          />
          <div className="absolute top-2 right-2 bg-marketplace-indigo text-white text-xs px-2 py-1 rounded-full">
            {product.category}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-md font-semibold mb-1 line-clamp-1">{product.title}</h3>
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs ml-1 text-gray-700 dark:text-gray-300">{product.rating}</span>
            </div>
            <span className="text-xs text-gray-500 ml-2">({product.reviews} reviews)</span>
            <span className="text-xs text-gray-500 ml-auto">{product.sales}+ sales</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-6 w-6 rounded-full bg-marketplace-indigo/20 flex items-center justify-center text-marketplace-indigo text-xs">
                {product.authorInitial}
              </div>
              <span className="ml-1 text-xs text-gray-700 dark:text-gray-300">{product.author}</span>
            </div>
            <div className="font-bold text-marketplace-indigo">${product.price}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState("scripts");

  const getActiveCategory = () => {
    return productCategories.find(cat => cat.id === activeTab) || productCategories[0];
  };

  return (
    <section className="py-8 md:py-16 bg-gray-50 dark:bg-marketplace-obsidian/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Featured Products</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-sm md:text-base">
            Discover our handpicked selection of top-rated digital products across multiple categories.
          </p>
        </div>
        
        {/* Category Tabs - Scrollable on mobile */}
        <div className="flex justify-start md:justify-center mb-6 overflow-x-auto pb-2 border-b border-gray-200 dark:border-gray-700 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex space-x-2 md:space-x-4 min-w-max">
            {productCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-3 md:px-4 py-2 text-sm md:text-base font-medium transition-colors whitespace-nowrap ${
                  activeTab === category.id 
                    ? "tab-active" 
                    : "text-gray-600 dark:text-gray-400 hover:text-marketplace-indigo dark:hover:text-marketplace-indigo"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 animate-slide-up">
          {getActiveCategory().products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-8 md:mt-12">
          <Link to="/products">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              View All {getActiveCategory().name}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
