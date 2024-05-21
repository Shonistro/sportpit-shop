// src/pages/CategoryPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../utils/productData';
import ProductCard from '../components/ProductCard';

const CategoryPage = () => {    
  const { slug } = useParams<{ slug: string }>();
  const products = getProducts().filter(product => product.category.slug === slug);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products in {slug}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
