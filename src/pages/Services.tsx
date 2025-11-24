import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { CTA } from "@/components/CTA";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ServicesHero />
      <ServicesGrid />
      <CTA />
      <Footer />
    </div>
  );
};

export default Services;
