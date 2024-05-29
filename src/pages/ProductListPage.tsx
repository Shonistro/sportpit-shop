import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../utils/productData';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../utils/api';
import Sidebar from '../components/SideBar';  // Импортируем новый компонент
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./ProductListPage.css"
import FeaturedProducts from '../components/FeaturedProducts'


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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const sliderItems = [
    { img: '/product-images/SliderPhoto/SliderProductList1.jpg', title: ' 1' },
    { img: '/product-images/SliderPhoto/SliderProductList2.jpg', title: ' 2' },
    { img: '/product-images/SliderPhoto/SliderProductList3.jpg', title: ' 3' },
  ];

  return (
    <div className="flex">
      <Sidebar sortOption={sortOption} setSortOption={setSortOption} />
      <main className="w-4/5 p-4">
        <h2 className="text-2xl font-bold mb-4">Продукты</h2>
        <div className="flex">
          <div className="w-3/5 mr-4">
            <Slider {...sliderSettings} className="mb-8">
              {sliderItems.map((item, index) => (
                <div key={index} className="relative">
                  <img src={item.img} alt={item.title} className="w-full h-64 object-cover rounded" />
                  <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white w-full">
                    <h3>{item.title}</h3>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="w-2/5">
            <FeaturedProducts />
          </div>
        </div>
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




