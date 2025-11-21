import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import logoImage from "@/assets/dose-academy-logo.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-soft py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center animate-fade-in">
            <img 
              src={logoImage} 
              alt="DOSE Academy Logo" 
              className="h-24 w-24"
            />
          </div>
          
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground shadow-soft animate-fade-in">
            <Sparkles className="h-4 w-4" />
            <span>Designed for teens ages 10-17</span>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl animate-fade-in">
            Master Your ADHD,
            <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Own Your Success
            </span>
          </h1>
          
          <p className="mb-10 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto animate-fade-in">
            The first ADHD management platform built specifically for teens. 
            Get homework help, emotional tools, and peer support—all in one place.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button size="lg" className="bg-gradient-hero hover:opacity-90 text-primary-foreground shadow-medium group">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-accent">
              See How It Works
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground animate-fade-in">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-success"></div>
              <span>Safe & Supervised</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-success"></div>
              <span>Parent Dashboard</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-success"></div>
              <span>School Integration</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
    </section>
  );
};

export default Hero;
