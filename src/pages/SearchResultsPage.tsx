import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchProducts, filterProducts } from '../utils/api';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/SideBar';

const SearchResultsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const searchQuery = searchParams.get('q') || '';

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
        const filtered = filterProducts(data, searchQuery);
        setFilteredProducts(filtered);
        setError(null);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [searchQuery]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }

  return (
    <div className="flex">
      <Sidebar sortOption={''} setSortOption={function (option: string): void {
              throw new Error('Function not implemented.');
          } } />
      <main className="w-4/5 p-4">
        <h2 className="text-2xl font-bold mb-4">Результаты поиска для "{searchQuery}"</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default SearchResultsPage;