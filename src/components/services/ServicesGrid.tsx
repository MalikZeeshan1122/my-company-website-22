import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Palette, Lightbulb, Bot, Briefcase, Brain, Zap, Rocket } from "lucide-react";

// For Businesses
const businessServices = [
  {
    icon: Briefcase,
    title: "Business Apps",
    description: "Custom CRMs, portals, and internal tools tailored to your operations",
    color: "from-cyan-500 to-blue-500",
    href: "/services/business-apps",
    category: "For Businesses"
  },
  {
    icon: Brain,
    title: "AI Implementation",
    description: "Smart automation and AI agents that transform your workflows",
    color: "from-pink-500 to-purple-500",
    href: "/services/ai-implementation",
    category: "For Businesses"
  },
  {
    icon: Zap,
    title: "Business Automation",
    description: "Streamline repetitive tasks and integrate your existing tools",
    color: "from-orange-500 to-yellow-500",
    href: "/services/business-automation",
    category: "For Businesses"
  },
  {
    icon: Rocket,
    title: "MVPs",
    description: "Validate ideas quickly with production-ready minimum viable products",
    color: "from-red-500 to-pink-500",
    href: "/services/mvp-development",
    category: "For Businesses"
  },
  {
    icon: Code,
    title: "Website Development",
    description: "Modern, responsive websites that convert visitors to customers",
    color: "from-blue-500 to-cyan-500",
    href: "/services/website-development",
    category: "For Businesses"
  }
];

// For Startups
const startupServices = [
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native iOS and Android apps that engage and delight users",
    color: "from-green-500 to-emerald-500",
    href: "/services/mobile-applications",
    category: "For Startups"
  },
  {
    icon: Rocket,
    title: "MVPs",
    description: "Launch fast, learn faster with investor-ready prototypes",
    color: "from-indigo-500 to-violet-500",
    href: "/services/mvp-development",
    category: "For Startups"
  },
  {
    icon: Code,
    title: "Website Development",
    description: "Landing pages and web apps that establish your brand presence",
    color: "from-purple-500 to-pink-500",
    href: "/services/website-development",
    category: "For Startups"
  }
];

const services = [...businessServices, ...startupServices];

export const ServicesGrid = () => {
  // Duplicate services for infinite scroll effect
  const duplicatedServices = [...services, ...services];

  return (
    <section className="py-24 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl mb-12">
        <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          Comprehensive solutions to transform your business
        </p>
      </div>

      {/* Animated Scrolling Row */}
      <div className="relative">
        <div className="flex animate-scroll gap-6 hover:[animation-play-state:paused]">
          {duplicatedServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <a
                key={index}
                href={service.href}
                className="flex-shrink-0 w-[400px]"
              >
                <Card className="hover-lift hover:shadow-2xl transition-all duration-300 group overflow-hidden h-full">
                  <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${service.color} group-hover:scale-110 transition-transform`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>
      </div>

      {/* Static Grid for Mobile */}
      <div className="container mx-auto max-w-6xl mt-16 md:hidden">
        <div className="grid gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <a
                key={index}
                href={service.href}
              >
                <Card className="hover-lift hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${service.color} group-hover:scale-110 transition-transform`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
