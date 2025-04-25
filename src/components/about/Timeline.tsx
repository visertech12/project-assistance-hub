
import { Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const milestones = [
  { 
    year: 2020, 
    title: "Platform Launch", 
    description: "Our marketplace opened its doors to the first wave of creators.",
    achievement: "1,000+ Early adopters"
  },
  { 
    year: 2021, 
    title: "1M+ Downloads", 
    description: "Reached our first million downloads milestone.",
    achievement: "20,000+ Active users"
  },
  { 
    year: 2022, 
    title: "Global Expansion", 
    description: "Expanded operations to serve creators worldwide.",
    achievement: "100+ Countries reached"
  },
  { 
    year: 2023, 
    title: "Enterprise Solutions", 
    description: "Launched enterprise-grade solutions and support.",
    achievement: "500+ Enterprise clients"
  },
  { 
    year: 2024, 
    title: "Community Growth", 
    description: "Built a thriving community of creators.",
    achievement: "1M+ Monthly visitors"
  },
];

const Timeline = () => {
  return (
    <section className="py-8 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <Clock className="w-6 h-6 text-marketplace-indigo" />
          <h2 className="text-2xl md:text-3xl font-bold gradient-text">Our Journey</h2>
        </div>

        <div className="space-y-6 md:space-y-8">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className="relative"
            >
              {/* Timeline line - hidden on mobile for better layout */}
              <div className="hidden md:block absolute left-8 top-0 h-full w-0.5 bg-marketplace-indigo/20" />
              
              <Card className="relative md:ml-16 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-start gap-4 md:gap-6">
                    {/* Year badge - Responsive sizing */}
                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-marketplace-indigo/10 flex items-center justify-center">
                      <span className="text-lg md:text-xl font-bold text-marketplace-indigo">
                        {milestone.year}
                      </span>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
                        <div>
                          <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                            {milestone.description}
                          </p>
                        </div>
                        
                        <div className="md:text-right">
                          <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-marketplace-indigo/10 rounded-full">
                            <span className="text-sm md:text-base text-marketplace-indigo font-semibold whitespace-nowrap">
                              {milestone.achievement}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
