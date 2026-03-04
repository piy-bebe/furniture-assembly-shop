import style from './Workflow.module.scss';
import StepCard from '../ui/StepCard';

export default function Workflow() {
  const steps = [
    {
      number: '1',
      title: 'Оставьте заявку',
      description: 'Отправьте заявку на сайте или позвоните нам по телефону.',
    },
    {
      number: '2',
      title: 'Согласование и договор',
      description: 'Мы подготовим коммерческое предложение, если всё устроит, оформим договор и выставим счёт.',
    },
    {
      number: '3',
      title: 'Назначение даты',
      description:
        'После оформления заказа Вам или Вашему клиенту наберет мастер для согласования даты и времени начала работ.',
    },
    {
      number: '4',
      title: 'Выполнение работ',
      description: 'Мастер выполнит работу, соблюдая все требуемые технологии.',
    },
    {
      number: '5',
      title: 'Закрывающие документы',
      description:
        'После полного выполнения работ подписывается Акт выполненных работ. Закрывающие документы направляем по ЭДО или курьерской службой.',
    },
  ];

  return (
    <section className={style.workflow} id="work">
      <h2 className={style.header}>Как мы работаем</h2>
      <div className={style.wrap}>
        {steps.map((step, index) => (
          <StepCard key={index} {...step} />
        ))}
      </div>
    </section>
  );
}
