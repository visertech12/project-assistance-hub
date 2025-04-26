
import { useState } from "react";
import { 
  SidebarProvider, 
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { Download, LayoutDashboard, Settings, User } from "lucide-react";
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
      title: "Downloads",
      icon: Download,
      path: "/dashboard/downloads"
    },
    {
      title: "Profile",
      icon: User,
      path: "/dashboard/profile"
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
            <h2 className="text-lg font-bold">User Dashboard</h2>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path} className="flex items-center gap-2">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          <main className="flex-1 container mx-auto px-4 py-8">
            <Outlet />
          </main>
          <DashboardFooter />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
