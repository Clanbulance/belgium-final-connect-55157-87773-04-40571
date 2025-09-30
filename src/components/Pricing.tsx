import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { toast } from "sonner";

const scrollToContact = () => {
  const element = document.getElementById('contact');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const handlePricingClick = (tierName: string) => {
  toast.success(`Great choice! Let's discuss the ${tierName} package.`, {
    description: "Scroll down to fill out the contact form."
  });
  scrollToContact();
};

const pricingTiers = [
  {
    name: "Hero Landing",
    price: "€399",
    delivery: "2-5 days",
    description: "Perfect for campaigns and quick launches",
    features: [
      "Single landing page",
      "Mobile-optimized design",
      "Contact form integration",
      "Basic tracking setup",
      "30-min intro + handover call"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Starter",
    price: "€1,990",
    delivery: "1-2 weeks",
    description: "Ideal for small businesses getting online",
    features: [
      "3 pages (Home, About, Contact)",
      "Basic mobile layout",
      "Basic SEO optimization",
      "2 hours handover training",
      "Content migration support"
    ],
    cta: "Choose Starter",
    popular: false
  },
  {
    name: "Standard",
    price: "€4,900",
    delivery: "2-4 weeks",
    description: "Most popular for growing businesses",
    features: [
      "Up to 6 pages",
      "PWA basics included",
      "Core Web Vitals tuning",
      "Basic SEO/GEO optimization",
      "Contact forms & integrations",
      "30 days bugfix support"
    ],
    cta: "Choose Standard",
    popular: true
  },
  {
    name: "Pro",
    price: "€9,900+",
    delivery: "4+ weeks",
    description: "Enterprise-grade solutions",
    features: [
      "Custom integrations (ERP/CRM)",
      "Advanced SEO/AEO",
      "Enterprise hosting options",
      "Service Level Agreement",
      "Extended training program",
      "Priority support"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No hidden fees. No vendor lock-in. Choose the package that fits your needs.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            All prices exclude VAT • Custom hourly rate: €130-180/hour • Retainers from €100/month
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier) => (
            <Card 
              key={tier.name} 
              className={`relative ${tier.popular ? 'border-primary border-3 shadow-[var(--shadow-elegant)]' : 'border-2'} hover:shadow-lg transition-all duration-300`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-secondary to-accent text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-primary">{tier.price}</span>
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                  Delivery: {tier.delivery}
                </div>
                <CardDescription className="text-base">{tier.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
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

        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto border-secondary/30 bg-secondary/5">
            <CardHeader>
              <CardTitle className="text-2xl">SEO / Geo Fix (Quick)</CardTitle>
              <div className="text-3xl font-bold text-primary">€990</div>
              <CardDescription>3-7 days delivery</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Technical SEO quick fixes, Google My Business review, NAP consistency, and prioritized action list.</p>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => handlePricingClick('SEO / Geo Fix')}
              >
                Request SEO Fix
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
