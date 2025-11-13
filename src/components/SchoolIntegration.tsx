import { Card } from "@/components/ui/card";
import { BookOpen, Calendar, MessageSquare, Award } from "lucide-react";

const integrationFeatures = [
  {
    icon: BookOpen,
    title: "Homework Helper",
    description: "Automatically break assignments into manageable chunks",
  },
  {
    icon: Calendar,
    title: "Assignment Tracker",
    description: "Visual deadlines with ADHD-friendly time management",
  },
  {
    icon: MessageSquare,
    title: "Teacher Communication",
    description: "Professional email templates for extensions and support",
  },
  {
    icon: Award,
    title: "IEP/504 Tracking",
    description: "Monitor your accommodations and advocate for yourself",
  },
];

const SchoolIntegration = () => {
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Built for School Success
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Sync with Google Classroom and Canvas. Get real help with assignments, 
                deadlines, and staying organized—not just another to-do list.
              </p>
              
              <div className="space-y-4">
                {integrationFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex gap-4 items-start animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="p-8 shadow-large bg-card border-border">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <span className="text-sm font-medium text-muted-foreground">Due Tomorrow</span>
                  <span className="text-xs bg-destructive/10 text-destructive px-2 py-1 rounded-full">High Priority</span>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">History Essay - World War II</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-success"></div>
                      <span className="text-muted-foreground line-through">Research 3 sources</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-success"></div>
                      <span className="text-muted-foreground line-through">Create outline</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span className="text-foreground font-medium">Write introduction (20 mins)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-border"></div>
                      <span className="text-muted-foreground">Write body paragraphs</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-primary font-medium">40%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-hero h-2 rounded-full" style={{ width: "40%" }}></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolIntegration;
