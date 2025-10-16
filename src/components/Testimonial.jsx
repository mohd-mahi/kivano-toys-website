import React, { useEffect, useRef } from "react";
import Heading from "./Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

const Testimonial = () => {
  const swiperRef = useRef(null);
  const customerTestimonials = [
    {
      id: 1,
      quote:
        "As a retailer, I appreciate the timely deliveries and consistent quality. These toys practically fly off the shelves!",
      customerName: "Rohan M.Toy Store Owner",
    },
    {
      id: 2,
      quote:
        "As a retailer, I appreciate the timely deliveries and consistent quality. These toys practically fly off the shelves!",
      customerName: "Rohan M.Toy Store Owner",
    },
    {
      id: 3,
      quote:
        "As a retailer, I appreciate the timely deliveries and consistent quality. These toys practically fly off the shelves!",
      customerName: "Rohan M.Toy Store Owner",
    },
    {
      id: 4,
      quote:
        "As a retailer, I appreciate the timely deliveries and consistent quality. These toys practically fly off the shelves!",
      customerName: "Rohan M.Toy Store Owner",
    },
  ];
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
    <section className="testimonial-section padding-section">
      <div className="container padding-section less pb-0">
        <Heading mainTitle="What Our Happy Customers Say" />

        <div className="testimonial-card-wrapper">
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            spaceBetween={60}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 60,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 60,
              },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper padding-section less pb-0"
          >
            {customerTestimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="testimonial-card"
                  data-aos="fade-up"
                  data-aos-delay={100 * index + 600}
                >
                  <span className="icon-box">
                    <img src="/images/rating-icon.png" alt="" />
                  </span>
                  <blockquote>{item.quote}</blockquote>
                  <h6>{item.customerName}</h6>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
