import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Card } from "@/components/ui/card";
import { Smartphone, CheckCircle } from "lucide-react";
import { ServiceTestimonial } from "@/components/ServiceTestimonial";
import { ServiceFAQ } from "@/components/ServiceFAQ";

const MobileApplications = () => {
  const faqs = [
    {
      question: "How much does a mobile app cost?",
      answer: "Mobile apps range from $25,000 to $150,000+. Cross-platform apps start around $25-40K, while native iOS and Android apps begin at $40-60K each. Complex apps with backend infrastructure can exceed $100K. We provide detailed quotes after scoping."
    },
    {
      question: "Should I build native or cross-platform?",
      answer: "Cross-platform (React Native/Flutter) is best for faster launch and lower cost—one codebase for iOS and Android. Native (Swift/Kotlin) is better when you need maximum performance or platform-specific features. We'll recommend the right approach for your needs."
    },
    {
      question: "How long does it take to build a mobile app?",
      answer: "Most mobile apps take 12-20 weeks. Simple apps can launch in 10-12 weeks, while complex apps with custom features take 16-20 weeks. We use agile development with bi-weekly TestFlight/beta builds for continuous feedback."
    },
    {
      question: "Will you handle App Store and Google Play submissions?",
      answer: "Yes! We handle all app store submissions including preparing assets, writing descriptions, and managing the review process. We'll also guide you through the approval process and help with rejections if they occur."
    },
    {
      question: "How do you handle app updates and maintenance?",
      answer: "We offer maintenance packages starting at $2,000/month covering bug fixes, OS updates, security patches, and minor features. Major feature releases are priced separately. We also provide 60 days of free support post-launch."
    },
    {
      question: "Can you add features after launch?",
      answer: "Absolutely! We build apps with scalable architecture. Post-launch, we can add new features, integrations, or improvements. Most clients budget $5-15K/month for ongoing development as they grow and learn from users."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mb-6">
            <Smartphone className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Mobile Applications
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Native iOS and Android apps that engage and delight users. Reach millions with beautiful, performant mobile experiences.
          </p>
        </div>
      </section>

      {/* App Types */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Types of Apps We Build</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Consumer Apps",
              "Enterprise Apps",
              "Social Networks",
              "E-commerce Apps",
              "Fitness & Health",
              "Education Apps"
            ].map((type, index) => (
              <Card key={index} className="p-6">
                <CheckCircle className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-semibold text-lg">{type}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Options */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Choose Your Platform</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Native iOS", 
                desc: "Swift/SwiftUI for maximum performance and iOS-specific features",
                best: "Best for: Premium iOS-first experiences"
              },
              { 
                title: "Native Android", 
                desc: "Kotlin for optimal Android performance and Material Design",
                best: "Best for: Android-focused markets"
              },
              { 
                title: "Cross-Platform", 
                desc: "React Native or Flutter for iOS + Android from one codebase",
                best: "Best for: Faster launch, lower cost"
              }
            ].map((platform, index) => (
              <Card key={index} className="p-8">
                <h3 className="font-bold text-2xl mb-4">{platform.title}</h3>
                <p className="text-muted-foreground mb-4">{platform.desc}</p>
                <p className="text-sm text-primary font-semibold">{platform.best}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Standard Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Push Notifications",
              "Offline Functionality",
              "In-App Purchases",
              "Real-Time Sync",
              "Camera & Photo Integration",
              "Location Services",
              "Biometric Authentication",
              "Social Media Integration"
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
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-12">Why Mobile Matters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "70%", label: "Of Web Traffic is Mobile" },
              { metric: "3x", label: "Higher Engagement Than Web" },
              { metric: "2B+", label: "App Store Users" }
            ].map((stat, index) => (
              <Card key={index} className="p-8">
                <div className="text-5xl font-bold text-gradient mb-2">{stat.metric}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ServiceTestimonial
        quote="In just 8 weeks, we migrated Evolutioner from BuildFire to FlutterFlow, rebuilding the wellness app without disrupting users' daily routines. The new app delivers 100% reliable background audio and stable cross-platform performance."
        author="Evolutioner Team"
        role="Product Lead"
        company="Evolutioner"
        metric={{
          value: "85%",
          label: "reduction in app crashes"
        }}
        secondMetric={{
          value: "8 weeks",
          label: "migration timeline"
        }}
      />

      <ServiceFAQ faqs={faqs} />

      <CTA />
      <Footer />
    </div>
  );
};

export default MobileApplications;
