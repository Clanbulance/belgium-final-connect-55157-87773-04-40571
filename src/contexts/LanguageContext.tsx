import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'nl' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Dynamic import of translations
const loadTranslations = async (lang: Language) => {
  try {
    const module = await import(`../content/translations.${lang}.json`);
    return module.default;
  } catch (error) {
    console.error(`Failed to load translations for ${lang}:`, error);
    return {};
  }
};

let translationsCache: Record<Language, Record<string, string>> = {
  nl: {},
  en: {}
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('nl'); // Default to Dutch
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const initializeLanguage = async () => {
      const savedLang = localStorage.getItem('language') as Language;
      const initialLang = (savedLang && (savedLang === 'nl' || savedLang === 'en')) ? savedLang : 'nl';
      
      // Load both languages on init
      const [nlTranslations, enTranslations] = await Promise.all([
        loadTranslations('nl'),
        loadTranslations('en')
      ]);
      
      translationsCache = {
        nl: nlTranslations,
        en: enTranslations
      };
      
      setLanguageState(initialLang);
      setIsLoaded(true);
    };
    
    initializeLanguage();
  }, []);

  const setLanguage = async (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    
    // Load translations if not cached
    if (Object.keys(translationsCache[lang]).length === 0) {
      translationsCache[lang] = await loadTranslations(lang);
    }
  };

  const t = (key: string): string => {
    if (!isLoaded) return key;
    return translationsCache[language]?.[key] || key;
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
