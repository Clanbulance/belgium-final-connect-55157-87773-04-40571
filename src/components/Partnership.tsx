import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Handshake, Award, Globe2 } from "lucide-react";

const scrollToContact = () => {
  const element = document.getElementById('contact');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const Partnership = () => {
  return (
    <section id="partnership" className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-6 py-2 mb-6">
            <Handshake className="w-5 h-5 text-secondary" />
            <span className="text-secondary font-semibold">Official Partnership</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Belgian Partner of Otterino
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            As the official Belgian counterpart to Otterino, we bring Swiss-engineered excellence 
            to Belgian businesses. We offer the exact same premium services with local expertise 
            and multilingual support tailored for the Belgian market.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-2 hover:border-primary/50 transition-all">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Local Expertise</h3>
              <p className="text-muted-foreground">
                Deep understanding of Belgian business culture, regulations, and market needs.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-all">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Swiss Quality</h3>
              <p className="text-muted-foreground">
                Same proven processes, technology, and quality standards as Otterino worldwide.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-all">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Globe2 className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Tri-Continental Network</h3>
              <p className="text-muted-foreground">
                Access to Otterino's global network across Europe, UK, and Asia-Pacific.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-primary/30 bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Why Choose Our Partnership?</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Identical Services:</strong> Same premium web solutions, automation, and SEO expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Belgian Focus:</strong> Tri-lingual support (NL/FR/EN) and local market understanding</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>EU Compliance:</strong> Belgian and Swiss data centers, GDPR-first approach</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Global Standards:</strong> Access to Otterino's proven methodologies and international expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Zero Lock-in:</strong> Complete ownership and portability of your digital assets</span>
                </li>
              </ul>
              
              <div className="text-center">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="text-lg"
                  onClick={scrollToContact}
                >
                  Explore Partnership Benefits
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Learn more about Otterino:{" "}
            <a 
              href="https://otterino.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              www.otterino.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
