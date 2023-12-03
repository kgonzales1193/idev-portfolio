import { defineField, defineType } from 'sanity';

export const category = defineType({
  title: 'Category',
  name: 'category',
  type: 'document',
  fields: [
    defineField({
      title: 'Category Name',
      name: 'category',
      type: 'string',
    }),
  ],
});
