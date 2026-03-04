import type { CollectionConfig } from 'payload';

const Leads: CollectionConfig = {
  slug: 'leads',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'phone', 'createdAt'],
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Имя',
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      label: 'Телефон',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          label: 'Новый',
          value: 'new',
        },
        {
          label: 'В обработке',
          value: 'processing',
        },
        {
          label: 'Завершен',
          value: 'completed',
        },
      ],
      defaultValue: 'new',
      label: 'Статус',
    },
  ],
};

export default Leads;
