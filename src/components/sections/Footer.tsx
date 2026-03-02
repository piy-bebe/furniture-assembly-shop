import style from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={style.container}>
      <div className={style.wrap}>
        <button className={style.buttonText}>Реквизиты компании</button>
        <button className={style.buttonText}>Политика конфиденциальности</button>
      </div>
    </div>
  );
}
