import { Product, Category } from '../types';

export const productData: Product[] = [
  {
    id: 1,
    name: 'Protein Sport',
    description: 'Lorem ipsum dolor sit amet...',
    image: '/product-images/proteins/protein1.png',
    price: 19.99,
    category: { id: 2, name: 'Proteins', slug: 'proteins' },
  },
  {
    id: 2,
    name: 'Protein Whey Gold',
    description: 'Lorem ipsum dolor sit amet...',
    image: '/product-images/proteins/protein2.png',
    price: 22.12,
    category: { id: 2, name: 'Proteins', slug: 'proteins' },
  },
  {
    id: 3,
    name: 'Protein JustWhey',
    description: 'Lorem ipsum dolor sit amet...',
    image: '/product-images/proteins/protein3.png',
    price: 29.99,
    category: { id: 2, name: 'Proteins', slug: 'proteins' },
  },
  {
    id: 4,
    name: 'Protein GymBeam',
    description: 'Lorem ipsum dolor sit amet...',
    image: '/product-images/proteins/protein4.png',
    price: 12.99,
    category: { id: 2, name: 'Proteins', slug: 'proteins' },
  },
  {
    id: 5,
    name: 'Vitamins GymBeam',
    description: 'Lorem ipsum dolor sit amet...',
    image: '/product-images/vitamins/vitamins1.png',
    price: 12.99,
    category: { id: 5, name: 'Vitamins', slug: 'vitamins' },
  },
  {
    id: 6,
    name: 'Vitamins GymBeam',
    description: 'Lorem ipsum dolor sit amet...',
    image: '/product-images/vitamins/vitamins2.png',
    price: 12.99,
    category: { id: 5, name: 'Vitamins', slug: 'vitamins' },
  },
];

export const getProducts = (): Product[] => {
  const products = localStorage.getItem('products');
  let parsedProducts: Product[];
  if (products) {
    parsedProducts = JSON.parse(products);
  } else {
    localStorage.setItem('products', JSON.stringify(productData));
    parsedProducts = productData;
  }
  console.log('Products from storage or default:', parsedProducts); // Добавьте этот лог
  return parsedProducts;
};

export const filterProducts = (
  products: Product[],
  category: Category | null
): Product[] => {
  let filteredProducts = products;
  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category.slug === category.slug
    );
  }
  return filteredProducts;
};
