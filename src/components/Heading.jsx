import React from "react";

const Heading = ({ mainTitle, subTitle }) => {
  return (
    <div className="heading-container">
      {subTitle && (
        <p className="sub-title" data-aos="fade-up">
          {subTitle}
        </p>
      )}
      {mainTitle && (
        <h2 className="main-title" data-aos="fade-up" data-aos-delay="200">
          {mainTitle}
        </h2>
      )}
    </div>
  );
};

export default Heading;
