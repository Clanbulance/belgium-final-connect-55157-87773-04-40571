import { Building2 } from "lucide-react";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="container mx-auto px-4">
        <div className="grid grid-md-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Building2 style={{ width: '2rem', height: '2rem' }} className="text-secondary" />
              <div>
                <h3 className="font-bold text-lg">Otterino Belgium</h3>
                <p className="text-sm footer-subtitle">Official Belgian Partner</p>
              </div>
            </div>
            <p className="text-sm footer-text mb-4">
              Swiss-engineered web solutions for Belgian businesses. Premium quality, 
              zero vendor lock-in, complete ownership.
            </p>
            <p className="text-xs footer-text-light">
              In collaboration with{" "}
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
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="footer-list">
              <li><button onClick={() => scrollToSection('services')} className="footer-link">Web Development</button></li>
              <li><button onClick={() => scrollToSection('services')} className="footer-link">Marketing Automation</button></li>
              <li><button onClick={() => scrollToSection('services')} className="footer-link">SEO & Visibility</button></li>
              <li><button onClick={() => scrollToSection('services')} className="footer-link">Business Automation</button></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="footer-list">
              <li><button onClick={() => scrollToSection('partnership')} className="footer-link">Partnership</button></li>
              <li><button onClick={() => scrollToSection('pricing')} className="footer-link">Pricing</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="footer-link">Contact</button></li>
              <li>
                <a 
                  href="https://otterino.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Otterino Global
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>© 2025 Otterino Belgium. All rights reserved.</p>
            <div className="footer-links-group">
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms of Service</a>
              <a href="#" className="footer-link">GDPR</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
