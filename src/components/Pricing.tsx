import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Globe, Server, Zap, Headphones, Mail, Database, Wifi, HardDrive, Cloud, Settings, Users } from "lucide-react";
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
            {/* Header Card */}
            <Card className="pricing-card mb-6">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl mb-4">Complete IT & Business Setup Solutions</CardTitle>
                <CardDescription className="text-lg">
                  From online presence to full infrastructure - we've got you covered
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Service Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {/* Online Presence Card */}
              <Card className="pricing-card lg:col-span-2 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20 hover:border-accent/40 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 rounded-lg bg-accent/20">
                      <Globe className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">Online Presence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <Check className="text-accent h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <div className="font-medium">Professional Website</div>
                        <div className="text-xs text-muted-foreground">Up to 5 pages</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="text-accent h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <div className="font-medium">Domain & Hosting</div>
                        <div className="text-xs text-muted-foreground">EU-based</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="text-accent h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <div className="font-medium">Google Business</div>
                        <div className="text-xs text-muted-foreground">Profile optimization</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="text-accent h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <div className="font-medium">SEO Setup</div>
                        <div className="text-xs text-muted-foreground">Search optimization</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email Card */}
              <Card className="pricing-card bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/20">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Email</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Check className="text-primary h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <div className="font-medium">Business Email</div>
                        <div className="text-xs text-muted-foreground">@yourcompany.be</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="text-primary h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <div className="font-medium">Migration</div>
                        <div className="text-xs text-muted-foreground">Transfer accounts</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Storage Card */}
              <Card className="pricing-card bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/20">
                      <Cloud className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Storage</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Check className="text-primary h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <div className="font-medium">Cloud Storage</div>
                        <div className="text-xs text-muted-foreground">M365 / Google</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="text-primary h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <div className="font-medium">NAS Storage</div>
                        <div className="text-xs text-muted-foreground">Office network</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="text-primary h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <div className="font-medium">Backup</div>
                        <div className="text-xs text-muted-foreground">Automated</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* IT Infrastructure Card */}
              <Card className="pricing-card lg:col-span-2 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20 hover:border-accent/40 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-accent/20">
                      <Server className="h-5 w-5 text-accent" />
                    </div>
                    <CardTitle className="text-lg">IT Infrastructure</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <Check className="text-accent h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <div className="font-medium">Workstation Setup</div>
                        <div className="text-xs text-muted-foreground">1-3 employees</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="text-accent h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <div className="font-medium">Network Setup</div>
                        <div className="text-xs text-muted-foreground">Router, Wi-Fi, VPN</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="text-accent h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <div className="font-medium">Hardware Sourcing</div>
                        <div className="text-xs text-muted-foreground">Professional equipment</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="text-accent h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <div className="font-medium">Network Upgrades</div>
                        <div className="text-xs text-muted-foreground">Optimization</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Automation Card */}
              <Card className="pricing-card bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20 hover:border-accent/40 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-accent/20">
                      <Zap className="h-5 w-5 text-accent" />
                    </div>
                    <CardTitle className="text-lg">Automation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Check className="text-accent h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <div className="font-medium">Process Automation</div>
                        <div className="text-xs text-muted-foreground">Workflow optimization</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="text-accent h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <div className="font-medium">CRM Integration</div>
                        <div className="text-xs text-muted-foreground">Project management</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="text-accent h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <div className="font-medium">Custom Projects</div>
                        <div className="text-xs text-muted-foreground">Tailored solutions</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Support & Training Card */}
              <Card className="pricing-card lg:col-span-3 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/20">
                      <Headphones className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Support & Training</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="flex items-start gap-2">
                      <Check className="text-primary h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <div className="font-medium">Priority Support</div>
                        <div className="text-xs text-muted-foreground">30-60 days included</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="text-primary h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <div className="font-medium">Remote Support</div>
                        <div className="text-xs text-muted-foreground">Troubleshooting</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="text-primary h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <div className="font-medium">Team Training</div>
                        <div className="text-xs text-muted-foreground">Comprehensive sessions</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="text-primary h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <div className="font-medium">Handover Training</div>
                        <div className="text-xs text-muted-foreground">Initial system training</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Card */}
            <Card className="pricing-card">
              <CardContent className="pt-6">
                <p className="text-center text-sm text-muted-foreground mb-6">
                  <strong>À La Carte Services:</strong> All services available individually • Custom pricing based on your needs
                </p>
                <Button variant="hero" size="lg" className="w-full" onClick={() => handlePricingClick("IT Services")}>
                  {t("pricing.cta")} - Request Custom Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
