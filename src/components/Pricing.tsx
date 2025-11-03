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
        <div className="mt-32 py-12">
          <div className="text-center mb-20">
            <h2 className="section-title mt-16">{t("pricing.it.title")}</h2>
            <p className="text-lg text-muted-foreground mb-2">{t("pricing.it.subtitle")}</p>
            <p className="text-sm text-muted-foreground italic">{t("pricing.it.note")}</p>
          </div>

          <div className="max-w-7xl mx-auto px-4">
            {/* Circular Service Catalog */}
            <div className="relative w-full mx-auto mb-16" style={{ height: '900px', maxWidth: '1100px' }}>
              {/* Center Circle */}
              <div 
                className="absolute rounded-full bg-background border-[16px] border-border flex flex-col items-center justify-center shadow-2xl"
                style={{
                  width: '320px',
                  height: '320px',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 30,
                }}
              >
                <h3 className="text-6xl font-bold tracking-tight text-foreground">SERVICE</h3>
                <p className="text-2xl text-muted-foreground tracking-[0.35em] mt-2">CATALOG</p>
              </div>

              {/* Dashed Circle Guide */}
              <svg 
                className="absolute"
                style={{
                  width: '750px',
                  height: '750px',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 1,
                }}
              >
                <circle 
                  cx="375" 
                  cy="375" 
                  r="375" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeDasharray="10 10" 
                  className="text-border opacity-20"
                />
              </svg>

              {/* Service Items */}
              {[
                { 
                  icon: Globe, 
                  title: "Online Presence", 
                  desc: "Professional websites, domains, SEO & Google Business optimization", 
                  color: "#3b82f6",
                  angle: -90, // Top
                },
                { 
                  icon: Headphones, 
                  title: "IT Support", 
                  desc: "Software, hardware, and network support for smooth operations", 
                  color: "#ef4444",
                  angle: -38, // Top right
                },
                { 
                  icon: Cloud, 
                  title: "Cloud Services", 
                  desc: "Secure cloud storage and computing solutions with remote access", 
                  color: "#fb923c",
                  angle: 14, // Right
                },
                { 
                  icon: Settings, 
                  title: "Cybersecurity", 
                  desc: "Protecting systems from threats, ensuring data security", 
                  color: "#14b8a6",
                  angle: 66, // Bottom right
                },
                { 
                  icon: Database, 
                  title: "Data & Backup", 
                  desc: "Automated backup solutions and data management systems", 
                  color: "#ec4899",
                  angle: 118, // Bottom
                },
                { 
                  icon: Server, 
                  title: "Infrastructure", 
                  desc: "Network setup, workstations, hardware sourcing & upgrades", 
                  color: "#a855f7",
                  angle: 170, // Bottom left
                },
                { 
                  icon: Zap, 
                  title: "Automation", 
                  desc: "Process automation, CRM integration & custom solutions", 
                  color: "#8b5cf6",
                  angle: -142, // Top left
                },
              ].map((service, idx) => {
                const radius = 375; // Half of the circle diameter
                const angleRad = (service.angle * Math.PI) / 180;
                const x = 50 + (radius / 5.5) * Math.cos(angleRad); // Percentage positioning
                const y = 50 + (radius / 5.5) * Math.sin(angleRad);
                
                // Determine text positioning
                const isTop = service.angle < -45 && service.angle > -135;
                const isBottom = service.angle > 45 && service.angle < 135;
                const isLeft = service.angle > 135 || service.angle < -135;
                const isRight = service.angle > -45 && service.angle < 45;
                
                return (
                  <div key={idx}>
                    {/* Connection Line */}
                    <svg 
                      className="absolute"
                      style={{
                        width: '100%',
                        height: '100%',
                        left: 0,
                        top: 0,
                        pointerEvents: 'none',
                        zIndex: 5,
                      }}
                    >
                      <line 
                        x1="50%"
                        y1="50%"
                        x2={`${x}%`}
                        y2={`${y}%`}
                        stroke={service.color}
                        strokeWidth="2"
                        opacity="0.25"
                      />
                      {/* Dot on line */}
                      <circle 
                        cx={`${50 + ((x - 50) * 0.65)}%`}
                        cy={`${50 + ((y - 50) * 0.65)}%`}
                        r="6"
                        fill={service.color}
                      />
                    </svg>

                    {/* Service Item */}
                    <div
                      className="absolute"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: 'translate(-50%, -50%)',
                        zIndex: 20,
                      }}
                    >
                      {/* Icon Circle */}
                      <div
                        className="w-28 h-28 rounded-full flex items-center justify-center border-[8px] bg-background transition-all duration-300 hover:scale-110 hover:shadow-2xl mx-auto"
                        style={{ borderColor: service.color }}
                      >
                        <service.icon className="w-14 h-14" style={{ color: service.color }} />
                      </div>

                      {/* Text Content */}
                      <div
                        className="absolute w-64"
                        style={{
                          left: '50%',
                          transform: 'translateX(-50%)',
                          ...(isTop && { bottom: 'calc(100% + 20px)', textAlign: 'center' }),
                          ...(isBottom && { top: 'calc(100% + 20px)', textAlign: 'center' }),
                          ...(isLeft && !isTop && !isBottom && { right: 'calc(100% + 20px)', textAlign: 'right', left: 'auto', transform: 'none' }),
                          ...(isRight && !isTop && !isBottom && { left: 'calc(100% + 20px)', textAlign: 'left', transform: 'none' }),
                        }}
                      >
                        <h4 
                          className="font-bold text-xl mb-2 tracking-tight" 
                          style={{ color: service.color }}
                        >
                          {service.title}
                        </h4>
                        <p className="text-sm text-muted-foreground italic leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
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
