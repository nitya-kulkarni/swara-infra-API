import React from "react";
// import "./App.css";
import NavBar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MainServices from "../components/MainServices";
// import FeaturedWorks from "./components/FeaturedWorks";
import TopBar from "../components/TopBar";
import FeaturedWork from "../components/FeaturedWork";
import Construction from "../components/Construction";
import Offer from "../components/Offer";
import Testimonial from "../components/Testimonial"
import Footer from "../components/Footer";
// import CarouselSlider from "./components/CarouselSlider";


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
