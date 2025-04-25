
import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Moon, Sun } from "lucide-react";

interface DocSidebarProps {
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

const DocSidebar = ({ isDarkMode, onThemeToggle }: DocSidebarProps) => {
  const sidebarNavItems = [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "#introduction",
          active: true,
        },
        {
          title: "Installation",
          href: "#installation",
        },
        {
          title: "Quick Start Guide",
          href: "#quick-start",
        },
      ],
    },
    {
      title: "Core Features",
      items: [
        {
          title: "Components",
          href: "#components",
        },
        {
          title: "Styling",
          href: "#styling",
        },
        {
          title: "Pages",
          href: "#pages",
        },
      ],
    },
    {
      title: "Advanced Topics",
      items: [
        {
          title: "Customization",
          href: "#customization",
        },
        {
          title: "License",
          href: "#license",
        },
      ],
    },
  ];

  return (
    <aside className="hidden md:block w-64 lg:w-72 shrink-0 border-r dark:border-gray-800">
      <ScrollArea className="h-[calc(100vh-64px)] py-6 px-4">
        <div className="flex items-center justify-between mb-8 px-2">
          <h3 className="font-medium">Documentation</h3>
          <Button variant="ghost" size="sm" onClick={onThemeToggle}>
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>

        <nav className="space-y-8">
          {sidebarNavItems.map((section, i) => (
            <div key={i} className="space-y-2">
              <h4 className="font-semibold px-2 mb-2 text-sm">{section.title}</h4>
              <div className="flex flex-col space-y-1">
                {section.items.map((item, j) => (
                  <Button
                    key={j}
                    variant="ghost"
                    className={`justify-start h-9 px-2 ${
                      item.active 
                        ? "bg-accent text-accent-foreground font-medium" 
                        : "text-muted-foreground"
                    }`}
                    asChild
                  >
                    <a href={item.href}>{item.title}</a>
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </ScrollArea>
    </aside>
  );
};

export default DocSidebar;
