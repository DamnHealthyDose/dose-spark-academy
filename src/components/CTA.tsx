import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your ADHD Journey?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Join thousands of teens building confidence, crushing assignments, 
            and owning their success with DOSE Academy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-background text-primary hover:bg-background/90 shadow-large group"
            >
              Start Free Today
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              Talk to Our Team
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-primary-foreground/80">
            Family plans starting at $14.99/month • School partnerships available
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CTA;
