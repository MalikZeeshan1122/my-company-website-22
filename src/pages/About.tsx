import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { MissionVision } from "@/components/about/MissionVision";
import { TeamGrid } from "@/components/about/TeamGrid";
import { AllTestimonials } from "@/components/about/AllTestimonials";
import { FAQ } from "@/components/about/FAQ";
import { FeaturedLogos } from "@/components/about/FeaturedLogos";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AboutHero />
      <MissionVision />
      <TeamGrid />
      <AllTestimonials />
      <FAQ />
      <FeaturedLogos />
      <Footer />
    </div>
  );
};

export default About;
