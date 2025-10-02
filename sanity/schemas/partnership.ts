export default {
  name: 'partnership',
  title: 'Partnership Section',
  type: 'document',
  fields: [
    {
      name: 'nl',
      title: '🇳🇱 Dutch (Nederlands)',
      type: 'object',
      fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'subtitle', type: 'text', title: 'Subtitle' },
        { name: 'benefit1_title', type: 'string', title: 'Benefit 1 Title' },
        { name: 'benefit1_desc', type: 'text', title: 'Benefit 1 Description' },
        { name: 'benefit2_title', type: 'string', title: 'Benefit 2 Title' },
        { name: 'benefit2_desc', type: 'text', title: 'Benefit 2 Description' },
        { name: 'benefit3_title', type: 'string', title: 'Benefit 3 Title' },
        { name: 'benefit3_desc', type: 'text', title: 'Benefit 3 Description' },
        { name: 'cta', type: 'string', title: 'CTA Button' },
      ],
    },
    {
      name: 'en',
      title: '🇬🇧 English',
      type: 'object',
      fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'subtitle', type: 'text', title: 'Subtitle' },
        { name: 'benefit1_title', type: 'string', title: 'Benefit 1 Title' },
        { name: 'benefit1_desc', type: 'text', title: 'Benefit 1 Description' },
        { name: 'benefit2_title', type: 'string', title: 'Benefit 2 Title' },
        { name: 'benefit2_desc', type: 'text', title: 'Benefit 2 Description' },
        { name: 'benefit3_title', type: 'string', title: 'Benefit 3 Title' },
        { name: 'benefit3_desc', type: 'text', title: 'Benefit 3 Description' },
        { name: 'cta', type: 'string', title: 'CTA Button' },
      ],
    },
  ],
};
