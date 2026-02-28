import { getPayloadClient } from '@/lib/payload';
import { Page } from '@/modules/admin/payload-types';
import style from './Hero.module.scss';

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
    <section className={style.hero}>
      <div className={style.wrap}>
        <div className={style.block}>
          <p className={style.time}>Ежедневно с 10.00 до 18.00</p>
          <h1 className={style.title}>Сборка мебели</h1>
          <p className={style.description}>
            Оплата по безналичному расчету.
            <br />
            Подготовим коммерческое предложение в течение 1 часа.
          </p>
          <button className={style.button}>Рассчитать стоимость работ</button>
        </div>
      </div>
    </section>
  );
}
