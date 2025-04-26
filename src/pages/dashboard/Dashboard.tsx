
import { ChartBar, ChartLine, Download, FileCode, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Downloads",
      value: "4,238",
      description: "Downloads this month",
      icon: Download,
      trend: "+12.5%"
    },
    {
      title: "Active Scripts",
      value: "12",
      description: "Scripts in use",
      icon: FileCode,
      trend: "+3.2%"
    },
    {
      title: "Usage Stats",
      value: "87.2%",
      description: "Average uptime",
      icon: ChartLine,
      trend: "+5.4%"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your activity
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
              <div className="text-xs text-green-500 mt-1">
                {stat.trend}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
