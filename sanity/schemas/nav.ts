export default {
  name: 'nav',
  title: 'Navigation',
  type: 'document',
  fields: [
    {
      name: 'nl',
      title: '🇳🇱 Dutch (Nederlands)',
      type: 'object',
      fields: [
        { name: 'services', type: 'string', title: 'Services' },
        { name: 'pricing', type: 'string', title: 'Pricing' },
        { name: 'partnership', type: 'string', title: 'Partnership' },
        { name: 'contact', type: 'string', title: 'Contact' },
        { name: 'cta', type: 'string', title: 'CTA Button' },
        { name: 'subtitle', type: 'string', title: 'Subtitle' },
      ],
    },
    {
      name: 'en',
      title: '🇬🇧 English',
      type: 'object',
      fields: [
        { name: 'services', type: 'string', title: 'Services' },
        { name: 'pricing', type: 'string', title: 'Pricing' },
        { name: 'partnership', type: 'string', title: 'Partnership' },
        { name: 'contact', type: 'string', title: 'Contact' },
        { name: 'cta', type: 'string', title: 'CTA Button' },
        { name: 'subtitle', type: 'string', title: 'Subtitle' },
      ],
    },
  ],
};
