import { Badge } from "@/components/ui/badge";

export const TechStack = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our cutting-edge tech stack
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col items-center gap-4">
            <Badge variant="secondary" className="text-lg px-6 py-3">
              Premium Expert
            </Badge>
            <div className="w-32 h-32 rounded-lg bg-background flex items-center justify-center">
              <span className="text-sm text-muted-foreground">Bubble.io</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <Badge variant="secondary" className="text-lg px-6 py-3">
              Silver Agency Partner
            </Badge>
            <div className="w-32 h-32 rounded-lg bg-background flex items-center justify-center">
              <span className="text-sm text-muted-foreground">FlutterFlow</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <Badge variant="secondary" className="text-lg px-6 py-3">
              Silver Partner
            </Badge>
            <div className="w-32 h-32 rounded-lg bg-background flex items-center justify-center">
              <span className="text-sm text-muted-foreground">Webflow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
