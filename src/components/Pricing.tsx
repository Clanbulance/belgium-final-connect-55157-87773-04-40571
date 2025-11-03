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
            {/* Circular Service Catalog */}
            <div className="relative w-full aspect-square max-w-4xl mx-auto mb-12">
              {/* Center Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-background border-8 border-muted flex flex-col items-center justify-center z-10">
                <h3 className="text-4xl font-bold">SERVICE</h3>
                <p className="text-2xl text-muted-foreground tracking-widest">CATALOG</p>
              </div>

              {/* Connecting Lines Circle */}
              <svg className="absolute inset-0 w-full h-full" style={{ transform: 'rotate(-90deg)' }}>
                <circle cx="50%" cy="50%" r="42%" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" className="text-border opacity-40" />
              </svg>

              {/* Service Items */}
              {[
                { icon: Globe, title: "Online Presence", desc: "Professional websites, domains, SEO & Google Business optimization", color: "rgb(59, 130, 246)", angle: 0 },
                { icon: Headphones, title: "IT Support", desc: "Software, hardware, and network support for smooth operations", color: "rgb(239, 68, 68)", angle: 51 },
                { icon: Cloud, title: "Cloud Services", desc: "Secure cloud storage and computing solutions with remote access", color: "rgb(251, 146, 60)", angle: 102 },
                { icon: Settings, title: "Cybersecurity", desc: "Protecting systems from threats, ensuring data security", color: "rgb(34, 197, 94)", angle: 153 },
                { icon: Database, title: "Data & Backup", desc: "Automated backup solutions and data management systems", color: "rgb(20, 184, 166)", angle: 204 },
                { icon: Server, title: "Infrastructure", desc: "Network setup, workstations, hardware sourcing & upgrades", color: "rgb(236, 72, 153)", angle: 255 },
                { icon: Zap, title: "Automation", desc: "Process automation, CRM integration & custom solutions", color: "rgb(168, 85, 247)", angle: 306 },
              ].map((service, idx) => {
                const radius = 42;
                const x = 50 + radius * Math.cos((service.angle * Math.PI) / 180);
                const y = 50 + radius * Math.sin((service.angle * Math.PI) / 180);
                const isLeft = x < 50;
                
                return (
                  <div
                    key={idx}
                    className="absolute group"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    {/* Connection Line */}
                    <div
                      className="absolute w-20 h-0.5 origin-left"
                      style={{
                        backgroundColor: service.color,
                        left: isLeft ? 'auto' : '50%',
                        right: isLeft ? '50%' : 'auto',
                        top: '50%',
                        transform: `rotate(${service.angle + (isLeft ? 180 : 0)}deg) translateY(-50%)`,
                        opacity: 0.4,
                      }}
                    />
                    
                    {/* Dot on line */}
                    <div
                      className="absolute w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: service.color,
                        left: isLeft ? '-2.5rem' : '2.5rem',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                      }}
                    />

                    {/* Icon Circle */}
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center border-4 bg-background transition-transform group-hover:scale-110 relative z-10"
                      style={{ borderColor: service.color }}
                    >
                      <service.icon className="w-10 h-10" style={{ color: service.color }} />
                    </div>

                    {/* Text Content */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 w-56 ${
                        isLeft ? 'right-24 text-right' : 'left-24 text-left'
                      }`}
                    >
                      <h4 className="font-bold text-lg mb-1" style={{ color: service.color }}>
                        {service.title}
                      </h4>
                      <p className="text-sm text-muted-foreground italic leading-snug">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Card */}
            <Card className="pricing-card max-w-3xl mx-auto">
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
