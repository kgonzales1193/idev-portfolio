const project = {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string',
    },

    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
        },
      ],
    },
    {
      name: 'url',
      title: 'Project Link',
      type: 'url',
    },
    {
      name: 'githubUrl',
      title: 'Github Link',
      type: 'url',
    },
    {
      name: 'description',
      title: 'Project Description',
      type: 'text',
    },
  ],
};

export default project;
