import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Handshake, Award, Globe2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const scrollToContact = () => {
  const element = document.getElementById("contact");
  if (element) {
    window.history.pushState(null, "", "#contact");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const Partnership = () => {
  const { t } = useLanguage();

  return (
    <section id="partnership" className="py-24 partnership-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="partnership-badge">
            <Handshake style={{ width: "1.25rem", height: "1.25rem" }} className="text-secondary" />
            <span className="text-secondary font-semibold">{t("partnership.badge")}</span>
          </div>

          <h2 className="section-title">{t("partnership.title")}</h2>
          <p className="section-subtitle leading-relaxed">{t("partnership.subtitle")}</p>
        </div>

        <div className="grid grid-md-3 gap-8 mb-16">
          <Card className="partnership-card">
            <CardContent className="pt-6 text-center">
              <div className="icon-container-large bg-primary-10">
                <Building2 style={{ width: "2rem", height: "2rem" }} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("partnership.card1.title")}</h3>
              <p className="text-muted-foreground">{t("partnership.card1.desc")}</p>
            </CardContent>
          </Card>

          <Card className="partnership-card">
            <CardContent className="pt-6 text-center">
              <div className="icon-container-large bg-accent-10">
                <Award style={{ width: "2rem", height: "2rem" }} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("partnership.card2.title")}</h3>
              <p className="text-muted-foreground">{t("partnership.card2.desc")}</p>
            </CardContent>
          </Card>

          <Card className="partnership-card">
            <CardContent className="pt-6 text-center">
              <div className="icon-container-large bg-secondary-10">
                <Globe2 style={{ width: "2rem", height: "2rem" }} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("partnership.card3.title")}</h3>
              <p className="text-muted-foreground">{t("partnership.card3.desc")}</p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="partnership-highlight-card">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold mb-4 text-center">{t("partnership.why.title")}</h3>
              <ul className="space-y-3 mb-8">
                <li className="partnership-benefit">
                  <span className="benefit-check">✓</span>
                  <span>
                    <strong>{t("partnership.why.1")}</strong> {t("partnership.why.1.desc")}
                  </span>
                </li>
                <li className="partnership-benefit">
                  <span className="benefit-check">✓</span>
                  <span>
                    <strong>{t("partnership.why.2")}</strong> {t("partnership.why.2.desc")}
                  </span>
                </li>
                <li className="partnership-benefit">
                  <span className="benefit-check">✓</span>
                  <span>
                    <strong>{t("partnership.why.3")}</strong> {t("partnership.why.3.desc")}
                  </span>
                </li>
                <li className="partnership-benefit">
                  <span className="benefit-check">✓</span>
                  <span>
                    <strong>{t("partnership.why.4")}</strong> {t("partnership.why.4.desc")}
                  </span>
                </li>
                <li className="partnership-benefit">
                  <span className="benefit-check">✓</span>
                  <span>
                    <strong>{t("partnership.why.5")}</strong> {t("partnership.why.5.desc")}
                  </span>
                </li>
              </ul>

              <div className="text-center">
                <Button variant="hero" size="lg" className="text-lg" onClick={scrollToContact}>
                  {t("partnership.cta")}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center"></div>
      </div>
    </section>
  );
};
