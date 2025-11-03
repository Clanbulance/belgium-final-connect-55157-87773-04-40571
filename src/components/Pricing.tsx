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
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border/50 hover:border-accent/50 transition-colors">
                    <Check className="text-accent h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm mb-1">Professional Website</div>
                      <div className="text-xs text-muted-foreground">Up to 5 pages with mobile optimization</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border/50 hover:border-accent/50 transition-colors">
                    <Check className="text-accent h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm mb-1">Business Email Setup</div>
                      <div className="text-xs text-muted-foreground">Professional @yourcompany.be addresses</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border/50 hover:border-accent/50 transition-colors">
                    <Check className="text-accent h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm mb-1">Domain & Hosting</div>
                      <div className="text-xs text-muted-foreground">EU-based registration and hosting</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border/50 hover:border-accent/50 transition-colors">
                    <Check className="text-accent h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm mb-1">Google Business Profile</div>
                      <div className="text-xs text-muted-foreground">Optimization for local search</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border/50 hover:border-accent/50 transition-colors">
                    <Check className="text-accent h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm mb-1">SEO Configuration</div>
                      <div className="text-xs text-muted-foreground">Basic search engine optimization</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border/50 hover:border-accent/50 transition-colors">
                    <Check className="text-accent h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm mb-1">Workstation Setup</div>
                      <div className="text-xs text-muted-foreground">Hardware & software for 1-3 employees</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border/50 hover:border-accent/50 transition-colors">
                    <Check className="text-accent h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm mb-1">Network Setup</div>
                      <div className="text-xs text-muted-foreground">Router, Wi-Fi, VPN configuration</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border/50 hover:border-accent/50 transition-colors">
                    <Check className="text-accent h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm mb-1">NAS Storage</div>
                      <div className="text-xs text-muted-foreground">Office network with secure storage</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border/50 hover:border-accent/50 transition-colors">
                    <Check className="text-accent h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm mb-1">Hardware Sourcing</div>
                      <div className="text-xs text-muted-foreground">Professional equipment selection</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border/50 hover:border-accent/50 transition-colors">
                    <Check className="text-accent h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm mb-1">Cloud Storage</div>
                      <div className="text-xs text-muted-foreground">Google/Microsoft 365 setup</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border/50 hover:border-accent/50 transition-colors">
                    <Check className="text-accent h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm mb-1">Email Migration</div>
                      <div className="text-xs text-muted-foreground">Transfer from existing accounts</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border/50 hover:border-accent/50 transition-colors">
                    <Check className="text-accent h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm mb-1">Data Backup</div>
                      <div className="text-xs text-muted-foreground">Automated backup solutions</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border/50 hover:border-accent/50 transition-colors">
                    <Check className="text-accent h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm mb-1">Process Automation</div>
                      <div className="text-xs text-muted-foreground">Business workflow optimization</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border/50 hover:border-accent/50 transition-colors">
                    <Check className="text-accent h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm mb-1">CRM Integration</div>
                      <div className="text-xs text-muted-foreground">Project management tools setup</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border/50 hover:border-accent/50 transition-colors">
                    <Check className="text-accent h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm mb-1">Custom Automation</div>
                      <div className="text-xs text-muted-foreground">Tailored automation projects</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border/50 hover:border-accent/50 transition-colors">
                    <Check className="text-accent h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm mb-1">Team Training</div>
                      <div className="text-xs text-muted-foreground">Comprehensive training sessions</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border/50 hover:border-accent/50 transition-colors">
                    <Check className="text-accent h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm mb-1">Network Upgrades</div>
                      <div className="text-xs text-muted-foreground">Performance optimization</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border/50 hover:border-accent/50 transition-colors">
                    <Check className="text-accent h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm mb-1">Remote Support</div>
                      <div className="text-xs text-muted-foreground">Troubleshooting sessions</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border/50 hover:border-accent/50 transition-colors">
                    <Check className="text-accent h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm mb-1">Priority Support</div>
                      <div className="text-xs text-muted-foreground">30-60 days included support</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border/50 hover:border-accent/50 transition-colors">
                    <Check className="text-accent h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm mb-1">Handover Training</div>
                      <div className="text-xs text-muted-foreground">Initial system training</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border/50 hover:border-accent/50 transition-colors">
                    <Check className="text-accent h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm mb-1">Custom Services</div>
                      <div className="text-xs text-muted-foreground">On-demand technical assistance</div>
                    </div>
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
