import { CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="hero-section">
      {/* Animated Background */}
      <div className="hero-animated-bg" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Partnership Badge */}
          <div className="hero-badge animate-fade-in">
            <span className="text-secondary font-semibold text-lg">★★★★★</span>
            <span className="text-primary-foreground font-medium">{t('hero.badge')}</span>
          </div>

          <h1 className="hero-title-modern animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {t('hero.title')}
            <span className="hero-title-gradient-modern">
              {t('hero.title.gradient')}
            </span>
          </h1>

          <p className="hero-subtitle-modern animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 justify-center flex-md-row mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <button 
              className="button-hero-modern group"
              onClick={() => scrollToSection('contact')}
            >
              {t('hero.cta.primary')}
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button 
              className="button-outline-hero-modern"
              onClick={() => scrollToSection('pricing')}
            >
              {t('hero.cta.secondary')}
            </button>
          </div>

          {/* Value Props Grid */}
          <div className="grid grid-md-2 grid-lg-4 gap-4 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="value-prop-modern">
              <div className="value-prop-icon-wrapper">
                <CheckCircle2 className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-semibold text-primary-foreground mb-1">{t('hero.value1.title')}</h3>
              <p className="text-sm text-primary-foreground/80">{t('hero.value1.desc')}</p>
            </div>
            
            <div className="value-prop-modern">
              <div className="value-prop-icon-wrapper">
                <CheckCircle2 className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-semibold text-primary-foreground mb-1">{t('hero.value2.title')}</h3>
              <p className="text-sm text-primary-foreground/80">{t('hero.value2.desc')}</p>
            </div>
            
            <div className="value-prop-modern">
              <div className="value-prop-icon-wrapper">
                <CheckCircle2 className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-semibold text-primary-foreground mb-1">{t('hero.value3.title')}</h3>
              <p className="text-sm text-primary-foreground/80">{t('hero.value3.desc')}</p>
            </div>
            
            <div className="value-prop-modern">
              <div className="value-prop-icon-wrapper">
                <CheckCircle2 className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-semibold text-primary-foreground mb-1">{t('hero.value4.title')}</h3>
              <p className="text-sm text-primary-foreground/80">{t('hero.value4.desc')}</p>
            </div>
          </div>

          {/* Quick Note */}
          <p className="text-sm text-center mt-12 text-primary-foreground/70 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            {t('hero.note')}
          </p>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="hero-bottom-fade" />
    </section>
  );
};
