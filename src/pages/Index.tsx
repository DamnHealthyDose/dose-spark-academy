import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SchoolIntegration from "@/components/SchoolIntegration";
import SafetyTrust from "@/components/SafetyTrust";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <SchoolIntegration />
        <SafetyTrust />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
