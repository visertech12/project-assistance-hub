
import React from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  Award, 
  Users, 
  Calendar 
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jobOpenings = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "We're looking for an experienced frontend developer to join our team...",
  },
  {
    id: 2,
    title: "Product Designer",
    department: "Design",
    location: "New York",
    type: "Full-time",
    description: "Join our design team to create beautiful, intuitive experiences...",
  },
  // Add more job openings as needed
];

const benefits = [
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Flexible Hours",
    description: "Work when you're most productive",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Remote First",
    description: "Work from anywhere in the world",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Growth",
    description: "Professional development budget",
  },
  // Add more benefits as needed
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
              Join Our Mission
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Help us build the future of digital commerce. We're looking for passionate people to join our team.
            </p>
            <a href="#openings" className="btn-primary">
              View Open Positions
            </a>
          </motion.div>
        </section>

        {/* Open Positions */}
        <section id="openings" className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
            <div className="grid gap-6 max-w-4xl mx-auto">
              {jobOpenings.map((job) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{job.department} · {job.location} · {job.type}</p>
                    </div>
                    <button className="btn-primary text-sm">
                      Apply Now
                    </button>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{job.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Join Us?</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
