# Sanity.io Integration Guide

✅ **STATUS: FULLY IMPLEMENTED**

This project is fully integrated with Sanity.io CMS. All translations are managed through Sanity Studio with automatic fallback to static translations.

## 🎯 Quick Start

1. **Access Studio**: Navigate to `/studio` on your website
2. **Login**: Authenticate with your Sanity account
3. **Edit Content**: Click any section to edit translations
4. **Publish**: Hit the Publish button to make changes live

For detailed usage instructions, see [SANITY_USAGE_GUIDE.md](./SANITY_USAGE_GUIDE.md)

## Current Structure

### Translations

**Primary Source**: Sanity CMS (fetched dynamically)
**Fallback**: Static translation files in `src/translations/`

Translation files serve as fallback when Sanity is unavailable:
```
src/translations/
├── nl/          # Dutch translations (fallback)
├── en/          # English translations (fallback)
└── index.ts     # Export aggregator
```

**Sanity Schemas** (primary source):
```
sanity/schemas/
├── index.ts
├── nav.ts
├── hero.ts
├── services.ts
├── pricing.ts
├── partnership.ts
├── contact.ts
└── footer.ts
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

## ✅ Implementation Complete

### Sanity Configuration

**Project Details:**
- Project ID: `v420hrf9`
- Dataset: `production`
- API Version: `2024-01-01`
- Studio Route: `/studio`

**Installed Packages:**
- `sanity@^3.67.1` - Sanity Studio v3
- `@sanity/client@^6.22.7` - Sanity client for data fetching
- `@sanity/image-url@^1.1.0` - Image URL builder (ready for future use)
- `styled-components@^6.1.13` - Required peer dependency

### Schema Architecture

Each of the 7 sections has its own singleton document schema with `nl` and `en` object fields:

```typescript
// Example: sanity/schemas/nav.ts
{
  name: 'nav',
  title: 'Navigation',
  type: 'document',
  fields: [
    {
      name: 'nl',
      title: '🇳🇱 Dutch (Nederlands)',
      type: 'object',
      fields: [/* all Dutch fields */]
    },
    {
      name: 'en',
      title: '🇬🇧 English',
      type: 'object',
      fields: [/* all English fields */]
    }
  ]
}
```

### Data Flow

```
┌─────────────────┐
│  Sanity Studio  │ ← Editor makes changes
│   (/studio)     │
└────────┬────────┘
         │
         ↓ (Sanity API)
┌─────────────────┐
│ Sanity Client   │
│ (GROQ Queries)  │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│ Language        │ ← Fetches on app mount
│ Context         │ ← Merges with fallbacks
└────────┬────────┘
         │
         ↓ (t() function)
┌─────────────────┐
│  React          │
│  Components     │ ← Displays translated content
└─────────────────┘
```

### File Structure

```
project-root/
├── sanity/
│   └── schemas/           # Sanity schema definitions
│       ├── index.ts
│       ├── nav.ts
│       ├── hero.ts
│       ├── services.ts
│       ├── pricing.ts
│       ├── partnership.ts
│       ├── contact.ts
│       └── footer.ts
├── scripts/
│   ├── migrateToSanity.md      # Migration guide
│   └── sanityInitialData.json  # Initial data for Sanity
├── src/
│   ├── config/
│   │   └── sanity.config.ts    # Sanity credentials
│   ├── contexts/
│   │   └── LanguageContext.tsx # Updated with Sanity fetching
│   ├── lib/
│   │   ├── sanity.ts           # Sanity client
│   │   └── sanityQueries.ts    # GROQ queries
│   ├── types/
│   │   └── sanity.ts           # TypeScript types
│   ├── pages/
│   │   └── Studio.tsx          # Sanity Studio page
│   └── translations/           # Fallback translations
├── sanity.config.ts            # Root Sanity config
├── sanity.cli.ts               # Sanity CLI config
├── SANITY_USAGE_GUIDE.md       # User guide
└── SANITY_INTEGRATION.md       # This file
```

### Translation Key Mapping

Field names in Sanity use **underscores**, automatically converted to **dots** in code:

| Sanity Field | Translation Key | Example Value |
|--------------|----------------|---------------|
| `nav.nl.services` | `nav.services` | "Diensten" |
| `hero.nl.value1_title` | `hero.value1.title` | "Geen vendor Lockin" |
| `contact.en.form_cta` | `contact.form.cta` | "Send Message" |

### Fetching Logic

**LanguageContext** (`src/contexts/LanguageContext.tsx`):
- Fetches all 7 sections from Sanity on app mount
- Aggregates into `{ nl: {...}, en: {...} }` format
- Merges with static fallback translations
- Provides `t()` function for component access
- Includes `loading`, `error`, and `refreshTranslations()` for state management

**Query Function** (`src/lib/sanityQueries.ts`):
```typescript
export async function fetchAllTranslations(): Promise<AllTranslations> {
  const translations: AllTranslations = { nl: {}, en: {} };
  
  for (const sectionName of ['nav', 'hero', 'services', ...]) {
    const section = await fetchSection(sectionName);
    // Convert field names: 'value1_title' → 'nav.value1.title'
    // Aggregate into translations object
  }
  
  return translations;
}
```

## 🚀 Features Enabled

### For Editors
✅ Edit all website content via Studio UI
✅ Side-by-side Dutch and English editing
✅ Real-time preview in Studio
✅ Version history and rollback
✅ Publish/unpublish workflow
✅ No code deployment needed for content changes

### For Developers
✅ Type-safe translation system
✅ Automatic fallback to static translations
✅ Loading and error states
✅ Refresh translations without page reload
✅ Easy to extend with new sections
✅ Image support ready (via `@sanity/image-url`)

## 📚 Additional Resources

### Migration
See [scripts/migrateToSanity.md](./scripts/migrateToSanity.md) for step-by-step migration instructions.

### Usage Guide
See [SANITY_USAGE_GUIDE.md](./SANITY_USAGE_GUIDE.md) for content editor documentation.

### Initial Data
See [scripts/sanityInitialData.json](./scripts/sanityInitialData.json) for complete translation dataset.

## 🔮 Future Enhancements

### Rich Text Content
Add Portable Text for formatted content:
```typescript
{
  name: 'description',
  title: 'Description',
  type: 'array',
  of: [{ type: 'block' }]
}
```

### Image Management
Add image fields to schemas:
```typescript
{
  name: 'heroImage',
  title: 'Hero Image',
  type: 'image',
  options: { hotspot: true }
}
```

Use with `@sanity/image-url`:
```typescript
import imageUrlBuilder from '@sanity/image-url';
const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source) => builder.image(source);
```

### Dynamic Content Types
Expand beyond translations:
- Blog posts with categories and authors
- Case studies with testimonials
- Team member profiles
- Product/service catalogs
- FAQ sections

### Localization Plugin
Install `@sanity/language-filter` for enhanced multi-language workflows:
- Language-specific document views
- Translation progress tracking
- Bulk translation tools

## ✨ Benefits Achieved

✅ **Full CMS Control**: All content editable via Sanity Studio
✅ **Type-Safe**: Complete TypeScript type safety
✅ **Fallback System**: Automatic fallback to static translations
✅ **Developer-Friendly**: Components unchanged, same `t()` API
✅ **Editor-Friendly**: Intuitive Studio UI, no technical knowledge required
✅ **Maintainable**: Clear separation between content and code
✅ **Scalable**: Easy to add new languages or sections
✅ **Version Control**: Built-in content versioning and history
✅ **No Vendor Lock-in**: Can export all content as JSON
✅ **Performance**: CDN-powered content delivery

## 🔄 Content Workflow

### For Content Editors
1. Navigate to `/studio`
2. Click any section (Nav, Hero, Services, etc.)
3. Edit Dutch 🇳🇱 and English 🇬🇧 translations
4. Click **Publish**
5. Changes appear immediately on website

### For Developers
1. Add new sections to `sanity/schemas/`
2. Update `src/lib/sanityQueries.ts` to fetch new sections
3. Use existing `t()` function in components
4. Static translations serve as fallback
5. No code deployment needed for content changes

## 🎓 Next Steps

1. **Migrate Content**: Follow [scripts/migrateToSanity.md](./scripts/migrateToSanity.md)
2. **Test Studio**: Visit `/studio` and verify all sections
3. **Publish Content**: Publish all 7 sections in Sanity
4. **Train Editors**: Share [SANITY_USAGE_GUIDE.md](./SANITY_USAGE_GUIDE.md)
5. **Monitor**: Check browser console for any fetch errors

---

**Status**: ✅ Fully implemented and production-ready
