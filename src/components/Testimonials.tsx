import React from 'react';
import '../style/Testimonials.css';

const testimonials = [
  {
    name: 'Олексій Петров',
    description: 'Професійний велосипедист',
    image: 'product-images/commentphoto/commentphoto1.jpg',
    testimonial: 'Завдяки продуктам від Fitgear я відчув значний приріст енергії та витривалості під час тренувань. Вони стали невідємною частиною мого щоденного раціону та допомогли мені досягти нових висот у моїй карєрі велосипедиста. Рекомендую всім спортсменам спробувати їх продукцію!',
  },
  {
    name: 'Марія Коваль',
    description: 'Фітнес-інструктор',
    image: 'product-images/commentphoto/commentphoto2.jpg',
    testimonial: 'Працюючи з клієнтами щодня, я завжди шукала ефективні способи підтримки їх здоровя та форми. З продукцією від Fitgear я знайшла все, що потрібно! Мої клієнти зазначили значний приріст енергії та покращення результатів після початку використання їх продуктів. Велике спасибі за такі чудові продукти!'
  },
  {
    name: 'Олег Семененко',
    description: 'Аматорський бігун',
    image: 'product-images/commentphoto/commentphoto3.jpg',
    testimonial: 'Завдяки спортивному харчуванню від Fitgear я зміг покращити свої результати в бігових змаганнях. Їхні енергетичні гелі та батончики допомагають мені подолати довгі дистанції та відновлювати силу після тривалих тренувань. Щиро рекомендую всім бігунам спробувати їх продукцію!',
  },
];


const Testimonials = () => {
    return (
      <div className="testimonials">
        <h2>Відгуки спортсменів про спортивне харчування</h2>
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