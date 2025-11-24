export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4 text-gradient">Agency</h3>
            <p className="text-muted-foreground">
              Building digital solutions that drive real business results.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Consulting</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>hello@agency.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Business St</li>
              <li>San Francisco, CA 94107</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>© 2024 Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
