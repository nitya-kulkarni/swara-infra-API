import React from "react";
// import "./App.css";
import AboutUs from "../components/AboutUs";
// import ProgressBar from "../components/ProgressBar";
import ServicesBanner from "../components/ServicesBanner";
import TeamSection from "../components/TeamSection";
// import PromoSection from "../components/Promosection";



function About() {
  return (
    <div className="App">
      {/* <TopBar/> */}
      <AboutUs/>
      {/* <ProgressBar/> */}
      <ServicesBanner/>
      {/* <PromoSection/> */}
      <TeamSection/>
    </div>
  );
}

export default About;
