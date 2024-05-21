import React from 'react';
import '../style/Testimonials.css';

const testimonials = [
  {
    name: 'Иван Петров',
    description: 'Спортсмен-бодибилдер',
    image: 'https://via.placeholder.com/150',
    testimonial: 'Текст случайного отзыва о спортивном питании, который может быть довольно длинным и содержать несколько предложений. Этот текст может описывать преимущества использования продуктов, качество продукции, обслуживание клиентов и так далее.',
  },
  {
    name: 'Анна Сидорова',
    description: 'Фитнес-тренер',
    image: 'https://via.placeholder.com/150',
    testimonial: 'Текст другого случайного отзыва, возможно, более краткого, но все же положительного и рекомендующего продукты для спортивного питания. Здесь может быть упоминание о конкретных продуктах, их вкусе или эффективности.',
  },
  {
    name: 'Александр Кузнецов',
    description: 'Чемпион по пауэрлифтингу',
    image: 'https://via.placeholder.com/150',
    testimonial: 'Третий случайный отзыв, который может содержать более подробную информацию о том, как спортивное питание помогло достичь определенных результатов в тренировках или соревнованиях. Возможно, здесь будет упоминание о конкретных продуктах и их преимуществах.',
  },
];

const Testimonials = () => {
    return (
      <div className="testimonials">
        <h2>Отзывы спортсменов о спортивном питании</h2>
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <img src={testimonial.image} alt={testimonial.name} />
              <h3>{testimonial.name}</h3>
              <p>{testimonial.description}</p>
              <p>{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Testimonials;