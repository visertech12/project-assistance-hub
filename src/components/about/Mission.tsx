
import { Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Mission = () => {
  return (
    <section className="py-12">
      <div className="flex items-center gap-2 mb-8">
        <Info className="w-6 h-6 text-marketplace-indigo" />
        <h2 className="text-3xl font-bold gradient-text">Our Mission & Vision</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="neo-card">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-xl font-semibold text-marketplace-indigo">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To empower developers and creators by providing a trusted marketplace for high-quality digital assets, fostering innovation and growth in the digital ecosystem.
            </p>
          </CardContent>
        </Card>

        <Card className="neo-card">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-xl font-semibold text-marketplace-emerald">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To become the world's leading digital marketplace, connecting talented creators with businesses and individuals seeking exceptional digital solutions.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Mission;
