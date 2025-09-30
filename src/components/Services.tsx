import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Target, Cog, TrendingUp, Globe, Shield } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "High-Performance Websites",
    description: "Lightning-fast, mobile-first architecture built for visibility and conversions. Modern frameworks without WordPress bloat.",
    outcome: "Launch-ready platforms that drive leads and sales"
  },
  {
    icon: Target,
    title: "Marketing Automation",
    description: "Lead capture, content workflows, and social media automation that works while you sleep.",
    outcome: "Automated marketing reducing manual work by 60%"
  },
  {
    icon: Cog,
    title: "Business Process Automation",
    description: "n8n workflows and AI-powered processes to streamline your operations and improve efficiency.",
    outcome: "Reduced manual work and improved operational efficiency"
  },
  {
    icon: TrendingUp,
    title: "SEO & Digital Visibility",
    description: "Search optimization, local presence, and AI answer optimization for Belgian markets.",
    outcome: "Higher rankings and more qualified traffic"
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Full support for Dutch, French, and English to reach all Belgian regions effectively.",
    outcome: "Reach and engage all Belgian markets"
  },
  {
    icon: Shield,
    title: "EU Compliant Solutions",
    description: "GDPR-compliant hosting with Belgian and Swiss data centers. Your data stays in Europe.",
    outcome: "Complete privacy and regulatory compliance"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Complete Digital Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build, automate, and grow your online presence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-elegant)] group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-4 group-hover:scale-110 transition-transform animate-fade-in">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium text-accent">
                    ✓ {service.outcome}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
