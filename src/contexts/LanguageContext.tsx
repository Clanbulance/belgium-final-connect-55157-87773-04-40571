import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'nl' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  nl: {
    // Navigation
    'nav.services': 'Diensten',
    'nav.pricing': 'Prijzen',
    'nav.partnership': 'Partnership',
    'nav.contact': 'Contact',
    'nav.cta': 'Aan de slag',
    'nav.subtitle': 'Officiële Belgische Otterino partner',
    
    // Hero
    'hero.badge': 'Officiële Belgische Partner van Otterino',
    'hero.title': 'Premium Weboplossingen voor',
    'hero.title.gradient': 'Belgische Bedrijven',
    'hero.subtitle': 'Zwitserse kwaliteit ontmoet Belgische expertise. Wij leveren snelle, veilige en geautomatiseerde websites die groei stimuleren.',
    'hero.value1.title': 'Geen Vendor Lock-in',
    'hero.value1.desc': 'Volledig eigendom van uw code en data',
    'hero.value2.title': 'Drietalige Ondersteuning',
    'hero.value2.desc': 'Nederlands, Frans en Engels klaar',
    'hero.value3.title': 'EU Conforme Hosting',
    'hero.value3.desc': 'Belgische & Zwitserse datacenters',
    'hero.value4.title': 'Slimme Automatisering',
    'hero.value4.desc': 'Marketing & bedrijfsproces automatisering',
    'hero.cta.primary': 'Plan Gratis Consultatie',
    'hero.cta.secondary': 'Bekijk Prijzen',
    'hero.note': '🚀 Express landingspagina? Eerste versie in 48 uur. Vanaf €399',
    
    // Services
    'services.title': 'Complete Digitale Oplossingen',
    'services.subtitle': 'Alles wat u nodig heeft om uw online aanwezigheid op te bouwen, te automatiseren en te laten groeien',
    'services.1.title': 'Hoogwaardige Websites',
    'services.1.desc': 'Bliksemsnelle, mobile-first architectuur gebouwd voor zichtbaarheid en conversies. Moderne frameworks zonder WordPress ballast.',
    'services.1.outcome': 'Lanceerklare platformen die leads en verkoop genereren',
    'services.2.title': 'Marketing Automatisering',
    'services.2.desc': 'Lead capture, content workflows en social media automatisering die werkt terwijl u slaapt.',
    'services.2.outcome': 'Geautomatiseerde marketing die handmatig werk met 60% vermindert',
    'services.3.title': 'Bedrijfsproces Automatisering',
    'services.3.desc': 'n8n workflows en AI-aangedreven processen om uw operaties te stroomlijnen en efficiëntie te verbeteren.',
    'services.3.outcome': 'Verminderd handmatig werk en verbeterde operationele efficiëntie',
    'services.4.title': 'SEO & Digitale Zichtbaarheid',
    'services.4.desc': 'Zoekoptimalisatie, lokale aanwezigheid en AI antwoordoptimalisatie voor Belgische markten.',
    'services.4.outcome': 'Hogere rankings en meer gekwalificeerd verkeer',
    'services.5.title': 'Meertalige Ondersteuning',
    'services.5.desc': 'Volledige ondersteuning voor Nederlands, Frans en Engels om alle Belgische regio\'s effectief te bereiken.',
    'services.5.outcome': 'Bereik en betrek alle Belgische markten',
    'services.6.title': 'EU Conforme Oplossingen',
    'services.6.desc': 'GDPR-conforme hosting met Belgische en Zwitserse datacenters. Uw data blijft in Europa.',
    'services.6.outcome': 'Volledige privacy en naleving van regelgeving',
    
    // Pricing
    'pricing.title': 'Transparante Prijzen',
    'pricing.subtitle': 'Geen verborgen kosten. Geen vendor lock-in. Kies het pakket dat bij u past.',
    'pricing.popular': 'Meest Populair',
    'pricing.delivery': 'Oplevering',
    'pricing.tier1.name': 'Hero Landing',
    'pricing.tier1.desc': 'Perfect voor campagnes en snelle lanceringen',
    'pricing.tier1.f1': 'Enkele landingspagina',
    'pricing.tier1.f2': 'Mobiel-geoptimaliseerd ontwerp',
    'pricing.tier1.f3': 'Contactformulier integratie',
    'pricing.tier1.f4': 'Basis tracking setup',
    'pricing.tier1.f5': '30-min intro + overdracht gesprek',
    'pricing.tier2.name': 'Starter',
    'pricing.tier2.desc': 'Ideaal voor kleine bedrijven die online gaan',
    'pricing.tier2.f1': '3 pagina\'s (Home, Over, Contact)',
    'pricing.tier2.f2': 'Basis mobiele layout',
    'pricing.tier2.f3': 'Basis SEO optimalisatie',
    'pricing.tier2.f4': '2 uur overdracht training',
    'pricing.tier2.f5': 'Content migratie ondersteuning',
    'pricing.tier3.name': 'Standard',
    'pricing.tier3.desc': 'Meest populair voor groeiende bedrijven',
    'pricing.tier3.f1': 'Tot 6 pagina\'s',
    'pricing.tier3.f2': 'PWA basics inbegrepen',
    'pricing.tier3.f3': 'Core Web Vitals optimalisatie',
    'pricing.tier3.f4': 'Basis SEO/GEO optimalisatie',
    'pricing.tier3.f5': 'Contactformulieren & integraties',
    'pricing.tier3.f6': '30 dagen bugfix support',
    'pricing.cta': 'Kies',
    'pricing.seo.title': 'SEO / Geo Fix (Snel)',
    'pricing.seo.delivery': '3-7 dagen oplevering',
    'pricing.seo.desc': 'Technische SEO snelle fixes, Google My Business review, NAP consistentie en geprioriteerde actielijst.',
    'pricing.seo.cta': 'Vraag SEO Fix aan',
    
    // Partnership
    'partnership.badge': 'Officieel Partnership',
    'partnership.title': 'Belgische Partner van Otterino',
    'partnership.subtitle': 'Als de officiële Belgische tegenpool van Otterino, brengen we Zwitserse engineering excellentie naar Belgische bedrijven. Wij bieden exact dezelfde premium diensten met lokale expertise en meertalige ondersteuning afgestemd op de Belgische markt.',
    'partnership.card1.title': 'Lokale Expertise',
    'partnership.card1.desc': 'Diepgaand begrip van Belgische bedrijfscultuur, regelgeving en marktbehoeften.',
    'partnership.card2.title': 'Zwitserse Kwaliteit',
    'partnership.card2.desc': 'Dezelfde bewezen processen, technologie en kwaliteitsnormen als Otterino wereldwijd.',
    'partnership.card3.title': 'Tri-Continentaal Netwerk',
    'partnership.card3.desc': 'Toegang tot Otterino\'s wereldwijde netwerk in Europa, UK en Azië-Pacific.',
    'partnership.why.title': 'Waarom Kiezen Voor Ons Partnership?',
    'partnership.why.1': 'Identieke Diensten:',
    'partnership.why.1.desc': 'Dezelfde premium weboplossingen, automatisering en SEO expertise',
    'partnership.why.2': 'Belgische Focus:',
    'partnership.why.2.desc': 'Drietalige ondersteuning (NL/FR/EN) en begrip van de lokale markt',
    'partnership.why.3': 'EU Compliance:',
    'partnership.why.3.desc': 'Belgische en Zwitserse datacenters, GDPR-first aanpak',
    'partnership.why.4': 'Wereldwijde Standaarden:',
    'partnership.why.4.desc': 'Toegang tot Otterino\'s bewezen methodologieën en internationale expertise',
    'partnership.why.5': 'Geen Lock-in:',
    'partnership.why.5.desc': 'Volledig eigendom en draagbaarheid van uw digitale assets',
    'partnership.cta': 'Verken Partnership Voordelen',
    'partnership.learn': 'Meer leren over Otterino:',
    
    // Contact
    'contact.title': 'Laten We Samen Bouwen',
    'contact.subtitle': 'Klaar om uw digitale aanwezigheid te transformeren? Neem contact op voor een gratis consultatie.',
    'contact.form.name': 'Naam',
    'contact.form.email': 'E-mail',
    'contact.form.company': 'Bedrijf (Optioneel)',
    'contact.form.message': 'Bericht',
    'contact.form.placeholder.name': 'Uw naam',
    'contact.form.placeholder.email': 'uw@email.com',
    'contact.form.placeholder.company': 'Uw bedrijfsnaam',
    'contact.form.placeholder.message': 'Vertel ons over uw project...',
    'contact.form.cta': 'Verstuur Bericht',
    'contact.email.title': 'E-mail',
    'contact.email.response': 'Reactie binnen 24 uur',
    'contact.location.title': 'Locatie',
    'contact.location.city': 'Brussel, België',
    'contact.location.serving': 'Bedienen alle Belgische regio\'s',
    'contact.consult.title': 'Gratis Consultatie',
    'contact.consult.schedule': 'Plan een 30-minuten gesprek',
    'contact.consult.cta': 'Boek Nu →',
    'contact.hours.title': 'Kantooruren',
    'contact.hours.weekday': 'Maandag - Vrijdag: 9:00 - 18:00',
    'contact.hours.saturday': 'Zaterdag: Op afspraak',
    'contact.hours.sunday': 'Zondag: Gesloten',
    
    // Footer
    'footer.desc': 'Zwitserse weboplossingen voor Belgische bedrijven. Premium kwaliteit, geen vendor lock-in, volledig eigendom.',
    'footer.collab': 'In samenwerking met',
    'footer.services.title': 'Diensten',
    'footer.services.1': 'Webontwikkeling',
    'footer.services.2': 'Marketing Automatisering',
    'footer.services.3': 'SEO & Zichtbaarheid',
    'footer.services.4': 'Bedrijfsautomatisering',
    'footer.company.title': 'Bedrijf',
    'footer.company.1': 'Partnership',
    'footer.company.2': 'Prijzen',
    'footer.company.3': 'Contact',
    'footer.company.4': 'Otterino Global',
    'footer.copyright': '© 2025 RJDP Consulting. Alle rechten voorbehouden.',
    'footer.privacy': 'Privacybeleid',
    'footer.terms': 'Algemene Voorwaarden',
  },
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.pricing': 'Pricing',
    'nav.partnership': 'Partnership',
    'nav.contact': 'Contact',
    'nav.cta': 'Get Started',
    'nav.subtitle': 'Official Belgian Otterino partner',
    
    // Hero
    'hero.badge': 'Official Belgian Partner of Otterino',
    'hero.title': 'Premium Web Solutions for',
    'hero.title.gradient': 'Belgian Businesses',
    'hero.subtitle': 'Swiss-engineered quality meets Belgian expertise. We deliver fast, secure, and automated websites that drive growth.',
    'hero.value1.title': 'No Vendor Lock-in',
    'hero.value1.desc': 'Complete ownership of your code and data',
    'hero.value2.title': 'Tri-Lingual Support',
    'hero.value2.desc': 'Dutch, French, and English ready',
    'hero.value3.title': 'EU Compliant Hosting',
    'hero.value3.desc': 'Belgian & Swiss data centers',
    'hero.value4.title': 'Smart Automation',
    'hero.value4.desc': 'Marketing & business process automation',
    'hero.cta.primary': 'Schedule Free Consultation',
    'hero.cta.secondary': 'View Pricing',
    'hero.note': '🚀 Express landing page? First draft in 48 hours. Starting from €399',
    
    // Services
    'services.title': 'Complete Digital Solutions',
    'services.subtitle': 'Everything you need to build, automate, and grow your online presence',
    'services.1.title': 'High-Performance Websites',
    'services.1.desc': 'Lightning-fast, mobile-first architecture built for visibility and conversions. Modern frameworks without WordPress bloat.',
    'services.1.outcome': 'Launch-ready platforms that drive leads and sales',
    'services.2.title': 'Marketing Automation',
    'services.2.desc': 'Lead capture, content workflows, and social media automation that works while you sleep.',
    'services.2.outcome': 'Automated marketing reducing manual work by 60%',
    'services.3.title': 'Business Process Automation',
    'services.3.desc': 'n8n workflows and AI-powered processes to streamline your operations and improve efficiency.',
    'services.3.outcome': 'Reduced manual work and improved operational efficiency',
    'services.4.title': 'SEO & Digital Visibility',
    'services.4.desc': 'Search optimization, local presence, and AI answer optimization for Belgian markets.',
    'services.4.outcome': 'Higher rankings and more qualified traffic',
    'services.5.title': 'Multilingual Support',
    'services.5.desc': 'Full support for Dutch, French, and English to reach all Belgian regions effectively.',
    'services.5.outcome': 'Reach and engage all Belgian markets',
    'services.6.title': 'EU Compliant Solutions',
    'services.6.desc': 'GDPR-compliant hosting with Belgian and Swiss data centers. Your data stays in Europe.',
    'services.6.outcome': 'Complete privacy and regulatory compliance',
    
    // Pricing
    'pricing.title': 'Transparent Pricing',
    'pricing.subtitle': 'No hidden fees. No vendor lock-in. Choose the package that fits your needs.',
    'pricing.popular': 'Most Popular',
    'pricing.delivery': 'Delivery',
    'pricing.tier1.name': 'Hero Landing',
    'pricing.tier1.desc': 'Perfect for campaigns and quick launches',
    'pricing.tier1.f1': 'Single landing page',
    'pricing.tier1.f2': 'Mobile-optimized design',
    'pricing.tier1.f3': 'Contact form integration',
    'pricing.tier1.f4': 'Basic tracking setup',
    'pricing.tier1.f5': '30-min intro + handover call',
    'pricing.tier2.name': 'Starter',
    'pricing.tier2.desc': 'Ideal for small businesses getting online',
    'pricing.tier2.f1': '3 pages (Home, About, Contact)',
    'pricing.tier2.f2': 'Basic mobile layout',
    'pricing.tier2.f3': 'Basic SEO optimization',
    'pricing.tier2.f4': '2 hours handover training',
    'pricing.tier2.f5': 'Content migration support',
    'pricing.tier3.name': 'Standard',
    'pricing.tier3.desc': 'Most popular for growing businesses',
    'pricing.tier3.f1': 'Up to 6 pages',
    'pricing.tier3.f2': 'PWA basics included',
    'pricing.tier3.f3': 'Core Web Vitals tuning',
    'pricing.tier3.f4': 'Basic SEO/GEO optimization',
    'pricing.tier3.f5': 'Contact forms & integrations',
    'pricing.tier3.f6': '30 days bugfix support',
    'pricing.cta': 'Choose',
    'pricing.seo.title': 'SEO / Geo Fix (Quick)',
    'pricing.seo.delivery': '3-7 days delivery',
    'pricing.seo.desc': 'Technical SEO quick fixes, Google My Business review, NAP consistency, and prioritized action list.',
    'pricing.seo.cta': 'Request SEO Fix',
    
    // Partnership
    'partnership.badge': 'Official Partnership',
    'partnership.title': 'Belgian Partner of Otterino',
    'partnership.subtitle': 'As the official Belgian counterpart to Otterino, we bring Swiss-engineered excellence to Belgian businesses. We offer the exact same premium services with local expertise and multilingual support tailored for the Belgian market.',
    'partnership.card1.title': 'Local Expertise',
    'partnership.card1.desc': 'Deep understanding of Belgian business culture, regulations, and market needs.',
    'partnership.card2.title': 'Swiss Quality',
    'partnership.card2.desc': 'Same proven processes, technology, and quality standards as Otterino worldwide.',
    'partnership.card3.title': 'Tri-Continental Network',
    'partnership.card3.desc': 'Access to Otterino\'s global network across Europe, UK, and Asia-Pacific.',
    'partnership.why.title': 'Why Choose Our Partnership?',
    'partnership.why.1': 'Identical Services:',
    'partnership.why.1.desc': 'Same premium web solutions, automation, and SEO expertise',
    'partnership.why.2': 'Belgian Focus:',
    'partnership.why.2.desc': 'Tri-lingual support (NL/FR/EN) and local market understanding',
    'partnership.why.3': 'EU Compliance:',
    'partnership.why.3.desc': 'Belgian and Swiss data centers, GDPR-first approach',
    'partnership.why.4': 'Global Standards:',
    'partnership.why.4.desc': 'Access to Otterino\'s proven methodologies and international expertise',
    'partnership.why.5': 'Zero Lock-in:',
    'partnership.why.5.desc': 'Complete ownership and portability of your digital assets',
    'partnership.cta': 'Explore Partnership Benefits',
    'partnership.learn': 'Learn more about Otterino:',
    
    // Contact
    'contact.title': 'Let\'s Build Together',
    'contact.subtitle': 'Ready to transform your digital presence? Get in touch for a free consultation.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.company': 'Company (Optional)',
    'contact.form.message': 'Message',
    'contact.form.placeholder.name': 'Your name',
    'contact.form.placeholder.email': 'your@email.com',
    'contact.form.placeholder.company': 'Your company name',
    'contact.form.placeholder.message': 'Tell us about your project...',
    'contact.form.cta': 'Send Message',
    'contact.email.title': 'Email',
    'contact.email.response': 'Response within 24 hours',
    'contact.location.title': 'Location',
    'contact.location.city': 'Brussels, Belgium',
    'contact.location.serving': 'Serving all Belgian regions',
    'contact.consult.title': 'Free Consultation',
    'contact.consult.schedule': 'Schedule a 30-minute call',
    'contact.consult.cta': 'Book Now →',
    'contact.hours.title': 'Office Hours',
    'contact.hours.weekday': 'Monday - Friday: 9:00 - 18:00',
    'contact.hours.saturday': 'Saturday: By appointment',
    'contact.hours.sunday': 'Sunday: Closed',
    
    // Footer
    'footer.desc': 'Swiss-engineered web solutions for Belgian businesses. Premium quality, zero vendor lock-in, complete ownership.',
    'footer.collab': 'In collaboration with',
    'footer.services.title': 'Services',
    'footer.services.1': 'Web Development',
    'footer.services.2': 'Marketing Automation',
    'footer.services.3': 'SEO & Visibility',
    'footer.services.4': 'Business Automation',
    'footer.company.title': 'Company',
    'footer.company.1': 'Partnership',
    'footer.company.2': 'Pricing',
    'footer.company.3': 'Contact',
    'footer.company.4': 'Otterino Global',
    'footer.copyright': '© 2025 RJDP Consulting. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('nl'); // Default to Dutch

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'nl' || savedLang === 'en')) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
