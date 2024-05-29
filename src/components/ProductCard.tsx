import React, { ReactNode, useState } from 'react';

interface ProductCardProps {
  product: {
    short_description: ReactNode;
    id: number;
    name: string;
    image: string;
    price: number;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const baseURL = process.env.REACT_APP_BASE_URL || '';
  const imageURL = `http://localhost:8000${product.image}`;

  const openQuickView = () => {
    setIsModalOpen(true);
  };

  const closeQuickView = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-xl relative">
        <img
          src={imageURL}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
        />
        <div
          className="absolute top-2 right-2 bg-gray-700 text-white p-2 rounded-full cursor-pointer hover:bg-gray-600"
          onClick={openQuickView}
        >
          &#128065;
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-4">${product.price}</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            В корзину
          </button>
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeQuickView}
        >
          <div
            className="bg-white rounded-lg p-6 relative w-1/4 max-w-4xl text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center mb-4">
              <img
                src={imageURL}
                alt={product.name}
                className="w-full h-auto max-h-96 rounded-lg"
              />
            </div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold">{product.name}</h3>
              <p className="text-lg font-bold text-gray-800">${product.price}</p>
            </div>
            <p className="text-gray-700 mb-4">{product.short_description}</p>
            <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400">
              В корзину
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;