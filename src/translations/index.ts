import { nl } from './nl';
import { en } from './en';

export const translations = {
  nl,
  en,
};

export type Language = 'nl' | 'en';
export type TranslationKey = keyof typeof nl;
