'use client'; // Добавь эту директиву в начале файла

import { useState } from 'react';
import style from './Feedback.module.scss';

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Ошибка при отправке');
      }

      setSubmitStatus('success');
      setFormData({ name: '', phone: '' }); // Очищаем форму

      // Скрываем сообщение об успехе через 3 секунды
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      console.error('Ошибка:', error);
      setSubmitStatus('error');

      // Скрываем сообщение об ошибке через 3 секунды
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={style.container} id="feedback">
      <h2 className={style.header}>Бесплатный расчёт за 5 минут</h2>
      <div className={style.wrap}>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.row}>
            <label className={style.title} htmlFor="name">
              Ваше имя
            </label>
            <input
              className={style.input}
              type="text"
              id="name"
              name="name"
              placeholder="Имя"
              required
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>

          <div className={style.row}>
            <label className={style.title} htmlFor="phone">
              Номер телефона
            </label>
            <input
              className={style.input}
              type="tel"
              id="phone"
              name="phone"
              placeholder="Телефон"
              required
              value={formData.phone}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>

          <button className={style.button} type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
          </button>

          {submitStatus === 'success' && <div className={style.success}>Заявка успешно отправлена!</div>}

          {submitStatus === 'error' && <div className={style.error}>Ошибка при отправке. Попробуйте позже.</div>}
        </form>
      </div>
    </div>
  );
}
