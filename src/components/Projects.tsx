import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

// Example projects data
const projects = [
  {
    title: "Travel Booking System",
    description:
      "A comprehensive travel booking platform with end-to-end integration, featuring secure transactions and optimized database performance.",
    problem:
      "Manual booking processes were time-consuming and error-prone, leading to customer dissatisfaction and operational inefficiencies.",
    solution:
      "Built a dynamic platform with real-time availability checking, secure payment processing, and automated booking confirmations.",
    impact: [
      "15% faster database queries",
      "20% reduction in booking errors",
      "Improved user experience",
    ],
    tech: ["Java", "MySQL", "HTML", "CSS", "JavaScript", "REST APIs"],
    demo: "https://your-demo-link.com", // 🔗 Replace with actual demo URL
    github: "https://github.com/Tillu223/Travel-with-jdbc", // 🔗 Replace with repo
  },
  {
    title: "ServiceNow ITSM Suite",
    description:
      "Comprehensive IT Service Management implementation with automated workflows, incident management, and change control processes.",
    problem:
      "Manual IT processes led to delayed resolutions and poor service quality tracking across the organization.",
    solution:
      "Implemented automated ITSM workflows with role-based access, SLA management, and comprehensive reporting dashboards.",
    impact: [
      "25% faster ticket resolution",
      "30% efficiency improvement",
      "Enhanced compliance tracking",
    ],
    tech: [
      "ServiceNow",
      "Flow Designer",
      "GlideRecord",
      "REST APIs",
      "Business Rules",
    ],
    demo: "https://your-demo-link.com", // 🔗 Replace with actual demo URL
    github: "https://github.com/Tillu223/ServiceNow-ITSM", // 🔗 Replace with repo
  },
  {
    title: "Advanced E-Commerce Platform",
    description:
      "Modern e-commerce solution with ML-based recommendations, automated payments, and real-time analytics dashboard.",
    problem:
      "Traditional e-commerce platforms lacked personalization and had slow load times affecting conversion rates.",
    solution:
      "Developed a React-based platform with MongoDB backend, featuring ML recommendations and optimized performance.",
    impact: [
      "25% faster load times",
      "Improved conversion rates",
      "Personalized user experience",
    ],
    tech: [
      "React",
      "NodeJS",
      "MongoDB",
      "Redux",
      "Machine Learning",
      "Payment APIs",
    ],
    demo: "https://your-demo-link.com", // 🔗 Replace with actual demo URL
    github: "https://github.com/Tillu223/Frontend--Ecomerce-website", // 🔗 Replace with repo
  },
];

const Projects: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-4">Featured Projects</h2>
      <p className="text-center text-gray-400 mb-12">
        Showcasing solutions that solve real problems and create meaningful
        impact
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-gradient-to-b from-gray-900 to-black border-gray-800 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
          >
            <CardContent className="p-6 flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-2 text-purple-400">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="mb-4">
                <p className="text-red-400 font-medium">Problem</p>
                <p className="text-gray-400">{project.problem}</p>
              </div>

              <div className="mb-4">
                <p className="text-green-400 font-medium">Solution</p>
                <p className="text-gray-400">{project.solution}</p>
              </div>

              <div className="mb-4">
                <p className="text-purple-400 font-medium">Impact</p>
                <ul className="list-disc list-inside text-gray-400">
                  {project.impact.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <p className="text-blue-400 font-medium">Tech Stack</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 mt-auto">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="default" size="sm" className="w-full group/btn">
                    <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 smooth-transition" />
                    Live Demo
                  </Button>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="outline" size="sm" className="w-full group/btn">
                    <Github className="w-4 h-4 group-hover/btn:scale-110 smooth-transition" />
                    Code
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* View All Projects on GitHub */}
      <div className="text-center mt-12">
        <a
          href="https://github.com/Tillu223" // 🔗 your GitHub profile
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" size="lg" className="group">
            <Github className="w-5 h-5 group-hover:scale-110 smooth-transition" />
            View All Projects on GitHub
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Projects;
