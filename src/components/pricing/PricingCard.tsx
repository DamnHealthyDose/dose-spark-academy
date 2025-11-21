import { Check, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  period: string;
  originalPrice?: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaVariant?: "default" | "outline" | "secondary";
  highlighted?: boolean;
  badge?: string;
}

const PricingCard = ({
  title,
  subtitle,
  price,
  period,
  originalPrice,
  description,
  features,
  ctaText,
  ctaVariant = "default",
  highlighted = false,
  badge,
}: PricingCardProps) => {
  return (
    <Card
      className={cn(
        "relative p-8 transition-all duration-300 hover:shadow-large",
        highlighted && "border-primary border-2 bg-gradient-to-b from-accent/50 to-background"
      )}
    >
      {badge && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-warm text-secondary-foreground">
          <Star className="h-3 w-3 mr-1" />
          {badge}
        </Badge>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
      
      <div className="text-center mb-6">
        <div className="flex items-baseline justify-center gap-2">
          {originalPrice && (
            <span className="text-xl text-muted-foreground line-through">
              ${originalPrice}
            </span>
          )}
          <span className="text-5xl font-bold text-foreground">${price}</span>
          <span className="text-muted-foreground">/{period}</span>
        </div>
      </div>
      
      <p className="text-center text-sm text-muted-foreground mb-6">
        {description}
      </p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
            <span className="text-sm text-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button
        variant={ctaVariant}
        className="w-full"
        size="lg"
      >
        {ctaText}
      </Button>
    </Card>
  );
};

export default PricingCard;
