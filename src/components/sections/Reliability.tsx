import style from './Reliability.module.scss';

export default function Reliability() {
  return (
    <section className={style.container} id="about">
      <h2 className={style.header}>Эксперты своего дела</h2>
      <div className={style.wrap}>
        <div className={style.left}>
          <div>
            <h3 className={style.title}>У нас работают только профессиональные мастера</h3>
            <p className={style.text}>
              Все мастера имеют большой опыт работы и весь необходимый инструмент для сборки мебели. Кроме того,
              после каждого заказа оператор связывается для обратной связи от клиентов и принятия необходимых
              корректировок.
            </p>
          </div>
          <div>
            <h3 className={style.title}>Учитываем все пожелания</h3>
            <p className={style.text}>
              Внимательно изучаем ваши пожелания и особенности помещения. Мастера всегда на связи и готовы
              скорректировать работу по ходу, если возникнут новые идеи или нюансы.
            </p>
          </div>
          <div>
            <h3 className={style.title}>Ценим ваше время и порядок</h3>
            <p className={style.text}>
              Приступаем к работе в согласованное время без опозданий. После себя оставляем идеальную чистоту —
              убираем весь мусор и упаковку. Работаем аккуратно и не доставляем дискомфорта.
            </p>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.row}>
            <h3 className={style.result}>2021</h3>
            <p className={style.description}>Год основания</p>
          </div>
          <div className={style.row}>
            <h3 className={style.result}>+2200</h3>
            <p className={style.description}>Выполненных заказов</p>
          </div>
          <div className={style.row}>
            <h3 className={style.result}>+10</h3>
            <p className={style.description}>Мастеров</p>
          </div>
          <div className={style.row}>
            <h3 className={style.result}>+200</h3>
            <p className={style.description}>Городов работы</p>
          </div>
        </div>
      </div>
    </section>
  );
}
