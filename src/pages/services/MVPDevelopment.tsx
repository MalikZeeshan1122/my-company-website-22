import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Card } from "@/components/ui/card";
import { Rocket, CheckCircle } from "lucide-react";
import { ServiceTestimonial } from "@/components/ServiceTestimonial";
import { ServiceFAQ } from "@/components/ServiceFAQ";

const MVPDevelopment = () => {
  const faqs = [
    {
      question: "How much does an MVP cost?",
      answer: "MVPs typically range from $15,000 to $50,000. A basic web app starts around $15-25K, while a mobile app with backend can reach $35-50K. We focus on core features only to keep costs low and get you to market fast."
    },
    {
      question: "How long does it take to build an MVP?",
      answer: "Most MVPs launch in 6-12 weeks. Simple web apps can be ready in 6-8 weeks, while mobile apps with complex features take 10-12 weeks. We use rapid prototyping and weekly demos to maintain momentum."
    },
    {
      question: "What's included in an MVP?",
      answer: "An MVP includes core features only: user authentication, primary workflow, basic admin dashboard, mobile-responsive design, and deployment. We intentionally exclude nice-to-have features to minimize cost and maximize learning speed."
    },
    {
      question: "What happens after the MVP launches?",
      answer: "Post-launch, we help you analyze user data and feedback. Based on what you learn, we can iterate quickly—adding features, adjusting UX, or pivoting direction. Most clients budget $5-10K/month for ongoing development after launch."
    },
    {
      question: "Can we scale the MVP to a full product?",
      answer: "Absolutely! We build MVPs with scalable architecture. When you're ready to grow, we add features, optimize performance, and expand infrastructure. Our MVPs have scaled from 100 to 100,000+ users without rebuilding."
    },
    {
      question: "Will the MVP be investor-ready?",
      answer: "Yes! We design MVPs to impress. This includes polished UI, working demos, and the ability to show traction with real users. Many of our clients have successfully raised funding (seed to Series A) using their MVPs."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl mb-6">
            <Rocket className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            MVP Development
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Launch fast, learn faster. Validate your product idea with investor-ready prototypes built in weeks, not months.
          </p>
        </div>
      </section>

      {/* MVP Approach */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Our MVP Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Core Features", desc: "Focus on essential functionality only" },
              { step: "2", title: "Rapid Build", desc: "Launch in 6-12 weeks" },
              { step: "3", title: "User Testing", desc: "Get real feedback early" },
              { step: "4", title: "Iterate", desc: "Improve based on data" }
            ].map((phase, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-4">{phase.step}</div>
                <h3 className="font-bold text-lg mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Market Research & Validation",
              "User Flow Design",
              "Core Feature Development",
              "Mobile-Responsive Design",
              "User Authentication",
              "Admin Dashboard",
              "Analytics Integration",
              "Investor Demo Ready"
            ].map((feature, index) => (
              <Card key={index} className="p-6 flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span className="font-medium">{feature}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose MVP First?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "80%", label: "Lower Initial Cost" },
              { metric: "10x", label: "Faster to Market" },
              { metric: "3x", label: "Higher Success Rate" }
            ].map((stat, index) => (
              <Card key={index} className="p-8">
                <div className="text-5xl font-bold text-gradient mb-2">{stat.metric}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Perfect For</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "First-Time Founders", desc: "Test your idea before full investment" },
              { title: "Funded Startups", desc: "Launch quickly to show traction" },
              { title: "Enterprise Innovation", desc: "Validate internal tools rapidly" }
            ].map((audience, index) => (
              <Card key={index} className="p-8 text-center">
                <h3 className="font-bold text-xl mb-3">{audience.title}</h3>
                <p className="text-muted-foreground">{audience.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ServiceTestimonial
        quote="We are thrilled with the MaidManage app and the exceptional team at LowCode Agency. It has been a great experience, and we look forward to bringing more app ideas to life with you."
        author="Brian Renner"
        role="Founder"
        company="MaidManage"
        metric={{
          value: "25%",
          label: "reduction in time spent on manual calculations"
        }}
        secondMetric={{
          value: "40%",
          label: "improvement in payment processing"
        }}
      />

      <ServiceFAQ faqs={faqs} />

      <CTA />
      <Footer />
    </div>
  );
};

export default MVPDevelopment;
