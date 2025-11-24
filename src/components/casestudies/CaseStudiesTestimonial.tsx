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
              MVP Development
            </Badge>
          </div>
          
          <Quote className="h-10 w-10 text-primary/20 mb-4" />
          
          <blockquote className="text-lg md:text-xl font-medium mb-6">
            We are thrilled with the MaidManage app and the exceptional team at LowCode Agency. It has been a great experience, and we look forward to bringing more app ideas to life with you.
          </blockquote>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">25%</div>
              <p className="text-muted-foreground text-sm">
                reduction in time spent on manual calculations and paperwork
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">40%</div>
              <p className="text-muted-foreground text-sm">
                improvement in payment processing
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-6 border-t">
            <div className="h-14 w-14 rounded-full bg-muted flex items-center justify-center font-semibold text-lg">
              BR
            </div>
            <div>
              <div className="font-semibold">Brian Renner</div>
              <div className="text-sm text-muted-foreground">Brian Renner, Founder</div>
              <div className="text-xs text-muted-foreground">MaidManage</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
