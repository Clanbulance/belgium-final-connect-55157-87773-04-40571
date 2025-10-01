import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Target, Cog, TrendingUp, Globe, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

interface ServiceItem {
  title: string;
  desc: string;
  outcome: string;
}

interface ServicesData {
  title: string;
  subtitle: string;
  items: ServiceItem[];
}

export const Services = () => {
  const { language } = useLanguage();
  const [servicesData, setServicesData] = useState<ServicesData | null>(null);

  const icons = [Zap, Target, Cog, TrendingUp, Globe, Shield];

  useEffect(() => {
    const loadServices = async () => {
      try {
        const module = await import(`../content/services.${language}.json`);
        setServicesData(module.default);
      } catch (error) {
        console.error('Failed to load services:', error);
      }
    };
    loadServices();
  }, [language]);

  if (!servicesData) return null;

  return (
    <section id="services" className="py-24" style={{ backgroundColor: 'hsl(180 20% 96% / 0.3)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            {servicesData.title}
          </h2>
          <p className="section-subtitle">
            {servicesData.subtitle}
          </p>
        </div>

        <div className="grid grid-md-2 grid-lg-3 gap-8">
          {servicesData.items.map((service, index) => {
            const Icon = icons[index] || Zap;
            return (
              <Card key={index} className="service-card group">
                <CardHeader>
                  <div className="icon-container-primary">
                    <Icon className="w-6 h-6 text-primary-foreground" style={{ width: '1.5rem', height: '1.5rem' }} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                    <p className="text-sm font-medium text-accent">
                      ✓ {service.outcome}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
