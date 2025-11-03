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

          <div className="max-w-6xl mx-auto">
            <Card className="pricing-card">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl mb-4">Complete IT & Business Setup Solutions</CardTitle>
                <CardDescription className="text-lg">
                  From online presence to full infrastructure - we've got you covered
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  {/* Digital Starter */}
                  <div className="text-center">
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-primary mb-1">{t("pricing.it1.name")}</div>
                      <div className="text-sm text-muted-foreground mb-2">{t("pricing.it1.delivery")}</div>
                      <div className="text-lg font-semibold text-primary">{t("pricing.it1.price")}</div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{t("pricing.it1.desc")}</p>
                  </div>

                  {/* Business Launch */}
                  <div className="text-center border-x border-border px-4">
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-primary mb-1">{t("pricing.it2.name")}</div>
                      <div className="text-sm text-muted-foreground mb-2">{t("pricing.it2.delivery")}</div>
                      <div className="text-lg font-semibold text-primary">{t("pricing.it2.price")}</div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{t("pricing.it2.desc")}</p>
                  </div>

                  {/* Complete Setup */}
                  <div className="text-center">
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-primary mb-1">{t("pricing.it3.name")}</div>
                      <div className="text-sm text-muted-foreground mb-2">{t("pricing.it3.delivery")}</div>
                      <div className="text-lg font-semibold text-primary">{t("pricing.it3.price")}</div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{t("pricing.it3.desc")}</p>
                  </div>
                </div>

                {/* Service Categories */}
                <div className="space-y-6 mb-8">
                  {/* Online Presence */}
                  <div className="border-t border-border pt-6">
                    <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <Check className="text-accent h-5 w-5" />
                      Online Presence & Digital Foundation
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground ml-7">
                      <li>• Professional website (up to 5 pages)</li>
                      <li>• Business email setup (@yourcompany.be)</li>
                      <li>• Domain registration & EU hosting</li>
                      <li>• Google Business Profile optimization</li>
                      <li>• Basic SEO configuration</li>
                      <li>• Initial handover training</li>
                    </ul>
                  </div>

                  {/* IT Infrastructure */}
                  <div className="border-t border-border pt-6">
                    <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <Check className="text-accent h-5 w-5" />
                      IT Infrastructure & Workstations
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground ml-7">
                      <li>• Workstation setup (1-3 employees)</li>
                      <li>• Network setup (router, Wi-Fi, VPN)</li>
                      <li>• Office network with NAS storage</li>
                      <li>• Hardware sourcing & configuration</li>
                      <li>• Cloud storage setup (Google/Microsoft 365)</li>
                      <li>• Email migration from existing accounts</li>
                    </ul>
                  </div>

                  {/* Automation & Integration */}
                  <div className="border-t border-border pt-6">
                    <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <Check className="text-accent h-5 w-5" />
                      Automation & Business Tools
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground ml-7">
                      <li>• Data backup automation</li>
                      <li>• Business process automation setup</li>
                      <li>• CRM or project management integration</li>
                      <li>• Custom automation projects</li>
                      <li>• Team training sessions</li>
                      <li>• Network upgrades & optimization</li>
                    </ul>
                  </div>

                  {/* Support & Maintenance */}
                  <div className="border-t border-border pt-6 pb-2">
                    <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <Check className="text-accent h-5 w-5" />
                      Support & Ongoing Services
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground ml-7">
                      <li>• Remote troubleshooting sessions</li>
                      <li>• Priority support (30-60 days included)</li>
                      <li>• Additional workstation setup</li>
                      <li>• Email platform migration</li>
                      <li>• On-demand technical assistance</li>
                      <li>• Custom service requests</li>
                    </ul>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <p className="text-center text-sm text-muted-foreground mb-6">
                    <strong>À La Carte Services:</strong> All services available individually • Custom pricing based on your needs
                  </p>
                  <Button variant="hero" size="lg" className="w-full" onClick={() => handlePricingClick("IT Services")}>
                    {t("pricing.cta")} - Request Custom Quote
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
