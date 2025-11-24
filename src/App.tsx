import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BackToTop } from "@/components/BackToTop";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SettingsModal } from "@/components/SettingsModal";
import { SettingsProvider } from "@/context/SettingsContext";
import Index from "./pages/Index";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import Services from "./pages/Services";
import Process from "./pages/Process";
import BusinessApps from "./pages/services/BusinessApps";
import AIImplementation from "./pages/services/AIImplementation";
import BusinessAutomation from "./pages/services/BusinessAutomation";
import MVPDevelopment from "./pages/services/MVPDevelopment";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
import MobileApplications from "./pages/services/MobileApplications";
import ContactSuccess from "./pages/ContactSuccess";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import { ChatWidget } from "@/components/chat/ChatWidget";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SettingsProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ScrollProgress />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/business-apps" element={<BusinessApps />} />
          <Route path="/services/ai-implementation" element={<AIImplementation />} />
          <Route path="/services/business-automation" element={<BusinessAutomation />} />
          <Route path="/services/mvp-development" element={<MVPDevelopment />} />
          <Route path="/services/website-development" element={<WebsiteDevelopment />} />
          <Route path="/services/mobile-applications" element={<MobileApplications />} />
          <Route path="/process" element={<Process />} />
          <Route path="/contact-success" element={<ContactSuccess />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatWidget />
        <BackToTop />
        <SettingsModal />
      </BrowserRouter>
    </TooltipProvider>
    </SettingsProvider>
  </QueryClientProvider>
);

export default App;
