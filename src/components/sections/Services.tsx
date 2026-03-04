import Image from 'next/image';
import style from './Services.module.scss';

export default async function Services() {
  const services = [
    {
      id: 1,
      title: 'Корпусная мебель',
      image: '/images/services/cabinet.jpg',
    },
    {
      id: 2,
      title: 'Офисная мебель',
      image: '/images/services/office.jpg',
    },
    {
      id: 3,
      title: 'Медицинская мебель',
      image: '/images/services/medical.jpg',
    },
    {
      id: 4,
      title: 'Лабораторная мебель',
      image: '/images/services/laboratory.jpg',
    },
    {
      id: 5,
      title: 'Торговая мебель',
      image: '/images/services/shop.jpg',
    },
    {
      id: 6,
      title: 'Складская мебель',
      image: '/images/services/rack.jpg',
    },
  ];

  return (
    <section className={style.services} id="services">
      <h2 className={style.header}>Услуги</h2>
      <div className={style.wrap}>
        {services.map((service) => (
          <div key={service.id} className={style.card}>
            <div className={style.imageWrapper}>
              <Image className={style.image} src={service.image} alt={service.title} quality={75} fill />
            </div>
            <h3 className={style.title}>{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
