
import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const BlogDetails = () => {
  const { id } = useParams();
  
  // This would typically come from an API, using static data for demo
  const post = {
    id: 1,
    title: "Top 10 Code Components Every Developer Should Have",
    content: `
      <p>In the fast-paced world of web development, having a reliable set of reusable components is crucial for maintaining efficiency and consistency across projects. This article explores the essential components that every developer should have in their toolkit.</p>
      
      <h2>1. Button Component</h2>
      <p>A versatile button component is the cornerstone of any UI library. It should support multiple variants, sizes, and states while maintaining accessibility standards.</p>
      
      <h2>2. Form Elements</h2>
      <p>Well-designed form components including inputs, checkboxes, and select dropdowns are crucial for user interaction. These should be both functional and aesthetically pleasing.</p>
      
      <h2>3. Modal/Dialog</h2>
      <p>Modals are essential for displaying important information or gathering user input without leaving the current page context.</p>
      
      <p>Stay tuned for more insights and best practices in web development!</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format",
    category: "Development",
    author: {
      name: "Alex Johnson",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120"
    },
    date: "April 15, 2023",
    readTime: "8 min read",
    tags: ["React", "Components", "Web Development", "UI/UX"]
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Hero Section */}
          <div className="mb-8">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex items-center gap-6 text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                </Avatar>
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[21/9] mb-12 rounded-xl overflow-hidden">
            <img 
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div 
            className="prose dark:prose-invert prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <Separator className="my-8" />

          {/* Author Info */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-lg">Written by {post.author.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Technical writer and software developer with over 5 years of experience in web development.
                </p>
              </div>
            </div>
          </div>

          {/* Share */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="text-gray-600 dark:text-gray-300">Share this article:</span>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </motion.article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetails;
