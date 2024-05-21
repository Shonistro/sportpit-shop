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
      <h3 className="text-xl font-bold mb-4 text-center">Акционные товары</h3>
      <ul className="space-y-4">
        {featuredProducts.map((product) => (
          <li key={product.id} className="bg-white p-4 rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover mr-4 rounded"
              />
              <div>
                <h4 className="text-base font-semibold mb-1">{product.name}</h4>
                <p className="text-gray-600 line-through">${product.price}</p>
                <p className="text-green-600 font-bold">${product.discountPrice}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedProducts;
