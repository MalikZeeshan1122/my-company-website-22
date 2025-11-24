import { Button } from "@/components/ui/button";
import { Menu, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ServicesMegaMenu } from "./ServicesMegaMenu";
import { SearchDialog } from "./SearchDialog";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    // Trigger logo animation after a brief delay
    const timer = setTimeout(() => {
      setLogoLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className={`text-2xl font-bold text-gradient transition-all duration-1000 ${
                logoLoaded 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-50'
              }`}
              style={{
                transformOrigin: 'center',
              }}
            >
              <span className="inline-block animate-logo-reveal">A</span>
              <span className="inline-block animate-logo-reveal" style={{ animationDelay: '0.1s' }}>g</span>
              <span className="inline-block animate-logo-reveal" style={{ animationDelay: '0.2s' }}>e</span>
              <span className="inline-block animate-logo-reveal" style={{ animationDelay: '0.3s' }}>n</span>
              <span className="inline-block animate-logo-reveal" style={{ animationDelay: '0.4s' }}>c</span>
              <span className="inline-block animate-logo-reveal" style={{ animationDelay: '0.5s' }}>y</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-foreground/80 hover:text-foreground transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            
            <ServicesMegaMenu />
            
            <Link to="/case-studies" className="text-foreground/80 hover:text-foreground transition-colors">
              Case Studies
            </Link>
            
            <Link to="/process" className="text-foreground/80 hover:text-foreground transition-colors">
              Our process
            </Link>
            
            <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors">
              About
            </Link>
            
            <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors" onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Contact
            </a>
            <Button className="bg-primary hover:bg-primary/90" onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-foreground/80 hover:text-foreground transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
          {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 animate-fade-in">
            <div className="space-y-2">
              <div className="text-foreground/80 font-medium px-0">Services</div>
              <div className="pl-4 space-y-2">
                <div className="space-y-1">
                  <div className="text-sm font-bold">For Businesses</div>
                  <p className="text-xs text-muted-foreground mb-2">
                    Custom software to streamline operations, from internal tools and CRMs to AI-powered automation.
                  </p>
                </div>
                <Link
                  to="/services"
                  className="block text-sm text-foreground/80 hover:text-foreground transition-colors pl-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Business Apps
                </Link>
                <Link
                  to="/services"
                  className="block text-sm text-foreground/80 hover:text-foreground transition-colors pl-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  AI Implementation
                </Link>
                <Link
                  to="/services"
                  className="block text-sm text-foreground/80 hover:text-foreground transition-colors pl-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Business Automation
                </Link>
                <Link
                  to="/services"
                  className="block text-sm text-foreground/80 hover:text-foreground transition-colors pl-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  MVPs
                </Link>
                <Link
                  to="/services"
                  className="block text-sm text-foreground/80 hover:text-foreground transition-colors pl-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Website Development
                </Link>
                
                <div className="space-y-1 pt-3">
                  <div className="text-sm font-bold">For Startups</div>
                  <p className="text-xs text-muted-foreground mb-2">
                    From idea to launch. We build the high-impact digital products that define your vision.
                  </p>
                </div>
                <Link
                  to="/services"
                  className="block text-sm text-foreground/80 hover:text-foreground transition-colors pl-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Mobile Applications
                </Link>
                <Link
                  to="/services"
                  className="block text-sm text-foreground/80 hover:text-foreground transition-colors pl-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  MVPs
                </Link>
                <Link
                  to="/services"
                  className="block text-sm text-foreground/80 hover:text-foreground transition-colors pl-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Website Development
                </Link>
              </div>
            </div>
            
            <Link
              to="/case-studies"
              className="block text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </Link>
            <Link
              to="/process"
              className="block text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Our process
            </Link>
            <Link
              to="/about"
              className="block text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <a
              href="#contact"
              className="block text-foreground/80 hover:text-foreground transition-colors"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              Contact
            </a>
            <Button className="w-full bg-primary hover:bg-primary/90" onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(false);
              setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}>
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
    
    <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </>
  );
};
