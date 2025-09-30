import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Building2 className="w-8 h-8 text-primary" />
            <div>
              <h2 className="font-bold text-lg text-foreground">Otterino Belgium</h2>
              <p className="text-xs text-muted-foreground">Official Belgian Partner</p>
            </div>
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-foreground hover:text-primary transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection('partnership')} className="text-foreground hover:text-primary transition-colors">
              Partnership
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
              Contact
            </button>
          </div>

          <Button variant="hero" size="sm" onClick={() => scrollToSection('contact')} className="!shadow-none hover:!shadow-none !transition-none">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};
