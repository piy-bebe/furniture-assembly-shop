import style from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={style.container}>
      <div className={style.wrap}>
        <a className={style.link} href="/docs/details.pdf" target="_blank">
          Реквизиты компании
        </a>
        <a className={style.link} href="/docs/privacy_policy.pdf" target="_blank">
          Политика конфиденциальности
        </a>
      </div>
    </div>
  );
}
