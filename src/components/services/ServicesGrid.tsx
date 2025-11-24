import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Briefcase, Zap, Smartphone, Rocket, Palette } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI for Business",
    description: "Leverage the power of artificial intelligence to automate processes, gain insights, and drive innovation in your business.",
    features: [
      "Custom AI model development",
      "Natural language processing",
      "Predictive analytics & forecasting",
      "Intelligent automation",
      "AI-powered chatbots",
      "Data analysis & visualization"
    ],
    benefits: [
      "Reduce operational costs by up to 40%",
      "Make data-driven decisions faster",
      "Automate repetitive tasks",
      "Improve customer experience"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Briefcase,
    title: "Business Apps",
    description: "Custom business applications that streamline operations, improve productivity, and scale with your organization.",
    features: [
      "CRM & ERP systems",
      "Project management tools",
      "Inventory management",
      "Team collaboration platforms",
      "Client portals",
      "Workflow automation"
    ],
    benefits: [
      "Centralize business operations",
      "Increase team productivity by 60%",
      "Real-time data access anywhere",
      "Reduce manual errors"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Zap,
    title: "Business Automation",
    description: "Automate repetitive tasks and workflows to free up your team for strategic work that drives growth.",
    features: [
      "Workflow automation",
      "Email & notification systems",
      "Data synchronization",
      "Report generation",
      "Integration with existing tools",
      "Scheduled task execution"
    ],
    benefits: [
      "Save 20+ hours per week",
      "Eliminate human errors",
      "Improve process consistency",
      "Focus on high-value tasks"
    ],
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that engage users and extend your reach to iOS and Android.",
    features: [
      "iOS & Android development",
      "Cross-platform solutions",
      "Push notifications",
      "Offline functionality",
      "In-app purchases",
      "Real-time sync"
    ],
    benefits: [
      "Reach millions of mobile users",
      "Increase customer engagement",
      "Build brand loyalty",
      "Generate new revenue streams"
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Rocket,
    title: "MVP Development",
    description: "Launch your product idea quickly with a Minimum Viable Product that validates your concept and attracts investors.",
    features: [
      "Rapid prototyping",
      "User testing & feedback",
      "Iterative development",
      "Core feature focus",
      "Market validation",
      "Investor-ready demos"
    ],
    benefits: [
      "Launch in 6-12 weeks",
      "Validate ideas before full investment",
      "Attract early adopters",
      "Secure funding faster"
    ],
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Palette,
    title: "Web Design",
    description: "Beautiful, responsive websites that convert visitors into customers with modern design and seamless user experience.",
    features: [
      "Responsive web design",
      "UI/UX optimization",
      "Brand identity integration",
      "SEO optimization",
      "Performance optimization",
      "Content management systems"
    ],
    benefits: [
      "Increase conversion rates by 80%",
      "Improve brand perception",
      "Mobile-first approach",
      "Fast load times under 2 seconds"
    ],
    color: "from-indigo-500 to-purple-500"
  }
];

export const ServicesGrid = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="hover-lift hover:shadow-2xl transition-all duration-300 group overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} bg-opacity-10 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Benefits</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
