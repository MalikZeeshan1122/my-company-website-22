import { Button } from "@/components/ui/button";
import { CheckCircle, Home, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ContactSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-primary/5 px-4">
      <div className="max-w-2xl w-full">
        <div className="bg-card rounded-3xl p-12 md:p-16 border border-border shadow-2xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="h-20 w-20 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
              <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-500" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Message Sent Successfully!
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
            Thank you for reaching out! We've received your message and will get back to you within 24 hours.
          </p>

          <div className="bg-muted/50 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3 text-left">
              <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">What Happens Next?</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• You'll receive a confirmation email shortly</li>
                  <li>• Our team will review your project details</li>
                  <li>• We'll reach out with next steps within 24 hours</li>
                  <li>• Feel free to reply to our email with any additional information</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="w-full sm:w-auto">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View Our Services
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Need urgent assistance? Email us directly at{" "}
            <a href="mailto:malikzeeshan3.1417@gmail.com" className="text-primary hover:underline">
              malikzeeshan3.1417@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSuccess;
