import React from "react";
import Hero from "../../components/Hero";
import CategorySec from "../../components/CategorySec";
import Explore from "../../components/Explore";
import OurStory from "../../components/OurStory";
import WhyKivano from "../../components/WhyKivano";
import Testimonial from "../../components/Testimonial";
import WhatsNextCTA from "../../components/WhatsNextCTA";
import Footer from "../../Layout/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <CategorySec />
      <Explore />
      <OurStory />
      <WhyKivano />
      <Testimonial />
      <WhatsNextCTA />
    </>
  );
};

export default Home;
