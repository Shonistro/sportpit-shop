import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, filterProducts } from '../utils/productData';
import { Product, Category } from '../types';
import ProductCard from '../components/ProductCard';
import categories from '../utils/categories';

const ProductListPage: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAndSetProducts = () => {
      const allProducts = getProducts();
      const foundCategory = categories.find((category) => category.slug === slug);
      const categoryData: Category | null = foundCategory || null;
      const filteredProducts = filterProducts(allProducts, categoryData);
      setProducts(filteredProducts);
      setLoading(false);
    };
    fetchAndSetProducts();
  }, [slug]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <h2>Продукты</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product: Product) =>
          product && product.id ? (
            <ProductCard key={product.id} product={product} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default ProductListPage;





// return (
//   <div>
//     <select onChange={handleCategoryChange}>
//       <option value="">Все</option>
//       <option value="Supplements">Добавки</option>
//       <option value="Proteins">Белки</option>
//       <option value="Vitamins">Витамины</option>
//       {/* Добавьте другие категории здесь */}
//     </select>
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//       {filteredProducts.map((product: Product) => (
//         product && product.id && <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   </div>
// );