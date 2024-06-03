import React from 'react';
import { Link } from 'react-router-dom';

const featuredProducts = [
  {
    id: 1,
    name: 'Акционный товар 1',
    image: 'https://via.placeholder.com/150',
    price: 19.99,
    discountPrice: 14.99,
  },
  {
    id: 2,
    name: 'Акционный товар 2',
    image: 'https://via.placeholder.com/150',
    price: 29.99,
    discountPrice: 24.99,
  },
  // Добавьте остальные акционные товары здесь
];

const FeaturedProducts = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4 text-center">Акційні товари</h3>
      <ul className="space-y-4">
        {featuredProducts.map((product) => (
          <li key={product.id} className="bg-white p-4 rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-lg group">
            <div className="flex items-center">
              <img src={product.image} alt={product.name} className="w-16 h-16 object-cover mr-4 rounded" />
              <div>
                <h4 className="text-base font-semibold mb-1">{product.name}</h4>
                <p className="text-gray-600 line-through">${product.price}</p>
                <p className="text-green-600 font-bold">${product.discountPrice}</p>
              </div>
              <svg
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-auto w-6 h-6 transition-transform transition-colors duration-300 transform group-hover:scale-110 group-hover:fill-current group-hover:text-orange-500"
              >
                <path
                  d="M0 11.4084C0 8.84464 1.20856 6.56616 3.09562 5.02416C3.48899 4.76176 3.79305 5.02416 3.66969 5.21532C2.37371 8.31691 3.31994 11.2298 5.51828 11.8233C4.86979 10.3027 4.56798 8.5864 4.76782 6.82046C5.06556 4.13119 6.36662 1.81717 8.23867 0.152385C8.41274 0.0253855 8.58844 -0.0329387 8.71179 -0.0158577C8.83968 0.00122334 8.91163 0.052467 8.86268 0.206547C8.71179 0.74879 8.61395 1.3036 8.55496 1.86292C8.31616 4.08278 8.81375 6.18273 9.83645 8.00867C11.383 8.00867 12.0356 6.19821 12.1971 4.99708C12.1971 4.72759 12.4214 4.58643 12.8501 4.89008C14.8785 6.31946 16.2 8.43472 16.2 11C16.2 15.5734 12.5826 19.4614 8.08761 19.4614C3.62171 19.4884 0 15.6004 0 11.4084Z"
                  className="fill-current text-orange-400 group-hover:text-orange-500"
                />
              </svg>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedProducts;
