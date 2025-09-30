import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Target, Cog, TrendingUp, Globe, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Zap,
      titleKey: 'services.1.title',
      descKey: 'services.1.desc',
      outcomeKey: 'services.1.outcome'
    },
    {
      icon: Target,
      titleKey: 'services.2.title',
      descKey: 'services.2.desc',
      outcomeKey: 'services.2.outcome'
    },
    {
      icon: Cog,
      titleKey: 'services.3.title',
      descKey: 'services.3.desc',
      outcomeKey: 'services.3.outcome'
    },
    {
      icon: TrendingUp,
      titleKey: 'services.4.title',
      descKey: 'services.4.desc',
      outcomeKey: 'services.4.outcome'
    },
    {
      icon: Globe,
      titleKey: 'services.5.title',
      descKey: 'services.5.desc',
      outcomeKey: 'services.5.outcome'
    },
    {
      icon: Shield,
      titleKey: 'services.6.title',
      descKey: 'services.6.desc',
      outcomeKey: 'services.6.outcome'
    }
  ];

  return (
    <section id="services" className="py-24" style={{ backgroundColor: 'hsl(180 20% 96% / 0.3)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            {t('services.title')}
          </h2>
          <p className="section-subtitle">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-md-2 grid-lg-3 gap-8">
          {services.map((service) => (
            <Card key={service.titleKey} className="service-card group">
              <CardHeader>
                <div className="icon-container-primary">
                  <service.icon className="w-6 h-6 text-primary-foreground" style={{ width: '1.5rem', height: '1.5rem' }} />
                </div>
                <CardTitle className="text-xl">{t(service.titleKey)}</CardTitle>
                <CardDescription className="text-base">{t(service.descKey)}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                  <p className="text-sm font-medium text-accent">
                    ✓ {t(service.outcomeKey)}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
