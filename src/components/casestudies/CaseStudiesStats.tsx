import { CTA } from "@/components/CTA";

const stats = [
  {
    value: "30%",
    label: "Increase in productivity",
    description: "in companies after app deployment.",
  },
  {
    value: "46,080",
    label: "Hours",
    description: "of development.",
  },
  {
    value: "331",
    label: "Clients",
    description: "since we started in 2020.",
  },
  {
    value: "17",
    label: "Countries",
    description: "we've worked with.",
  },
  {
    value: "35,000",
    label: "People using the apps",
    description: "we've built every day.",
  },
  {
    value: "29",
    label: "Team members",
    description: "from across the globe.",
  },
];

export const CaseStudiesStats = () => {
  return (
    <>
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Cracking the code
            </h2>
            <p className="text-xl text-muted-foreground">By the numbers</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold mb-1">{stat.label}</div>
                <div className="text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
};
