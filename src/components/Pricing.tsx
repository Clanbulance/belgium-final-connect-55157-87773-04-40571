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
        <div className="mt-32 overflow-hidden">
          <div className="text-center mb-16">
            <h2 className="section-title mt-16">{t("pricing.it.title")}</h2>
            <p className="text-lg text-muted-foreground mb-2">{t("pricing.it.subtitle")}</p>
            <p className="text-sm text-muted-foreground italic">{t("pricing.it.note")}</p>
          </div>

          <div className="max-w-7xl mx-auto px-4">
            {/* Circular Service Catalog */}
            <div className="relative w-full h-[800px] max-w-5xl mx-auto mb-12">
              {/* Center Circle */}
              <div 
                className="absolute rounded-full bg-background border-[12px] border-muted flex flex-col items-center justify-center shadow-lg"
                style={{
                  width: '280px',
                  height: '280px',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 20,
                }}
              >
                <h3 className="text-5xl font-bold tracking-tight">SERVICE</h3>
                <p className="text-xl text-muted-foreground tracking-[0.3em] mt-1">CATALOG</p>
              </div>

              {/* Dashed Circle Guide */}
              <div 
                className="absolute rounded-full border-2 border-dashed border-border/30"
                style={{
                  width: '650px',
                  height: '650px',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 1,
                }}
              />

              {/* Service Items Positioned in Circle */}
              {[
                { 
                  icon: Globe, 
                  title: "Online Presence", 
                  desc: "Professional websites, domains, SEO & Google Business optimization", 
                  color: "#3b82f6",
                  position: { top: '5%', left: '50%' },
                  textAlign: 'center' as const,
                  textPos: { top: '-70px', left: '50%', transform: 'translateX(-50%)' }
                },
                { 
                  icon: Headphones, 
                  title: "IT Support", 
                  desc: "Software, hardware, and network support for smooth operations", 
                  color: "#ef4444",
                  position: { top: '20%', right: '8%' },
                  textAlign: 'left' as const,
                  textPos: { top: '50%', left: '110px', transform: 'translateY(-50%)' }
                },
                { 
                  icon: Cloud, 
                  title: "Cloud Services", 
                  desc: "Secure cloud storage and computing solutions with remote access", 
                  color: "#fb923c",
                  position: { top: '50%', right: '3%' },
                  textAlign: 'left' as const,
                  textPos: { top: '50%', left: '110px', transform: 'translateY(-50%)' }
                },
                { 
                  icon: Settings, 
                  title: "Cybersecurity", 
                  desc: "Protecting systems from threats, ensuring data security", 
                  color: "#14b8a6",
                  position: { bottom: '20%', right: '8%' },
                  textAlign: 'left' as const,
                  textPos: { top: '50%', left: '110px', transform: 'translateY(-50%)' }
                },
                { 
                  icon: Database, 
                  title: "Data & Backup", 
                  desc: "Automated backup solutions and data management systems", 
                  color: "#ec4899",
                  position: { bottom: '5%', left: '50%' },
                  textAlign: 'center' as const,
                  textPos: { bottom: '-70px', left: '50%', transform: 'translateX(-50%)' }
                },
                { 
                  icon: Server, 
                  title: "Infrastructure", 
                  desc: "Network setup, workstations, hardware sourcing & upgrades", 
                  color: "#a855f7",
                  position: { bottom: '20%', left: '8%' },
                  textAlign: 'right' as const,
                  textPos: { top: '50%', right: '110px', transform: 'translateY(-50%)' }
                },
                { 
                  icon: Zap, 
                  title: "Automation", 
                  desc: "Process automation, CRM integration & custom solutions", 
                  color: "#8b5cf6",
                  position: { top: '20%', left: '8%' },
                  textAlign: 'right' as const,
                  textPos: { top: '50%', right: '110px', transform: 'translateY(-50%)' }
                },
              ].map((service, idx) => {
                const isTopBottom = service.position.top === '5%' || service.position.bottom === '5%';
                const isRight = 'right' in service.position;
                const isLeft = 'left' in service.position && service.position.left !== '50%';
                
                return (
                  <div
                    key={idx}
                    className="absolute group"
                    style={{
                      ...service.position,
                      transform: service.position.left === '50%' ? 'translateX(-50%)' : 'none',
                      zIndex: 10,
                    }}
                  >
                    {/* Connection Line to Center */}
                    <svg 
                      className="absolute"
                      style={{
                        width: '200px',
                        height: '200px',
                        left: isTopBottom ? '50%' : (isLeft ? 'auto' : '50%'),
                        right: isLeft ? '50%' : 'auto',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        pointerEvents: 'none',
                        zIndex: 0,
                      }}
                    >
                      <line 
                        x1={isTopBottom ? '100' : (isLeft ? '150' : '50')}
                        y1="100"
                        x2="100"
                        y2="100"
                        stroke={service.color}
                        strokeWidth="2"
                        opacity="0.3"
                      />
                    </svg>

                    {/* Connection Dot */}
                    <div
                      className="absolute w-4 h-4 rounded-full"
                      style={{
                        backgroundColor: service.color,
                        left: isTopBottom ? '50%' : (isLeft ? '-30px' : 'auto'),
                        right: isTopBottom ? 'auto' : (isLeft ? 'auto' : '-30px'),
                        top: isTopBottom ? (service.position.top === '5%' ? 'auto' : '-30px') : '50%',
                        bottom: isTopBottom && service.position.top === '5%' ? '-30px' : 'auto',
                        transform: isTopBottom ? 'translateX(-50%)' : 'translateY(-50%)',
                        zIndex: 5,
                      }}
                    />

                    {/* Icon Circle */}
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center border-[6px] bg-background transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl relative"
                      style={{ borderColor: service.color, zIndex: 10 }}
                    >
                      <service.icon className="w-12 h-12" style={{ color: service.color }} />
                    </div>

                    {/* Text Content */}
                    <div
                      className="absolute w-56"
                      style={{
                        ...service.textPos,
                        textAlign: service.textAlign,
                      }}
                    >
                      <h4 
                        className="font-bold text-lg mb-1.5 tracking-tight" 
                        style={{ color: service.color }}
                      >
                        {service.title}
                      </h4>
                      <p className="text-xs text-muted-foreground italic leading-relaxed">
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
