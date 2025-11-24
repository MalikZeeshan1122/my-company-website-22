import { useState, useRef, useEffect } from "react";
import { ChevronDown, Briefcase, Brain, Zap, Rocket, Code, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

interface ServiceItem {
  icon: any;
  title: string;
  description: string;
  color: string;
  href: string;
}

export const ServicesMegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const businessServices: ServiceItem[] = [
    {
      icon: Briefcase,
      title: "Business Apps",
      description: "Custom CRMs, portals, and internal tools tailored to your operations",
      color: "from-blue-500 to-cyan-500",
      href: "/services/business-apps"
    },
    {
      icon: Brain,
      title: "AI Implementation",
      description: "Smart automation and AI agents that transform your workflows",
      color: "from-purple-500 to-pink-500",
      href: "/services/ai-implementation"
    },
    {
      icon: Zap,
      title: "Business Automation",
      description: "Streamline repetitive tasks and integrate your existing tools",
      color: "from-yellow-500 to-orange-500",
      href: "/services/business-automation"
    },
    {
      icon: Rocket,
      title: "MVPs",
      description: "Validate ideas quickly with production-ready minimum viable products",
      color: "from-red-500 to-pink-500",
      href: "/services/mvp-development"
    },
    {
      icon: Code,
      title: "Website Development",
      description: "Modern, responsive websites that convert visitors to customers",
      color: "from-indigo-500 to-purple-500",
      href: "/services/website-development"
    }
  ];

  const startupServices: ServiceItem[] = [
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native iOS and Android apps that engage and delight users",
      color: "from-green-500 to-emerald-500",
      href: "/services/mobile-applications"
    },
    {
      icon: Rocket,
      title: "MVPs",
      description: "Launch fast, learn faster with investor-ready prototypes",
      color: "from-red-500 to-pink-500",
      href: "/services/mvp-development"
    },
    {
      icon: Code,
      title: "Website Development",
      description: "Landing pages and web apps that establish your brand presence",
      color: "from-indigo-500 to-purple-500",
      href: "/services/website-development"
    }
  ];

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-foreground/80 hover:text-foreground transition-colors outline-none"
      >
        Services
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[90vw] max-w-6xl z-[100] animate-fade-in">
          <Card className="p-8 shadow-2xl bg-background border-border">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* For Businesses Section */}
              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">For Businesses</h3>
                  <p className="text-sm text-muted-foreground">
                    Custom software to streamline operations, from internal tools and CRMs to AI-powered automation.
                  </p>
                </div>
                <div className="space-y-3">
                  {businessServices.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={index}
                        to={service.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                      >
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${service.color} flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold mb-1 group-hover:text-primary transition-colors">
                            {service.title}
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* For Startups Section */}
              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">For Startups</h3>
                  <p className="text-sm text-muted-foreground">
                    From idea to launch. We build the high-impact digital products that define your vision.
                  </p>
                </div>
                <div className="space-y-3">
                  {startupServices.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={index}
                        to={service.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                      >
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${service.color} flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold mb-1 group-hover:text-primary transition-colors">
                            {service.title}
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* View All Services Link */}
            <div className="mt-8 pt-6 border-t border-border text-center">
              <Link
                to="/services"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                View All Services
                <ChevronDown className="h-4 w-4 -rotate-90" />
              </Link>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};
