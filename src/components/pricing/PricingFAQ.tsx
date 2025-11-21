import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const PricingFAQ = () => {
  const faqs = [
    {
      question: "Can I switch plans later?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, changes take effect at the start of your next billing cycle, and you'll retain access to premium features until then."
    },
    {
      question: "What happens when my teen turns 18?",
      answer: "We offer seamless transition pricing! Your teen gets 6 months at 50% off on the adult DOSE platform, with all their data automatically migrated. They can also continue at young adult pricing ($7.99/month) or college student rates ($6.99/month with valid ID)."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes! We offer a 30-day money-back guarantee on all plans. If you're not satisfied within the first 30 days, contact our support team for a full refund. After 30 days, we don't offer refunds but you can cancel anytime to stop future billing."
    },
    {
      question: "How does the sliding scale pricing work?",
      answer: "Our income-based pricing ensures accessibility for all families. Simply apply through our secure form with proof of income (tax returns or pay stubs). Approval is usually within 48 hours. All information is confidential and we never share financial details. Families under $30k qualify for free access with basic features."
    },
    {
      question: "Can schools try before buying?",
      answer: "Absolutely! We offer free 60-day trials for schools and districts with up to 50 student accounts. This includes full access to counselor dashboards, analytics, and professional development resources. Contact our education team to set up a trial."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and ACH bank transfers. School districts can also pay via purchase order or invoice. We offer quarterly and annual payment options for additional savings."
    },
    {
      question: "Is there a family member limit?",
      answer: "The Family Plan includes 1 adult account and up to 3 teen accounts. Additional teen accounts can be added for $4.99/month each. There's no limit to how many teens you can add, making it perfect for larger families."
    },
    {
      question: "What's included in the free trial?",
      answer: "All plans include a 30-day free trial with full access to every feature. No credit card required to start. You can explore SPARK Junior, homework chunking, assignment tracking, and all other tools risk-free. Cancel anytime during the trial at no charge."
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about pricing
          </p>
        </div>

        <Card className="p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  );
};

export default PricingFAQ;
