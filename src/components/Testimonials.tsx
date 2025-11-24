import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "Working with this agency transformed our digital presence. They delivered beyond our expectations and the results speak for themselves.",
    initials: "SJ",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, HealthCo",
    content: "The team's expertise and dedication to our project was exceptional. They built a platform that our users absolutely love.",
    initials: "MC",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "CTO, FinanceHub",
    content: "Professional, efficient, and highly skilled. They turned our complex requirements into a seamless, user-friendly application.",
    initials: "ER",
    rating: 5,
  },
];

export const Testimonials = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 bg-muted/30">
      <div 
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            What Our Clients Say
          </h2>
          <p className={`text-xl text-muted-foreground transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`p-6 hover-lift hover:shadow-xl transition-all duration-700 border-border/50 bg-card group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms`
              }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary animate-scale-in" style={{ animationDelay: `${i * 100}ms` }} />
                ))}
              </div>
              <p className="text-base text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <Avatar className="ring-2 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300">
                  <AvatarFallback className="bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
