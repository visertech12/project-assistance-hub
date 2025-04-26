import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  SidebarProvider, 
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { LayoutDashboard, Settings } from "lucide-react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardFooter from "@/components/dashboard/DashboardFooter";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard"
    },
    {
      title: "Settings",
      icon: Settings,
      path: "/dashboard/settings"
    }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50 dark:bg-gray-900">
        <Sidebar>
          <SidebarHeader className="p-4">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-lg font-bold gradient-text"
            >
              User Dashboard
            </motion.h2>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <AnimatePresence>
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link to={item.path} className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                          <item.icon className="h-5 w-5" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </motion.div>
                ))}
              </AnimatePresence>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          <motion.main 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 container mx-auto px-4 py-8"
          >
            <Outlet />
          </motion.main>
          <DashboardFooter />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
