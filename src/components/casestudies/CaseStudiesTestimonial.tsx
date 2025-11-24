import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

export const CaseStudiesTestimonial = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <Card className="p-8 md:p-12">
          <div className="flex items-start gap-4 mb-6">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              MVP Development
            </Badge>
          </div>
          
          <Quote className="h-12 w-12 text-primary/20 mb-6" />
          
          <blockquote className="text-xl md:text-2xl font-medium mb-8">
            We are thrilled with the MaidManage app and the exceptional team at LowCode Agency. It has been a great experience, and we look forward to bringing more app ideas to life with you.
          </blockquote>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="text-5xl font-bold text-gradient mb-2">25%</div>
              <p className="text-muted-foreground">
                reduction in time spent on manual calculations and paperwork
              </p>
            </div>
            <div>
              <div className="text-5xl font-bold text-gradient mb-2">40%</div>
              <p className="text-muted-foreground">
                improvement in payment processing
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-6 border-t">
            <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center font-semibold text-xl">
              BR
            </div>
            <div>
              <div className="font-semibold text-lg">Brian Renner</div>
              <div className="text-muted-foreground">Brian Renner, Founder</div>
              <div className="text-sm text-muted-foreground">MaidManage</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
