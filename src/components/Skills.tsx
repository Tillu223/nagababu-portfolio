import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Globe, 
  Wrench, 
  Shield, 
  GitBranch,
  Server,
  Smartphone,
  Brain,
  Award
} from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-blue-500",
      skills: [
        { name: "Java 17", level: 90, icon: "☕" },
        { name: "JavaScript", level: 85, icon: "🟨" },
        { name: "Python", level: 80, icon: "🐍" },
        { name: "C++", level: 75, icon: "⚡" }
      ]
    },
    {
      title: "Frontend Development",
      icon: Globe,
      color: "text-green-500",
      skills: [
        { name: "React.js", level: 88, icon: "⚛️" },
        { name: "Angular", level: 82, icon: "🅰️" },
        { name: "HTML5/CSS3", level: 90, icon: "🎨" },
        { name: "Redux", level: 78, icon: "🔄" }
      ]
    },
    {
      title: "Backend & Databases",
      icon: Database,
      color: "text-purple-500",
      skills: [
        { name: "REST APIs", level: 87, icon: "🔗" },
        { name: "GraphQL", level: 80, icon: "📊" },
        { name: "MySQL", level: 85, icon: "🗄️" },
        { name: "MongoDB", level: 78, icon: "🍃" }
      ]
    },
    {
      title: "ServiceNow Platform",
      icon: Server,
      color: "text-orange-500",
      skills: [
        { name: "ITSM Modules", level: 92, icon: "🎫" },
        { name: "Flow Designer", level: 88, icon: "🌊" },
        { name: "GlideRecord", level: 85, icon: "⚙️" },
        { name: "Business Rules", level: 90, icon: "📋" }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: Wrench,
      color: "text-red-500",
      skills: [
        { name: "Git", level: 85, icon: "🌳" },
        { name: "Jenkins", level: 80, icon: "🔧" },
        { name: "Spring Framework", level: 82, icon: "🌱" },
        { name: "Hibernate", level: 78, icon: "💤" }
      ]
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      color: "text-cyan-500",
      skills: [
        { name: "Secure Coding", level: 88, icon: "🔒" },
        { name: "Risk Mitigation", level: 85, icon: "⚠️" },
        { name: "RBAC", level: 82, icon: "👥" },
        { name: "Compliance Frameworks", level: 80, icon: "📜" }
      ]
    }
  ];

  const certifications = [
    {
      name: "ServiceNow Certified Application Developer (CAD)",
      issuer: "ServiceNow",
      year: "2025",
      badge: "🏆"
    },
    {
      name: "ServiceNow Certified System Administrator (CSA)",
      issuer: "ServiceNow", 
      year: "2025",
      badge: "🎖️"
    },
    {
      name: "Java Full Stack Development",
      issuer: "Wipro TalentNext",
      year: "2024",
      badge: "☕"
    },
    {
      name: "CS50P - Python Programming",
      issuer: "HarvardX",
      year: "2024",
      badge: "🐍"
    }
  ];

  const SkillBar = ({ skill, delay }: { skill: any; delay: number }) => (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground flex items-center gap-2">
          <span>{skill.icon}</span>
          {skill.name}
        </span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-primary rounded-full smooth-transition ${
            isVisible ? 'animate-pulse' : ''
          }`}
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${delay}ms`,
            transitionDuration: '1s'
          }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gradient-to-br from-background via-accent/10 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable, and secure applications
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:medium-shadow smooth-transition card-gradient border-0">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className={`p-2 rounded-lg bg-background/50 ${category.color}`}>
                    <category.icon className="w-5 h-5" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skillIndex} 
                    skill={skill} 
                    delay={index * 100 + skillIndex * 50}
                  />
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
              <Award className="w-8 h-8 text-primary" />
              Certifications
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="group hover:glow-shadow smooth-transition">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{cert.badge}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                      <Badge variant="outline" className="text-xs">
                        {cert.year}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
              <Brain className="w-8 h-8 text-primary" />
              Soft Skills
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Problem Solving", "Team Collaboration", "Adaptability", 
              "Logical Thinking", "Risk Awareness", "Resilience",
              "Leadership", "Communication", "Critical Thinking"
            ].map((skill, index) => (
              <Badge 
                key={index}
                variant="secondary" 
                className="p-3 text-sm hover:bg-primary hover:text-primary-foreground smooth-transition cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;