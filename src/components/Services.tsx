import { Card } from "@/components/ui/card";
import { Code2, Smartphone, Palette, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom web applications built with modern technologies for scalability and performance.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that put user experience at the forefront of every decision.",
  },
  {
    icon: Zap,
    title: "Digital Strategy",
    description: "Strategic consulting to help you navigate the digital landscape and grow your business.",
  },
];

export const Services = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div 
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Services We Offer
          </h2>
          <p className="text-xl text-muted-foreground">
            End-to-end digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover-lift hover:shadow-lg transition-all duration-300 border-border/50 bg-card"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
