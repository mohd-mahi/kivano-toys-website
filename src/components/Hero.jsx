import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const Hero = () => {
  const features = [
    { url: "/images/banner-01.jpg" },
    { url: "/images/banner-01.jpg" },
    { url: "/images/banner-01.jpg" },
  ];

  return (
    <section className="hero-section" data-aos="fade-in" data-aos-delay="200">
      <div className="container-wrapper">
        <Swiper
          slidesPerView={1}
          speed={500}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {features.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="hero-slide-img">
                <img src={item.url} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
