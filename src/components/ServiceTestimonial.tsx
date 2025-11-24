import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface ServiceTestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  metric?: {
    value: string;
    label: string;
  };
  secondMetric?: {
    value: string;
    label: string;
  };
}

export const ServiceTestimonial = ({ 
  quote, 
  author, 
  role, 
  company, 
  metric,
  secondMetric 
}: ServiceTestimonialProps) => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <Card className="p-8 md:p-12">
          <Quote className="h-12 w-12 text-primary/20 mb-6" />
          
          <blockquote className="text-xl md:text-2xl font-medium mb-8">
            {quote}
          </blockquote>

          {(metric || secondMetric) && (
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {metric && (
                <div>
                  <div className="text-5xl font-bold text-gradient mb-2">{metric.value}</div>
                  <p className="text-muted-foreground">{metric.label}</p>
                </div>
              )}
              {secondMetric && (
                <div>
                  <div className="text-5xl font-bold text-gradient mb-2">{secondMetric.value}</div>
                  <p className="text-muted-foreground">{secondMetric.label}</p>
                </div>
              )}
            </div>
          )}

          <div className="flex items-center gap-4 pt-6 border-t">
            <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center font-semibold text-xl">
              {author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div className="font-semibold text-lg">{author}</div>
              <div className="text-muted-foreground">{role}</div>
              <div className="text-sm text-muted-foreground">{company}</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
