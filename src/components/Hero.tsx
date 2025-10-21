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
    <section className="hero-minimal">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="hero-title-minimal">
            {t('hero.title')}
            <br />
            <span className="text-primary">{t('hero.title.gradient')}</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle-minimal">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              className="button-primary-minimal group"
              onClick={() => scrollToSection('contact')}
            >
              {t('hero.cta.primary')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button 
              className="button-secondary-minimal"
              onClick={() => scrollToSection('pricing')}
            >
              {t('hero.cta.secondary')}
            </button>
          </div>

          {/* Value Props */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="value-card-minimal">
              <CheckCircle2 className="w-5 h-5 text-primary mb-2" />
              <h3 className="font-semibold mb-1">{t('hero.value1.title')}</h3>
              <p className="text-sm text-muted-foreground">{t('hero.value1.desc')}</p>
            </div>
            
            <div className="value-card-minimal">
              <CheckCircle2 className="w-5 h-5 text-primary mb-2" />
              <h3 className="font-semibold mb-1">{t('hero.value2.title')}</h3>
              <p className="text-sm text-muted-foreground">{t('hero.value2.desc')}</p>
            </div>
            
            <div className="value-card-minimal">
              <CheckCircle2 className="w-5 h-5 text-primary mb-2" />
              <h3 className="font-semibold mb-1">{t('hero.value3.title')}</h3>
              <p className="text-sm text-muted-foreground">{t('hero.value3.desc')}</p>
            </div>
            
            <div className="value-card-minimal">
              <CheckCircle2 className="w-5 h-5 text-primary mb-2" />
              <h3 className="font-semibold mb-1">{t('hero.value4.title')}</h3>
              <p className="text-sm text-muted-foreground">{t('hero.value4.desc')}</p>
            </div>
          </div>

          {/* Note */}
          <p className="text-sm text-center text-muted-foreground mt-12">
            {t('hero.note')}
          </p>
        </div>
      </div>
    </section>
  );
};
