
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Filter, Star } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Sample product data
const products = [
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
];

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="neo-card rounded-xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
      <div className="h-40 relative overflow-hidden group">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-3">
          <Button 
            size="sm" 
            variant="outline" 
            className="bg-white/90 text-gray-900 text-xs"
            onClick={() => window.location.href = `/product/${product.id}`}
          >
            View Details
          </Button>
        </div>
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
    </div>
  );
};

const Products = () => {
  const [sortBy, setSortBy] = useState("newest");

  return (
    <div className="min-h-screen bg-white dark:bg-marketplace-obsidian">
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">All Products</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Browse our collection of high-quality digital assets
            </p>
          </div>
          
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
            <Select defaultValue={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["All", "JavaScript", "React", "Node.js", "TypeScript", "Python", "UI Kits"].map((category) => (
            <Badge 
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className="cursor-pointer hover:bg-marketplace-indigo hover:text-white transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
