import React from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../utils/productData';
import {Product} from '../types'

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const products = getProducts();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Продукт не найден</div>;
  }

  return (
    
    <div className="container mx-auto py-8">
       
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-bold mb-4">${product.price}</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;