import style from './Guarantee.module.scss';

export default function Guarantee() {
  return (
    <section className={style.guarantee}>
      <h2 className={style.header}>Гарантия</h2>

      <div className={style.wrap}>
        <div className={style.card}>
          Гарантия по Договору составляет 12 месяцев, если в течение этого времени что-то пойдет не так, мастер
          приедет и исправит.
        </div>
        <div className={style.card}>
          Согласованная сумма оплаты фиксируется при заказе и не увеличится в процессе работы.
        </div>
        <div className={style.card}>
          В случае появления дополнительных работ, их стоимость согласовывается ПЕРЕД их выполнением и фиксируется
          в Акте выполненных работ.
        </div>
        <div className={style.card}>
          Во время выполнения работ компания несет полную материальную ответственность за изделия и помещение, в
          котором производится работа.
        </div>
      </div>
    </section>
  );
}
