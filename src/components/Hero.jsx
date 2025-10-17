import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Hero = () => {
  const features = [
    { url: "/images/banner-01.jpg", urlMobile: "/images/mobile-banner.jpg" },
    { url: "/images/banner-02.jpg", urlMobile: "/images/mobile-banner2.jpg" },
    { url: "/images/banner-03.jpg", urlMobile: "/images/mobile-banner3.jpg" },
  ];

  // ✅ Detect screen size
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
                <img
                  src={isMobile ? item.urlMobile : item.url}
                  alt={`banner-${index + 1}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
