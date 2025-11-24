export const CaseStudiesHero = () => {
  const logos = [
    "QCells",
    "American Express",
    "Coca-Cola",
    "Sotheby's International Realty",
    "Zapier",
    "Margaritaville",
    "Somewhere",
    "Dataiku",
    "medtronic",
    "Herzig",
    "Altriarch",
  ];

  return (
    <section className="pt-32 pb-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            We've built custom solutions
            <br />
            for clients in every industry
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover the transformative impact of our tailored solutions
          </p>
        </div>

        {/* Scrolling Logos */}
        <div className="relative overflow-hidden mb-12">
          <div className="flex gap-12 animate-scroll">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-muted-foreground/60 text-base font-medium whitespace-nowrap"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Case studies</h2>
          <p className="text-muted-foreground text-sm">
            We've helped hundreds of new startups, fast-growing businesses, and Fortune 500 enterprises launch complex, production-grade no-code applications in a fraction of the time and cost of traditional development.
          </p>
        </div>
      </div>
    </section>
  );
};
