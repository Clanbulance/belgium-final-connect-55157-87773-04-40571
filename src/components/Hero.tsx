import { CheckCircle2, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-belgium.jpg";
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
            <span className="text-primary-foreground">{t('hero.badge')}</span>
          </div>

          <h1 className="hero-title">
            {t('hero.title')}
            <span className="hero-title-gradient">
              {t('hero.title.gradient')}
            </span>
          </h1>

          <p className="hero-subtitle">
            {t('hero.subtitle')}
          </p>

          {/* Value Props */}
          <div className="grid grid-md-2 gap-4 mb-12 max-w-2xl mx-auto">
            <div className="value-prop-card">
              <CheckCircle2 style={{ width: '1.5rem', height: '1.5rem', flexShrink: 0, marginTop: '0.25rem' }} className="text-secondary" />
              <div>
                <h3 className="font-semibold text-primary-foreground mb-1">{t('hero.value1.title')}</h3>
                <p className="text-sm" style={{ color: 'hsl(0 0% 100% / 0.8)' }}>{t('hero.value1.desc')}</p>
              </div>
            </div>
            <div className="value-prop-card">
              <CheckCircle2 style={{ width: '1.5rem', height: '1.5rem', flexShrink: 0, marginTop: '0.25rem' }} className="text-secondary" />
              <div>
                <h3 className="font-semibold text-primary-foreground mb-1">{t('hero.value2.title')}</h3>
                <p className="text-sm" style={{ color: 'hsl(0 0% 100% / 0.8)' }}>{t('hero.value2.desc')}</p>
              </div>
            </div>
            <div className="value-prop-card">
              <CheckCircle2 style={{ width: '1.5rem', height: '1.5rem', flexShrink: 0, marginTop: '0.25rem' }} className="text-secondary" />
              <div>
                <h3 className="font-semibold text-primary-foreground mb-1">{t('hero.value3.title')}</h3>
                <p className="text-sm" style={{ color: 'hsl(0 0% 100% / 0.8)' }}>{t('hero.value3.desc')}</p>
              </div>
            </div>
            <div className="value-prop-card">
              <CheckCircle2 style={{ width: '1.5rem', height: '1.5rem', flexShrink: 0, marginTop: '0.25rem' }} className="text-secondary" />
              <div>
                <h3 className="font-semibold text-primary-foreground mb-1">{t('hero.value4.title')}</h3>
                <p className="text-sm" style={{ color: 'hsl(0 0% 100% / 0.8)' }}>{t('hero.value4.desc')}</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 justify-center flex-md-row">
            <button 
              className="button-hero group"
              onClick={() => scrollToSection('contact')}
            >
              {t('hero.cta.primary')}
              <ArrowRight style={{ marginLeft: '0.5rem', width: '1.25rem', height: '1.25rem' }} />
            </button>
            <button 
              className="button-outline-hero"
              onClick={() => scrollToSection('pricing')}
            >
              {t('hero.cta.secondary')}
            </button>
          </div>

          {/* Quick Note */}
          <p className="text-sm mt-8" style={{ color: 'hsl(0 0% 100% / 0.7)' }}>
            {t('hero.note')}
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="hero-gradient-overlay" />
    </section>
  );
};
