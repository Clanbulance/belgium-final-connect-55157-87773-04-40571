# Migrate Translations to Sanity CMS

This guide will help you populate your Sanity CMS with the initial translations from your project.

## Prerequisites

1. **Access Sanity Studio**: Navigate to `/studio` in your browser
2. **Login**: You'll be prompted to authenticate with Sanity (use your Sanity account)

## Migration Steps

### Step 1: Access Sanity Studio

Visit your website at `/studio` path:
- Local: `http://localhost:8080/studio`
- Production: `https://yourdomain.com/studio`

### Step 2: Create Documents for Each Section

You need to create **7 documents**, one for each section. Sanity Studio will show these in the sidebar:

1. **Navigation** (nav)
2. **Hero Section** (hero)
3. **Services Section** (services)
4. **Pricing Section** (pricing)
5. **Partnership Section** (partnership)
6. **Contact Section** (contact)
7. **Footer Section** (footer)

### Step 3: Populate Each Section

For each section, click on it in the Studio sidebar and fill in the fields.

#### 1. Navigation (nav)

**🇳🇱 Dutch (Nederlands):**
- services: `Diensten`
- pricing: `Prijzen`
- partnership: `Partnership`
- contact: `Contact`
- cta: `Aan de slag`
- subtitle: `Officiële Belgische Otterino partner`

**🇬🇧 English:**
- services: `Services`
- pricing: `Pricing`
- partnership: `Partnership`
- contact: `Contact`
- cta: `Get Started`
- subtitle: `Official Belgian Otterino partner`

#### 2. Hero Section (hero)

**🇳🇱 Dutch:**
- badge: `Officiële Belgische Partner van Otterino`
- title: `Premium Weboplossingen voor`
- title_gradient: `Belgische Bedrijven`
- subtitle: `Zwitserse kwaliteit ontmoet Belgische expertise. Wij leveren snelle, veilige en geautomatiseerde websites die groei stimuleren.`
- value1_title: `Geen vendor Lockin`
- value1_desc: `Volledig eigendom van uw code en data`
- value2_title: `Drietalige Ondersteuning`
- value2_desc: `Nederlands, Frans en Engels klaar`
- value3_title: `EU Conforme Hosting`
- value3_desc: `Belgische & Zwitserse datacenters`
- value4_title: `Slimme automatisering`
- value4_desc: `Marketing & bedrijfsproces automatisering`
- cta_primary: `Plan Gratis Consultatie`
- cta_secondary: `Bekijk Prijzen`
- note: `🚀 Express landingspagina? Eerste versie in 48 uur. Vanaf €399`

**🇬🇧 English:**
- badge: `Official Belgian Partner of Otterino`
- title: `Premium Web Solutions for`
- title_gradient: `Belgian Businesses`
- subtitle: `Swiss-engineered quality meets Belgian expertise. We deliver fast, secure, and automated websites that drive growth.`
- value1_title: `No Vendor Lock-in`
- value1_desc: `Complete ownership of your code and data`
- value2_title: `Tri-Lingual Support`
- value2_desc: `Dutch, French, and English ready`
- value3_title: `EU Compliant Hosting`
- value3_desc: `Belgian & Swiss data centers`
- value4_title: `Smart Automation`
- value4_desc: `Marketing & business process automation`
- cta_primary: `Schedule Free Consultation`
- cta_secondary: `View Pricing`
- note: `🚀 Express landing page? First draft in 48 hours. Starting from €399`

#### 3. Services, Pricing, Partnership, Contact, Footer

Refer to the `sanityInitialData.json` file in this directory for complete field values for all sections.

### Step 4: Publish Each Document

After filling in the fields for each section:
1. Click the **Publish** button in the top right of the Studio
2. Repeat for all 7 sections

### Step 5: Verify Translations

1. Navigate back to your main website (`/`)
2. Refresh the page
3. Verify that all translations are loading correctly
4. Test language switching (NL ↔️ EN)

## Troubleshooting

### Translations Not Loading
- Check browser console for errors
- Verify all 7 documents are published in Sanity Studio
- Ensure field names match exactly (underscores for nested keys)

### Missing Translations
- The system falls back to static translations if Sanity fails
- Check that the Sanity API token is valid in `src/config/sanity.config.ts`

### Studio Not Loading
- Clear browser cache
- Ensure dependencies are installed: `npm install`
- Check that `sanity.config.ts` is in the project root

## Next Steps

Once migration is complete:
- ✅ All content can be edited via Sanity Studio
- ✅ No code deployments needed for content changes
- ✅ Version history tracks all changes
- ✅ Non-technical users can manage translations

## Reference

For complete translation values, see:
- `scripts/sanityInitialData.json` - Full dataset in JSON format
- `src/translations/` - Original static translation files (now fallbacks)
