import { useState } from "react";
import { Check, X, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Card } from "@/components/ui/card";

const PricingComparison = () => {
  const [isOpen, setIsOpen] = useState(false);

  const features = [
    {
      category: "Core Features",
      items: [
        { name: "SPARK Junior CBT Tool", teen: true, family: true, school: true },
        { name: "Homework Chunking System", teen: true, family: true, school: true },
        { name: "Assignment Tracker", teen: true, family: true, school: true },
        { name: "Study Sessions & Focus Tools", teen: true, family: true, school: true },
        { name: "RSD Tracking", teen: true, family: true, school: true },
        { name: "Crisis Resources", teen: true, family: true, school: true },
      ]
    },
    {
      category: "Family & Oversight",
      items: [
        { name: "Parent Dashboard", teen: true, family: true, school: true },
        { name: "Adult DOSE Account", teen: false, family: true, school: false },
        { name: "Up to 3 Teen Accounts", teen: false, family: true, school: false },
        { name: "Family Progress Dashboard", teen: false, family: true, school: false },
        { name: "Coordinated Goal Setting", teen: false, family: true, school: false },
      ]
    },
    {
      category: "Professional Tools",
      items: [
        { name: "Counselor Dashboard", teen: false, family: false, school: true },
        { name: "Aggregate Analytics", teen: false, family: false, school: true },
        { name: "Professional Development", teen: false, family: false, school: true },
        { name: "Parent Engagement Tools", teen: false, family: false, school: true },
        { name: "Crisis Intervention Protocols", teen: false, family: false, school: true },
        { name: "Research Collaboration", teen: false, family: false, school: true },
      ]
    },
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Compare Plans</h2>
            <p className="text-xl text-muted-foreground mb-6">
              See what's included in each plan
            </p>
            <CollapsibleTrigger className="text-primary hover:text-primary/80 flex items-center gap-2 mx-auto">
              <span className="font-semibold">
                {isOpen ? "Hide" : "View"} Feature Comparison
              </span>
              <ChevronDown className={cn("h-5 w-5 transition-transform", isOpen && "rotate-180")} />
            </CollapsibleTrigger>
          </div>

          <CollapsibleContent>
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-accent">
                    <tr>
                      <th className="text-left p-4 font-semibold text-foreground">Features</th>
                      <th className="text-center p-4 font-semibold text-foreground">Teen Only<br /><span className="text-sm font-normal text-muted-foreground">$9.99/mo</span></th>
                      <th className="text-center p-4 font-semibold text-foreground bg-primary/10">Family Plan<br /><span className="text-sm font-normal text-muted-foreground">$14.99/mo</span></th>
                      <th className="text-center p-4 font-semibold text-foreground">School Districts<br /><span className="text-sm font-normal text-muted-foreground">From $2/mo</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((category, catIndex) => (
                      <>
                        <tr key={`cat-${catIndex}`} className="bg-muted/50">
                          <td colSpan={4} className="p-4 font-semibold text-foreground">
                            {category.category}
                          </td>
                        </tr>
                        {category.items.map((item, itemIndex) => (
                          <tr key={`item-${catIndex}-${itemIndex}`} className="border-b border-border hover:bg-accent/20 transition-colors">
                            <td className="p-4 text-sm text-foreground">{item.name}</td>
                            <td className="p-4 text-center">
                              {item.teen ? (
                                <Check className="h-5 w-5 text-success mx-auto" />
                              ) : (
                                <X className="h-5 w-5 text-muted-foreground mx-auto" />
                              )}
                            </td>
                            <td className="p-4 text-center bg-primary/5">
                              {item.family ? (
                                <Check className="h-5 w-5 text-success mx-auto" />
                              ) : (
                                <X className="h-5 w-5 text-muted-foreground mx-auto" />
                              )}
                            </td>
                            <td className="p-4 text-center">
                              {item.school ? (
                                <Check className="h-5 w-5 text-success mx-auto" />
                              ) : (
                                <X className="h-5 w-5 text-muted-foreground mx-auto" />
                              )}
                            </td>
                          </tr>
                        ))}
                      </>
                    ))}
                  </tbody>
                </table>
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

export default PricingComparison;
