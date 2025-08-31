import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Calendar, MapPin, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Technical Support & Optimization Intern",
      company: "JSL Travels",
      location: "India",
      duration: "Jan 2024 - Mar 2024",
      description: "Led technical optimization initiatives and implemented risk mitigation strategies for customer-facing applications.",
      achievements: [
        "Reduced ticket resolution times by 20% through web-based support solutions",
        "Enhanced data accuracy by 20% through process optimization",
        "Implemented security standards ensuring compliance with industry regulations",
        "Collaborated with cross-functional teams reducing response time by 15%"
      ],
      skills: ["Java", "SQL", "System Optimization", "Risk Management", "Security Compliance"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Information Technology",
      institution: "KKR & KSR Institute of Technology & Sciences",
      location: "India",
      duration: "2021 - 2025",
      cgpa: "7.3/10",
      coursework: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Management Systems",
        "Agile Methodologies",
        "System Design",
        "Computer Networks"
      ]
    },
    {
      degree: "Intermediate (12th Grade)",
      field: "Science",
      institution: "Sri Pratibha Junior College",
      location: "India", 
      duration: "2019 - 2021",
      cgpa: "92.9%",
      coursework: [
        "Mathematics",
        "Physics", 
        "Chemistry",
        "Computer Science"
      ]
    }
  ];

  const TimelineItem = ({ item, index, isEducation = false }: { item: any; index: number; isEducation?: boolean }) => (
    <div className={`relative ${index < (isEducation ? education.length - 1 : experiences.length - 1) ? 'pb-12' : ''}`}>
      {/* Timeline line */}
      {index < (isEducation ? education.length - 1 : experiences.length - 1) && (
        <div className="absolute left-6 top-12 w-0.5 h-full bg-border z-0" />
      )}
      
      {/* Timeline dot */}
      <div className="relative z-10 flex items-start gap-6">
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
          {isEducation ? (
            <GraduationCap className="w-6 h-6 text-white" />
          ) : (
            <Briefcase className="w-6 h-6 text-white" />
          )}
        </div>
        
        <Card className="flex-1 group hover:medium-shadow smooth-transition card-gradient border-0">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <CardTitle className="text-xl text-foreground group-hover:text-primary smooth-transition">
                {isEducation ? item.degree : item.title}
              </CardTitle>
              <Badge variant="outline" className="w-fit">
                {item.duration}
              </Badge>
            </div>
            <div className="space-y-1 text-muted-foreground">
              <p className="font-medium">
                {isEducation ? `${item.field} - ${item.institution}` : item.company}
              </p>
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {item.location}
                </span>
                {isEducation && (
                  <span className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    {item.cgpa}
                  </span>
                )}
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {!isEducation && item.description && (
              <p className="text-muted-foreground">{item.description}</p>
            )}
            
            {!isEducation && item.achievements && (
              <div>
                <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {item.achievements.map((achievement: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {isEducation && item.coursework && (
              <div>
                <h4 className="font-semibold text-foreground mb-3">Relevant Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {item.coursework.map((course: string, idx: number) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            
            {!isEducation && item.skills && (
              <div>
                <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill: string, idx: number) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            My journey through professional experience and academic excellence
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Professional Experience */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-primary" />
                Professional Experience
              </h3>
              <div className="space-y-0">
                {experiences.map((exp, index) => (
                  <TimelineItem key={index} item={exp} index={index} />
                ))}
              </div>
              
              {/* Future Goals */}
              <Card className="mt-8 glass-card border-dashed border-primary/30">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-foreground mb-2">Looking Forward</h4>
                  <p className="text-sm text-muted-foreground">
                    Seeking opportunities in Java Full-Stack Development or ServiceNow implementation 
                    to contribute to innovative projects and drive technological impact.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-primary" />
                Education
              </h3>
              <div className="space-y-0">
                {education.map((edu, index) => (
                  <TimelineItem key={index} item={edu} index={index} isEducation />
                ))}
              </div>

              {/* Academic Highlights */}
              <Card className="mt-8 card-gradient border-0 soft-shadow">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Academic Highlights
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Current CGPA</span>
                      <Badge variant="secondary">7.3/10</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Intermediate Score</span>
                      <Badge variant="secondary">92.9%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Expected Graduation</span>
                      <Badge variant="outline">August 2025</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;