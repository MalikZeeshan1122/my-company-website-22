import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Evolutioner",
    description: "In just 8 weeks, we migrated Evolutioner from BuildFire to FlutterFlow, rebuilding the wellness app without disrupting users' daily routines. The new Business App delivers 100% reliable background audio, stable cross-platform performance, and working in-app subscriptions, cutting crashes by 85% while preserving the trusted sound therapy experience thousands depend on every day.",
    categories: ["MVP Development"],
    image: "/placeholder.svg",
  },
  {
    title: "Career Nerds",
    description: "In just 14 weeks, we built a custom Business App on Bubble that replaced CareerNerds' spreadsheets with a centralized coaching platform. The app streamlines client management, automates routine tasks, and powers seamless collaboration between branding and networking coaches, resulting in a 75% cut in admin work and a 40% boost in coach productivity.",
    categories: ["Business apps"],
    image: "/placeholder.svg",
  },
  {
    title: "OXXO",
    description: "In just 6 weeks, we built a valuation management platform for Coca-Cola FEMSA's OXXO retail division that replaced scattered spreadsheets and emails with a single source of truth. Today, the app manages 15,000+ property valuations, reduces processing time by 40%, and provides real-time dashboards that power faster, data-driven expansion across Mexico's most competitive retail market.",
    categories: ["Business apps", "Business automation"],
    image: "/placeholder.svg",
  },
  {
    title: "CHIIP",
    description: "In just 8 weeks, we turned CHIIP from a lightweight MVP into a fully-fledged AI-powered funding platform. Built on Bubble, it gives community innovators the tools to turn ideas into solid, fundable proposals with built-in research, structured collaboration, and real-time AI support guiding every step.",
    categories: ["AI for business"],
    image: "/placeholder.svg",
  },
  {
    title: "The Attributes",
    description: "Discover how LowCode Agency transformed The Attributes' trust assessment tool into a scalable enterprise platform on Bubble, achieving ROI within six months and supporting 3,000+ monthly users with advanced role-based access and professional-grade reporting.",
    categories: ["Business apps"],
    image: "/placeholder.svg",
  },
  {
    title: "August Point Advisors",
    description: "August Point Advisors, a New York hospitality consultancy, hired us to revamp their digital presence. In three weeks, we re-launched a Webflow site that drove an 85% increase in qualified leads and boosted newsletter signups by 127% in just three months.",
    categories: ["Web design"],
    image: "/placeholder.svg",
  },
  {
    title: "Zapier Workflow Hub",
    description: "A custom platform enabling users to share, explore, and learn automation workflows in a collaborative space. With over 33 educational sessions, 50 industry speakers, and 60 virtual networking events, it boosted community engagement and streamlined knowledge sharing.",
    categories: ["Business apps"],
    image: "/placeholder.svg",
  },
  {
    title: "TTR Sotheby's International Realty",
    description: "See how we helped TTR Sotheby's International Realty create a private listing Glide app that reduced property management time by 75% and reshaped their luxury real estate operations in just 30 days.",
    categories: ["Business apps", "Business automation"],
    image: "/placeholder.svg",
  },
  {
    title: "SuperQueer",
    description: "See how we helped build a global LGBTQ+ community hub that connects 440 Pride organizations and their events in one app built with FlutterFlow, bringing people together worldwide!",
    categories: ["MVP Development"],
    image: "/placeholder.svg",
  },
  {
    title: "BuildGenius",
    description: "Using Glide, we developed a construction management app that enabled a real estate developer to save $50,000 in lost time and consolidate multiple projects under one platform. See how this solution brought order to property development.",
    categories: ["AI for business", "Business automation", "MVP Development", "Business apps"],
    image: "/placeholder.svg",
  },
  {
    title: "RedZone",
    description: "Learn how we used FlutterFlow to build an app for field workers with robust offline functionalities",
    categories: ["Business apps"],
    image: "/placeholder.svg",
  },
  {
    title: "RentFund",
    description: "We used Glide to build a platform that offers secure rent payments for tenants and landlords. See how we helped build this MVP that achieved a 3M valuation!",
    categories: ["MVP Development"],
    image: "/placeholder.svg",
  },
];

const categories = ["All", "AI for business", "Business apps", "Business automation", "MVP Development"];

export const CaseStudiesGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredStudies = activeCategory === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.categories.includes(activeCategory));

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-lift hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-video bg-muted">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {study.categories.map((cat, catIndex) => (
                    <Badge key={catIndex} variant="outline" className="text-xs">
                      {cat}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-3">{study.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-4">
                  {study.description}
                </p>
                <Button variant="ghost" className="p-0 h-auto group/btn">
                  Read case study
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
