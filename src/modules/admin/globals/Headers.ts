import { GlobalConfig } from 'payload';

export const HeaderGlobal: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logoText',
      type: 'text',
      label: 'Текст логотипа',
      required: true,
    },
    {
      name: 'phoneNumber',
      type: 'text',
      label: 'Телефон в шапке',
    },
  ],
};
