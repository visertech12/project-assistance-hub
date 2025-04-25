
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis
} from "recharts";
import { Star } from "lucide-react";

// Sample data for the chart
const chartData = [
  { name: "Jan", sales: 100 },
  { name: "Feb", sales: 300 },
  { name: "Mar", sales: 200 },
  { name: "Apr", sales: 500 },
  { name: "May", sales: 400 },
  { name: "Jun", sales: 600 },
  { name: "Jul", sales: 700 }
];

const tags = [
  "All", "Featured", "Popular", "New Releases", "Top Rated", "On Sale"
];

const trendingProducts = [
  {
    id: 1,
    title: "Ultimate Admin Dashboard",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300&h=180",
    price: 59,
    rating: 4.9,
    reviews: 243,
    author: "UIPro",
    authorInitial: "UI",
    category: "Admin Template",
    sales: 2570,
    trending: true
  },
  {
    id: 2,
    title: "eCommerce API Suite",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=300&h=180",
    price: 79,
    rating: 4.8,
    reviews: 189,
    author: "APIDevs",
    authorInitial: "AD",
    category: "API Integration",
    sales: 1980,
    trending: true
  },
  {
    id: 3,
    title: "SaaS Starter Kit",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&h=180",
    price: 129,
    rating: 4.9,
    reviews: 304,
    author: "SaaSFoundry",
    authorInitial: "SF",
    category: "Full Solution",
    sales: 3150,
    trending: true
  }
];

const TrendingProduct = ({ product }: { product: any }) => {
  return (
    <div className="neo-card rounded-xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
      <div className="h-48 relative overflow-hidden group">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col justify-end p-4">
          <h3 className="text-white text-lg font-semibold mb-1">{product.title}</h3>
          <p className="text-white/80 text-sm mb-3">{product.category}</p>
          
          {/* Rating Stars */}
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}`}
              />
            ))}
            <span className="ml-2 text-white text-sm">{product.rating} ({product.reviews})</span>
          </div>
        </div>
        
        <div className="absolute top-3 right-3 bg-marketplace-indigo/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
          ${product.price}
        </div>
        
        {product.trending && (
          <div className="absolute top-3 left-3 bg-red-500/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center">
            <span className="animate-pulse mr-1">●</span> Trending
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-marketplace-indigo/20 flex items-center justify-center text-marketplace-indigo font-medium text-sm">
              {product.authorInitial}
            </div>
            <div className="ml-2">
              <div className="text-sm font-medium">{product.author}</div>
              <div className="text-xs text-gray-500">Verified Seller</div>
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-500 mb-1">Sales</div>
            <div className="font-semibold text-marketplace-indigo">{product.sales}+</div>
          </div>
        </div>
        
        {/* Mini Chart */}
        <div className="h-16 mb-3">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" hide />
              <Tooltip 
                contentStyle={{
                  borderRadius: "8px",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  fontSize: "12px"
                }} 
              />
              <Area 
                type="monotone" 
                dataKey="sales" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#salesGradient)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <Button className="btn-primary w-full">View Details</Button>
      </div>
    </div>
  );
};

const TrendingSection = () => {
  const [activeTag, setActiveTag] = useState("All");
  const [priceFilter, setPriceFilter] = useState("all");

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Trending Now</h2>
            <p className="text-gray-600 dark:text-gray-300">
              See what's hot in the marketplace right now
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Price:</span>
              <button 
                onClick={() => setPriceFilter("all")}
                className={`text-sm px-3 py-1 rounded-full ${
                  priceFilter === "all" 
                    ? "bg-marketplace-indigo text-white" 
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                }`}
              >
                All
              </button>
              <button 
                onClick={() => setPriceFilter("free")}
                className={`text-sm px-3 py-1 rounded-full ${
                  priceFilter === "free" 
                    ? "bg-marketplace-indigo text-white" 
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                }`}
              >
                Free
              </button>
              <button 
                onClick={() => setPriceFilter("paid")}
                className={`text-sm px-3 py-1 rounded-full ${
                  priceFilter === "paid" 
                    ? "bg-marketplace-indigo text-white" 
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                }`}
              >
                Paid
              </button>
            </div>
          </div>
        </div>
        
        {/* Tag Filtering */}
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeTag === tag 
                  ? "bg-marketplace-indigo text-white" 
                  : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        
        {/* Trending Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trendingProducts.map((product) => (
            <TrendingProduct key={product.id} product={product} />
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <Button className="btn-outline">
            Explore All Trending Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
