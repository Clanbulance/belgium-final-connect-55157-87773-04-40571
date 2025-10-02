import { sanityClient } from './sanity';
import type { SanitySection, AllTranslations, SectionName } from '@/types/sanity';

const sectionTypes: SectionName[] = ['nav', 'hero', 'services', 'pricing', 'partnership', 'contact', 'footer'];

export async function fetchSection(sectionName: SectionName): Promise<SanitySection | null> {
  const query = `*[_type == $sectionName][0]`;
  return await sanityClient.fetch(query, { sectionName });
}

export async function fetchAllTranslations(): Promise<AllTranslations> {
  const translations: AllTranslations = { nl: {}, en: {} };

  for (const sectionName of sectionTypes) {
    const section = await fetchSection(sectionName);
    
    if (section) {
      // Convert field names to dot notation (e.g., "services" becomes "nav.services")
      Object.entries(section.nl || {}).forEach(([key, value]) => {
        // For services section, strip "service" prefix from field names like "service1_title" -> "1.title"
        const processedKey = sectionName === 'services' && key.startsWith('service')
          ? key.replace(/^service/, '')
          : key;
        const translationKey = `${sectionName}.${processedKey.replace(/_/g, '.')}`;
        translations.nl[translationKey] = value;
      });

      Object.entries(section.en || {}).forEach(([key, value]) => {
        // For services section, strip "service" prefix from field names like "service1_title" -> "1.title"
        const processedKey = sectionName === 'services' && key.startsWith('service')
          ? key.replace(/^service/, '')
          : key;
        const translationKey = `${sectionName}.${processedKey.replace(/_/g, '.')}`;
        translations.en[translationKey] = value;
      });
    }
  }

  return translations;
}
