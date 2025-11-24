export const FeaturedLogos = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured by the Best
          </h2>
          <p className="text-muted-foreground">
            Where the apps we've built are featured
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-card rounded-2xl p-12 text-center">
          <p className="text-xl text-muted-foreground mb-8">
            Our work has been recognized by leading platforms and publications
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            <div className="text-2xl font-bold">Platform 1</div>
            <div className="text-2xl font-bold">Platform 2</div>
            <div className="text-2xl font-bold">Platform 3</div>
            <div className="text-2xl font-bold">Platform 4</div>
          </div>
        </div>
      </div>
    </section>
  );
};
