import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations as fallbackTranslations, Language } from '@/translations';
import { fetchAllTranslations } from '@/lib/sanityQueries';
import type { AllTranslations } from '@/types/sanity';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  loading: boolean;
  error: Error | null;
  refreshTranslations: () => Promise<void>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('nl');
  const [translations, setTranslations] = useState<AllTranslations>(fallbackTranslations);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const loadTranslations = async () => {
    try {
      setLoading(true);
      setError(null);
      const sanityTranslations = await fetchAllTranslations();
      
      // Merge with fallback translations to ensure no missing keys
      const mergedTranslations = {
        nl: { ...fallbackTranslations.nl, ...sanityTranslations.nl },
        en: { ...fallbackTranslations.en, ...sanityTranslations.en },
      };
      
      setTranslations(mergedTranslations);
    } catch (err) {
      console.error('Error loading translations from Sanity:', err);
      setError(err as Error);
      // Fall back to static translations on error
      setTranslations(fallbackTranslations);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'nl' || savedLang === 'en')) {
      setLanguageState(savedLang);
    }
    
    // Load translations from Sanity
    loadTranslations();
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const refreshTranslations = async () => {
    await loadTranslations();
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, loading, error, refreshTranslations }}>
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
