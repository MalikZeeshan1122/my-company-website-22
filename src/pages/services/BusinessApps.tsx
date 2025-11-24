import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, CheckCircle } from "lucide-react";
import { ServiceTestimonial } from "@/components/ServiceTestimonial";
import { ServiceFAQ } from "@/components/ServiceFAQ";

const BusinessApps = () => {
  const faqs = [
    {
      question: "How much does a custom business app cost?",
      answer: "Business apps typically range from $15,000 to $75,000+ depending on complexity. Factors include number of user roles, integrations with existing systems, custom workflows, and data migration needs. We provide detailed quotes after understanding your specific requirements."
    },
    {
      question: "How long does it take to build a business app?",
      answer: "Most business apps take 8-16 weeks from kickoff to launch. Simple internal tools can be ready in 6-8 weeks, while complex CRMs with multiple integrations may take 12-16 weeks. We use agile development with weekly demos so you see progress continuously."
    },
    {
      question: "Can you integrate with our existing tools (Salesforce, QuickBooks, etc.)?",
      answer: "Yes! We specialize in integrating with popular business tools including Salesforce, QuickBooks, Stripe, Zapier, Google Workspace, Microsoft 365, and hundreds of other platforms. We can also build custom integrations for proprietary systems."
    },
    {
      question: "What if our needs change after launch?",
      answer: "We build apps to be flexible and scalable. All our projects include training and documentation. We offer ongoing support packages starting at $1,500/month that include updates, new features, and priority support as your business evolves."
    },
    {
      question: "Do you handle data migration from our spreadsheets?",
      answer: "Absolutely! Data migration is included in all business app projects. We'll extract, clean, and migrate your data from spreadsheets, legacy systems, or other databases. We also run parallel testing to ensure accuracy before going live."
    },
    {
      question: "Will our team need technical training?",
      answer: "We design apps to be intuitive, but we also provide comprehensive training. This includes video tutorials, written documentation, and live training sessions for your team. Most users are productive within 1-2 hours of training."
    }
  ];

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

      <ServiceTestimonial
        quote="From multiple spreadsheets to a dynamic, custom solution, with a unique drag and drop interface, saving 20 hours/week."
        author="GL Hunt"
        role="Operations Manager"
        company="GL Hunt"
        metric={{
          value: "20hrs",
          label: "saved per week"
        }}
        secondMetric={{
          value: "100%",
          label: "data accuracy"
        }}
      />

      <ServiceFAQ faqs={faqs} />

      <CTA />
      <Footer />
    </div>
  );
};

export default BusinessApps;
