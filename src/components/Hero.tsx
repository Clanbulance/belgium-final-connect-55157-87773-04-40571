import { CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};
export const Hero = () => {
  const {
    t
  } = useLanguage();
  return <section className="hero-minimal">
      <div className="container mx-auto px-4 py-8">
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
            <button className="button-primary-minimal group" onClick={() => scrollToSection('contact')}>
              {t('hero.cta.primary')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="button-secondary-minimal" onClick={() => scrollToSection('pricing')}>
              {t('hero.cta.secondary')}
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 opacity-70">
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="whitespace-nowrap">No Vendor Lock-in</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="whitespace-nowrap">NL/FR/EN Support</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="whitespace-nowrap">EU-Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="whitespace-nowrap">On-site & Remote</span>
            </div>
          </div>

          {/* Note */}
          <p className="text-sm text-center text-muted-foreground mt-12">
            {t('hero.note')}
          </p>
        </div>
      </div>
    </section>;
};