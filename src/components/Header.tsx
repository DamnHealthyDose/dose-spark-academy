import { Button } from "@/components/ui/button";
import logoImage from "@/assets/dose-academy-logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <img 
              src={logoImage} 
              alt="DOSE Academy Logo" 
              className="h-12 w-12"
            />
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="/#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="/#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="/pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="/#safety" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Safety
            </a>
          </nav>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="text-foreground">
              Sign In
            </Button>
            <Button className="bg-gradient-hero text-primary-foreground hover:opacity-90">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
