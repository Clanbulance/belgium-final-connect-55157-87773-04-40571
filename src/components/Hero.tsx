import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-belgium.jpg";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 hero-background"
        style={{
          '--hero-image': `url(${heroImage})`
        } as React.CSSProperties}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Partnership Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-6 py-2 mb-8">
            <span className="text-secondary font-semibold">★★★★★</span>
            <span className="text-primary-foreground">Official Belgian Partner of Otterino</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
            Premium Web Solutions for
            <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Belgian Businesses
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Swiss-engineered quality meets Belgian expertise. We deliver fast, secure, and automated websites that drive growth.
          </p>

          {/* Value Props */}
          <div className="grid md:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
            <div className="flex items-start gap-3 text-left bg-card/10 backdrop-blur-sm rounded-lg p-4 border border-primary/20">
              <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-primary-foreground mb-1">No Vendor Lock-in</h3>
                <p className="text-sm text-primary-foreground/80">Complete ownership of your code and data</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left bg-card/10 backdrop-blur-sm rounded-lg p-4 border border-primary/20">
              <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-primary-foreground mb-1">Tri-Lingual Support</h3>
                <p className="text-sm text-primary-foreground/80">Dutch, French, and English ready</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left bg-card/10 backdrop-blur-sm rounded-lg p-4 border border-primary/20">
              <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-primary-foreground mb-1">EU Compliant Hosting</h3>
                <p className="text-sm text-primary-foreground/80">Belgian & Swiss data centers</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left bg-card/10 backdrop-blur-sm rounded-lg p-4 border border-primary/20">
              <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-primary-foreground mb-1">Smart Automation</h3>
                <p className="text-sm text-primary-foreground/80">Marketing & business process automation</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg group"
              onClick={() => scrollToSection('contact')}
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
              onClick={() => scrollToSection('pricing')}
            >
              View Pricing
            </Button>
          </div>

          {/* Quick Note */}
          <p className="text-sm text-primary-foreground/70 mt-8">
            🚀 Express landing page? First draft in 48 hours. Starting from €399
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
