
import React from "react";
import { cn } from "@/lib/utils";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";

interface CategoryCardProps {
  icon: string;
  title: string;
  count: number;
  color?: string;
  onClick?: () => void;
}

const CategoryCard = ({
  icon,
  title,
  count,
  color = "indigo",
  onClick,
}: CategoryCardProps) => {
  const colorVariants = {
    indigo: "bg-marketplace-indigo/10 text-marketplace-indigo",
    emerald: "bg-marketplace-emerald/10 text-marketplace-emerald",
    amber: "bg-amber-500/10 text-amber-500",
    blue: "bg-blue-500/10 text-blue-500",
    rose: "bg-rose-500/10 text-rose-500",
    purple: "bg-purple-500/10 text-purple-500",
  };

  return (
    <div
      className="category-card neo-card cursor-pointer transition-all p-4"
      onClick={onClick}
    >
      <div className={cn("text-2xl sm:text-3xl p-3 sm:p-4 rounded-full w-fit", colorVariants[color as keyof typeof colorVariants])}>
        {icon}
      </div>
      <h3 className="mt-2 sm:mt-3 font-medium text-base sm:text-lg break-words">{title}</h3>
      <p className="text-xs sm:text-sm text-muted-foreground">{count.toLocaleString()} items</p>
    </div>
  );
};

const CategoriesSection = () => {
  const mainCategories = [
    { icon: "📜", title: "Scripts", count: 5832, color: "indigo" },
    { icon: "🌐", title: "WordPress", count: 7246, color: "emerald" },
    { icon: "🛒", title: "eCommerce", count: 3581, color: "amber" },
    { icon: "🔧", title: "Utilities", count: 4329, color: "blue" },
    { icon: "📱", title: "Mobile Apps", count: 2758, color: "rose" },
    { icon: "🎮", title: "Game Assets", count: 3192, color: "purple" },
  ];

  const frameworks = [
    { icon: "⚛️", title: "React", count: 3245, color: "blue" },
    { icon: "🟢", title: "Vue", count: 2156, color: "emerald" },
    { icon: "🅰️", title: "Angular", count: 1847, color: "rose" },
    { icon: "🔷", title: "Next.js", count: 2732, color: "indigo" },
    { icon: "📊", title: "D3.js", count: 965, color: "amber" },
    { icon: "🔶", title: "Svelte", count: 1258, color: "purple" },
  ];

  const languages = [
    { icon: "🟡", title: "JavaScript", count: 7825, color: "amber" },
    { icon: "🔵", title: "TypeScript", count: 5621, color: "blue" },
    { icon: "🐍", title: "Python", count: 4738, color: "emerald" },
    { icon: "🔴", title: "Ruby", count: 2145, color: "rose" },
    { icon: "☕", title: "Java", count: 3247, color: "indigo" },
    { icon: "🟣", title: "PHP", count: 3856, color: "purple" },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 bg-gray-50 dark:bg-marketplace-obsidian-light">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">Browse by Categories</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Explore our extensive collection of high-quality digital assets across various categories
          </p>
        </div>

        <Tabs defaultValue="main" className="w-full">
          <div className="flex justify-center mb-6 sm:mb-8">
            <TabsList className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <TabsTrigger value="main" className="text-sm font-medium">Main Categories</TabsTrigger>
              <TabsTrigger value="frameworks" className="text-sm font-medium">Frameworks</TabsTrigger>
              <TabsTrigger value="languages" className="text-sm font-medium">Languages</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="main" className="mt-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
              {mainCategories.map((category, index) => (
                <CategoryCard
                  key={`main-${index}`}
                  icon={category.icon}
                  title={category.title}
                  count={category.count}
                  color={category.color}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="frameworks" className="mt-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
              {frameworks.map((category, index) => (
                <CategoryCard
                  key={`framework-${index}`}
                  icon={category.icon}
                  title={category.title}
                  count={category.count}
                  color={category.color}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="languages" className="mt-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
              {languages.map((category, index) => (
                <CategoryCard
                  key={`language-${index}`}
                  icon={category.icon}
                  title={category.title}
                  count={category.count}
                  color={category.color}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CategoriesSection;
