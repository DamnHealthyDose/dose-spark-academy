import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";
import doseTeam from "@/assets/dose-team.png";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Contact DOSE Academy</h1>
            <p className="text-lg text-muted-foreground">
              Connect with our team about cognitive tools and personalized support options.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center space-y-8 mb-10">
            <div>
              <h2 className="text-xl font-semibold text-primary mb-4">Get in Touch</h2>
              <a 
                href="mailto:info@getdose.app"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-foreground hover:bg-accent transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@getdose.app
              </a>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary mb-4">Investor Resources</h2>
              <a 
                href="https://www.getdose.app/investors"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-foreground hover:bg-accent transition-colors"
              >
                View Investor One-Pager
              </a>
            </div>

            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Whether you're interested in ADHD coaching, have questions about DOSE Academy, or want to discuss partnership opportunities, we'd love to hear from you.
            </p>
            <p className="text-muted-foreground text-sm font-medium">
              We typically respond within 24–48 hours.
            </p>
          </div>
          </div>

          <div className="mb-8 rounded-2xl overflow-hidden">
            <img 
              src={doseTeam} 
              alt="The DOSE Team - Building the future of ADHD crisis intervention" 
              className="w-full h-auto"
            />
          </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
