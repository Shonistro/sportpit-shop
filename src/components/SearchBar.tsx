import React, { useState, FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchProducts, filterProducts } from '../utils/api';
import { Product } from '../types';

const stripHtmlTags = (html: string) => {
  return html.replace(/<[^>]*>/g, '');
};

interface SearchBarProps {
  placeholder: string;
}

const SearchBar = ({ placeholder }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const baseURL = process.env.REACT_APP_BASE_URL || 'http://127.0.0.1:8000';

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await fetchProducts();
        setProducts(products);
      } catch (error) {
        console.error('Failed to load products:', error);
      }
    };
    loadProducts();
  }, []);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?q=${searchQuery}`);
    setShowSuggestions(false);
  };

  const handleProductClick = (product: Product) => {
    navigate(`/search?q=${product.name}`);
    setShowSuggestions(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() !== '') {
      const filtered = filterProducts(products, query);
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  return (
    <div className="relative">
      <form
        onSubmit={handleSearch}
        className="flex items-center bg-white border-2 border-gray-300 rounded-full overflow-hidden w-96"
      >
        <input
          type="text"
          placeholder={placeholder}
          value={searchQuery}
          onChange={handleInputChange}
          className="py-2 px-4 w-full outline-none text-gray-800"
        />
        <button
          type="submit"
          className="bg-white text-gray-600 px-4 py-2 hover:text-gray-800 transition-colors duration-300 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form>
      {suggestions.length > 0 && showSuggestions && (
        <div className="absolute z-10 w-96 mt-2 bg-white rounded-md shadow-lg border border-gray-200">
          {suggestions.map(product => (
            <div
              key={product.id}
              className="py-3 px-4 hover:bg-gray-100 hover:shadow-md cursor-pointer flex items-center justify-between transition-all duration-200"
              onClick={() => handleProductClick(product)}
            >
              <div className="flex items-center">
                <img
                  src={`${baseURL}${product.image}`}
                  alt={product.name}
                  className="w-10 h-10 object-cover rounded-md mr-4"
                />
                <div>
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-gray-600">{stripHtmlTags(product.description.substring(0, 20))}...</p>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-gray-800 font-bold">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;