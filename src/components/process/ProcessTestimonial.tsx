import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const ProcessTestimonial = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-8 md:p-12 text-center">
          <Quote className="h-12 w-12 text-primary/20 mx-auto mb-6" />
          
          <blockquote className="text-xl md:text-2xl font-medium mb-8">
            "We've been profoundly impressed with the exceptional communication and management skills exhibited throughout our project. The team's meticulous attention to process has exceeded our expectations."
          </blockquote>
          
          <div className="flex flex-col items-center gap-2">
            <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center font-semibold text-xl">
              GA
            </div>
            <div className="font-semibold text-lg">Gray Anderson</div>
            <div className="text-muted-foreground">Daft Castle</div>
          </div>
        </Card>
      </div>
    </section>
  );
};
