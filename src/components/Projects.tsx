import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Zap, Users, TrendingUp } from "lucide-react";
import projectTravel from "@/assets/project-travel-hd.jpg";
import projectServiceNow from "@/assets/project-servicenow-hd.jpg";
import projectEcommerce from "@/assets/project-ecommerce-hd.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Travel Booking System",
      description: "A comprehensive travel booking platform with end-to-end integration, featuring secure transactions and optimized database performance.",
      image: projectTravel,
      problem: "Manual booking processes were time-consuming and error-prone, leading to customer dissatisfaction and operational inefficiencies.",
      solution: "Built a dynamic platform with real-time availability checking, secure payment processing, and automated booking confirmations.",
      tools: ["Java", "MySQL", "HTML", "CSS", "JavaScript", "REST APIs"],
      impact: [
        { icon: TrendingUp, text: "15% faster database queries" },
        { icon: Zap, text: "20% reduction in booking errors" },
        { icon: Users, text: "Improved user experience" }
      ],
      github: "https://github.com/Tillu223",
      demo: "#",
      featured: true
    },
    {
      title: "ServiceNow ITSM Suite",
      description: "Comprehensive IT Service Management implementation with automated workflows, incident management, and change control processes.",
      image: projectServiceNow,
      problem: "Manual IT processes led to delayed resolutions and poor service quality tracking across the organization.",
      solution: "Implemented automated ITSM workflows with role-based access, SLA management, and comprehensive reporting dashboards.",
      tools: ["ServiceNow", "Flow Designer", "GlideRecord", "REST APIs", "Business Rules"],
      impact: [
        { icon: Zap, text: "25% faster ticket resolution" },
        { icon: TrendingUp, text: "30% efficiency improvement" },
        { icon: Users, text: "Enhanced compliance tracking" }
      ],
      github: "https://github.com/Tillu223",
      demo: "#",
      featured: true
    },
    {
      title: "Advanced E-Commerce Platform",
      description: "Modern e-commerce solution with ML-based recommendations, automated payments, and real-time analytics dashboard.",
      image: projectEcommerce,
      problem: "Traditional e-commerce platforms lacked personalization and had slow load times affecting conversion rates.",
      solution: "Developed a React-based platform with MongoDB backend, featuring ML recommendations and optimized performance.",
      tools: ["React", "Node.js", "MongoDB", "Redux", "Machine Learning", "Payment APIs"],
      impact: [
        { icon: TrendingUp, text: "25% faster load times" },
        { icon: Zap, text: "Improved conversion rates" },
        { icon: Users, text: "Personalized user experience" }
      ],
      github: "https://github.com/Tillu223",
      demo: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Showcasing solutions that solve real problems and create meaningful impact
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`group hover:medium-shadow smooth-transition cursor-pointer overflow-hidden border-0 ${
                project.featured ? 'lg:col-span-2 xl:col-span-1' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 smooth-transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 smooth-transition" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 smooth-transition">
                  <Badge variant="secondary" className="bg-background/90">
                    {project.featured ? "Featured" : "Project"}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary smooth-transition">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Problem & Solution */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-destructive rounded-full"></span>
                      Problem
                    </h4>
                    <p className="text-sm text-muted-foreground">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-success rounded-full"></span>
                      Solution
                    </h4>
                    <p className="text-sm text-muted-foreground">{project.solution}</p>
                  </div>
                </div>

                {/* Impact */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Impact</h4>
                  <div className="space-y-2">
                    {project.impact.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm">
                        <item.icon className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button variant="default" size="sm" className="flex-1 group/btn">
                    <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 smooth-transition" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 group/btn">
                    <Github className="w-4 h-4 group-hover/btn:scale-110 smooth-transition" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            <Github className="w-5 h-5 group-hover:scale-110 smooth-transition" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;