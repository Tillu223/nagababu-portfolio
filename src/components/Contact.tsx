import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Download, FileCode, ServerCog, Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-background text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Get In Touch</h2>
        <p className="text-muted-foreground mb-12">
          Feel free to reach out for collaborations, opportunities, or just to connect!
        </p>

        {/* Contact Card */}
        <Card className="card-gradient border-0 soft-shadow">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Interested in my background?
            </h3>
            <p className="text-muted-foreground mb-4">
              Download my resumes or connect with me directly:
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">

              {/* Resume Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="hero" className="group">
                    <Download className="w-4 h-4 group-hover:animate-bounce" />
                    Download Resume
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64">
                  <DropdownMenuItem asChild>
                    <a
                      href="/Nagababu_Nurbasha_Software_Engineer_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <FileCode className="w-4 h-4 text-blue-500" />
                      Java Full Stack Resume
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a
                      href="/Nurbasha-Nagababu-ServiceNow-ITSM-Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ServerCog className="w-4 h-4 text-green-500" />
                      ServiceNow Resume
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* GitHub Button */}
              <a
                href="https://github.com/YOUR_GITHUB_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  GitHub
                </Button>
              </a>

              {/* LinkedIn Button */}
              <a
                href="https://www.linkedin.com/in/YOUR_LINKEDIN_ID/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5 text-blue-600" />
                  LinkedIn
                </Button>
              </a>

              {/* Email Button */}
              <a href="mailto:YOUR_EMAIL@example.com">
                <Button variant="outline" className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-red-500" />
                  Email Me
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
