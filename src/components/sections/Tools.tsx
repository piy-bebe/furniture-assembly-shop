import Image from 'next/image';
import style from './Tools.module.scss';

export default async function Tools() {
  return (
    <section className={style.container}>
      <h2 className={style.header}>Используем только профессиональный инструмент</h2>
      <div className={style.wrap}>
        <div className={style.imageWrapper}>
          <Image className={style.image} src="/images/tools/bosch.svg" fill alt="icon" />
        </div>
        <div className={style.imageWrapper}>
          <Image className={style.image} src="/images/tools/dewalt.svg" fill alt="icon" />
        </div>
        <div className={style.imageWrapper}>
          <Image className={style.image} src="/images/tools/dexter.svg" fill alt="icon" />
        </div>
        <div className={style.imageWrapper}>
          <Image className={style.image} src="/images/tools/festool.svg" fill alt="icon" />
        </div>
        <div className={style.imageWrapper}>
          <Image className={style.image} src="/images/tools/makita.svg" fill alt="icon" />
        </div>
      </div>
    </section>
  );
}
