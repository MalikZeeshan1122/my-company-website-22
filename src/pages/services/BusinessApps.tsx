import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, CheckCircle } from "lucide-react";

const BusinessApps = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6">
            <Briefcase className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Business Apps
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Custom CRMs, portals, and internal tools tailored to your operations. Streamline workflows and boost productivity with software built specifically for your business needs.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">What We Build</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Custom CRM Systems",
              "Client Portals",
              "Internal Dashboards",
              "Project Management Tools",
              "Inventory Management",
              "Team Collaboration Platforms"
            ].map((feature, index) => (
              <Card key={index} className="p-6">
                <CheckCircle className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-semibold text-lg">{feature}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Benefits</h2>
          <div className="space-y-6">
            {[
              { title: "Centralized Operations", desc: "All your business data and processes in one unified platform" },
              { title: "Increased Productivity", desc: "Boost team efficiency by up to 60% with streamlined workflows" },
              { title: "Real-Time Access", desc: "Access critical business information from anywhere, anytime" },
              { title: "Scalable Solutions", desc: "Grow from 20 to 20,000 users without rebuilding" }
            ].map((benefit, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-bold text-xl mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Perfect For</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Growing SMBs", desc: "Replace spreadsheets with professional-grade systems" },
              { title: "Service Businesses", desc: "Manage clients, projects, and billing in one place" },
              { title: "Field Operations", desc: "Coordinate mobile teams with real-time updates" }
            ].map((useCase, index) => (
              <Card key={index} className="p-8 text-center">
                <h3 className="font-bold text-xl mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default BusinessApps;
