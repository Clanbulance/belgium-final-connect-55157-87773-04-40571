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
        <div className="mt-24 py-16 bg-gradient-to-b from-background via-accent/5 to-background">
          <div className="text-center mb-12">
            <h2 className="section-title">{t("pricing.it.title")}</h2>
            <p className="text-lg text-muted-foreground mb-2">{t("pricing.it.subtitle")}</p>
            <p className="text-sm text-muted-foreground italic">{t("pricing.it.note")}</p>
          </div>

          <div className="max-w-7xl mx-auto px-4">
            {/* Pie Chart Service Catalog */}
            <div className="relative w-full mx-auto mb-12" style={{ height: '700px', maxWidth: '1000px' }}>
              {/* Center Circle with Title */}
              <div 
                className="absolute rounded-full bg-background border-8 border-border flex flex-col items-center justify-center shadow-xl z-30"
                style={{
                  width: '200px',
                  height: '200px',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <h3 className="text-2xl font-bold tracking-tight text-center leading-tight">Key<br/>Services</h3>
              </div>

              {/* Pie Chart Segments */}
              <svg 
                className="absolute"
                style={{
                  width: '500px',
                  height: '500px',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%) rotate(-90deg)',
                  zIndex: 10,
                }}
                viewBox="0 0 100 100"
              >
                {[
                  { color: "#22c55e", startAngle: 0, endAngle: 51.4 },
                  { color: "#3b82f6", startAngle: 51.4, endAngle: 102.8 },
                  { color: "#0ea5e9", startAngle: 102.8, endAngle: 154.2 },
                  { color: "#14b8a6", startAngle: 154.2, endAngle: 205.6 },
                  { color: "#a855f7", startAngle: 205.6, endAngle: 257 },
                  { color: "#ec4899", startAngle: 257, endAngle: 308.4 },
                  { color: "#8b5cf6", startAngle: 308.4, endAngle: 360 },
                ].map((segment, idx) => {
                  const startAngle = (segment.startAngle * Math.PI) / 180;
                  const endAngle = (segment.endAngle * Math.PI) / 180;
                  const largeArcFlag = segment.endAngle - segment.startAngle > 180 ? 1 : 0;
                  
                  const x1 = 50 + 40 * Math.cos(startAngle);
                  const y1 = 50 + 40 * Math.sin(startAngle);
                  const x2 = 50 + 40 * Math.cos(endAngle);
                  const y2 = 50 + 40 * Math.sin(endAngle);
                  
                  return (
                    <path
                      key={idx}
                      d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                      fill={segment.color}
                      opacity="0.85"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                  );
                })}
              </svg>

              {/* Icons on Segments */}
              {[
                { icon: Globe, color: "#22c55e", angle: 25.7 },
                { icon: Headphones, color: "#3b82f6", angle: 77.1 },
                { icon: Cloud, color: "#0ea5e9", angle: 128.5 },
                { icon: Settings, color: "#14b8a6", angle: 179.9 },
                { icon: Database, color: "#a855f7", angle: 231.3 },
                { icon: Server, color: "#ec4899", angle: 282.7 },
                { icon: Zap, color: "#8b5cf6", angle: 334.2 },
              ].map((item, idx) => {
                const angleRad = (item.angle * Math.PI) / 180;
                const radius = 150;
                const x = 50 + (radius / 250) * 100 * Math.cos(angleRad);
                const y = 50 + (radius / 250) * 100 * Math.sin(angleRad);
                
                return (
                  <div
                    key={idx}
                    className="absolute"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)',
                      zIndex: 20,
                    }}
                  >
                    <item.icon className="w-10 h-10 text-white drop-shadow-lg" />
                  </div>
                );
              })}

              {/* Service Descriptions with Arrows */}
              {[
                { 
                  title: "Online Presence", 
                  desc: "Professional websites, domains, SEO & Google Business optimization",
                  angle: 25.7,
                  position: { top: '0%', left: '50%', transform: 'translate(-50%, -20px)' },
                  arrowStart: { x: 50, y: 20 },
                  arrowEnd: { x: 50, y: 10 }
                },
                { 
                  title: "IT Support", 
                  desc: "Software, hardware, and network support for smooth operations",
                  angle: 77.1,
                  position: { top: '20%', right: '2%' },
                  arrowStart: { x: 95, y: 30 },
                  arrowEnd: { x: 85, y: 25 }
                },
                { 
                  title: "Cloud Services", 
                  desc: "Secure cloud storage and computing solutions with remote access",
                  angle: 128.5,
                  position: { top: '50%', right: '2%', transform: 'translateY(-50%)' },
                  arrowStart: { x: 95, y: 50 },
                  arrowEnd: { x: 85, y: 50 }
                },
                { 
                  title: "Cybersecurity", 
                  desc: "Protecting systems from threats, ensuring data security",
                  angle: 179.9,
                  position: { bottom: '20%', right: '2%' },
                  arrowStart: { x: 95, y: 70 },
                  arrowEnd: { x: 85, y: 75 }
                },
                { 
                  title: "Data & Backup", 
                  desc: "Automated backup solutions and data management systems",
                  angle: 231.3,
                  position: { bottom: '0%', left: '50%', transform: 'translate(-50%, 20px)' },
                  arrowStart: { x: 50, y: 80 },
                  arrowEnd: { x: 50, y: 90 }
                },
                { 
                  title: "Infrastructure", 
                  desc: "Network setup, workstations, hardware sourcing & upgrades",
                  angle: 282.7,
                  position: { bottom: '20%', left: '2%' },
                  arrowStart: { x: 5, y: 70 },
                  arrowEnd: { x: 15, y: 75 }
                },
                { 
                  title: "Automation", 
                  desc: "Process automation, CRM integration & custom solutions",
                  angle: 334.2,
                  position: { top: '20%', left: '2%' },
                  arrowStart: { x: 5, y: 30 },
                  arrowEnd: { x: 15, y: 25 }
                },
              ].map((service, idx) => (
                <div key={idx}>
                  {/* Arrow Line */}
                  <svg 
                    className="absolute w-full h-full left-0 top-0 pointer-events-none"
                    style={{ zIndex: 15 }}
                  >
                    <line 
                      x1={`${service.arrowStart.x}%`}
                      y1={`${service.arrowStart.y}%`}
                      x2={`${service.arrowEnd.x}%`}
                      y2={`${service.arrowEnd.y}%`}
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-border"
                      markerEnd="url(#arrowhead)"
                    />
                  </svg>

                  {/* Text Description */}
                  <div
                    className="absolute w-64 p-3 bg-background/95 backdrop-blur-sm rounded-lg border border-border shadow-md"
                    style={service.position}
                  >
                    <h4 className="font-bold text-base mb-1 text-foreground">
                      {service.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
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
