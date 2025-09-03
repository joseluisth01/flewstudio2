import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function SliderBanner({ slides }) {
  return (
    <div className="slider-banner">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop
        className="slider-banner-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="slider-banner-slide"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="overlay">
                <h2 className="slider-banner-title text-slides">{slide.title}</h2>
                <p className="slider-banner-subtitle">{slide.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
