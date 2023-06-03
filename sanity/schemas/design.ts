import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'design',
  title: 'Designs',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'type',
      type: 'reference',
      to: [{ type: 'designType' }],
      validation: (rule) => rule.required(),
    }),
  ],
});
