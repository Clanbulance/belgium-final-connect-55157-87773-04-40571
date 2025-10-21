import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const scrollToContact = () => {
  const element = document.getElementById("contact");
  if (element) {
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

        <div className="mt-20 text-center">
          <Card className="pricing-seo-card">
            <CardHeader>
              <CardTitle className="text-2xl">{t("pricing.seo.title")}</CardTitle>
              <div className="text-3xl font-bold text-primary">€990</div>
              <CardDescription>{t("pricing.seo.delivery")}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{t("pricing.seo.desc")}</p>
              <Button variant="secondary" size="lg" onClick={() => handlePricingClick("SEO / Geo Fix")}>
                {t("pricing.seo.cta")}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
