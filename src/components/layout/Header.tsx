import { getPayloadClient } from '@/lib/payload';
import { Header as HeaderType } from '@/modules/admin/payload-types';
import style from './Header.module.scss';

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
        <p className={style.phone}>{headerData.phoneNumber}</p>
      </div>
    </header>
  );
}
