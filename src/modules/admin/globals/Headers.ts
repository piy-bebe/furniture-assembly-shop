import { revalidatePath } from 'next/cache';
import { GlobalConfig } from 'payload';

export const HeaderGlobal: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      () => {
        revalidatePath('/', 'layout');
      },
    ],
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
    {
      name: 'email',
      type: 'email',
      label: 'Email в шапке',
      required: false,
      admin: {
        placeholder: 'example@mail.com',
      },
    },
  ],
};
