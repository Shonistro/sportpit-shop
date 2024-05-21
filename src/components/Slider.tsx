import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <Slider {...settings}>
        <div>
          <img src="https://bcaa.ua/uploaded/homeslider_spool/173643718_290387256093423_6611371646808379785_n.jpg.webp" alt="Slide 1" />
        </div>
        <div>
          <img src="https://bcaa.ua/uploaded/homeslider_spool/200__3rus.jpg.webp" alt="Slide 2" />
        </div>
        <div>
          <img src="https://bcaa.ua/uploaded/homeslider_spool/217___3rus.jpg.webp" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;