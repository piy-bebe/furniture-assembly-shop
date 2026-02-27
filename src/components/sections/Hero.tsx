import { getPayloadClient } from '@/lib/payload';
import { Page } from '@/modules/admin/payload-types';

export default async function Hero() {
  const payload = await getPayloadClient();

  const result = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: 'home' },
    },
  });

  const data: Page = result.docs[0];

  if (!data) return <section className="py-20 text-center">Данные не найдены</section>;

  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-6xl font-black text-slate-900 mb-6">{data.hero?.title || 'Заголовок по умолчанию'}</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">{data.hero?.subtitle}</p>
        <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
          {data.hero?.ctaText || 'Начать работу'}
        </button>
      </div>
    </section>
  );
}
