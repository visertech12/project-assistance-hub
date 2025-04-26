
import { FileDown, FileCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DownloadItem = ({ title, description, size, downloads, category }: {
  title: string;
  description: string;
  size: string;
  downloads: number;
  category: string;
}) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardHeader>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileCode className="h-5 w-5 text-marketplace-indigo" />
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            <span className="text-xs text-muted-foreground">{category}</span>
          </div>
        </div>
        <Button size="sm" variant="outline" className="flex items-center gap-2">
          <FileDown className="h-4 w-4" />
          Download
        </Button>
      </div>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>Size: {size}</span>
        <span>{downloads} downloads</span>
      </div>
    </CardContent>
  </Card>
);

const Downloads = () => {
  const scripts = [
    {
      title: "Database Migration Script",
      description: "Automate your database schema migrations with this powerful script.",
      size: "45 KB",
      downloads: 1234,
      category: "Database Tools"
    },
    {
      title: "API Integration Helper",
      description: "Simplify your API integrations with ready-to-use helper functions.",
      size: "28 KB",
      downloads: 856,
      category: "API Tools"
    },
    {
      title: "Data Validation Utils",
      description: "A collection of utility functions for data validation and sanitization.",
      size: "32 KB",
      downloads: 2103,
      category: "Utilities"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Downloads</h1>
        <p className="text-muted-foreground">
          Access and download your purchased scripts and utilities
        </p>
      </div>

      <div className="grid gap-6">
        {scripts.map((script, index) => (
          <DownloadItem key={index} {...script} />
        ))}
      </div>
    </div>
  );
};

export default Downloads;
