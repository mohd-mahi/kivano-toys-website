import React from "react";
import TextSplit from "./TextSplit";
const SecTitle = ({ children }) => {
  const delaySecond = 200;
  return (
    <TextSplit revealType="word">
      <h2
        className="main-title"
        data-aos="fade-in"
        style={{ "--delaySecond": `${delaySecond}ms` }}
      >
        {children}
      </h2>
    </TextSplit>
  );
};

export default SecTitle;
