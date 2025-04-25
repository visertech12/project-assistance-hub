
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Download, Eye, Calendar, Tag, ChevronRight } from "lucide-react";
import { useParams } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const ProductDetails = () => {
  const { id } = useParams();
  const [activeImage, setActiveImage] = React.useState(0);
  const isMobile = useIsMobile();

  // Mock product data
  const product = {
    id: id || "1",
    name: "Premium E-Commerce Dashboard UI Kit",
    description: "A comprehensive UI kit for building modern e-commerce dashboards with dark and light mode support.",
    price: 49.99,
    rating: 4.8,
    reviews: 124,
    downloads: 3245,
    lastUpdated: "2025-04-01",
    version: "2.3.4",
    author: {
      name: "DesignMasters",
      avatar: "/placeholder.svg",
      items: 47,
      rating: 4.9
    },
    tags: ["dashboard", "ui-kit", "e-commerce", "admin", "react"],
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ]
  };

  // Scroll effect for sticky buy button
  React.useEffect(() => {
    const handleScroll = () => {
      const buyButton = document.getElementById("sticky-buy-button");
      if (!buyButton) return;
      
      if (window.scrollY > 300) {
        buyButton.classList.remove("opacity-0", "translate-y-10");
        buyButton.classList.add("opacity-100", "translate-y-0");
      } else {
        buyButton.classList.add("opacity-0", "translate-y-10");
        buyButton.classList.remove("opacity-100", "translate-y-0");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-marketplace-obsidian">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-8">
        {/* Breadcrumb - Hidden on mobile for better space usage */}
        <nav className="hidden sm:flex mb-6 text-sm">
          <a href="/" className="text-gray-500 hover:text-marketplace-indigo">Home</a>
          <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
          <a href="/products" className="text-gray-500 hover:text-marketplace-indigo">E-commerce</a>
          <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
          <span className="text-gray-900 dark:text-gray-100 truncate">{product.name}</span>
        </nav>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Product Images - Responsive gallery */}
          <div>
            <div className="relative aspect-[4/3] sm:aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden mb-3 sm:mb-4">
              <img src={product.images[activeImage]} alt={product.name} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-green-500 text-white text-xs">
                  Featured
                </Badge>
                <Badge variant="secondary" className="bg-blue-500 text-white text-xs">
                  Top Rated
                </Badge>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`aspect-[4/3] sm:aspect-video bg-gray-100 dark:bg-gray-800 rounded overflow-hidden ${activeImage === index ? 'ring-2 ring-marketplace-indigo' : ''}`}
                  onClick={() => setActiveImage(index)}
                >
                  <img src={image} alt={`Product preview ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Info - Improved responsive layout */}
          <div className="mt-6 md:mt-0">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">({product.rating}) • {product.reviews} reviews</span>
            </div>
            
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6">{product.description}</p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-1 sm:gap-2">
                <Download className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{product.downloads} downloads</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Last updated: {product.lastUpdated}</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Tag className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Version: {product.version}</span>
              </div>
            </div>
            
            {/* Author info */}
            <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
              <img src={product.author.avatar} alt={product.author.name} className="h-10 w-10 sm:h-12 sm:w-12 rounded-full" />
              <div>
                <h3 className="font-medium text-sm sm:text-base">{product.author.name}</h3>
                <div className="flex items-center text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  <span>{product.author.items} items</span>
                  <span className="mx-2">•</span>
                  <span>{product.author.rating} rating</span>
                </div>
              </div>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
              {product.tags.map(tag => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            
            {/* Price and CTA buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-lg mb-6">
              <span className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-0">${product.price}</span>
              <div className="flex gap-3 w-full sm:w-auto">
                <Button variant="outline" size={isMobile ? "sm" : "default"} className="flex-1 sm:flex-none">
                  <Eye className="h-4 w-4 mr-2" />
                  Live Preview
                </Button>
                <Button size={isMobile ? "sm" : "default"} className="flex-1 sm:flex-none">Buy Now</Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabbed Content - Improved mobile view */}
        <div className="mt-8 sm:mt-12">
          <Tabs defaultValue="overview">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-6 sm:mb-8 w-full h-auto">
              <TabsTrigger value="overview" className="py-2 text-sm sm:text-base">Overview</TabsTrigger>
              <TabsTrigger value="reviews" className="py-2 text-sm sm:text-base">Reviews</TabsTrigger>
              <TabsTrigger value="comments" className="py-2 text-sm sm:text-base">Comments</TabsTrigger>
              <TabsTrigger value="files" className="py-2 text-sm sm:text-base">Files</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="glass-card p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Product Overview</h2>
              <p className="text-sm sm:text-base mb-4">This premium UI kit includes everything you need to build a professional e-commerce dashboard or admin panel. Built with modern design principles and optimized for usability.</p>
              
              <h3 className="text-base sm:text-lg font-medium mt-5 mb-2 sm:mb-3">Features</h3>
              <ul className="list-disc pl-5 space-y-1.5 sm:space-y-2 mb-6 text-sm sm:text-base">
                <li>Fully responsive design that works on all devices</li>
                <li>Dark and light mode with smooth transitions</li>
                <li>100+ custom components designed for e-commerce</li>
                <li>Interactive charts and data visualization tools</li>
                <li>Ready-to-use page templates</li>
                <li>Comprehensive documentation</li>
              </ul>
            </TabsContent>
            <TabsContent value="reviews" className="glass-card p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Customer Reviews</h2>
              <p className="text-sm sm:text-base">Review content would appear here.</p>
            </TabsContent>
            <TabsContent value="comments" className="glass-card p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">User Comments</h2>
              <p className="text-sm sm:text-base">Comments would appear here.</p>
            </TabsContent>
            <TabsContent value="files" className="glass-card p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Included Files</h2>
              <p className="text-sm sm:text-base">File listings would appear here.</p>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Related Products - Responsive grid */}
        <div className="mt-8 sm:mt-12">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Related Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {[1, 2, 3, 4].map(id => (
              <a key={id} href={`/product/${id}`} className="group">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
                  <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-700 relative">
                    <img src="/placeholder.svg" alt="Product" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="font-medium text-sm sm:text-base group-hover:text-marketplace-indigo transition-colors truncate">Related Product {id}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-3 w-3 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">(4.0)</span>
                    </div>
                    <p className="text-marketplace-indigo font-semibold mt-2 text-sm sm:text-base">${(19.99 * id).toFixed(2)}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        
        {/* Sticky Buy Button - Improved mobile styles */}
        <div 
          id="sticky-buy-button"
          className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg px-4 py-3 sm:p-4 transform translate-y-10 opacity-0 transition-all duration-300 z-50"
        >
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3 sm:gap-4">
              <img src={product.images[0]} alt={product.name} className="h-10 w-10 sm:h-12 sm:w-12 rounded" />
              <div className="max-w-[150px] sm:max-w-xs">
                <h3 className="font-medium text-xs sm:text-sm truncate">{product.name}</h3>
                <span className="text-marketplace-indigo font-bold text-sm sm:text-base">${product.price}</span>
              </div>
            </div>
            <Button size={isMobile ? "sm" : "default"}>Buy Now</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;
