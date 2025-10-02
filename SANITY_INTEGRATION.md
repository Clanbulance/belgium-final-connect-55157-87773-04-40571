# Sanity.io Integration Guide

This project is now structured for seamless Sanity.io CMS integration. The codebase uses modular translations and semantic class naming to prepare for dynamic content management.

## Current Structure

### Translations
All translations are organized in `src/translations/`:
```
src/translations/
├── nl/
│   ├── nav.ts
│   ├── hero.ts
│   ├── services.ts
│   ├── pricing.ts
│   ├── partnership.ts
│   ├── contact.ts
│   ├── footer.ts
│   └── index.ts
├── en/
│   ├── nav.ts
│   ├── hero.ts
│   ├── services.ts
│   ├── pricing.ts
│   ├── partnership.ts
│   ├── contact.ts
│   ├── footer.ts
│   └── index.ts
└── index.ts
```

### Semantic Classes
All components use semantic class naming for better maintainability:
- **Navigation**: `nav-container`, `nav-logo`, `nav-link`
- **Hero**: `hero-section`, `hero-title`, `hero-subtitle`, `hero-cta`
- **Services**: `services-section`, `services-card`, `service-title`
- **Pricing**: `pricing-section`, `pricing-card`, `pricing-tier`
- **Partnership**: `partnership-section`, `partnership-card`
- **Contact**: `contact-section`, `contact-form`, `contact-info`
- **Footer**: `footer-container`, `footer-brand`, `footer-links`

## Future Sanity.io Integration

### Step 1: Set Up Sanity Project
```bash
npm install @sanity/client @sanity/image-url
```

### Step 2: Create Sanity Schema
Example schema for translations (`schemas/translation.ts`):
```typescript
export default {
  name: 'translation',
  title: 'Translations',
  type: 'document',
  fields: [
    {
      name: 'key',
      title: 'Translation Key',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'nl',
      title: 'Dutch',
      type: 'text'
    },
    {
      name: 'en',
      title: 'English',
      type: 'text'
    },
    {
      name: 'section',
      title: 'Section',
      type: 'string',
      options: {
        list: ['nav', 'hero', 'services', 'pricing', 'partnership', 'contact', 'footer']
      }
    }
  ]
}
```

### Step 3: Create Sanity Client
Create `src/lib/sanity.ts`:
```typescript
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});

export async function fetchTranslations(section: string) {
  const query = `*[_type == "translation" && section == $section]{
    key,
    nl,
    en
  }`;
  
  return await client.fetch(query, { section });
}
```

### Step 4: Update LanguageContext
Modify `src/contexts/LanguageContext.tsx` to fetch from Sanity:
```typescript
import { fetchTranslations } from '@/lib/sanity';

// Inside LanguageProvider:
useEffect(() => {
  const loadTranslations = async () => {
    const sections = ['nav', 'hero', 'services', 'pricing', 'partnership', 'contact', 'footer'];
    const allTranslations = { nl: {}, en: {} };
    
    for (const section of sections) {
      const data = await fetchTranslations(section);
      data.forEach(item => {
        allTranslations.nl[item.key] = item.nl;
        allTranslations.en[item.key] = item.en;
      });
    }
    
    setTranslations(allTranslations);
  };
  
  loadTranslations();
}, []);
```

### Step 5: Migrate Content to Sanity
Use the existing translation files to populate Sanity Studio:
1. Import data from `src/translations/` into Sanity
2. Test content editing in Sanity Studio
3. Verify live updates on the website

## Additional Sanity Features

### Images
Add image fields to schemas and use `@sanity/image-url` for optimization:
```typescript
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
```

### Rich Text
Use Portable Text for formatted content:
```typescript
{
  name: 'content',
  title: 'Content',
  type: 'array',
  of: [{ type: 'block' }]
}
```

### Localization
Sanity supports document-level localization with the `@sanity/language-filter` plugin.

## Benefits of This Structure
✅ **Modular**: Each section has its own translation file  
✅ **Type-Safe**: TypeScript interfaces ensure type safety  
✅ **Semantic**: HTML classes follow semantic naming conventions  
✅ **CMS-Ready**: Easy migration path to Sanity.io  
✅ **Maintainable**: Clean separation of concerns  
✅ **Scalable**: Can easily add more languages or sections

## Development Workflow
1. **Current**: Edit translation files directly in `src/translations/`
2. **Future**: Edit content via Sanity Studio
3. **Preview**: Real-time updates with Sanity's live preview
4. **Deploy**: Content changes deploy instantly without code changes

This structure ensures a smooth transition to full CMS capabilities when ready.
