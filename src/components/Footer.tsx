import { Building2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer-main">
      <div className="container mx-auto px-4">
        <div className="grid grid-md-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Building2 style={{ width: '2rem', height: '2rem' }} className="text-secondary" />
              <div>
                <h3 className="font-bold text-lg">RJDP Consulting</h3>
                <p className="text-sm footer-subtitle">{t('nav.subtitle')}</p>
              </div>
            </div>
            <p className="text-sm footer-text mb-4">
              {t('footer.desc')}
            </p>
            <p className="text-xs footer-text-light">
              {t('footer.collab')}{" "}
              <a 
                href="https://otterino.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link"
              >
                Otterino.com
              </a>
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">{t('footer.services.title')}</h4>
            <ul className="footer-list">
              <li><button onClick={() => scrollToSection('services')} className="footer-link">{t('footer.services.1')}</button></li>
              <li><button onClick={() => scrollToSection('services')} className="footer-link">{t('footer.services.2')}</button></li>
              <li><button onClick={() => scrollToSection('services')} className="footer-link">{t('footer.services.3')}</button></li>
              <li><button onClick={() => scrollToSection('services')} className="footer-link">{t('footer.services.4')}</button></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">{t('footer.company.title')}</h4>
            <ul className="footer-list">
              <li><button onClick={() => scrollToSection('partnership')} className="footer-link">{t('footer.company.1')}</button></li>
              <li><button onClick={() => scrollToSection('pricing')} className="footer-link">{t('footer.company.2')}</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="footer-link">{t('footer.company.3')}</button></li>
              <li>
                <a 
                  href="https://otterino.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  {t('footer.company.4')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>{t('footer.copyright')}</p>
            <div className="footer-links-group">
              <a href="#" className="footer-link">{t('footer.privacy')}</a>
              <a href="#" className="footer-link">{t('footer.terms')}</a>
              <a href="#" className="footer-link">GDPR</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
