import { Building2 } from "lucide-react";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const Navigation = () => {
  return (
    <nav className="nav-bar">
      <div className="container mx-auto px-4">
        <div className="nav-content">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="nav-logo"
          >
            <Building2 className="logo-icon" />
            <div>
              <h2 className="logo-title">Otterino Belgium</h2>
              <p className="logo-subtitle">Official Belgian Partner</p>
            </div>
          </button>
          
          <div className="nav-links hidden-md flex-md items-center gap-8">
            <button onClick={() => scrollToSection('services')} className="nav-link">
              Services
            </button>
            <button onClick={() => scrollToSection('pricing')} className="nav-link">
              Pricing
            </button>
            <button onClick={() => scrollToSection('partnership')} className="nav-link">
              Partnership
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              Contact
            </button>
          </div>

          <button className="button-nav-cta" onClick={() => scrollToSection('contact')}>
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};
