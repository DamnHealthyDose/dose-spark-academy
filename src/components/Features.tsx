import { Brain, Zap, Heart, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "SPARK Junior",
    description: "3-step emotional regulation tool for handling friend drama, test anxiety, and social stress.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Zap,
    title: "WAVE Junior",
    description: "Break homework into ADHD-friendly chunks with Pomodoro timers and distraction management.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Heart,
    title: "RSD Junior",
    description: "Navigate rejection sensitivity with friendship tools, confidence building, and social skills practice.",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
  {
    icon: Users,
    title: "Squad Support",
    description: "Connect with study buddies, join accountability groups, and celebrate wins with peers (supervised).",
    color: "text-success",
    bgColor: "bg-success/10",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Thrive
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four powerful tools designed specifically for teens with ADHD
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-medium transition-shadow duration-300 border-border bg-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${feature.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
