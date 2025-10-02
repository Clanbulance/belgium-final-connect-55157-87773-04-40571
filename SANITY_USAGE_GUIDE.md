# Sanity CMS Usage Guide

## 🎯 Overview

Your website is now powered by Sanity.io CMS. All translations and content can be edited through the Sanity Studio interface without touching any code.

## 🚀 Accessing Sanity Studio

### Local Development
Navigate to: `http://localhost:8080/studio`

### Production
Navigate to: `https://yourdomain.com/studio`

### First Time Access
1. You'll be prompted to login with Sanity
2. Use your Sanity account credentials
3. If you don't have an account, create one at [sanity.io](https://www.sanity.io)

## 📋 Content Structure

Your content is organized into **7 sections**:

### 1. Navigation (nav)
- Website navigation menu items
- CTA button text
- Subtitle/tagline

### 2. Hero Section (hero)
- Main headline and subheadline
- Badge text
- Value propositions (4 items)
- Call-to-action buttons
- Special note/announcement

### 3. Services Section (services)
- Section title and subtitle
- 4 service cards with titles and descriptions

### 4. Pricing Section (pricing)
- Section title and subtitle
- 3 pricing tiers with:
  - Name, price, description
  - 3 features each
  - CTA button text

### 5. Partnership Section (partnership)
- Section title and subtitle
- 3 partnership benefits with titles and descriptions
- CTA button

### 6. Contact Section (contact)
- Section title and subtitle
- Form field labels and placeholders
- Contact information (email, location, hours)
- Consultation booking text

### 7. Footer Section (footer)
- Description text
- Service links
- Company links
- Legal links
- Copyright notice

## ✏️ How to Edit Content

### Step 1: Navigate to Studio
Go to `/studio` on your website

### Step 2: Select a Section
Click on any section in the left sidebar (e.g., "Navigation", "Hero Section")

### Step 3: Edit Translations
Each section has **two language tabs**:
- 🇳🇱 **Dutch (Nederlands)** - for Dutch translations
- 🇬🇧 **English** - for English translations

### Step 4: Make Your Changes
- Click into any text field
- Edit the content
- Changes are auto-saved as drafts

### Step 5: Publish
- Click the **Publish** button in the top-right corner
- Changes will appear on the live website immediately

## 🔄 Language Switching

The website automatically:
- Uses Dutch (NL) as the default language
- Allows users to switch between NL and EN
- Remembers the user's language preference
- Falls back to the original static translations if Sanity fails

## 💡 Best Practices

### ✅ Do's
- **Test both languages**: Always update both NL and EN translations
- **Publish regularly**: Don't leave too many drafts unpublished
- **Use consistent terminology**: Keep brand terms consistent across sections
- **Preview before publishing**: Review changes in the Studio preview
- **Keep formatting**: Maintain emojis and special characters (e.g., 🚀, →)

### ❌ Don'ts
- **Don't delete fields**: This will break the website
- **Don't change field names**: The code relies on specific field names
- **Don't use HTML**: Plain text only (the design is handled by code)
- **Don't leave fields empty**: Always provide translations for both languages

## 🔧 Field Naming Convention

Field names use **underscores** to separate nested keys:

Example in Sanity:
- Field name: `value1_title`
- Translation key in code: `hero.value1.title`

The system automatically converts underscores to dots.

## 📊 Version History

Sanity automatically tracks all changes:

1. Click the **clock icon** (⏱️) in the top-right corner
2. See all previous versions
3. Click any version to preview it
4. Restore previous versions if needed

## 🐛 Troubleshooting

### Changes Not Appearing on Website
1. Ensure you clicked **Publish** (not just save draft)
2. Hard refresh the website (Ctrl+Shift+R / Cmd+Shift+R)
3. Clear browser cache
4. Wait 1-2 minutes for CDN propagation

### Studio Not Loading
1. Check your internet connection
2. Clear browser cache and cookies
3. Try a different browser
4. Verify you're logged into Sanity

### Missing Translations
1. Verify all fields are filled in both NL and EN tabs
2. Check that field names haven't been changed
3. Look for console errors (F12 → Console tab)

### Field Not Updating
1. Make sure you're editing the correct language tab
2. Save and publish the changes
3. Refresh the website
4. Check if the field name matches the expected key

## 👥 User Management

To add team members who can edit content:

1. Go to [Sanity.io Dashboard](https://www.sanity.io/manage)
2. Select your project (v420hrf9)
3. Go to "Team" or "Members"
4. Invite team members by email
5. Set their role (Admin, Editor, Viewer)

### Recommended Roles
- **Admin**: Full access (for developers)
- **Editor**: Can create, edit, and publish content
- **Viewer**: Read-only access

## 📝 Content Guidelines

### Writing for Web
- **Keep it concise**: Users scan, they don't read everything
- **Use active voice**: "We deliver" not "Solutions are delivered"
- **Front-load keywords**: Important words first
- **Break up text**: Use short paragraphs
- **Add value**: Every sentence should serve a purpose

### SEO Best Practices
- Include target keywords naturally
- Write compelling meta descriptions (if added later)
- Use proper heading hierarchy
- Keep URLs clean and descriptive

### Multilingual Considerations
- **Respect language nuances**: Dutch and English have different tones
- **Don't translate literally**: Adapt messaging for each culture
- **Check character length**: Some translations are longer
- **Local references**: Use region-appropriate examples

## 🚀 Advanced Features

### Rich Text (Future)
Currently using plain text. Rich text (bold, italic, links) can be added later with:
- Portable Text fields
- Custom formatting options
- Embedded media

### Images (Future)
Image fields can be added to schemas for:
- Service icons
- Team photos
- Case study images
- Partner logos

### Structured Content (Future)
Build more complex content like:
- Blog posts with categories
- Case studies with testimonials
- FAQ sections with questions/answers
- Dynamic product listings

## 📞 Support

### Technical Issues
Contact your developer for:
- Schema changes (adding/removing fields)
- Custom field types
- Integration issues
- Performance problems

### Content Questions
Refer to this guide or:
- Check `scripts/sanityInitialData.json` for original content
- Review `SANITY_INTEGRATION.md` for technical details
- Contact your content manager

## 🎓 Learning Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity Studio Guides](https://www.sanity.io/docs/studio)
- [Content Modeling Best Practices](https://www.sanity.io/docs/content-modeling)

---

**Remember**: With great power comes great responsibility. You can now update the entire website content without a developer! 🎉
