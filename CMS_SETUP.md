# CMS Setup Guide

## Overview
Your website is now fully CMS-ready using Decap CMS (formerly Netlify CMS). All content can be managed through a user-friendly interface without touching code.

## Accessing the CMS
- Navigate to `/admin` in your browser (e.g., `https://yoursite.com/admin`)
- The CMS interface will load automatically

## Content Structure

### 1. **Translations** 
Edit all UI text in both Dutch and English:
- Navigation labels
- Hero section text
- Form labels
- Footer text
- All static content

**Location:** `src/content/translations.nl.json` and `translations.en.json`

### 2. **Services**
Manage your service offerings:
- Service title
- Description
- Outcome statement
- Up to 6 services displayed with icons

**Location:** `src/content/services.nl.json` and `services.en.json`

### 3. **Pricing Packages**
Configure pricing tiers:
- Package name
- Price
- Delivery time
- Description
- Features list
- CTA button text
- Mark as "popular"

**Location:** `src/content/pricing.nl.json` and `pricing.en.json`

### 4. **Testimonials**
Add client testimonials:
- Author name
- Role
- Company
- Quote

**Location:** `src/content/testimonials/*.md` (Markdown files)

### 5. **Case Studies**
Showcase success stories:
- Project title
- Problem description
- Solution overview
- Results achieved
- Key Performance Indicators (KPIs)
- Client quote

**Location:** `src/content/cases/*.md` (Markdown files)

## How to Edit Content

### Via CMS Interface (Recommended)
1. Go to `/admin`
2. Log in (requires Git Gateway setup)
3. Select the collection you want to edit
4. Make your changes
5. Click "Save" to commit changes

### Direct File Edit
You can also edit the JSON/Markdown files directly in your code editor:
- JSON files for structured data (translations, services, pricing)
- Markdown files for rich content (testimonials, case studies)

## Benefits of This Setup

✅ **No Code Required** - Edit content through a user-friendly interface  
✅ **Version Control** - All changes tracked in Git  
✅ **Multilingual** - Easy management of Dutch and English content  
✅ **Scalable** - Add unlimited testimonials and case studies  
✅ **No Vendor Lock-in** - Content stored as files, not in a database  
✅ **SEO Friendly** - Content properly indexed by search engines  

## Authentication Setup

To enable CMS access for editors:

1. **Deploy to Netlify** (or compatible host)
2. **Enable Git Gateway** in Netlify Identity settings
3. **Invite users** to access the CMS
4. Users will receive login credentials via email

## File Structure

```
src/
├── content/
│   ├── translations.en.json
│   ├── translations.nl.json
│   ├── services.en.json
│   ├── services.nl.json
│   ├── pricing.en.json
│   ├── pricing.nl.json
│   ├── testimonials/
│   │   └── sample-testimonial.md
│   └── cases/
│       └── belgian-manufacturing.md
├── components/
│   ├── Services.tsx (loads from services.json)
│   ├── Pricing.tsx (loads from pricing.json)
│   ├── Testimonials.tsx (loads from testimonials/)
│   └── CaseStudies.tsx (loads from cases/)
└── contexts/
    └── LanguageContext.tsx (loads from translations.json)

public/
└── admin/
    ├── config.yml (CMS configuration)
    └── index.html (CMS interface)
```

## Adding New Content

### Add a Testimonial
1. Go to CMS → Testimonials → New Testimonial
2. Fill in: Author, Role, Company, Quote
3. Save

### Add a Case Study
1. Go to CMS → Case Studies → New Case Study
2. Fill in all fields including KPIs (add multiple)
3. Save

### Modify Services
1. Go to CMS → Services → Select language
2. Edit existing services or add new ones
3. Maintain 6 services for best layout

### Update Pricing
1. Go to CMS → Pricing Packages → Select language
2. Edit package details
3. Toggle "Popular" badge as needed

## Tips

- **Always preview** changes before publishing
- **Keep translations synchronized** between Dutch and English versions
- **Use descriptive titles** for testimonials and case studies
- **Optimize images** before uploading to `/public/uploads`
- **Test on mobile** after major content changes

## Support

For technical issues or questions about the CMS setup, refer to:
- [Decap CMS Documentation](https://decapcms.org/docs/)
- Your development team
- This project's knowledge base

---

**Your website is now fully content-manageable!** 🎉
