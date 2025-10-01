import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import { useState, useEffect } from "react";

interface PricingPackage {
  name: string;
  price: string;
  delivery: string;
  desc: string;
  popular: boolean;
  features: string[];
  cta: string;
}

interface PricingData {
  title: string;
  subtitle: string;
  packages: PricingPackage[];
}

const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const handlePricingClick = (tierName: string) => {
  toast.success(`Great choice! Let's discuss the ${tierName} package.`, {
    description: "We'll get in touch with you shortly.",
  });
  scrollToContact();
};

export const Pricing = () => {
  const { language, t } = useLanguage();
  const [pricingData, setPricingData] = useState<PricingData | null>(null);

  useEffect(() => {
    const loadPricing = async () => {
      try {
        const module = await import(`../content/pricing.${language}.json`);
        setPricingData(module.default);
      } catch (error) {
        console.error('Failed to load pricing:', error);
      }
    };
    loadPricing();
  }, [language]);

  if (!pricingData) return null;

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            {pricingData.title}
          </h2>
          <p className="section-subtitle">
            {pricingData.subtitle}
          </p>
        </div>

        <div className="grid grid-md-2 grid-lg-3 gap-8 mb-12">
          {pricingData.packages.map((tier) => (
            <Card 
              key={tier.name} 
              className={`relative flex flex-col ${tier.popular ? 'border-primary shadow-lg scale-105' : ''}`}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent">
                  {t('pricing.popular')}
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <CardDescription>{tier.desc}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t('pricing.delivery')}: {tier.delivery}
                </p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={tier.popular ? "default" : "outline"}
                  onClick={() => handlePricingClick(tier.name)}
                >
                  {tier.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* SEO/Geo Fix Package */}
        <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent">
          <CardHeader>
            <CardTitle className="text-2xl">{t('pricing.seo.title')}</CardTitle>
            <p className="text-sm text-muted-foreground">{t('pricing.seo.delivery')}</p>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{t('pricing.seo.desc')}</p>
            <Button 
              variant="outline" 
              className="border-accent hover:bg-accent/10"
              onClick={() => handlePricingClick('SEO/Geo Fix')}
            >
              {t('pricing.seo.cta')}
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
