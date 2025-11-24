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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI Solutions That Transform
            <br />
            Your Business Operations
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover how our AI automation agents and image generation platforms deliver real results
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
          <h2 className="text-3xl font-bold mb-4">AI-Powered Solutions</h2>
          <p className="text-base text-muted-foreground">
            We've helped hundreds of businesses transform their operations with AI automation agents and AI-generated content. From intelligent chatbots to custom image generation platforms, we build production-grade AI solutions that deliver measurable results and ROI.
          </p>
        </div>
      </div>
    </section>
  );
};
