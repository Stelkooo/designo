import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'designType',
  title: 'Design Type',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'description',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'object',
      fields: [
        { name: 'mobile', title: 'Mobile', type: 'image' },
        { name: 'tablet', title: 'Tablet', type: 'image' },
        { name: 'desktop', title: 'Desktop', type: 'image' },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'largeImage',
      title: 'Large Image',
      type: 'image',
    }),
  ],
});
