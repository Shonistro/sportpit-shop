import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../utils/productData';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../utils/api';
import Sidebar from '../components/SideBar';  // Импортируем новый компонент

const ProductListPage: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [sortOption, setSortOption] = useState<string>('default');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        if (slug) {
          const filteredProducts = data.filter(product => product.category.name === slug);
          setProducts(filteredProducts);
          setSortedProducts(filteredProducts);
        } else {
          setProducts(data);
          setSortedProducts(data);
        }
        setError(null);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [slug]);

  useEffect(() => {
    let sortedArray = [...products];
    if (sortOption === 'priceAsc') {
      sortedArray.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'priceDesc') {
      sortedArray.sort((a, b) => b.price - a.price);
    }
    setSortedProducts(sortedArray);
  }, [sortOption, products]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }

  return (
    <div className="flex">
      <Sidebar sortOption={sortOption} setSortOption={setSortOption} />
      <main className="w-4/5 p-4">
        <h2 className="text-2xl font-bold mb-4">Продукты</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductListPage;
