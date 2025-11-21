import { useState } from "react";
import { GraduationCap, Users, Building2, Network, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const SchoolPricing = () => {
  const [isOpen, setIsOpen] = useState(false);

  const tiers = [
    {
      icon: Users,
      name: "Small District",
      students: "100-500 students",
      price: "$3/student/month",
      color: "text-primary"
    },
    {
      icon: Building2,
      name: "Medium District",
      students: "500-2,000 students",
      price: "$2.50/student/month",
      color: "text-primary"
    },
    {
      icon: GraduationCap,
      name: "Large District",
      students: "2,000+ students",
      price: "$2/student/month",
      color: "text-primary"
    },
    {
      icon: Network,
      name: "Enterprise",
      students: "Multi-district",
      price: "Custom pricing",
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">School District Pricing</h2>
            <p className="text-xl text-muted-foreground mb-6">
              Tiered pricing designed to scale with your district
            </p>
            <CollapsibleTrigger className="text-primary hover:text-primary/80 flex items-center gap-2 mx-auto">
              <span className="font-semibold">View Detailed Breakdown</span>
              <ChevronDown className={cn("h-5 w-5 transition-transform", isOpen && "rotate-180")} />
            </CollapsibleTrigger>
          </div>

          <CollapsibleContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {tiers.map((tier, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-medium transition-shadow">
                  <tier.icon className={cn("h-12 w-12 mx-auto mb-4", tier.color)} />
                  <h3 className="font-bold text-lg mb-2 text-foreground">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{tier.students}</p>
                  <p className="text-2xl font-bold text-primary">{tier.price}</p>
                </Card>
              ))}
            </div>

            <Card className="p-8 bg-accent/30">
              <h3 className="text-2xl font-bold mb-6 text-foreground">What's Included for Schools</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Student Features
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Full access to SPARK Junior tools</li>
                    <li>• Homework management system</li>
                    <li>• Progress tracking dashboard</li>
                    <li>• Crisis resource access</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-foreground flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Administrator Tools
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Counselor oversight dashboard</li>
                    <li>• Aggregate analytics & reporting</li>
                    <li>• Professional development training</li>
                    <li>• Parent communication tools</li>
                  </ul>
                </div>
              </div>
            </Card>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
};

const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

export default SchoolPricing;
