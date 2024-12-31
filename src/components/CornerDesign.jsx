import React from "react";
import "../styles/CornerDesign.css";

const Construction = () => {
  return (
    <div className="construction-container">
      <div className="banner">
        <h1>Under Construction</h1>
        <p>We’re working hard to bring you something amazing!</p>
      </div>
      <div className="construction-corners">
        <div className="corner top-left"></div>
        <div className="corner bottom-right"></div>
      </div>
    </div>
  );
};

export default Construction;
