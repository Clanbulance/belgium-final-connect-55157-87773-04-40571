export interface TranslationFields {
  [key: string]: string;
}

export interface SanitySection {
  _id: string;
  _type: string;
  nl: TranslationFields;
  en: TranslationFields;
}

export interface AllTranslations {
  nl: Record<string, string>;
  en: Record<string, string>;
}

export type SectionName = 'nav' | 'hero' | 'services' | 'pricing' | 'partnership' | 'contact' | 'footer';
