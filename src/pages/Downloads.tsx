
import { FileDown, Script } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DownloadItem = ({ title, description, size, downloads }: {
  title: string;
  description: string;
  size: string;
  downloads: number;
}) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardHeader>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Script className="h-5 w-5 text-marketplace-indigo" />
          <CardTitle className="text-lg">{title}</CardTitle>
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
      downloads: 1234
    },
    {
      title: "API Integration Helper",
      description: "Simplify your API integrations with ready-to-use helper functions.",
      size: "28 KB",
      downloads: 856
    },
    {
      title: "Data Validation Utils",
      description: "A collection of utility functions for data validation and sanitization.",
      size: "32 KB",
      downloads: 2103
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Download Scripts</h1>
          <p className="text-muted-foreground mb-8">
            Browse and download our collection of useful scripts and utilities
          </p>
        </div>

        <div className="grid gap-6">
          {scripts.map((script, index) => (
            <DownloadItem key={index} {...script} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Downloads;
