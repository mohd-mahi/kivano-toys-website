import React from "react";

const OurStory = () => {
  const data = [
    { value: "500", label: "Toys Categories" },
    { value: "100K", label: "Toys Produced Daily" },
    { value: "50K", label: "Toys Shipped Daily" },
  ];
  return (
    <section className="our-story-section padding-section">
      <div className="container">
        <div className="row ">
          <div className="col-lg-6 right-side">
            <div
              className="story-image-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="story-img">
                <img src="/images/hm-about-img.jpg" alt="story-img" />
              </div>
              <img
                src="/images/about-us-char.png"
                alt=""
                className="bottom-img"
                data-aos="fade-up"
                data-aos-delay="400"
              />
            </div>
          </div>
          <div className="col-lg-6 left-side">
            <div className="our-story-content">
              <h2
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {" "}
                A little about us.
              </h2>
              <p data-aos="fade-up" data-aos-delay="350">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
              <a href="#" data-aos="fade-up" data-aos-delay="400">
                Keep Reading
              </a>
              <div className="stat-block-container">
                <div
                  className="row gy-5"
                  data-aos="fade-up"
                  data-aos-delay="450"
                >
                  {data.map((item, index) => (
                    <div className="col-6 col-lg-6 col-md-4" key={index}>
                      <div className="story-card">
                        <h6>
                          {item.value} <span>+</span>
                        </h6>
                        <p>{item.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
