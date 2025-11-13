import { Shield, Eye, Lock, Heart } from "lucide-react";

const safetyFeatures = [
  {
    icon: Shield,
    title: "Supervised Interactions",
    description: "All peer connections are moderated and parent-approved",
  },
  {
    icon: Eye,
    title: "Parent Dashboard",
    description: "Track progress without invading privacy",
  },
  {
    icon: Lock,
    title: "COPPA Compliant",
    description: "Highest standards for student data protection",
  },
  {
    icon: Heart,
    title: "Crisis Support",
    description: "24/7 monitoring with professional escalation protocols",
  },
];

const SafetyTrust = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Safe, Secure, and Parent-Approved
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built with teen safety and parent peace of mind as top priorities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {safetyFeatures.map((feature, index) => (
            <div 
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetyTrust;
