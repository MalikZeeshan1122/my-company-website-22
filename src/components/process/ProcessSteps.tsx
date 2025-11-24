import { Card } from "@/components/ui/card";
import { Target, Palette, Code, Handshake } from "lucide-react";

const steps = [
  {
    number: "1.",
    title: "Strategic Foundation",
    subtitle: "Don't screw up on day 0!",
    description: "We begin by understanding what success looks like for you and your team, ensuring we build exactly what you need.",
    features: [
      "Define clear goals and success metrics (like \"reduce employee onboarding time from 2 days to 2 hours\"🕐)",
      "Map out your current processes and identify exactly where automation will save you the most time",
      "Plan for future needs - so your solution can grow with you (from 20 to 20,000 users? No problem)"
    ],
    deliverables: [
      "Assessment of your needs",
      "Platform selection",
      "Definition of user roles and functionality"
    ],
    icon: Target,
    gradient: "from-primary/20 to-primary/5"
  },
  {
    number: "2.",
    title: "Visual Framework",
    subtitle: "Make sure users love 🥰 your product and it's easy to use.",
    description: "We design your solution to be so intuitive that new users can start using it with minimal training.",
    features: [
      "Create designs that match how your team actually works, like combining three separate spreadsheets into one seamless view",
      "Focus on user adoption - creating interfaces so intuitive that your team will actually want to use them daily",
      "Design for efficiency - turning complex workflows into simple, streamlined processes⚡️that save hours every week"
    ],
    deliverables: [
      "User flow refinement",
      "Low-fidelity wireframe",
      "High-fidelity mockup and UI kit"
    ],
    icon: Palette,
    gradient: "from-secondary/20 to-secondary/5"
  },
  {
    number: "3.",
    title: "Solution Building",
    subtitle: "We've got this for you. Guaranteed.",
    description: "While you focus on running your business, we handle all the technical heavy lifting to bring your solution to life.",
    features: [
      "Build your solution in small, testable chunks 🛠️- so you can see it coming together week by week",
      "Weekly demos where you can try new features and give immediate feedback",
      "Rigorous testing with real data to ensure everything works perfectly at launch"
    ],
    deliverables: [
      "Milestone-based development",
      "Regular progress updates",
      "Quality assurance testing"
    ],
    icon: Code,
    gradient: "from-accent/20 to-accent/5"
  },
  {
    number: "4.",
    title: "Partnership & Success",
    subtitle: "Because we're only getting started",
    description: "The day you launch is when the real journey begins - we're here to ensure your solution keeps delivering value as your business grows.",
    features: [
      "Train your team to be self-sufficient - From basic operations to advanced features and customizations",
      "Quarterly check-ins - To identify new opportunities, like automating that new process you just added",
      "Dedicated support team - That knows your business and responds within hours, not days",
      "White-Glove User Support - We handle Tier 1-2 support for your app's users via email or chat - reducing your operational load by 40%",
      "Proactive Maintenance - Regular scalability, UX & UI audits📲, monitoring and support included in all plans"
    ],
    deliverables: [
      "Free discovery call"
    ],
    icon: Handshake,
    gradient: "from-primary/20 to-primary/5"
  }
];

export const ProcessSteps = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index} 
                className="p-8 md:p-12 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center`}>
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-5xl font-bold text-primary">{step.number}</span>
                      <h3 className="text-3xl font-bold">{step.title}</h3>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-4">{step.subtitle}</p>
                    
                    <p className="text-base mb-6">{step.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {step.features.map((feature, i) => (
                        <div key={i} className="flex gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <p className="text-base text-foreground/90">{feature}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                      {step.deliverables.map((deliverable, i) => (
                        <span 
                          key={i}
                          className="px-4 py-2 bg-muted rounded-full text-sm font-medium"
                        >
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
