import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Star, Award, Users, Code2, Trophy } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Technical Lead",
      role: "JSL Travels",
      company: "Travel Technology Division",
      content: "Nagababu's approach to problem-solving and his attention to security compliance made him an invaluable team member. His optimization work reduced our ticket resolution time significantly.",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "Project Manager",
      role: "Academic Supervisor",
      company: "KKR & KSR Institute",
      content: "Outstanding technical skills combined with excellent teamwork. His projects consistently demonstrate innovation and practical problem-solving abilities.",
      rating: 5,
      avatar: "👩‍🏫"
    },
    {
      name: "Development Team",
      role: "Peer Review",
      company: "Academic Projects",
      content: "Great collaborator who brings fresh perspectives to complex challenges. His code quality and documentation standards are exemplary.",
      rating: 5,
      avatar: "👥"
    }
  ];

  const achievements = [
    {
      title: "ServiceNow CAD Certification",
      description: "Certified Application Developer demonstrating expertise in ServiceNow platform development",
      icon: Award,
      color: "text-blue-500",
      badge: "2025"
    },
    {
      title: "ServiceNow CSA Certification", 
      description: "Certified System Administrator showcasing ITSM implementation skills",
      icon: Trophy,
      color: "text-green-500",
      badge: "2025"
    },
    {
      title: "Java Full-Stack Certification",
      description: "Wipro TalentNext program completion with hands-on project experience",
      icon: Code2,
      color: "text-orange-500",
      badge: "2024"
    },
    {
      title: "Harvard CS50P Completion",
      description: "Python programming fundamentals from Harvard University",
      icon: Star,
      color: "text-purple-500", 
      badge: "2024"
    },
    {
      title: "Performance Optimization",
      description: "Achieved 15% improvement in database performance across multiple projects",
      icon: Users,
      color: "text-cyan-500",
      badge: "Impact"
    },
    {
      title: "Academic Excellence",
      description: "Maintaining 7.3 CGPA while pursuing B.Tech in Information Technology",
      icon: Award,
      color: "text-pink-500",
      badge: "Current"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-background via-accent/10 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Testimonials & Achievements
          </h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Recognition from peers, mentors, and industry certifications
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Testimonials */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
              <Quote className="w-6 h-6 text-primary" />
              What People Say
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="group hover:medium-shadow smooth-transition card-gradient border-0">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{testimonial.avatar}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Quote className="w-6 h-6 text-primary/30 mb-2" />
                    <p className="text-muted-foreground italic leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements Grid */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
              <Trophy className="w-6 h-6 text-primary" />
              Achievements & Certifications
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="group hover:glow-shadow smooth-transition overflow-hidden border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-background/50 ${achievement.color} group-hover:scale-110 smooth-transition`}>
                        <achievement.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h4 className="font-semibold text-foreground group-hover:text-primary smooth-transition">
                            {achievement.title}
                          </h4>
                          <Badge variant="outline" className="text-xs shrink-0">
                            {achievement.badge}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Key Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "25%", label: "Faster Resolution", icon: "⚡" },
              { number: "15%", label: "Performance Boost", icon: "🚀" },
              { number: "4", label: "Certifications", icon: "🏆" },
              { number: "7.3", label: "CGPA", icon: "📚" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary mb-1 group-hover:scale-110 smooth-transition">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;