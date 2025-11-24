import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search, Briefcase, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const searchableContent = [
  // Services
  { type: "service", title: "Business Apps", description: "Custom CRMs, portals, and internal tools", href: "/services/business-apps" },
  { type: "service", title: "AI Implementation", description: "Smart automation and AI agents", href: "/services/ai-implementation" },
  { type: "service", title: "Business Automation", description: "Streamline repetitive tasks", href: "/services/business-automation" },
  { type: "service", title: "MVP Development", description: "Launch products quickly", href: "/services/mvp-development" },
  { type: "service", title: "Website Development", description: "Modern, responsive websites", href: "/services/website-development" },
  { type: "service", title: "Mobile Applications", description: "Native iOS and Android apps", href: "/services/mobile-applications" },
  
  // Case Studies
  { type: "case-study", title: "Evolutioner", description: "MVP Development - Wellness app migration to FlutterFlow", href: "/case-studies" },
  { type: "case-study", title: "Career Nerds", description: "Business App - Coaching platform on Bubble", href: "/case-studies" },
  { type: "case-study", title: "OXXO", description: "Business Automation - Valuation management platform", href: "/case-studies" },
  { type: "case-study", title: "CHIIP", description: "AI Implementation - AI-powered funding platform", href: "/case-studies" },
  { type: "case-study", title: "The Attributes", description: "Business Apps - Trust assessment enterprise platform", href: "/case-studies" },
  { type: "case-study", title: "MaidManage", description: "MVP Development - Native app for domestic workers", href: "/case-studies" },
  { type: "case-study", title: "GL Hunt", description: "Business Apps - Custom drag and drop solution", href: "/case-studies" },
  { type: "case-study", title: "TTR Sotheby's", description: "Business Automation - Private listing app for luxury real estate", href: "/case-studies" },
];

export const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(searchableContent);

  useEffect(() => {
    if (query.trim() === "") {
      setResults(searchableContent);
      return;
    }

    const filtered = searchableContent.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  }, [query]);

  const handleResultClick = (href: string) => {
    onOpenChange(false);
    setQuery("");
    window.location.href = href;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>Search Services & Case Studies</DialogTitle>
        </DialogHeader>
        
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search for services, case studies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10"
            autoFocus
          />
        </div>

        <div className="flex-1 overflow-y-auto space-y-2 mt-4">
          {results.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No results found for "{query}"
            </div>
          ) : (
            results.map((item, index) => (
              <Card
                key={index}
                className="p-4 hover:bg-muted/50 cursor-pointer transition-colors"
                onClick={() => handleResultClick(item.href)}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                    {item.type === "service" ? (
                      <Briefcase className="h-4 w-4 text-primary" />
                    ) : (
                      <FileText className="h-4 w-4 text-primary" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{item.title}</h3>
                      <span className="text-xs text-muted-foreground capitalize">
                        {item.type.replace("-", " ")}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
