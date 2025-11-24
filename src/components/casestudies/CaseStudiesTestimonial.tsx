import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

export const CaseStudiesTestimonial = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <Card className="p-8 md:p-10">
          <div className="flex items-start gap-4 mb-6">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              AI Automation
            </Badge>
          </div>
          
          <Quote className="h-10 w-10 text-primary/20 mb-4" />
          
          <blockquote className="text-lg md:text-xl font-medium mb-6">
            The AI automation agents completely transformed our workflow. What used to take our team days now happens in minutes. The ROI was immediate and the platform continues to exceed our expectations every day.
          </blockquote>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">90%</div>
              <p className="text-muted-foreground text-sm">
                reduction in time spent on repetitive tasks
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">10K+</div>
              <p className="text-muted-foreground text-sm">
                AI-generated images created monthly
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-6 border-t">
            <div className="h-14 w-14 rounded-full bg-muted flex items-center justify-center font-semibold text-lg">
              SM
            </div>
            <div>
              <div className="font-semibold">Sarah Mitchell</div>
              <div className="text-sm text-muted-foreground">Director of Operations</div>
              <div className="text-xs text-muted-foreground">SmartContent Pro</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
