import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Card } from "@/components/ui/card";
import { Zap, CheckCircle } from "lucide-react";
import { ServiceTestimonial } from "@/components/ServiceTestimonial";
import { ServiceFAQ } from "@/components/ServiceFAQ";

const BusinessAutomation = () => {
  const faqs = [
    {
      question: "How much does business automation cost?",
      answer: "Automation projects typically range from $5,000 to $40,000. Simple email automations start around $5K, while complex multi-system workflows with custom logic can reach $30-40K. Most projects ROI within 3-6 months through time savings."
    },
    {
      question: "How long does it take to implement automation?",
      answer: "Most automation projects launch in 2-6 weeks. Simple workflows can be live in 1-2 weeks, while complex integrations across multiple systems take 4-6 weeks. We prioritize high-impact automations first so you see benefits immediately."
    },
    {
      question: "What tools and systems can you automate?",
      answer: "We automate across 1000+ platforms including Salesforce, HubSpot, QuickBooks, Slack, Gmail, Stripe, Shopify, and more. If a platform has an API, we can automate it. We also build custom integrations for proprietary systems."
    },
    {
      question: "What happens if an automation breaks?",
      answer: "We include monitoring and error handling in all automations. You'll receive instant alerts if something fails, and we provide 30 days of free support post-launch. Ongoing maintenance packages start at $500/month for peace of mind."
    },
    {
      question: "How much time will we actually save?",
      answer: "Most clients save 15-25 hours per week after automation. We conduct a process audit before starting to identify high-ROI opportunities. We prioritize automations that save the most time and reduce the most errors first."
    },
    {
      question: "Can we modify automations ourselves later?",
      answer: "Yes! We provide full documentation and training. For no-code tools like Zapier, your team can make simple changes. For custom code, we offer training or ongoing support packages where we handle modifications."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl mb-6">
            <Zap className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Business Automation
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Streamline repetitive tasks and integrate your existing tools. Free up your team to focus on strategic work that drives growth.
          </p>
        </div>
      </section>

      {/* Automation Solutions */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">What We Automate</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Workflow Automation",
              "Email & Notifications",
              "Data Synchronization",
              "Report Generation",
              "Task Scheduling",
              "System Integration"
            ].map((automation, index) => (
              <Card key={index} className="p-6">
                <CheckCircle className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-semibold text-lg">{automation}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Time Savings */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Save 20+ Hours Per Week</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Our clients typically save thousands of hours annually through strategic automation
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "75%", label: "Faster Processing" },
              { metric: "90%", label: "Fewer Errors" },
              { metric: "50%", label: "Cost Reduction" }
            ].map((stat, index) => (
              <Card key={index} className="p-8">
                <div className="text-5xl font-bold text-gradient mb-2">{stat.metric}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Use Cases */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Common Automations</h2>
          <div className="space-y-6">
            {[
              { title: "Onboarding Automation", desc: "Automatically provision accounts, send welcome emails, and schedule training" },
              { title: "Invoice Processing", desc: "Extract data, validate, and sync with accounting systems automatically" },
              { title: "Lead Routing", desc: "Instantly assign and notify sales reps when new leads come in" },
              { title: "Reporting Dashboards", desc: "Generate and distribute daily/weekly reports automatically" }
            ].map((useCase, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-bold text-xl mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ServiceTestimonial
        quote="See how we helped TTR Sotheby's International Realty create a private listing app that reduced property management time by 75% and reshaped their luxury real estate operations in just 30 days."
        author="Brian Renner"
        role="Real Estate Director"
        company="TTR Sotheby's International Realty"
        metric={{
          value: "75%",
          label: "reduction in management time"
        }}
        secondMetric={{
          value: "30 days",
          label: "to implementation"
        }}
      />

      <ServiceFAQ faqs={faqs} />

      <CTA />
      <Footer />
    </div>
  );
};

export default BusinessAutomation;
