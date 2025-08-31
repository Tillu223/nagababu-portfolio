import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profileImage from "/lovable-uploads/b990ff3a-ff2f-45fa-b472-2f488e1016d2.png";

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const highlights = [
    "ServiceNow Certified Application Developer (CAD)",
    "Java Full-Stack Development Expert", 
    "Risk & Compliance Focused",
    "Agile Team Collaboration"
  ];

  const funFacts = [
    "🚀 Reduced ticket resolution time by 25% through automation",
    "⚡ Optimized database performance by 15%",
    "🔄 Enhanced data accuracy by 20%",
    "🎯 Built solutions serving 50+ users efficiently"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background via-accent/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Profile Image */}
          <div className="relative group animate-fadeInUp">
            <div className="relative w-80 h-80 mx-auto lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl rotate-6 group-hover:rotate-12 smooth-transition opacity-20" />
              <div className="relative bg-card rounded-3xl overflow-hidden soft-shadow group-hover:medium-shadow smooth-transition">
                {!imageLoaded && (
                  <div className="w-full h-full bg-muted animate-pulse flex items-center justify-center">
                    <div className="text-muted-foreground">Loading...</div>
                  </div>
                )}
                <img
                  src={profileImage}
                  alt="Nagababu Nurbasha"
                  className={`w-full h-full object-cover smooth-transition ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => {
                    // Fallback for image loading issues
                    const fallbackDiv = document.createElement('div');
                    fallbackDiv.className = 'w-full h-full bg-gradient-primary flex items-center justify-center text-white text-6xl font-bold';
                    fallbackDiv.textContent = 'N';
                    setImageLoaded(true);
                  }}
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-slideInRight">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Building Digital Solutions with Purpose
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a passionate Java Full-Stack Developer and ServiceNow expert with a strong foundation in 
                building scalable, secure, and efficient software solutions. Currently pursuing my B.Tech in 
                Information Technology with a <strong>7.3 CGPA</strong>, I combine academic excellence with 
                hands-on industry experience.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans across Java 17, React, Angular, and ServiceNow platform development, 
                with a special focus on risk mitigation and compliance frameworks. I believe in writing 
                code that not only works but also creates meaningful impact for users and businesses.
              </p>
            </div>

            {/* Key Highlights */}
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-4">Key Highlights</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((highlight, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="p-3 text-sm hover:bg-primary hover:text-primary-foreground smooth-transition cursor-default"
                  >
                    {highlight}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Fun Facts */}
            <Card className="p-6 card-gradient border-0 soft-shadow">
              <h4 className="text-xl font-semibold text-foreground mb-4">Impact & Achievements</h4>
              <div className="space-y-3">
                {funFacts.map((fact, index) => (
                  <p key={index} className="text-muted-foreground flex items-center gap-2">
                    <span className="text-lg">{fact.split(' ')[0]}</span>
                    <span>{fact.split(' ').slice(1).join(' ')}</span>
                  </p>
                ))}
              </div>
            </Card>

            {/* Beyond Code */}
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Beyond Code</h4>
              <p className="text-muted-foreground">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or diving deep into system optimization challenges. I'm passionate about creating 
                solutions that bridge the gap between complex technical requirements and user-friendly experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;