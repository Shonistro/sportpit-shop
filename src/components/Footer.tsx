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
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-youtube fa-lg"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-telegram fa-lg"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-vk fa-lg"></i>
            </a>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-4">
            Оставить свой отзыв
          </button>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center text-gray-400">
        &copy; 2024 Fitgear - интернет магазин по продаже спортивного питания. Доставляем спортивное питание в также города: Киев, Харьков, Днепр, Львов, Ивано-Франковск, Черновцы, Тернополь, Хмельницкий, Винница, Чернигов, Житомир, Черкассы, Кропивницкий, Одесса, Николаев, Запорожье, Сумы, Ровно, Полтава, Ужгород и по другим городам Украины.
      </div>
    </footer>
  );
};

export default Footer;