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
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-3">Complete IT & Business Setup Solutions</h3>
              <p className="text-muted-foreground">From online presence to full infrastructure - we've got you covered</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {/* Online Presence Card */}
              <Card className="pricing-card">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 rounded-lg bg-accent/20 w-fit">
                    <Globe className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Online Presence</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="pricing-feature">
                      <Check className="text-accent h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">Professional Website (Up to 5 pages)</span>
                    </li>
                    <li className="pricing-feature">
                      <Check className="text-accent h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">Domain & Hosting (EU-based)</span>
                    </li>
                    <li className="pricing-feature">
                      <Check className="text-accent h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">Google Business Profile optimization</span>
                    </li>
                    <li className="pricing-feature">
                      <Check className="text-accent h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">SEO Setup & Search optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Email Card */}
              <Card className="pricing-card">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 rounded-lg bg-primary/20 w-fit">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Email & Communication</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="pricing-feature">
                      <Check className="text-accent h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">Business Email (@yourcompany.be)</span>
                    </li>
                    <li className="pricing-feature">
                      <Check className="text-accent h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">Account Migration & Transfer</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Storage Card */}
              <Card className="pricing-card">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 rounded-lg bg-primary/20 w-fit">
                    <Cloud className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Storage & Backup</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="pricing-feature">
                      <Check className="text-accent h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">Cloud Storage (M365 / Google)</span>
                    </li>
                    <li className="pricing-feature">
                      <Check className="text-accent h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">NAS Storage (Office network)</span>
                    </li>
                    <li className="pricing-feature">
                      <Check className="text-accent h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">Automated Backup Solutions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* IT Infrastructure Card */}
              <Card className="pricing-card">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 rounded-lg bg-accent/20 w-fit">
                    <Server className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">IT Infrastructure</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="pricing-feature">
                      <Check className="text-accent h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">Workstation Setup (1-3 employees)</span>
                    </li>
                    <li className="pricing-feature">
                      <Check className="text-accent h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">Network Setup (Router, Wi-Fi, VPN)</span>
                    </li>
                    <li className="pricing-feature">
                      <Check className="text-accent h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">Hardware Sourcing & Equipment</span>
                    </li>
                    <li className="pricing-feature">
                      <Check className="text-accent h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">Network Upgrades & Optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Automation Card */}
              <Card className="pricing-card">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 rounded-lg bg-accent/20 w-fit">
                    <Zap className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="pricing-feature">
                      <Check className="text-accent h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">Process & Workflow Automation</span>
                    </li>
                    <li className="pricing-feature">
                      <Check className="text-accent h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">CRM & Project Management Integration</span>
                    </li>
                    <li className="pricing-feature">
                      <Check className="text-accent h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">Custom Tailored Solutions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Support & Training Card */}
              <Card className="pricing-card">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 rounded-lg bg-primary/20 w-fit">
                    <Headphones className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Support & Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="pricing-feature">
                      <Check className="text-accent h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">Priority Support (30-60 days)</span>
                    </li>
                    <li className="pricing-feature">
                      <Check className="text-accent h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">Remote Support & Troubleshooting</span>
                    </li>
                    <li className="pricing-feature">
                      <Check className="text-accent h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">Team Training & Handover Sessions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12 p-8 border border-border rounded-lg bg-card">
              <p className="text-sm text-muted-foreground mb-6">
                <strong>À La Carte Services:</strong> All services available individually • Custom pricing based on your needs
              </p>
              <Button variant="hero" size="lg" onClick={() => handlePricingClick("IT Services")}>
                {t("pricing.cta")} - Request Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
