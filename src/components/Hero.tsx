import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const fullText = "I build code that solves problems—and sometimes even creates new ones worth solving.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setCurrentText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 hero-gradient opacity-90" />
      <div className="absolute inset-0 bg-background/10" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-white/20 rounded-full floating`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 animate-fadeInUp">
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-medium text-white/80 tracking-wide">
              Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              Nagababu
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent block">
                Nurbasha
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/90 tracking-wide">
              Java Full-Stack Developer & ServiceNow Expert
            </p>
          </div>

          <div className="h-16 flex items-center justify-center">
            <p className="text-lg md:text-xl text-white/80 font-light max-w-3xl leading-relaxed">
              {currentText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Button variant="hero" size="lg" className="group">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button variant="glass" size="lg" className="group">
              <Mail className="w-5 h-5 group-hover:scale-110 smooth-transition" />
              Let's Connect
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-4">
            <a 
              href="https://github.com/Tillu223" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white smooth-transition hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/nagababu-nurbasha18" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white smooth-transition hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:nurbashanagababu4@gmail.com"
              className="text-white/60 hover:text-white smooth-transition hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;