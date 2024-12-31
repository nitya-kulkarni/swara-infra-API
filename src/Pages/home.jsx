import React from "react";
import HeroSection from "../components/HeroSection";
import MainServices from "../components/MainServices";
import FeaturedWork from "../components/FeaturedWork";
import Construction from "../components/Construction";
import Offer from "../components/Offer";
import Testimonial from "../components/Testimonial"



function Home() {
  return (
    <div className="App">
     
      <HeroSection />
      <MainServices />
      <FeaturedWork/>
      <Construction/>
      <Offer/>
      <Testimonial/>

    </div>
  );
}

export default Home;
