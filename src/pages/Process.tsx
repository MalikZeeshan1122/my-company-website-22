import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProcessHero } from "@/components/process/ProcessHero";
import { ProcessSteps } from "@/components/process/ProcessSteps";
import { TechStack } from "@/components/process/TechStack";
import { ProcessTestimonial } from "@/components/process/ProcessTestimonial";
import { CTA } from "@/components/CTA";

const Process = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProcessHero />
      <ProcessSteps />
      <TechStack />
      <ProcessTestimonial />
      <CTA />
      <Footer />
    </div>
  );
};

export default Process;
