import { getPayloadClient } from '@/lib/payload';
import { Header as HeaderType } from '@/modules/admin/payload-types';
import style from './Header.module.scss';
import Image from 'next/image';

export default async function Header() {
  const payload = await getPayloadClient();

  const headerData: HeaderType = await payload.findGlobal({
    slug: 'header',
  });

  return (
    <header className={style.header}>
      <div className={style.wrap}>
        <div className={style.logo}>{headerData.logoText}</div>
        <nav className={style.nav}>
          <a href="#work" className={style.link}>
            Как работаем
          </a>
          <a href="#guarantee" className={style.link}>
            Гарантия
          </a>
          <a href="#masters" className={style.link}>
            Мастера
          </a>
          <a href="#cases" className={style.link}>
            Кейсы
          </a>
          <a href="#reviews" className={style.link}>
            Отзывы
          </a>
        </nav>
        <div className={style.contact}>
          <p className={style.phone}>{headerData.phoneNumber}</p>
          <div className={style.socials}>
            <div className={style.imageWrapper}>
              <Image className={style.image} src="/images/header/telegram.svg" fill alt="icon" />
            </div>
            <div className={style.imageWrapper}>
              <Image className={style.image} src="/images/header/max.svg" fill alt="icon" />
            </div>
            <div className={style.imageWrapper}>
              <Image className={style.image} src="/images/header/whatsapp.svg" fill alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
