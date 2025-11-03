import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const scrollToContact = () => {
  const element = document.getElementById("contact");
  if (element) {
    window.history.pushState(null, '', '#contact');
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const handlePricingClick = (tierName: string) => {
  toast.success(`Great choice! Let's discuss the ${tierName} package.`, {
    description: "Scroll down to fill out the contact form.",
  });
  scrollToContact();
};

export const Pricing = () => {
  const { t } = useLanguage();

  const pricingTiers = [
    {
      name: t("pricing.tier1.name"),
      price: "€499",
      delivery: "2-5 " + (t("pricing.delivery").toLowerCase().includes("oplevering") ? "dagen" : "days"),
      description: t("pricing.tier1.desc"),
      features: [
        t("pricing.tier1.f1"),
        t("pricing.tier1.f2"),
        t("pricing.tier1.f3"),
        t("pricing.tier1.f4"),
        t("pricing.tier1.f5"),
      ],
      cta: t("pricing.cta"),
      popular: false,
    },
    {
      name: t("pricing.tier2.name"),
      price: "€999",
      delivery: "1-2 " + (t("pricing.delivery").toLowerCase().includes("oplevering") ? "weken" : "weeks"),
      description: t("pricing.tier2.desc"),
      features: [
        t("pricing.tier2.f1"),
        t("pricing.tier2.f2"),
        t("pricing.tier2.f3"),
        t("pricing.tier2.f4"),
        t("pricing.tier2.f5"),
      ],
      cta: t("pricing.cta"),
      popular: true,
    },
    {
      name: t("pricing.tier3.name"),
      price: "€1999",
      delivery: "2-4 " + (t("pricing.delivery").toLowerCase().includes("oplevering") ? "weken" : "weeks"),
      description: t("pricing.tier3.desc"),
      features: [
        t("pricing.tier3.f1"),
        t("pricing.tier3.f2"),
        t("pricing.tier3.f3"),
        t("pricing.tier3.f4"),
        t("pricing.tier3.f5"),
        t("pricing.tier3.f6"),
      ],
      cta: t("pricing.cta"),
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24" style={{ backgroundColor: "var(--background)" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="section-title">{t("pricing.title")}</h2>
          <p className="section-subtitle">{t("pricing.subtitle")}</p>
        </div>

        <div className="grid grid-md-2 grid-lg-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier) => (
            <Card key={tier.name} className={`pricing-card relative ${tier.popular ? "pricing-card-popular" : ""}`}>
              {tier.popular && (
                <div className="pricing-badge-container">
                  <span className="popular-badge">{t("pricing.popular")}</span>
                </div>
              )}

              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl mb-4">{tier.name}</CardTitle>
                <div className="mb-3">
                  <span className="text-4xl font-bold text-primary">{tier.price}</span>
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                  {t("pricing.delivery")}: {tier.delivery}
                </div>
                <CardDescription className="text-base">{tier.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="pricing-feature">
                      <Check
                        style={{ width: "1.25rem", height: "1.25rem", flexShrink: 0, marginTop: "0.125rem" }}
                        className="text-accent"
                      />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={tier.popular ? "hero" : "outline"}
                  className="w-full"
                  size="lg"
                  onClick={() => handlePricingClick(tier.name)}
                >
                  {tier.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* IT Services Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="section-title mt-16">{t("pricing.it.title")}</h2>
            <p className="text-lg text-muted-foreground mb-2">{t("pricing.it.subtitle")}</p>
            <p className="text-sm text-muted-foreground italic">{t("pricing.it.note")}</p>
          </div>

          <div className="grid grid-md-2 gap-8 max-w-6xl mx-auto">
            {/* Digital Starter Pack */}
            <Card className="pricing-card flex flex-col h-full">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl mb-4">{t("pricing.it1.name")}</CardTitle>
                <div className="mb-3">
                  <span className="text-2xl font-bold text-primary">{t("pricing.it1.price")}</span>
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                  {t("pricing.delivery")}: {t("pricing.it1.delivery")}
                </div>
                <CardDescription className="text-base">{t("pricing.it1.desc")}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <ul className="space-y-3 flex-1">
                  <li className="pricing-feature">
                    <Check style={{ width: "1.25rem", height: "1.25rem", flexShrink: 0 }} className="text-accent" />
                    <span className="text-sm">{t("pricing.it1.f1")}</span>
                  </li>
                  <li className="pricing-feature">
                    <Check style={{ width: "1.25rem", height: "1.25rem", flexShrink: 0 }} className="text-accent" />
                    <span className="text-sm">{t("pricing.it1.f2")}</span>
                  </li>
                  <li className="pricing-feature">
                    <Check style={{ width: "1.25rem", height: "1.25rem", flexShrink: 0 }} className="text-accent" />
                    <span className="text-sm">{t("pricing.it1.f3")}</span>
                  </li>
                  <li className="pricing-feature">
                    <Check style={{ width: "1.25rem", height: "1.25rem", flexShrink: 0 }} className="text-accent" />
                    <span className="text-sm">{t("pricing.it1.f5")}</span>
                  </li>
                  <li className="pricing-feature">
                    <Check style={{ width: "1.25rem", height: "1.25rem", flexShrink: 0 }} className="text-accent" />
                    <span className="text-sm">{t("pricing.it1.f6")}</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-6" size="lg" onClick={() => handlePricingClick(t("pricing.it1.name"))}>
                  {t("pricing.cta")}
                </Button>
              </CardContent>
            </Card>

            {/* Business Launch */}
            <Card className="pricing-card relative flex flex-col h-full">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl mb-4">{t("pricing.it2.name")}</CardTitle>
                <div className="mb-3">
                  <span className="text-2xl font-bold text-primary">{t("pricing.it2.price")}</span>
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                  {t("pricing.delivery")}: {t("pricing.it2.delivery")}
                </div>
                <CardDescription className="text-base">{t("pricing.it2.desc")}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <ul className="space-y-3 flex-1">
                  <li className="pricing-feature">
                    <Check style={{ width: "1.25rem", height: "1.25rem", flexShrink: 0 }} className="text-accent" />
                    <span className="text-sm">{t("pricing.it2.f1")}</span>
                  </li>
                  <li className="pricing-feature">
                    <Check style={{ width: "1.25rem", height: "1.25rem", flexShrink: 0 }} className="text-accent" />
                    <span className="text-sm">{t("pricing.it2.f2")}</span>
                  </li>
                  <li className="pricing-feature">
                    <Check style={{ width: "1.25rem", height: "1.25rem", flexShrink: 0 }} className="text-accent" />
                    <span className="text-sm">{t("pricing.it2.f3")}</span>
                  </li>
                  <li className="pricing-feature">
                    <Check style={{ width: "1.25rem", height: "1.25rem", flexShrink: 0 }} className="text-accent" />
                    <span className="text-sm">{t("pricing.it2.f5")}</span>
                  </li>
                  <li className="pricing-feature">
                    <Check style={{ width: "1.25rem", height: "1.25rem", flexShrink: 0 }} className="text-accent" />
                    <span className="text-sm">{t("pricing.it2.f6")}</span>
                  </li>
                  <li className="pricing-feature">
                    <Check style={{ width: "1.25rem", height: "1.25rem", flexShrink: 0 }} className="text-accent" />
                    <span className="text-sm">{t("pricing.it2.f7")}</span>
                  </li>
                </ul>
                <Button variant="hero" className="w-full mt-6" size="lg" onClick={() => handlePricingClick(t("pricing.it2.name"))}>
                  {t("pricing.cta")}
                </Button>
              </CardContent>
            </Card>

            {/* Complete IT Setup */}
            <Card className="pricing-card flex flex-col h-full">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl mb-4">{t("pricing.it3.name")}</CardTitle>
                <div className="mb-3">
                  <span className="text-2xl font-bold text-primary">{t("pricing.it3.price")}</span>
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                  {t("pricing.delivery")}: {t("pricing.it3.delivery")}
                </div>
                <CardDescription className="text-base">{t("pricing.it3.desc")}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <ul className="space-y-3 flex-1">
                  <li className="pricing-feature">
                    <Check style={{ width: "1.25rem", height: "1.25rem", flexShrink: 0 }} className="text-accent" />
                    <span className="text-sm">{t("pricing.it3.f1")}</span>
                  </li>
                  <li className="pricing-feature">
                    <Check style={{ width: "1.25rem", height: "1.25rem", flexShrink: 0 }} className="text-accent" />
                    <span className="text-sm">{t("pricing.it3.f2")}</span>
                  </li>
                  <li className="pricing-feature">
                    <Check style={{ width: "1.25rem", height: "1.25rem", flexShrink: 0 }} className="text-accent" />
                    <span className="text-sm">{t("pricing.it3.f3")}</span>
                  </li>
                  <li className="pricing-feature">
                    <Check style={{ width: "1.25rem", height: "1.25rem", flexShrink: 0 }} className="text-accent" />
                    <span className="text-sm">{t("pricing.it3.f4")}</span>
                  </li>
                  <li className="pricing-feature">
                    <Check style={{ width: "1.25rem", height: "1.25rem", flexShrink: 0 }} className="text-accent" />
                    <span className="text-sm">{t("pricing.it3.f5")}</span>
                  </li>
                  <li className="pricing-feature">
                    <Check style={{ width: "1.25rem", height: "1.25rem", flexShrink: 0 }} className="text-accent" />
                    <span className="text-sm">{t("pricing.it3.f6")}</span>
                  </li>
                  <li className="pricing-feature">
                    <Check style={{ width: "1.25rem", height: "1.25rem", flexShrink: 0 }} className="text-accent" />
                    <span className="text-sm">{t("pricing.it3.f7")}</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-6" size="lg" onClick={() => handlePricingClick(t("pricing.it3.name"))}>
                  {t("pricing.cta")}
                </Button>
              </CardContent>
            </Card>

            {/* À La Carte Services */}
            <Card className="pricing-seo-card flex flex-col h-full">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{t("pricing.alacarte.name")}</CardTitle>
                <div className="text-xl font-bold text-primary">{t("pricing.alacarte.price")}</div>
                <CardDescription className="text-base">{t("pricing.alacarte.desc")}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <ul className="space-y-2 flex-1 text-sm text-muted-foreground">
                  <li>• {t("pricing.alacarte.f1")}</li>
                  <li>• {t("pricing.alacarte.f2")}</li>
                  <li>• {t("pricing.alacarte.f3")}</li>
                  <li>• {t("pricing.alacarte.f4")}</li>
                  <li>• {t("pricing.alacarte.f5")}</li>
                  <li>• {t("pricing.alacarte.f6")}</li>
                </ul>
                <div className="mt-6">
                  <Button variant="secondary" size="lg" className="w-full" onClick={() => handlePricingClick(t("pricing.alacarte.name"))}>
                    {t("pricing.alacarte.cta")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
