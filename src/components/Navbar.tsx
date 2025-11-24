import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-gradient">
              Agency
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/process" className="text-foreground/80 hover:text-foreground transition-colors">
              Our process
            </a>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground/80 hover:text-foreground transition-colors outline-none">
                Services
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 z-[100] bg-background" align="start">
                <div className="px-2 py-3">
                  <DropdownMenuLabel className="text-base font-bold">For Businesses</DropdownMenuLabel>
                  <p className="text-xs text-muted-foreground mt-1 mb-3 px-2">
                    Custom software to streamline operations, from internal tools and CRMs to AI-powered automation.
                  </p>
                </div>
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <a href="/services" className="cursor-pointer">Business Apps</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/services" className="cursor-pointer">AI Implementation</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/services" className="cursor-pointer">Business Automation</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/services" className="cursor-pointer">MVPs</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/services" className="cursor-pointer">Website Development</a>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                
                <DropdownMenuSeparator />
                
                <div className="px-2 py-3">
                  <DropdownMenuLabel className="text-base font-bold">For Startups</DropdownMenuLabel>
                  <p className="text-xs text-muted-foreground mt-1 mb-3 px-2">
                    From idea to launch. We build the high-impact digital products that define your vision.
                  </p>
                </div>
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <a href="/services" className="cursor-pointer">Mobile Applications</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/services" className="cursor-pointer">MVPs</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/services" className="cursor-pointer">Website Development</a>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <a href="/case-studies" className="text-foreground/80 hover:text-foreground transition-colors">
              Case Studies
            </a>
            <a href="/about" className="text-foreground/80 hover:text-foreground transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </a>
            <Button className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
          {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 animate-fade-in">
            <a
              href="/process"
              className="block text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Our process
            </a>
            
            <div className="space-y-2">
              <div className="text-foreground/80 font-medium px-0">Services</div>
              <div className="pl-4 space-y-2">
                <div className="space-y-1">
                  <div className="text-sm font-bold">For Businesses</div>
                  <p className="text-xs text-muted-foreground mb-2">
                    Custom software to streamline operations, from internal tools and CRMs to AI-powered automation.
                  </p>
                </div>
                <a
                  href="/services"
                  className="block text-sm text-foreground/80 hover:text-foreground transition-colors pl-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Business Apps
                </a>
                <a
                  href="/services"
                  className="block text-sm text-foreground/80 hover:text-foreground transition-colors pl-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  AI Implementation
                </a>
                <a
                  href="/services"
                  className="block text-sm text-foreground/80 hover:text-foreground transition-colors pl-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Business Automation
                </a>
                <a
                  href="/services"
                  className="block text-sm text-foreground/80 hover:text-foreground transition-colors pl-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  MVPs
                </a>
                <a
                  href="/services"
                  className="block text-sm text-foreground/80 hover:text-foreground transition-colors pl-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Website Development
                </a>
                
                <div className="space-y-1 pt-3">
                  <div className="text-sm font-bold">For Startups</div>
                  <p className="text-xs text-muted-foreground mb-2">
                    From idea to launch. We build the high-impact digital products that define your vision.
                  </p>
                </div>
                <a
                  href="/services"
                  className="block text-sm text-foreground/80 hover:text-foreground transition-colors pl-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Mobile Applications
                </a>
                <a
                  href="/services"
                  className="block text-sm text-foreground/80 hover:text-foreground transition-colors pl-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  MVPs
                </a>
                <a
                  href="/services"
                  className="block text-sm text-foreground/80 hover:text-foreground transition-colors pl-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Website Development
                </a>
              </div>
            </div>
            
            <a
              href="/case-studies"
              className="block text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </a>
            <a
              href="/about"
              className="block text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="w-full bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
