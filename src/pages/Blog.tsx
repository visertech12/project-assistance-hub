import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, Clock, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

// Sample blog data
const featuredPost = {
  id: 1,
  title: "Top 10 Code Components Every Developer Should Have",
  excerpt: "Discover the essential reusable components that will speed up your development process and improve code quality.",
  coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format",
  category: "Development",
  author: {
    name: "Alex Johnson",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120"
  },
  date: "April 15, 2023",
  readTime: "8 min read"
};

const recentPosts = [
  {
    id: 2,
    title: "How to Optimize Your E-commerce Site for Better Conversions",
    excerpt: "Learn proven strategies to increase your online store's conversion rates and boost sales.",
    coverImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format",
    category: "E-Commerce",
    author: {
      name: "Sarah Miller",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120"
    },
    date: "April 12, 2023",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "Understanding React Hooks: A Comprehensive Guide",
    excerpt: "Master React's hook system with this detailed walkthrough of use cases and best practices.",
    coverImage: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=600&auto=format",
    category: "React",
    author: {
      name: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=120&h=120"
    },
    date: "April 10, 2023",
    readTime: "10 min read"
  },
  {
    id: 4,
    title: "Building Accessible Web Forms: A Developer's Guide",
    excerpt: "Learn how to create forms that comply with accessibility standards and provide a better user experience for all.",
    coverImage: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?q=80&w=600&auto=format",
    category: "Accessibility",
    author: {
      name: "Emma Davis",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&h=120"
    },
    date: "April 8, 2023",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "The Future of JavaScript: What's Coming in 2024",
    excerpt: "Explore upcoming features and improvements planned for JavaScript in the near future.",
    coverImage: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=600&auto=format",
    category: "JavaScript",
    author: {
      name: "David Wilson",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&h=120"
    },
    date: "April 5, 2023",
    readTime: "5 min read"
  },
  {
    id: 6,
    title: "Mastering CSS Grid: Advanced Layout Techniques",
    excerpt: "Take your CSS Grid skills to the next level with these advanced techniques and patterns.",
    coverImage: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?q=80&w=600&auto=format",
    category: "CSS",
    author: {
      name: "Jennifer Lee",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120"
    },
    date: "April 3, 2023",
    readTime: "9 min read"
  }
];

const popularPosts = [
  {
    id: 7,
    title: "10 VS Code Extensions That Will Boost Your Productivity",
    date: "March 28, 2023",
    views: 5342
  },
  {
    id: 8,
    title: "How to Build a Real-Time Chat App with React and Firebase",
    date: "March 20, 2023",
    views: 4721
  },
  {
    id: 9,
    title: "Implementing Dark Mode in Your Web Application",
    date: "March 15, 2023",
    views: 4503
  },
  {
    id: 10,
    title: "Getting Started with TypeScript: A Beginner's Guide",
    date: "March 10, 2023",
    views: 4128
  }
];

const categories = [
  "All", "Development", "Design", "JavaScript", "React", "Vue", "CSS", "E-Commerce", "Accessibility", "Performance"
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 md:py-16">
        {/* Featured Post */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to={`/blog/${featuredPost.id}`} className="block">
              <div className="relative overflow-hidden rounded-2xl">
                <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
                  <img 
                    src={featuredPost.coverImage} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-10">
                  <Badge className="inline-flex w-fit mb-4">{featuredPost.category}</Badge>
                  <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">{featuredPost.title}</h1>
                  <p className="text-white/90 mb-4 max-w-2xl">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10 border-2 border-white">
                      <AvatarImage src={featuredPost.author.avatar} alt={featuredPost.author.name} />
                      <AvatarFallback>{featuredPost.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-white font-medium">{featuredPost.author.name}</p>
                      <div className="flex items-center text-white/70 text-sm space-x-3">
                        <span className="flex items-center">
                          <Calendar className="mr-1 h-3.5 w-3.5" />
                          {featuredPost.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="mr-1 h-3.5 w-3.5" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Recent Articles</h2>
            <a href="/blog/archive" className="text-primary flex items-center hover:underline">
              View all articles <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
          <div className="overflow-x-auto pb-4 no-scrollbar">
            <div className="flex space-x-2 min-w-max">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Posts Grid */}
          <section className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {recentPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link to={`/blog/${post.id}`}>
                    <Card className="overflow-hidden h-full flex flex-col bg-white dark:bg-gray-800 border-0 shadow-sm hover:shadow-md transition-shadow">
                      <div className="aspect-[16/10] overflow-hidden">
                        <img 
                          src={post.coverImage} 
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-5 flex flex-col flex-grow">
                        <div className="mb-3">
                          <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                        </div>
                        <h3 className="font-semibold text-xl mb-2 line-clamp-2 flex-grow">{post.title}</h3>
                        <p className="text-gray-500 dark:text-gray-400 line-clamp-2 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100 dark:border-gray-700">
                          <div className="flex items-center space-x-2">
                            <Avatar className="h-7 w-7">
                              <AvatarImage src={post.author.avatar} alt={post.author.name} />
                              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm">{post.author.name}</span>
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                            <Clock className="mr-1 h-3 w-3" />
                            {post.readTime}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Search */}
            <Card className="p-5 border-0 shadow-sm bg-white dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-4">Search</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input className="pl-10" placeholder="Search articles..." />
              </div>
            </Card>

            {/* Popular Posts */}
            <Card className="p-5 border-0 shadow-sm bg-white dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-4">Popular Posts</h3>
              <div className="space-y-4">
                {popularPosts.map((post) => (
                  <a key={post.id} href={`/blog/${post.id}`} className="block group">
                    <div className="flex items-start space-x-3">
                      <span className="text-gray-300 dark:text-gray-600 font-bold text-xl">
                        {String(popularPosts.indexOf(post) + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h4 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h4>
                        <div className="text-xs text-gray-500 mt-1">
                          {post.date} • {post.views.toLocaleString()} views
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Newsletter */}
            <Card className="p-5 border-0 shadow-sm bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
              <h3 className="text-xl font-semibold mb-2">Subscribe to our newsletter</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Get the latest articles and resources sent straight to your inbox.
              </p>
              <div className="space-y-3">
                <Input placeholder="Enter your email" />
                <Button className="w-full">Subscribe</Button>
              </div>
            </Card>

            {/* Tags */}
            <Card className="p-5 border-0 shadow-sm bg-white dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {categories.filter(cat => cat !== "All").map((tag) => (
                  <Badge key={tag} variant="outline" className="hover:bg-secondary cursor-pointer">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.aside>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
