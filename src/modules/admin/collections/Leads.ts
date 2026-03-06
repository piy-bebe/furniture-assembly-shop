import nodemailer from 'nodemailer';
import type { CollectionConfig } from 'payload';

const Leads: CollectionConfig = {
  slug: 'leads',
  hooks: {
    afterChange: [
      async ({ doc, operation }) => {
        if (operation === 'create') {
          const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: 465,
            secure: true,
            auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS,
            },
          });

          await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: process.env.EMAIL_TO,
            subject: 'Новая заявка с сайта',
            html: `
              <h2>Новая заявка</h2>
              <p><b>Имя:</b> ${doc.name}</p>
              <p><b>Телефон:</b> ${doc.phone}</p>
            `,
          });
        }
      },
    ],
  },
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
