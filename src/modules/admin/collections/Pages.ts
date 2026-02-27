import { CollectionConfig } from 'payload';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Название страницы (внутреннее)',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Например: Home',
      },
    },
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Заголовок Hero',
        },
        {
          name: 'subtitle',
          type: 'textarea',
          label: 'Подзаголовок Hero',
        },
        {
          name: 'ctaText',
          type: 'text',
          label: 'Текст на кнопке',
        },
      ],
    },
  ],
};
