import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  Github, 
  Linkedin, 
  Download,
  MessageCircle,
  ExternalLink
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nurbashanagababu4@gmail.com",
      href: "mailto:nurbashanagababu4@gmail.com",
      color: "text-blue-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9346534500",
      href: "tel:+919346534500",
      color: "text-green-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Guntur, India",
      href: "#",
      color: "text-red-500"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Tillu223",
      color: "hover:text-gray-900",
      description: "View my code repositories"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/nagababu-nurbasha18",
      color: "hover:text-blue-600",
      description: "Connect professionally"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:nurbashanagababu4@gmail.com",
      color: "hover:text-red-500",
      description: "Send me an email"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss how we can work together to build something amazing.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-gradient border-0 soft-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="smooth-transition focus:glow-shadow"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="smooth-transition focus:glow-shadow"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="smooth-transition focus:glow-shadow"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or idea..."
                      rows={6}
                      required
                      className="smooth-transition focus:glow-shadow resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 group-hover:translate-x-1 smooth-transition" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="card-gradient border-0 soft-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-background/50 smooth-transition group"
                    >
                      <div className={`p-3 rounded-lg bg-background/50 ${info.color} group-hover:scale-110 smooth-transition`}>
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{info.label}</p>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="card-gradient border-0 soft-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Connect with Me</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-background/50 smooth-transition group"
                    >
                      <div className={`p-3 rounded-lg bg-background/50 text-muted-foreground group-hover:scale-110 smooth-transition ${social.color}`}>
                        <social.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground group-hover:text-primary smooth-transition">
                          {social.label}
                        </p>
                        <p className="text-sm text-muted-foreground">{social.description}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary smooth-transition" />
                    </a>
                  ))}
                </CardContent>
              </Card>

              {/* Resume Download */}
              <Card className="card-gradient border-0 soft-shadow">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Interested in my background?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Download my resume for detailed information about my experience and skills.
                  </p>
                  <Button variant="hero" className="group">
                    <Download className="w-4 h-4 group-hover:animate-bounce" />
                    Download Resume
                  </Button>
                </CardContent>
              </Card>

              {/* Availability Status */}
              <Card className="glass-card border-dashed border-primary/30">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-semibold text-foreground">Available for Opportunities</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Currently seeking full-time positions in Java Full-Stack Development 
                    or ServiceNow implementation roles.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;