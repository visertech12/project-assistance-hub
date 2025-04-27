
import React from "react";
import { FileText, FolderOpen, Edit } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Documentation = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-marketplace-obsidian">
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-marketplace-indigo to-marketplace-emerald bg-clip-text text-transparent">
            Template Documentation
          </h1>

          {/* Installation */}
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-6 w-6 text-marketplace-indigo" />
              <h2 className="text-2xl font-semibold">Installation Guide</h2>
            </div>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Prerequisites</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-300">
                    <li>Node.js (v16 or higher)</li>
                    <li>npm or yarn package manager</li>
                    <li>Git (optional, for version control)</li>
                  </ul>
                </div>
                <Separator />
                <div className="space-y-2">
                  <h3 className="font-semibold">Installation Steps</h3>
                  <ol className="list-decimal pl-6 space-y-3 text-gray-600 dark:text-gray-300">
                    <li>
                      <p>Clone the repository:</p>
                      <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg mt-2">
                        git clone [repository-url]
                      </pre>
                    </li>
                    <li>
                      <p>Navigate to project directory:</p>
                      <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg mt-2">
                        cd your-project-name
                      </pre>
                    </li>
                    <li>
                      <p>Install dependencies:</p>
                      <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg mt-2">
                        npm install
                      </pre>
                    </li>
                    <li>
                      <p>Start development server:</p>
                      <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg mt-2">
                        npm run dev
                      </pre>
                    </li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* File Structure */}
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <FolderOpen className="h-6 w-6 text-marketplace-indigo" />
              <h2 className="text-2xl font-semibold">File Structure</h2>
            </div>
            <Card>
              <CardContent className="p-6">
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm">
{`src/
├── components/         # Reusable UI components
│   ├── ui/            # shadcn/ui components
│   └── ...
├── pages/             # Page components
│   ├── Index.tsx      # Home page
│   ├── About.tsx      # About page
│   └── ...
├── lib/              # Utility functions
├── hooks/            # Custom React hooks
└── App.tsx           # Root component`}
                </pre>
                <div className="mt-6 space-y-4 text-gray-600 dark:text-gray-300">
                  <p><strong>Key Directories:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>components/</strong> - All reusable UI components</li>
                    <li><strong>pages/</strong> - Each route's main component</li>
                    <li><strong>lib/</strong> - Utility functions and helpers</li>
                    <li><strong>hooks/</strong> - Custom React hooks</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Editing Guide */}
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Edit className="h-6 w-6 text-marketplace-indigo" />
              <h2 className="text-2xl font-semibold">Editing Guide</h2>
            </div>
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Component Structure</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Components follow a consistent structure:
                  </p>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mt-3 text-sm">
{`import React from 'react';
import { ComponentProps } from './types';

const Component: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  return (
    // JSX structure
  );
};

export default Component;`}
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Styling</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Uses Tailwind CSS for styling</li>
                    <li>Custom components from shadcn/ui library</li>
                    <li>Responsive design patterns</li>
                    <li>Dark mode support built-in</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Best Practices</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Follow TypeScript conventions</li>
                    <li>Keep components small and focused</li>
                    <li>Use proper props typing</li>
                    <li>Implement responsive design</li>
                    <li>Follow established naming conventions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          <div className="text-center">
            <Button className="bg-marketplace-indigo hover:bg-marketplace-indigo/90">
              Get Started
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;
