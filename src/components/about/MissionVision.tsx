import { Card } from "@/components/ui/card";
import { Target, Eye } from "lucide-react";

export const MissionVision = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Guidance Compass
          </h2>
          <p className="text-xl text-muted-foreground">Mission & Vision</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 hover-lift transition-all duration-300">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground text-lg">
              To revolutionize the way businesses approach software development by making tailor-made, easy to use, scalable software through the use of no-code tools.
            </p>
          </Card>

          <Card className="p-8 hover-lift transition-all duration-300">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Eye className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground text-lg">
              To empower businesses to take control of their own digital transformation by providing them with the tools and resources they need to succeed.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
