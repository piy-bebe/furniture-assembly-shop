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
    {
      name: 'email',
      type: 'email', // Используем тип email для валидации
      label: 'Email в шапке',
      required: false, // Делаем необязательным, если нужно
      admin: {
        placeholder: 'example@mail.com', // Подсказка в админке
      },
    },
  ],
};
