import { Building2, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="nav-bar">
      <div className="container mx-auto px-4">
        <div className="nav-content">
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
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
          </a>
          
          <div className="nav-links hidden-md flex-md items-center gap-6">
            <a href="#services" className="nav-link">
              {t('nav.services')}
            </a>
            <a href="#pricing" className="nav-link">
              {t('nav.pricing')}
            </a>
            <a href="#partnership" className="nav-link">
              {t('nav.partnership')}
            </a>
            <a href="#contact" className="nav-link">
              {t('nav.contact')}
            </a>
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

          <a href="#contact" className="button-nav-cta">
            {t('nav.cta')}
          </a>
        </div>
      </div>
    </nav>
  );
};
