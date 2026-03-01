import style from './Workflow.module.scss';
import StepCard from '../ui/StepCard';

export default function Workflow() {
  const steps = [
    {
      number: '1',
      title: 'Оставьте заявку',
      description: 'Позвоните нам или оставьте заявку на сайте. Мы ответим на все вопросы и уточним детали.',
    },
    {
      number: '2',
      title: 'Согласование и договор',
      description:
        'Подготовим для вас коммерческое предложение. После согласования оформим договор и выставим счёт.',
    },
    {
      number: '3',
      title: 'Назначение даты',
      description: 'Мастер свяжется с вами, чтобы согласовать удобную дату и время начала работ.',
    },
    {
      number: '4',
      title: 'Выполнение работ',
      description: 'Мастер выедет на объект и выполнит работу с соблюдением всех технологий.',
    },
    {
      number: '5',
      title: 'Приемка работы',
      description: 'Вы принимаете результат и подписываете Акт выполненных работ.',
    },
    {
      number: '6',
      title: 'Закрывающие документы',
      description: 'Отправим вам закрывающие документы по ЭДО или Почтой России.',
    },
  ];

  return (
    <section className={style.workflow}>
      <h2 className={style.header}>Как мы работаем</h2>
      <div className={style.wrap}>
        {steps.map((step, index) => (
          <StepCard key={index} {...step} />
        ))}
      </div>
    </section>
  );
}
