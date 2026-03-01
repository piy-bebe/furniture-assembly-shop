import style from './StepCard.module.scss';

interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

export default function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className={style.card}>
      <div>
        <h3 className={style.title}>
          {number}. {title}
        </h3>
        <p className={style.description}>{description}</p>
      </div>
    </div>
  );
}
