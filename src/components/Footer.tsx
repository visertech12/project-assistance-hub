import React from "react";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail,
  Globe
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-marketplace-obsidian text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h2 className="text-2xl font-bold gradient-text">CodeMarket</h2>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              The premier marketplace for high-quality code, scripts, themes, and plugins. 
              Empower your development workflow with trusted digital assets.
            </p>
            
            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider mb-3">Subscribe to our newsletter</h4>
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white/5 border-white/20 text-white rounded-l-lg rounded-r-none" 
                />
                <Button className="btn-primary rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-marketplace-indigo transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-marketplace-indigo transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-marketplace-indigo transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-marketplace-indigo transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Links Columns */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/products?category=scripts" className="text-gray-300 hover:text-white">Scripts</Link></li>
              <li><Link to="/products?category=wordpress" className="text-gray-300 hover:text-white">WordPress Themes</Link></li>
              <li><Link to="/products?category=ecommerce" className="text-gray-300 hover:text-white">eCommerce</Link></li>
              <li><Link to="/products?category=utilities" className="text-gray-300 hover:text-white">Utilities</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white">View All</Link></li>
            </ul>
          </div>
          
          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
            </ul>
          </div>
          
          {/* Support Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help-center" className="text-gray-300 hover:text-white">Help Center</Link></li>
              <li><Link to="/refund-policy" className="text-gray-300 hover:text-white">Refund Policy</Link></li>
            </ul>
          </div>
          
          {/* Legal Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer Area */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex flex-wrap justify-center md:justify-start">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-white mr-6 mb-2">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-white mr-6 mb-2">Terms of Service</Link>
              <Link to="/cookies" className="text-sm text-gray-400 hover:text-white mr-6 mb-2">Cookie Policy</Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-400 hover:text-white cursor-pointer">
                <Globe className="h-4 w-4 mr-1" />
                <span>English</span>
                <span className="ml-1">▼</span>
              </div>
              
              <div className="flex items-center text-sm text-gray-400 hover:text-white cursor-pointer">
                <span>USD</span>
                <span className="ml-1">▼</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 CodeMarket. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
