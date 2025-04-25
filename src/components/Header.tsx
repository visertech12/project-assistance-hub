import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, Menu, User, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const CategoryItem = ({
  icon, 
  title, 
  description,
  href = "#"
}: {
  icon: string;
  title: string;
  description: string;
  href?: string;
}) => (
  <Link to={href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
    <div className="flex items-center gap-2">
      <span className="bg-marketplace-indigo/10 p-1 rounded">{icon}</span>
      <div className="font-medium leading-none">{title}</div>
    </div>
    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
      {description}
    </p>
  </Link>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isProductDetail = location.pathname.includes('/product/');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const categories = [
    {
      icon: "📜",
      title: "Scripts",
      description: "Ready-to-use scripts and code snippets",
      href: "/products?category=scripts"
    },
    {
      icon: "🌐",
      title: "WordPress",
      description: "Themes, plugins, and extensions",
      href: "/products?category=wordpress"
    },
    {
      icon: "🛒",
      title: "eCommerce",
      description: "Shopping carts and store solutions",
      href: "/products?category=ecommerce"
    },
    {
      icon: "🔧",
      title: "Utilities",
      description: "Helper tools and utilities",
      href: "/products?category=utilities"
    }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled || isProductDetail || isMobileMenuOpen
          ? "bg-white/90 dark:bg-marketplace-obsidian/90 backdrop-blur-md shadow-md py-2 sm:py-3" 
          : "bg-transparent py-3 sm:py-5"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl sm:text-2xl font-bold gradient-text">CodeMarket</Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium hover:text-marketplace-indigo">Home</Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">Categories</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[400px]">
                      {categories.map((category, index) => (
                        <CategoryItem 
                          key={index}
                          icon={category.icon}
                          title={category.title}
                          description={category.description}
                          href={category.href}
                        />
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/products" className="text-sm font-medium hover:text-marketplace-indigo">Products</Link>
            <Link to="/blog" className="text-sm font-medium hover:text-marketplace-indigo">Blog</Link>
            <Link to="/about" className="text-sm font-medium hover:text-marketplace-indigo">About</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/cart" className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-marketplace-indigo text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="sm">Sign In</Button>
            </Link>
          </div>

          <div className="flex md:hidden items-center space-x-3">
            <ThemeToggle />
            <Link to="/cart" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-marketplace-indigo text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
            </Link>
            <button 
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-slide-in bg-white dark:bg-marketplace-obsidian-light rounded-lg mt-2 shadow-lg">
            <nav className="flex flex-col space-y-1 p-2">
              <Link to="/" className="font-medium py-2 px-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">Home</Link>
              
              <div className="space-y-1">
                <div className="font-medium py-2 px-3">Categories</div>
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    to={category.href}
                    className="block py-2 px-6 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span>{category.icon}</span>
                      <span>{category.title}</span>
                    </div>
                  </Link>
                ))}
              </div>

              <Link to="/products" className="font-medium py-2 px-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">Products</Link>
              <Link to="/blog" className="font-medium py-2 px-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">Blog</Link>
              <Link to="/about" className="font-medium py-2 px-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">About</Link>
              <Link to="/login" className="mt-2 px-3">
                <Button className="w-full" size="sm">Sign In</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
