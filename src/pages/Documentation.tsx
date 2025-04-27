
import React from "react";
import { FileText, FolderOpen, Edit, Palette, Layout, Components, Layers } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Documentation = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-marketplace-obsidian">
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-marketplace-indigo to-marketplace-emerald bg-clip-text text-transparent">
            Template Documentation
          </h1>

          <Tabs defaultValue="installation" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
              <TabsTrigger value="installation">Installation</TabsTrigger>
              <TabsTrigger value="theming">Theming</TabsTrigger>
              <TabsTrigger value="components">Components</TabsTrigger>
              <TabsTrigger value="structure">Structure</TabsTrigger>
            </TabsList>

            {/* Installation Tab */}
            <TabsContent value="installation">
              <section className="space-y-6">
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
            </TabsContent>

            {/* Theming Tab */}
            <TabsContent value="theming">
              <section className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <Palette className="h-6 w-6 text-marketplace-indigo" />
                  <h2 className="text-2xl font-semibold">Theme & Colors</h2>
                </div>
                <Card>
                  <CardContent className="p-6 space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold">Color Palette</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <div className="h-20 rounded-lg bg-marketplace-indigo"></div>
                          <p className="text-sm">Marketplace Indigo (#8B5CF6)</p>
                        </div>
                        <div className="space-y-2">
                          <div className="h-20 rounded-lg bg-marketplace-emerald"></div>
                          <p className="text-sm">Marketplace Emerald (#10B981)</p>
                        </div>
                        <div className="space-y-2">
                          <div className="h-20 rounded-lg bg-marketplace-obsidian"></div>
                          <p className="text-sm">Obsidian (#1A1F2C)</p>
                        </div>
                      </div>
                    </div>
                    <Separator />
                    <div className="space-y-4">
                      <h3 className="font-semibold">Global Styles</h3>
                      <div className="space-y-2">
                        <p className="text-gray-600 dark:text-gray-300">
                          All global styles are defined in <code>src/index.css</code>:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                          <li>CSS variables for theming</li>
                          <li>Custom utility classes</li>
                          <li>Dark mode configurations</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </TabsContent>

            {/* Components Tab */}
            <TabsContent value="components">
              <section className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <Components className="h-6 w-6 text-marketplace-indigo" />
                  <h2 className="text-2xl font-semibold">Layout Components</h2>
                </div>
                <Card>
                  <CardContent className="p-6 space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold">Header Customization</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Located in <code>src/components/Header.tsx</code>
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                        <li>Navigation links configuration</li>
                        <li>Categories dropdown menu</li>
                        <li>Mobile responsive menu</li>
                        <li>User action buttons</li>
                      </ul>
                    </div>
                    <Separator />
                    <div className="space-y-4">
                      <h3 className="font-semibold">Footer Customization</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Located in <code>src/components/Footer.tsx</code>
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                        <li>Link sections and content</li>
                        <li>Newsletter subscription form</li>
                        <li>Social media links</li>
                        <li>Copyright and legal links</li>
                      </ul>
                    </div>
                    <Separator />
                    <div className="space-y-4">
                      <h3 className="font-semibold">Logo Customization</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Located in <code>src/components/CodeMarketLogo.tsx</code>
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                        <li>SVG paths for logo design</li>
                        <li>Size variants (default/small)</li>
                        <li>Gradient styling options</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </TabsContent>

            {/* Structure Tab */}
            <TabsContent value="structure">
              <section className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <Layers className="h-6 w-6 text-marketplace-indigo" />
                  <h2 className="text-2xl font-semibold">Project Structure</h2>
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
                    <div className="mt-6 space-y-4">
                      <h3 className="font-semibold">Available Routes</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600 dark:text-gray-300">
                        <li>/ (Home)</li>
                        <li>/products (Listing)</li>
                        <li>/product/:id (Details)</li>
                        <li>/blog (Blog List)</li>
                        <li>/blog/:id (Blog Post)</li>
                        <li>/about (About Us)</li>
                        <li>/documentation (Docs)</li>
                        <li>/help/buying (Guide)</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-8">
                  <h3 className="font-semibold mb-4">Best Practices</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-2">Theme Consistency</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Use defined color palette and maintain visual harmony
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-2">Component Reuse</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Leverage existing components before creating new ones
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-2">Responsive Design</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Test all changes across different screen sizes
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-2">Dark Mode Support</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Ensure all components work in both light and dark modes
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </section>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12">
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
