import { GraduationCap, TrendingUp, Award, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const TransitionPricing = () => {
  const benefits = [
    {
      icon: GraduationCap,
      title: "Age 18 Graduation Discount",
      description: "Get 6 months at 50% off when transitioning to adult platform",
      price: "$7.50/month"
    },
    {
      icon: TrendingUp,
      title: "College Student Pricing",
      description: "Special pricing for full-time students with valid ID",
      price: "$6.99/month"
    },
    {
      icon: Award,
      title: "Young Adult (18-25)",
      description: "Reduced pricing for young adults establishing independence",
      price: "$7.99/month"
    },
    {
      icon: Users,
      title: "Loyalty Rewards",
      description: "Years in Academy = months of discount on adult platform",
      price: "Varies"
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <GraduationCap className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Transition Pricing for Graduating Students
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We support your journey from teen to young adult with special pricing and seamless data migration
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 hover:shadow-medium transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent rounded-lg shrink-0">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2 text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{benefit.description}</p>
                  <p className="text-xl font-bold text-primary">{benefit.price}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-to-br from-accent/30 to-background">
          <h3 className="text-2xl font-bold mb-6 text-foreground">What's Included in Your Transition</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-foreground">📊 Data Migration</h4>
              <p className="text-sm text-muted-foreground">
                All your progress, goals, and achievements transfer seamlessly to the adult platform
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-foreground">🎯 Mentor Opportunities</h4>
              <p className="text-sm text-muted-foreground">
                Option to mentor current teens and give back to the community
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-foreground">🤝 Alumni Network</h4>
              <p className="text-sm text-muted-foreground">
                Connect with other DOSE Academy graduates navigating adulthood
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TransitionPricing;
