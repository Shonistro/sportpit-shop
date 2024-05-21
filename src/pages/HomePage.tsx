import React from 'react';
import CategoryList from '../components/CategoryList';
import SliderComponent from '../components/Slider';
import FeaturedProducts from '../components/FeaturedProducts';
import ProductPairSlider from '../components/DoubleBuy';
import PopularProducts from '../components/PopularProducts';
import Testimonials from '../components/Testimonials'; // Импортируйте компонент Testimonials


//token - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE2MzI3NzQ0LCJpYXQiOjE3MTYzMjc0NDQsImp0aSI6ImE5ZGI2YWFiYTFjMzRjMmRhODQ1ZjAyOGNmNzkxMjYxIiwidXNlcl9pZCI6MX0._e4IpJHmz4C_u-UJ6Km5E7zziImYQdJ0HelDWp89zAU


const HomePage = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-1">
          <CategoryList />
        </div>
        <div className="lg:col-span-2">
          <SliderComponent />
          <ProductPairSlider />
          <PopularProducts />
        </div>
        <div className="lg:col-span-1">
          <FeaturedProducts />
        </div>
      </div>
      <Testimonials /> {/* Добавьте компонент Testimonials здесь */}
    </div>
  );
};

export default HomePage;