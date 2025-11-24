import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4 text-gradient">Agency</h3>
            <p className="text-muted-foreground mb-4">
              Building digital solutions that drive real business results.
            </p>
            
            {/* Social Media Links */}
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors group"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="mailto:contact@agency.com"
                className="h-10 w-10 rounded-full bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors group"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-foreground transition-colors">AI for business</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Business apps</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Business automation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Mobile apps</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">MVP development</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Web design</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Platforms</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-foreground transition-colors">Glide Apps agency</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Bubble agency</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">FlutterFlow agency</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Webflow development</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Podcast</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">No-code tools</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Case studies</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Guides</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-foreground transition-colors">No-code development</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">What is Bubble.io?</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">FlutterFlow development</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Webflow development</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2012 - 2025 Agency. All Rights Reserved.
            </p>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
