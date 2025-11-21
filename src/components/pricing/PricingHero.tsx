import { Shield, Clock, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import logoImage from "@/assets/dose-academy-logo.png";

const PricingHero = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
          <img 
            src={logoImage} 
            alt="DOSE Academy Logo" 
            className="h-20 w-20"
          />
        </div>
        
        <h1 className="text-5xl font-bold mb-6 text-foreground">
          Flexible Pricing for Every Family
        </h1>
        <p className="text-xl text-muted-foreground mb-10">
          Choose the plan that works for your teen's ADHD journey
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <Badge variant="outline" className="px-4 py-2 text-sm flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-success" />
            30-Day Money-Back Guarantee
          </Badge>
          <Badge variant="outline" className="px-4 py-2 text-sm flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            Cancel Anytime
          </Badge>
          <Badge variant="outline" className="px-4 py-2 text-sm flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" />
            COPPA Compliant
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
