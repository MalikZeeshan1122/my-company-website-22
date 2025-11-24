import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CaseStudiesHero } from "@/components/casestudies/CaseStudiesHero";
import { CaseStudiesGrid } from "@/components/casestudies/CaseStudiesGrid";
import { CaseStudiesStats } from "@/components/casestudies/CaseStudiesStats";
import { CaseStudiesTestimonial } from "@/components/casestudies/CaseStudiesTestimonial";

const CaseStudies = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <CaseStudiesHero />
      <CaseStudiesGrid />
      <CaseStudiesStats />
      <CaseStudiesTestimonial />
      <Footer />
    </div>
  );
};

export default CaseStudies;
