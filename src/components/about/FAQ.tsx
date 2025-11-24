import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much time does it take for LowCode to build my app?",
    answer: "It depends on the complexity and the platform chosen, but it could start at around 4 weeks. Here's a breakdown: We'll start by scoping your project and sending you a proposal. As soon as it has been accepted, we'll begin creating a wireframe, which usually takes a week. We'll jump on a call with you right away to make sure the wireframe accurately represents your needs. After your approval, app building starts, which can vary from 2 to 10 weeks depending on the chosen platform. We have a unique process that makes it really fast and easy to develop your idea into an app."
  },
  {
    question: "What types of projects do you do?",
    answer: "Since we have built so many projects for so many different use cases and industries, we can say we have built every type of concept. Of course, your personal spin, market, or idea will make it unique. Healthcare, banking, internet startups, law, and markets are some industries for which we've done a lot of work."
  },
  {
    question: "How much am I going to spend with LowCode?",
    answer: "It depends on what you need and the tools that we have to use to achieve that goal. Our minimum is $7,000 for a small, internal business app. You can use our app's cost calculator to get a better idea of pricing."
  },
  {
    question: "What happens after I launch?",
    answer: "We have a handoff call where we do a full walk-through of how the software works and how your project is built. On top of that, we provide a ton of written and video documentation. Our support doesn't end there - We help you with app maintenance and develop additional features as your business grows. Think of us as your long-term partner!"
  }
];

export const FAQ = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">FAQs</h2>
          <p className="text-xl text-muted-foreground">Frequently asked questions</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
