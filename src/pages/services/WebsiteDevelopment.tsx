import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Card } from "@/components/ui/card";
import { Code, CheckCircle } from "lucide-react";
import { ServiceTestimonial } from "@/components/ServiceTestimonial";
import { ServiceFAQ } from "@/components/ServiceFAQ";

const WebsiteDevelopment = () => {
  const faqs = [
    {
      question: "How much does a website cost?",
      answer: "Websites range from $5,000 to $50,000+. Landing pages start around $5-8K, marketing websites at $10-20K, and complex web applications at $30-50K+. We provide fixed-price quotes after understanding your requirements and goals."
    },
    {
      question: "How long does it take to build a website?",
      answer: "Most websites launch in 3-8 weeks. Landing pages can be ready in 2-3 weeks, full marketing websites in 4-6 weeks, and complex web apps in 6-8 weeks. Rush timelines available for urgent launches."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Yes! All websites are mobile-first and responsive. With 70% of traffic on mobile, we design for small screens first, then scale up. Your site will look perfect on phones, tablets, and desktops."
    },
    {
      question: "Can I update the website content myself?",
      answer: "Absolutely! We include a user-friendly CMS (Webflow, WordPress, or custom) that lets you edit text, images, and pages without coding. We provide training and documentation so you're self-sufficient."
    },
    {
      question: "Will my website rank on Google?",
      answer: "We build all websites with SEO best practices: semantic HTML, fast load times, mobile optimization, meta tags, and structured data. For competitive keywords, we offer ongoing SEO services starting at $1,500/month."
    },
    {
      question: "What about hosting and maintenance?",
      answer: "We can host your website ($50-200/month depending on traffic) or help you set up your own hosting. We offer maintenance packages ($250-1,000/month) including updates, backups, security monitoring, and content changes."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl mb-6">
            <Code className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Website Development
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Modern, responsive websites that convert visitors into customers. Fast-loading, SEO-optimized, and built to scale.
          </p>
        </div>
      </section>

      {/* Website Types */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">What We Build</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Landing Pages",
              "Corporate Websites",
              "E-commerce Stores",
              "SaaS Platforms",
              "Portfolio Sites",
              "Marketing Websites"
            ].map((type, index) => (
              <Card key={index} className="p-6">
                <CheckCircle className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-semibold text-lg">{type}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Every Website Includes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Mobile-First Design", desc: "Perfect experience on all devices and screen sizes" },
              { title: "SEO Optimized", desc: "Built to rank on Google from day one" },
              { title: "Lightning Fast", desc: "Load times under 2 seconds guaranteed" },
              { title: "CMS Integration", desc: "Easy content updates without coding" },
              { title: "Analytics Ready", desc: "Track visitors and conversions automatically" },
              { title: "Security First", desc: "SSL, backups, and protection included" }
            ].map((feature, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-12">Performance That Matters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "80%", label: "Higher Conversion Rates" },
              { metric: "<2s", label: "Page Load Time" },
              { metric: "100%", label: "Mobile Responsive" }
            ].map((stat, index) => (
              <Card key={index} className="p-8">
                <div className="text-5xl font-bold text-gradient mb-2">{stat.metric}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Modern Technology</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {["React", "Next.js", "Webflow", "WordPress", "Tailwind CSS", "TypeScript", "Node.js", "Stripe"].map((tech, index) => (
              <Card key={index} className="p-6 text-center">
                <h3 className="font-semibold">{tech}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ServiceTestimonial
        quote="August Point Advisors hired us to revamp their digital presence. In three weeks, we re-launched a website that drove an 85% increase in qualified leads and boosted newsletter signups by 127%."
        author="August Point"
        role="Managing Director"
        company="August Point Advisors"
        metric={{
          value: "85%",
          label: "increase in qualified leads"
        }}
        secondMetric={{
          value: "127%",
          label: "boost in newsletter signups"
        }}
      />

      <ServiceFAQ faqs={faqs} />

      <CTA />
      <Footer />
    </div>
  );
};

export default WebsiteDevelopment;
