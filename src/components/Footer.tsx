import { Github, Linkedin, Mail, Heart, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Tillu223",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/nagababu-nurbasha18",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:nurbashanagababu4@gmail.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-primary/5 via-background to-accent/5 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Nagababu Nurbasha
              </span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Java Full-Stack Developer & ServiceNow Expert passionate about building 
              scalable, secure solutions that make a difference. Currently pursuing 
              B.Tech in Information Technology.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-background/50 text-muted-foreground hover:text-primary hover:bg-primary/10 smooth-transition group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 smooth-transition" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-sm text-muted-foreground hover:text-primary smooth-transition"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📧 nurbashanagababu4@gmail.com</p>
              <p>📱 +91 9346534500</p>
              <p>📍 Guntur, India</p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-muted-foreground">Available for opportunities</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Nagababu Nurbasha. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>and lots of coffee ☕</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <a 
                href="#" 
                className="hover:text-primary smooth-transition flex items-center gap-1"
              >
                Privacy Policy
                <ExternalLink className="w-3 h-3" />
              </a>
              <span>•</span>
              <a 
                href="#" 
                className="hover:text-primary smooth-transition flex items-center gap-1"
              >
                Terms of Service
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;