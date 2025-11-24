import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Card } from "@/components/ui/card";
import { Brain, CheckCircle } from "lucide-react";
import { ServiceTestimonial } from "@/components/ServiceTestimonial";
import { ServiceFAQ } from "@/components/ServiceFAQ";

const AIImplementation = () => {
  const faqs = [
    {
      question: "How much does AI implementation cost?",
      answer: "AI implementation projects typically range from $20,000 to $100,000+ depending on complexity. Simple chatbots start around $20K, while complex document processing with custom models can exceed $75K. Most clients see ROI within 6-12 months through reduced labor costs."
    },
    {
      question: "How long does it take to implement AI?",
      answer: "Most AI implementations take 6-12 weeks. Simple chatbots can launch in 4-6 weeks, while complex systems with custom training and integrations take 10-14 weeks. We start with a proof of concept to validate accuracy before full deployment."
    },
    {
      question: "What AI models do you use?",
      answer: "We use the best model for your use case: OpenAI GPT-4/GPT-5 for general intelligence, Claude for nuanced reasoning, Gemini for multimodal tasks, and specialized models for specific domains. We can also fine-tune models on your data for better accuracy."
    },
    {
      question: "Will AI replace our employees?",
      answer: "No, AI augments your team rather than replacing them. It handles repetitive tasks, allowing your employees to focus on high-value work requiring human judgment. Most clients redeploy staff to strategic roles rather than reducing headcount."
    },
    {
      question: "How accurate is AI, and what if it makes mistakes?",
      answer: "We aim for 95%+ accuracy through careful prompt engineering, testing, and validation. For critical use cases, we implement human-in-the-loop review workflows. We also provide confidence scores and audit trails for all AI decisions."
    },
    {
      question: "Is our data secure with AI?",
      answer: "Yes. We use enterprise AI APIs with SOC 2 compliance and don't send data to train public models. Your data is encrypted in transit and at rest. For sensitive applications, we can deploy private AI models on your infrastructure."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6">
            <Brain className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            AI Implementation
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Smart automation and AI agents that transform your workflows. Leverage cutting-edge AI to reduce costs, increase efficiency, and unlock new capabilities.
          </p>
        </div>
      </section>

      {/* AI Solutions */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">AI Solutions We Deliver</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "AI Chatbots & Assistants",
              "Document Processing",
              "Predictive Analytics",
              "Natural Language Processing",
              "Intelligent Automation",
              "AI-Powered Search"
            ].map((solution, index) => (
              <Card key={index} className="p-6">
                <CheckCircle className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-semibold text-lg">{solution}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Transform Your Business</h2>
          <div className="space-y-6">
            {[
              { title: "Reduce Costs by 40%", desc: "Automate repetitive tasks and reduce manual labor" },
              { title: "24/7 Availability", desc: "AI agents that work around the clock without breaks" },
              { title: "Data-Driven Insights", desc: "Make smarter decisions with predictive analytics" },
              { title: "Enhanced Customer Experience", desc: "Instant responses and personalized interactions" }
            ].map((benefit, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-bold text-xl mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Industries We Serve</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {["Healthcare", "Finance", "Legal", "Real Estate", "E-commerce", "Manufacturing", "Education", "Hospitality"].map((industry, index) => (
              <Card key={index} className="p-6 text-center">
                <h3 className="font-semibold">{industry}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ServiceTestimonial
        quote="Using AI integration, we developed a solution that revolutionized shipment tracking in just 5 weeks and increased customer satisfaction by 30%."
        author="Known.dev"
        role="CTO"
        company="Known.dev"
        metric={{
          value: "30%",
          label: "increase in customer satisfaction"
        }}
        secondMetric={{
          value: "5 weeks",
          label: "to full implementation"
        }}
      />

      <ServiceFAQ faqs={faqs} />

      <CTA />
      <Footer />
    </div>
  );
};

export default AIImplementation;
