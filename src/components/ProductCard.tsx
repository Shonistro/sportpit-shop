import React, { useState, useEffect } from 'react';

interface ProductCardProps {
  product: {
    short_description: string;
    description: string;
    id: number;
    name: string;
    image: string;
    price: number;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const baseURL = process.env.REACT_APP_BASE_URL || '';
  const imageURL = `http://localhost:8000${product.image}`;
  const [descriptionRef, setDescriptionRef] = useState<HTMLDivElement | null>(null);
  const [descriptionHeight, setDescriptionHeight] = useState(0);

  const openQuickView = () => {
    setIsModalOpen(true);
  };

  const closeQuickView = () => {
    setIsModalOpen(false);
    setShowFullDescription(false);
  };

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  useEffect(() => {
    if (descriptionRef) {
      setDescriptionHeight(descriptionRef.offsetHeight);
    }
  }, [descriptionRef]);

  useEffect(() => {
    if (descriptionRef) {
      setDescriptionHeight(descriptionRef.scrollHeight);
    }
  }, [descriptionRef, showFullDescription]);

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:-translate-y-2 relative">
        <img
          src={imageURL}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div
          className="absolute top-2 right-2 bg-gray-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700"
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
            className="bg-white rounded-lg p-6 relative w-3/4 max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex">
              <div className="w-1/2 p-4">
                <img
                  src={imageURL}
                  alt={product.name}
                  className="w-full h-auto max-h-96 rounded-lg"
                />
              </div>
              <div className="w-1/2 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">{product.name}</h3>
                  <p className="text-lg font-bold text-gray-800 mb-4">${product.price}</p>
                  <div
                    className="text-gray-700 mb-4 text-left"
                    ref={(ref) => setDescriptionRef(ref)}
                    style={{ height: descriptionHeight }}
                    dangerouslySetInnerHTML={{
                      __html: showFullDescription ? product.description : product.short_description,
                    }}
                  />
                </div>
                <div className="flex justify-center gap-4">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={toggleDescription}
                  >
                    {showFullDescription ? 'Краткое описание' : 'Полное описание'}
                  </button>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    В корзину
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;