import React, { useState, useRef } from 'react';
 
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  rating: number;
  reviewCount: number;
  isDiscounted: boolean;
  discountType?: string;
  description: string;
}

const PopularProducts: React.FC = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: 'BlackBombs',
      brand: 'Dorian Yates Nutrition',
      price: 789,
      rating: 5,
      reviewCount: 10,
      isDiscounted: true,
      discountType: 'Скидка на 2-й товар',
      description: 'Предтренировочный комплекс для повышения энергии и выносливости.',
    },
    {
      id: 2,
      name: 'Animal Flex',
      brand: 'Universal Nutrition',
      price: 1549,
      rating: 5,
      reviewCount: 81,
      isDiscounted: true,
      discountType: 'Скидка на 2-й товар',
      description: 'Комплекс для поддержания здоровья суставов и связок.',
    },
    {
      id: 3,
      name: 'Essential Omega-3',
      brand: 'MyVitamins',
      price: 459,
      rating: 5,
      reviewCount: 70,
      isDiscounted: false,
      description: 'Омега-3 жирные кислоты для поддержания здоровья сердца и мозга.',
    },
    {
      id: 4,
      name: 'Vegan Protein Blend',
      brand: 'MyVegan',
      price: 759,
      rating: 5,
      reviewCount: 81,
      isDiscounted: true,
      discountType: 'Акционная цена',
      description: 'Растительный белковый комплекс из нескольких источников белка.',
    },
    
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);
  const [currentDescription, setCurrentDescription] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    if (container) {
      const containerWidth = container.offsetWidth;
      const scrollLeft = index * containerWidth;
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  };

  const handlePrevClick = () => {
    const newIndex = currentIndex === 0 ? products.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = currentIndex === products.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleMouseEnter = (description: string) => {
    setShowDescription(true);
    setCurrentDescription(description);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
    setCurrentDescription('');
  };

  return (
    <div className="w-full mx-auto border border-gray-200 rounded-lg shadow-md bg-white relative">
      <div className="flex flex-nowrap overflow-x-hidden" ref={containerRef}>
        {products.map((product) => (
          <div
            className="flex-none w-full md:w-1/2 lg:w-1/3 p-4"
            key={product.id}
            onMouseEnter={() => handleMouseEnter(product.description)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="border border-gray-200 rounded-lg shadow-md p-4 bg-white h-full flex flex-col">
              <div className="mb-3">
                <img
                  className="w-full h-auto rounded-lg"
                  src={`/product-images/${product.id}.jpg`}
                  alt={product.name}
                />
              </div>
              <div className="text-center flex-grow">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.brand}</p>
                <p className="text-lg font-bold">Цена: {product.price} Грн</p>
                <p className="text-sm text-yellow-500">Рейтинг: {product.rating}</p>
                <p className="text-sm text-gray-500">Отзывов: {product.reviewCount}</p>
                {product.isDiscounted && <p className="text-sm text-red-600">Скидка: {product.discountType}</p>}
              </div>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg self-end">Купить</button>
            </div>
          </div>
        ))}
      </div>
      {showDescription && (
        <div className="absolute bottom-0 left-0 right-0 bg-gray-800 text-white p-4 rounded-b-lg">
          {currentDescription}
        </div>
      )}
      <div className="flex justify-between px-4 py-2">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full"
          onClick={handlePrevClick}
        >
          <FaChevronLeft />
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full"
          onClick={handleNextClick}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default PopularProducts;