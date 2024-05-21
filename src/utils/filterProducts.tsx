import { Product, Category } from '../types';

export const filterProducts = (
  products: Product[],
  category: Category | null,
  sortOption: string
): Product[] => {
  let filteredProducts = products;

  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category.name === category.name
    );
  }

  if (sortOption === 'Цена (по возрастанию)') {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'Цена (по убыванию)') {
    filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  }

  return filteredProducts;
};
