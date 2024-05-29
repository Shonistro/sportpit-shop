import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Информация</h3>
          <ul>
            <li>Статьи</li>
            <li>Доставка и оплата</li>
            <li>Возврат, обмен</li>
            <li>Контакты</li>
            <li>Отзывы</li>
            <li>Топ</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">График работы</h3>
          <p>Пн – Вс: с 10:00 до 19:00</p>
          <p>Без выходных</p>
          <p>Киев, проспект Мира, 2/3</p>
          <p>Киев, проспект Воздушных Сил, 7</p>
          <p>Киев, площадь Оболонская, 1</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Связь с нами</h3>
          <p>044 338-43-43</p>
          <p>044 333-94-43</p>
          <p>066 354-43-43</p>
          <p>063 352-43-43</p>
          <p>067 345-43-43</p>
          <h3 className="text-lg font-bold mt-4 mb-2">График работы call-center</h3>
          <p>Пн – Вс: с 10:00 до 19:00</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Подписаться на новости</h3>
          <div className="flex items-center mb-4">
            <input
              type="email"
              placeholder="Введите свой e-mail"
              className="bg-gray-700 text-white rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-md">
              Подписаться
            </button>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-4">
            Оставить свой отзыв
          </button>
          <div className="flex space-x-4 mt-4">
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="24" fill="currentColor">
      <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24H12.82v-9.294H9.692V11.03h3.128V8.401c0-3.1 1.893-4.785 4.658-4.785 1.325 0 2.463.099 2.795.143v3.243l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.313h3.587l-.467 3.677h-3.12V24h6.116c.73 0 1.324-.595 1.324-1.324V1.325C24 .595 23.405 0 22.675 0z"/>
    </svg>
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  </a>
  
</div>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center text-gray-400">
        &copy; 2024 Fitgear - интернет магазин по продаже спортивного питания. Доставляем спортивное питание в также города: Киев, Харьков, Днепр, Львов, Ивано-Франковск, Черновцы, Тернополь, Хмельницкий, Винница, Чернигов, Житомир, Черкассы, Кропивницкий, Одесса, Николаев, Запорожье, Сумы, Ровно, Полтава, Ужгород и по другим городам Украины.
      </div>
    </footer>
  );
};

export default Footer;
