import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "SmartContent Pro",
    description: "Built an AI content generation platform that creates blog posts, social media content, and marketing copy in seconds. Using GPT-5 and custom AI agents, we reduced content creation time by 90% and helped the marketing team generate 500+ pieces of content monthly with consistent brand voice and SEO optimization.",
    categories: ["AI Agents", "Content Generation"],
    image: "/placeholder.svg",
  },
  {
    title: "VisualAI Studio",
    description: "Developed an AI image generation platform that creates custom product photos, marketing visuals, and brand assets on demand. Powered by FLUX and Stable Diffusion models, we helped e-commerce businesses save $10K+ monthly on photoshoots while generating unlimited professional images in their brand style.",
    categories: ["AI Image Generation", "Creative AI"],
    image: "/placeholder.svg",
  },
  {
    title: "AutoFlow AI",
    description: "Created intelligent automation agents that handle customer support, data entry, and workflow management. The AI agents reduced response time by 85%, automated 70% of repetitive tasks, and freed up 30 hours per week for the team to focus on strategic work.",
    categories: ["AI Agents", "Automation"],
    image: "/placeholder.svg",
  },
  {
    title: "DesignBot Pro",
    description: "Built an AI-powered design assistant that generates logos, banners, social media graphics, and marketing materials. Using advanced image generation models, we helped startups create professional designs without hiring designers, reducing design costs by 95% and turnaround time from days to minutes.",
    categories: ["AI Image Generation", "Creative AI"],
    image: "/placeholder.svg",
  },
  {
    title: "ChatGenius AI",
    description: "Developed an intelligent chatbot platform with custom AI agents trained on company data. The chatbot handles 10,000+ customer inquiries monthly with 95% accuracy, provides instant support 24/7, and increased customer satisfaction scores by 40% while reducing support costs by 60%.",
    categories: ["AI Agents", "Customer Support"],
    image: "/placeholder.svg",
  },
  {
    title: "ProductShot AI",
    description: "Created an AI product photography platform that generates professional e-commerce images with custom backgrounds, lighting, and styling. Helped online retailers increase conversion rates by 35% with high-quality AI-generated product photos, eliminating the need for expensive photo studios.",
    categories: ["AI Image Generation", "E-commerce"],
    image: "/placeholder.svg",
  },
  {
    title: "WorkflowAI Assistant",
    description: "Built intelligent automation agents that streamline business operations across email, CRM, scheduling, and data processing. The AI agents automated 80% of manual tasks, reduced errors by 95%, and saved the team 50+ hours weekly while improving data accuracy and workflow efficiency.",
    categories: ["AI Agents", "Automation"],
    image: "/placeholder.svg",
  },
  {
    title: "BrandAI Generator",
    description: "Developed an AI-powered branding platform that creates complete visual identities including logos, color palettes, typography, and marketing materials. Using generative AI models, we helped 200+ businesses launch professional brands in hours instead of weeks, reducing branding costs by 90%.",
    categories: ["AI Image Generation", "Creative AI"],
    image: "/placeholder.svg",
  },
  {
    title: "DataBot Analyzer",
    description: "Created AI agents that analyze business data, generate insights, and automate reporting workflows. The intelligent agents process millions of data points, identify trends automatically, and generate actionable recommendations, helping executives make data-driven decisions 10x faster.",
    categories: ["AI Agents", "Analytics"],
    image: "/placeholder.svg",
  },
  {
    title: "SocialAI Creator",
    description: "Built an AI platform that generates social media content with matching visuals for multiple platforms. Combining GPT-5 for copywriting and FLUX for image generation, we helped social media managers create 100+ posts weekly with consistent branding, increasing engagement by 65%.",
    categories: ["AI Agents", "AI Image Generation", "Content Generation"],
    image: "/placeholder.svg",
  },
  {
    title: "PersonalAI Stylist",
    description: "Developed an AI fashion assistant that generates outfit recommendations and product visualizations. Using AI image generation to create virtual try-ons and style suggestions, we helped fashion retailers increase online sales by 45% and reduce return rates by 30%.",
    categories: ["AI Image Generation", "Creative AI"],
    image: "/placeholder.svg",
  },
  {
    title: "AgentFlow Platform",
    description: "Created a comprehensive AI agent orchestration platform that connects multiple AI models for complex workflows. The system automates everything from lead generation to customer onboarding, processing 1000+ tasks daily with 98% accuracy and reducing operational costs by 70%.",
    categories: ["AI Agents", "Automation"],
    image: "/placeholder.svg",
  },
];

const categories = ["All", "AI Agents", "AI Image Generation", "Creative AI", "Automation", "Content Generation"];

export const CaseStudiesGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredStudies = activeCategory === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.categories.includes(activeCategory));

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-16 justify-center">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                <h3 className="text-lg font-semibold mb-2">{study.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {study.description}
                </p>
                <Button variant="ghost" className="p-0 h-auto group/btn text-sm">
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
