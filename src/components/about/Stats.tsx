
import { useState, useEffect } from "react";
import { Users, Download, ShoppingBag } from "lucide-react";

const stats = [
  { icon: Users, label: "Active Users", value: 50000, suffix: "+" },
  { icon: Download, label: "Downloads", value: 1000000, suffix: "+" },
  { icon: ShoppingBag, label: "Verified Sellers", value: 5000, suffix: "+" },
];

const Stats = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) =>
        prev.map((count, i) => {
          const target = stats[i].value;
          const increment = Math.ceil(target / 50);
          return count + increment >= target ? target : count + increment;
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12">
      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div key={stat.label} className="glass-card p-6 text-center">
            <stat.icon className="w-8 h-8 mx-auto mb-4 text-marketplace-indigo" />
            <div className="text-3xl font-bold mb-2 gradient-text">
              {counters[index].toLocaleString()}{stat.suffix}
            </div>
            <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
