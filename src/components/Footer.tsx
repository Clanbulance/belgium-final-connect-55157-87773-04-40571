import { Building2 } from "lucide-react";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-8 h-8 text-secondary" />
              <div>
                <h3 className="font-bold text-lg">Otterino Belgium</h3>
                <p className="text-sm text-background/70">Official Belgian Partner</p>
              </div>
            </div>
            <p className="text-sm text-background/80 mb-4">
              Swiss-engineered web solutions for Belgian businesses. Premium quality, 
              zero vendor lock-in, complete ownership.
            </p>
            <p className="text-xs text-background/60">
              In collaboration with{" "}
              <a 
                href="https://otterino.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:underline"
              >
                Otterino.com
              </a>
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><button onClick={() => scrollToSection('services')} className="hover:text-secondary transition-colors">Web Development</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-secondary transition-colors">Marketing Automation</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-secondary transition-colors">SEO & Visibility</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-secondary transition-colors">Business Automation</button></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><button onClick={() => scrollToSection('partnership')} className="hover:text-secondary transition-colors">Partnership</button></li>
              <li><button onClick={() => scrollToSection('pricing')} className="hover:text-secondary transition-colors">Pricing</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-secondary transition-colors">Contact</button></li>
              <li>
                <a 
                  href="https://otterino.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  Otterino Global
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>© 2025 Otterino Belgium. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-secondary transition-colors">GDPR</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
