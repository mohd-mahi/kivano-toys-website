import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

import Heading from "./Heading";

const WhyKivano = () => {
  const data = [
    {
      url: "/images/wide-toy-selection-icon.svg",
      title: "Wide Toy Selection",
      description:
        "A diverse range of imaginative, educational, and fun toys for all ages.",
    },
    {
      url: "/images/quality-and-safe-materials-icon.svg",
      title: "Quality & Safe Materials",
      description:
        "Made with virgin-grade PP & ABS, child-safe and long-lasting, with eco-friendly packaging.",
    },
    {
      url: "/images/tested-and-certified-safety-icon.svg",
      title: "Tested & Certified Safety",
      description:
        "Global certifications and rigorous quality checks for worry-free play.",
    },
    {
      url: "/images/affordable-bulk-deals-icon.svg",
      title: "Affordable Bulk Deals",
      description:
        "Factory-direct pricing with consistent quality across every order.",
    },
    {
      url: "/images/reliable-delivery-icon.svg",
      title: "Reliable Delivery",
      description:
        "Fast turnaround and nationwide distribution to keep shelves stocked.",
    },
    {
      url: "/images/dedicated-support-icon.svg",
      title: "Dedicated Support",
      description:
        "Responsive service team ensuring smooth coordination and customer satisfaction.",
    },
  ];

  return (
    <section className="why-choose-kivano padding-section less ">
      <div className="container">
        <Heading mainTitle="Why Choose Kivano?" />
        <div className="row align-items-center z-10">
          <div className="col-lg-4 col-sm-6 col-7 why-left order-lg-0  order-1">
            <div className="why-card-wrapper d-none d-sm-flex">
              {data.slice(0, 3).map((item, index) => (
                <div
                  className="why-card"
                  key={index}
                  data-aos="fade-left"
                  data-aos-delay={100 * index + 400}
                >
                  <div className="img-box">
                    {/* <img src={item.url} alt={item.title} /> */}
                    <span
                      className="why-icon"
                      style={{
                        WebkitMaskImage: `url(${item.url})`,
                        maskImage: `url(${item.url})`,
                      }}
                    ></span>
                  </div>
                  <div className="content-box">
                    <h6>{item.title}</h6>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* for mobile start*/}
            <div className="why-card-wrapper d-flex d-sm-none">
              {data.map((item, index) => (
                <div
                  className="why-card"
                  key={index}
                  data-aos="fade-left"
                  data-aos-delay={100 * index + 600}
                >
                  <div className="img-box">
                    {/* <img src={item.url} alt={item.title} /> */}
                    <span
                      className="why-icon"
                      style={{
                        WebkitMaskImage: `url(${item.url})`,
                        maskImage: `url(${item.url})`,
                      }}
                    ></span>
                  </div>
                  <div className="content-box">
                    <h6>{item.title}</h6>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* for mobile end  */}
          </div>
          <div className="col-lg-4 col-sm-12 col-5 order-lg-1  order-0 ">
            <div
              className="why-middle-img"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <img src="/images/why-choose-char.png" alt="image" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 why-right order-2 order-lg-2 d-sm-flex d-none">
            <div className="why-card-wrapper">
              {data.slice(3, 6).map((item, index) => (
                <div
                  className="why-card"
                  key={index}
                  data-aos="fade-right"
                  data-aos-delay={100 * index + 600}
                >
                  <div className="img-box">
                    {/* <img src={item.url} alt={item.title} /> */}
                    <span
                      className="why-icon"
                      style={{
                        WebkitMaskImage: `url(${item.url})`,
                        maskImage: `url(${item.url})`,
                      }}
                    ></span>
                  </div>
                  <div className="content-box">
                    <h6>{item.title}</h6>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="col-12 d-none ">
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  {" "}
                  <div className="why-card">
                    <div className="img-box">
                    
                      <span
                        className="why-icon"
                        style={{
                          WebkitMaskImage: `url(${item.url})`,
                          maskImage: `url(${item.url})`,
                        }}
                      ></span>
                    </div>
                    <div className="content-box">
                      <h6>{item.title}</h6>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default WhyKivano;
