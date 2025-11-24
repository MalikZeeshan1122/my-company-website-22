import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Palette, Lightbulb, Bot } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern technologies for scalability and performance.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that put user experience at the forefront of every decision.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Lightbulb,
    title: "Digital Strategy",
    description: "Strategic consulting to help you navigate the digital landscape and grow your business.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Bot,
    title: "AI Automation and Agents",
    description: "Intelligent automation solutions and AI agents that streamline workflows and enhance productivity.",
    color: "from-indigo-500 to-violet-500"
  }
];

export const ServicesGrid = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="hover-lift hover:shadow-2xl transition-all duration-300 group overflow-hidden"
              >
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
            );
          })}
        </div>
      </div>
    </section>
  );
};
