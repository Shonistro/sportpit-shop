import React from 'react';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    image: string;
    price: number;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-xl">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">${product.price}</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          В корзину
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
