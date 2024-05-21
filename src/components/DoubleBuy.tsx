import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  discountPrice: number;
}

interface ProductPair {
  product1: Product;
  product2: Product;
}

const ProductPairSlider = () => {
  const [currentPairIndex, setCurrentPairIndex] = useState(0);

  const productPairs: ProductPair[] = [
    {
      product1: {
        id: 1,
        name: 'Whey Protein',
        price: 39.99,
        discountPrice: 29.99,
      },
      product2: {
        id: 2,
        name: 'Creatine Monohydrate',
        price: 19.99,
        discountPrice: 1.0,
      },
    },
    {
      product1: {
        id: 3,
        name: 'Pre-Workout',
        price: 24.99,
        discountPrice: 19.99,
      },
      product2: {
        id: 4,
        name: 'BCAA',
        price: 14.99,
        discountPrice: 1.0,
      },
    },
   
  ];

  const handlePrevPair = () => {
    setCurrentPairIndex((prevIndex) =>
      prevIndex === 0 ? productPairs.length - 1 : prevIndex - 1
    );
  };

  const handleNextPair = () => {
    setCurrentPairIndex((prevIndex) =>
      prevIndex === productPairs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentPair = productPairs[currentPairIndex];

  return (
    <div className="my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Купить вместе и сэкономить</h2>
        <div className="flex">
          <button
            onClick={handlePrevPair}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l"
          >
            &larr;
          </button>
          <button
            onClick={handleNextPair}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r"
          >
            &rarr;
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col items-center">
          <img src={`/product-images/${currentPair.product1.id}.jpg`} alt={currentPair.product1.name} className="w-48 h-48 object-cover mb-2" />
          <h3 className="text-lg font-bold">{currentPair.product1.name}</h3>
          <p className="text-gray-600">
            <span className="line-through text-sm">${currentPair.product1.price.toFixed(2)}</span>
            <span className="text-xl font-bold ml-2">${currentPair.product1.discountPrice.toFixed(2)}</span>
          </p>
        </div>
        <div className="flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 mx-4" viewBox="1 1 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H6a1 1 0 1 1 0-2h4V4a1 1 0 0 1 1-1z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="flex flex-col items-center">
          <img src={`/product-images/${currentPair.product2.id}.jpg`} alt={currentPair.product2.name} className="w-48 h-48 object-cover mb-2" />
          <h3 className="text-lg font-bold">{currentPair.product2.name}</h3>
          <p className="text-gray-600">
            <span className="line-through text-sm">${currentPair.product2.price.toFixed(2)}</span>
            <span className="text-xl font-bold ml-2">${currentPair.product2.discountPrice.toFixed(2)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPairSlider;
