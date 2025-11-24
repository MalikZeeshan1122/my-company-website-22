import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "We have nothing but good things to say about Julia and Maria. Julia is on top of our app -- fully communicative, supportive and patient. We have total and complete faith in everything we've been presented with so far and ultimate trust for the remainder of the build and beyond.",
    client: "Super Queer",
    date: "December 11, 2023"
  },
  {
    text: "The experience with the LowCode team has been very productive. We have enjoyed how the build has been organized, and we greatly appreciate the high level of communication Andrea provides. So far so good and we look forward to the first MVP release.",
    client: "AwardiPhi",
    date: "January 11, 2024"
  },
  {
    text: "Asked great questions, listened very well to our feedback and found creative solutions to address our needs.",
    client: "Annum",
    date: "September 25, 2023"
  },
  {
    text: "Process, process, process. Excellent communication and management so far. Super impressed!",
    client: "Daft Castle",
    date: "April 3, 2024"
  },
  {
    text: "Julia is great to work with. She explains the processes clearly, is always helpful, ready to listen and tolerates our often crazy suggestions with great patience.",
    client: "Stylecraft",
    date: "January 23, 2025"
  },
  {
    text: "Cecilia has been very attentive and diligent with the development of our online platform. We have been having a great experience working with the LowCode team!",
    client: "HelloWellness",
    date: "June 22, 2023"
  },
  {
    text: "It's been a breeze to work with LC. It was a great decision we made to partner with them because they're super organized an make the process simple",
    client: "HelloWellness",
    date: "July 7, 2023"
  },
  {
    text: "Very responsive. Very accurate. Always proactive in identifying our needs. This team has taken ALLL OF MY MONEY!! and I don't mind continuing to give them ALL OF MY MONEY!! Its been a pleasure working with you all over the years.",
    client: "CHIIP V2",
    date: "June 2, 2025"
  },
  {
    text: "Julia is wonderful to work with and very knowledgeable. She has made the process very easy. Please give her a big raise at her next evaluation. :)",
    client: "Margaritaville",
    date: "August 16, 2023"
  },
  {
    text: "Ceci has done an excellent job managing our project. Communication has been top notch and you can tell she is really passionate about her work. Together we have built a high quality app that will enable us to transform our business.",
    client: "Pure Timber",
    date: "January 4, 2024"
  },
  {
    text: "I absolutely love working with Julia and the LowCode team! The team is so engaging, organized, communicative, creative, helpful and kind. They make the whole process very enjoyable. THANK YOU!",
    client: "DSXTWN",
    date: "July 15, 2024"
  },
  {
    text: "Cecilia and Dom have been very good to work with. What stands out most for me is how well they listen. Typically that's half the battle. Cecilia is customer focused, communicates well and shows a good sense of ownership.",
    client: "Vericlik",
    date: "August 26, 2023"
  },
];

export const AllTestimonials = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by Hundreds of Businesses
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover-lift transition-all duration-300">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic text-sm">
                "{testimonial.text}"
              </p>
              <div className="border-t border-border pt-3">
                <div className="font-semibold text-sm">{testimonial.client}</div>
                <div className="text-xs text-muted-foreground">{testimonial.date}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
