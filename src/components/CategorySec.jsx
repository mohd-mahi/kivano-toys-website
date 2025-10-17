import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Heading from "./Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import useSwiperNavigation from "../slider/useSwiperNavigation";

const CategorySec = () => {
  const categories = [
    {
      name: "Blocks",
      color: "#FF4D4D",
      icon: "/images/brick-icon.png",
    },
    {
      name: "Baby's Rattles",
      color: "#FF99CC",
      cl: "pink",
      icon: "/images/rattle-icon.svg",
    },
    { name: "Candy Flower", color: "#00D18F", icon: "/images/flower-icon.png" },
    {
      name: "Pull Back Cars",
      color: "#00AEEF",
      icon: "/images/car-toy-icon.png",
    },
    {
      name: "Truck Series",
      color: "#FFC400",
      icon: "/images/excavator-icon.png",
    },
    {
      name: "Blocks",
      color: "#FF4D4D",
      icon: "/images/dedicated-support-icon.png",
    },
    {
      name: "Baby's Rattles",
      color: "#FF99CC",
      cl: "pink",
      icon: "/images/rattle-icon.png",
    },
    { name: "Candy Flower", color: "#00D18F", icon: "/images/flower-icon.png" },
    {
      name: "Pull Back Cars",
      color: "#00AEEF",
      icon: "/images/car-toy-icon.png",
    },
    {
      name: "Truck Series",
      color: "#FFC400",
      icon: "/images/excavator-icon.png",
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const { isBeginning, isEnd } = useSwiperNavigation(swiperInstance);
  const swiperRef = useRef(null);
  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current.swiper;

    if (!swiper) return;

    swiper.on("sliderMove", () => {
      if (swiper.el) {
        swiper.el.setAttribute("data-lenis-prevent", "true");
      }
    });

    swiper.on("touchEnd", () => {
      if (swiper.el) {
        swiper.el.removeAttribute("data-lenis-prevent");
      }
    });

    return () => {
      swiper.off("sliderMove");
      swiper.off("touchEnd");
    };
  }, []);

  return (
    <section className="category-section padding-section">
      <div className="container">
        <Heading mainTitle="Product Categories" />

        <div className="category-slide-outer">
          <div className="category-slide-wrapper">
            <Swiper
              ref={swiperRef}
              slidesPerView={2}
              spaceBetween={10}
              speed={1000}
              breakpoints={{
                575: { slidesPerView: 3, spaceBetween: 10 },
                767: { slidesPerView: 4, spaceBetween: 10 },
                992: { slidesPerView: 4, spaceBetween: 20 },
                1200: { slidesPerView: 5, spaceBetween: 30 },
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              modules={[Navigation]}
              onSwiper={setSwiperInstance}
              className="mySwiper"
            >
              {categories.map((category, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="category-card"
                    data-aos="fade-up"
                    data-aos-delay={100 * index + 600}
                  >
                    <div
                      className={`category-img ${category.cl}`}
                      style={{
                        backgroundColor: category.color,
                        border: `8px solid ${category.color}`,
                      }}
                    >
                      <span
                        className="icon-img"
                        style={{
                          WebkitMaskImage: `url(${category.icon})`,
                          maskImage: `url(${category.icon})`,
                          backgroundColor: `${category.color}`,
                        }}
                      ></span>
                    </div>
                    <h3 style={{ color: category.color }}>{category.name}</h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Custom Arrows with disabled state */}
          <div
            ref={prevRef}
            className={`custom-prev ${isBeginning ? "disabled" : ""}`}
          >
            <img src="/images/left-arrow-icon.png" alt="" />
          </div>
          <div
            ref={nextRef}
            className={`custom-next ${isEnd ? "disabled" : ""}`}
          >
            <img src="/images/right-arrow-icon.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySec;
