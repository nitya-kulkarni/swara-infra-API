import React, { useEffect, useState, useRef } from "react";
import "../styles/ProgressBar.css";

function ProgressBar({ progress }) {
  const [currentProgress, setCurrentProgress] = useState(0);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrentProgress(progress); 
        } else {
          setCurrentProgress(0); 
        }
      },
      { threshold: 0.5 } 
    );

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    return () => {
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current);
      }
    };
  }, [progress]);

  return (
    <div className="progress-bar-container" ref={progressBarRef}>
      <div
        className="progress"
        style={{ width: `${currentProgress}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar