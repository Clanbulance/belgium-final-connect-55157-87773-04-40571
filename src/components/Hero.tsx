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
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="hero-background"
        style={{
          '--hero-image': `url(${heroImage})`
        } as React.CSSProperties}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Partnership Badge */}
          <div className="hero-badge">
            <span className="text-secondary font-semibold">★★★★★</span>
            <span className="text-primary-foreground">Official Belgian Partner of Otterino</span>
          </div>

          <h1 className="hero-title">
            Premium Web Solutions for
            <span className="hero-title-gradient">
              Belgian Businesses
            </span>
          </h1>

          <p className="hero-subtitle">
            Swiss-engineered quality meets Belgian expertise. We deliver fast, secure, and automated websites that drive growth.
          </p>

          {/* Value Props */}
          <div className="grid grid-md-2 gap-4 mb-12 max-w-2xl mx-auto">
            <div className="value-prop-card">
              <CheckCircle2 style={{ width: '1.5rem', height: '1.5rem', flexShrink: 0, marginTop: '0.25rem' }} className="text-secondary" />
              <div>
                <h3 className="font-semibold text-primary-foreground mb-1">No Vendor Lock-in</h3>
                <p className="text-sm" style={{ color: 'hsl(0 0% 100% / 0.8)' }}>Complete ownership of your code and data</p>
              </div>
            </div>
            <div className="value-prop-card">
              <CheckCircle2 style={{ width: '1.5rem', height: '1.5rem', flexShrink: 0, marginTop: '0.25rem' }} className="text-secondary" />
              <div>
                <h3 className="font-semibold text-primary-foreground mb-1">Tri-Lingual Support</h3>
                <p className="text-sm" style={{ color: 'hsl(0 0% 100% / 0.8)' }}>Dutch, French, and English ready</p>
              </div>
            </div>
            <div className="value-prop-card">
              <CheckCircle2 style={{ width: '1.5rem', height: '1.5rem', flexShrink: 0, marginTop: '0.25rem' }} className="text-secondary" />
              <div>
                <h3 className="font-semibold text-primary-foreground mb-1">EU Compliant Hosting</h3>
                <p className="text-sm" style={{ color: 'hsl(0 0% 100% / 0.8)' }}>Belgian & Swiss data centers</p>
              </div>
            </div>
            <div className="value-prop-card">
              <CheckCircle2 style={{ width: '1.5rem', height: '1.5rem', flexShrink: 0, marginTop: '0.25rem' }} className="text-secondary" />
              <div>
                <h3 className="font-semibold text-primary-foreground mb-1">Smart Automation</h3>
                <p className="text-sm" style={{ color: 'hsl(0 0% 100% / 0.8)' }}>Marketing & business process automation</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 justify-center flex-md-row">
            <button 
              className="button-hero group"
              onClick={() => scrollToSection('contact')}
            >
              Schedule Free Consultation
              <ArrowRight style={{ marginLeft: '0.5rem', width: '1.25rem', height: '1.25rem' }} />
            </button>
            <button 
              className="button-outline-hero"
              onClick={() => scrollToSection('pricing')}
            >
              View Pricing
            </button>
          </div>

          {/* Quick Note */}
          <p className="text-sm mt-8" style={{ color: 'hsl(0 0% 100% / 0.7)' }}>
            🚀 Express landing page? First draft in 48 hours. Starting from €399
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="hero-gradient-overlay" />
    </section>
  );
};
