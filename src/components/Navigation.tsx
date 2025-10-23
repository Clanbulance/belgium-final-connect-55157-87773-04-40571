import { Building2, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    window.history.pushState(null, '', `#${id}`);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="nav-bar">
      <div className="container mx-auto px-4">
        <div className="nav-content">
          <button 
            onClick={() => {
              window.history.pushState(null, '', '/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="nav-logo"
          >
            <Building2 className="logo-icon" />
            <div>
              <h2 className="logo-title">RJDP Consulting</h2>
              <p className="logo-subtitle">{t('nav.subtitle')}</p>
            </div>
          </button>
          
          <div className="nav-links hidden-md flex-md items-center gap-6">
            <button onClick={() => scrollToSection('services')} className="nav-link">
              {t('nav.services')}
            </button>
            <button onClick={() => scrollToSection('pricing')} className="nav-link">
              {t('nav.pricing')}
            </button>
            <button onClick={() => scrollToSection('partnership')} className="nav-link">
              {t('nav.partnership')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              {t('nav.contact')}
            </button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
              className="flex items-center gap-2"
            >
              <Languages className="w-4 h-4" />
              {language === 'nl' ? 'EN' : 'NL'}
            </Button>
          </div>

          <button className="button-nav-cta" onClick={() => scrollToSection('contact')}>
            {t('nav.cta')}
          </button>
        </div>
      </div>
    </nav>
  );
};
