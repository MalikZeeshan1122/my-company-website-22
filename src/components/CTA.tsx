import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Mail as MailIcon } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContactForm } from "@/components/ContactForm";

export const CTA = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div 
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's work together to bring your vision to life. Choose how you'd like to connect with us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="form" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="form" className="text-base">
                Contact Form
              </TabsTrigger>
              <TabsTrigger value="calendar" className="text-base">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Call
              </TabsTrigger>
              <TabsTrigger value="email" className="text-base">
                <MailIcon className="mr-2 h-4 w-4" />
                Email Us
              </TabsTrigger>
            </TabsList>

            <TabsContent value="form">
              <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
                <ContactForm />
              </div>
            </TabsContent>

            <TabsContent value="calendar">
              <div className="bg-card rounded-2xl p-12 border border-border shadow-lg text-center">
                <Calendar className="h-16 w-16 mx-auto mb-6 text-primary" />
                <h3 className="text-2xl font-bold mb-4">
                  Schedule a Consultation
                </h3>
                <p className="text-base text-muted-foreground mb-8 max-w-md mx-auto">
                  Book a 30-minute discovery call to discuss your project requirements and how we can help you succeed.
                </p>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => window.open("https://calendly.com", "_blank")}
                >
                  Book a Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  No obligation • Free consultation
                </p>
              </div>
            </TabsContent>

            <TabsContent value="email">
              <div className="bg-card rounded-2xl p-12 border border-border shadow-lg text-center">
                <MailIcon className="h-16 w-16 mx-auto mb-6 text-primary" />
                <h3 className="text-2xl font-bold mb-4">
                  Email Us Directly
                </h3>
                <p className="text-base text-muted-foreground mb-8 max-w-md mx-auto">
                  Prefer email? Send us a message and we'll get back to you within 24 hours.
                </p>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => window.location.href = 'mailto:contact@agency.com'}
                >
                  Send Email
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  contact@agency.com
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
