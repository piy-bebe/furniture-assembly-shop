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

  if (!data) return <section>Данные не найдены</section>;

  return (
    <section>
      <div>
        <h1>{data.hero?.title || 'Заголовок по умолчанию'}</h1>
        <p>{data.hero?.subtitle}</p>
        <button>{data.hero?.ctaText || 'Начать работу'}</button>
      </div>
    </section>
  );
}
