import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import projectN8n from "@/assets/project-n8n.jpg";
import projectMakecom from "@/assets/project-makecom.jpg";
import projectAiAgent from "@/assets/project-ai-agent.jpg";
import projectAutomation from "@/assets/project-automation.jpg";

const projects = [
  {
    image: projectN8n,
    title: "N8N Workflow Automation",
    category: "AI Automation",
    description: "Enterprise workflow automation system integrating multiple business tools with intelligent data processing.",
    tags: ["N8N", "API Integration", "Automation"],
  },
  {
    image: projectMakecom,
    title: "Make.com Integration Hub",
    category: "AI Automation",
    description: "Multi-platform automation solution connecting CRM, marketing, and analytics tools seamlessly.",
    tags: ["Make.com", "Integrations", "Automation"],
  },
  {
    image: projectAiAgent,
    title: "AI Customer Support Agent",
    category: "AI Agent",
    description: "Intelligent chatbot providing 24/7 customer support with natural language understanding and context awareness.",
    tags: ["AI", "NLP", "Chatbot"],
  },
  {
    image: projectAutomation,
    title: "Business Process Automation",
    category: "AI Automation",
    description: "End-to-end business automation platform with AI-powered analytics and workflow optimization.",
    tags: ["AI", "Analytics", "Automation"],
  },
  {
    image: project1,
    title: "FinTech Platform",
    category: "Web App",
    description: "A comprehensive financial management platform with real-time analytics and reporting.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    image: project2,
    title: "E-Commerce Solution",
    category: "E-Commerce",
    description: "Modern shopping experience with advanced filtering and personalized recommendations.",
    tags: ["Next.js", "Stripe", "Tailwind"],
  },
  {
    image: project3,
    title: "Healthcare App",
    category: "Mobile App",
    description: "Patient management system with appointment scheduling and telemedicine features.",
    tags: ["React Native", "Firebase", "AWS"],
  },
  {
    image: project4,
    title: "SaaS Dashboard",
    category: "Web App",
    description: "Enterprise analytics platform with customizable dashboards and data visualization.",
    tags: ["TypeScript", "GraphQL", "MongoDB"],
  },
];

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  const sectionRef = useRef<HTMLElement>(null);
  const { ref: revealRef, isVisible } = useScrollReveal();

  const categories = ["All", "AI Automation", "AI Agent", "Web App", "Mobile App", "E-Commerce"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const displayedProjects = filteredProjects.slice(startIndex, endIndex);

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [currentPage]);

  return (
    <section id="work" className="py-24" ref={sectionRef}>
      <div 
        ref={revealRef}
        className={`container mx-auto px-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Our Latest Work
          </h2>
          <p className={`text-xl text-muted-foreground transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Explore our portfolio of successful projects across various industries
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => handleFilterChange(category)}
              variant={activeFilter === category ? "default" : "outline"}
              className="transition-all duration-300 hover-scale"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Project Counter */}
        <div className="text-center mb-8">
          <p 
            key={activeFilter}
            className="text-lg text-muted-foreground font-medium animate-fade-in"
          >
            {activeFilter === "All" 
              ? `${filteredProjects.length} projects` 
              : `Showing ${filteredProjects.length} ${activeFilter} ${filteredProjects.length === 1 ? 'project' : 'projects'}`
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <Card
              key={`${activeFilter}-${index}`}
              className="overflow-hidden hover-lift hover:shadow-xl transition-all duration-300 group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <Badge className="mb-3">{project.category}</Badge>
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-base text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <Button
              variant="outline"
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="transition-all duration-300"
            >
              Previous
            </Button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  onClick={() => handlePageChange(page)}
                  className="w-10 h-10 transition-all duration-300"
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="transition-all duration-300"
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
