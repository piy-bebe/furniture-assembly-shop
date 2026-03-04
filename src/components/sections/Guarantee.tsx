import style from './Guarantee.module.scss';

export default function Guarantee() {
  return (
    <section className={style.guarantee} id="guarantee">
      <h2 className={style.header}>Гарантия</h2>

      <div className={style.wrap}>
        <div className={style.card}>
          Срок гарантии по договору — 12 месяцев. Если возникнут проблемы в этот период, специалист устранит
          неполадки.
        </div>
        <div className={style.card}>Стоимость услуг фиксируется заранее и остается неизменной.</div>
        <div className={style.card}>
          Дополнительные работы оплачиваются отдельно, их цена согласуется предварительно и отражается в акте
          приемки-передачи.
        </div>
        <div className={style.card}>
          Компания гарантирует сохранность изделий и помещения заказчика в ходе выполнения заказа.
        </div>
      </div>
    </section>
  );
}
