import React from "react";
import Heading from "./Heading";

const Explore = () => {
  const products = [
    {
      title: "Baby's Rattles",
      code: "KVN R003A",
      image: "/images/products/KVN-R003A.png",
    },
    {
      title: "Blocks",
      code: "KVN BL76",
      image: "/images/products/KVN-BL76.png",
    },
    {
      title: "RC Cars Series",
      code: "9802 S",
      image: "/images/products/9802-S.png",
    },
    {
      title: "Music Series",
      code: "Piano 6832A",
      image: "/images/products/Piano-6832A.png",
    },
    {
      title: "RC Cars Series",
      code: "6328 CH",
      image: "/images/products/6328-CH.png",
    },
    {
      title: "Music Series",
      code: "Dancing Boy",
      image: "/images/products/Dancing-Boy.png",
    },
    {
      title: "RC Cars Series",
      code: "230",
      image: "/images/products/230.png",
    },
    {
      title: "Baby's Rattles",
      code: "KVN R004",
      image: "/images/products/KVN-R004.png",
    },
    {
      title: "RC Cars Series",
      code: "MT 368",
      image: "/images/products/MT-368.png",
    },
    {
      title: "Baby's Rattles",
      code: "KVN R003A",
      image: "/images/products/KVN-R007.png",
    },
  ];

  return (
    <section className="explore-section">
      <div className="container">
        <Heading
          subTitle=" Explore Best Sellers"
          mainTitle="Most Wanted Products"
        />
        <div className="card-wrapper-container">
          {products.map((item, index) => (
            <div
              className="explore-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 * index + 250}
            >
              <div className="card-img-box">
                <img src={item.image} alt={item.title} />
              </div>
              <span>{item.title}</span>

              <p>{item.code}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
