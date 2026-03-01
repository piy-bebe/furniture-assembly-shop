import style from './Feedback.module.scss';

export default function Feedback() {
  return (
    <div className={style.container}>
      <h2 className={style.header}>Бесплатный расчёт за 5 минут</h2>
      <div className={style.wrap}>
        <form className={style.form}>
          <div className={style.row}>
            <label className={style.title} htmlFor="name">
              Ваше имя
            </label>
            <input className={style.input} type="text" id="name" name="name" placeholder="Имя" required />
          </div>

          <div className={style.row}>
            <label className={style.title} htmlFor="phone">
              Номер телефона
            </label>
            <input className={style.input} type="tel" id="phone" name="phone" placeholder="Телефон" required />
          </div>

          <button className={style.button} type="submit">
            Отправить заявку
          </button>
        </form>
      </div>
    </div>
  );
}
