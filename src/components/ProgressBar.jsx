import React, { useEffect, useState } from "react";
import "../styles/ProgressBar.css";

function ProgressBar({ progress }) {
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentProgress(progress); // Set the actual progress after the component is rendered
    }, 300); // Delay for smooth animation (optional)

    return () => clearTimeout(timer); // Clean up the timer
  }, [progress]);

  return (
    <div className="progress-bar-container">
      <div
        className="progress"
        style={{ width: `${currentProgress}% `}}
      ></div>
    </div>
  );
}

export default ProgressBar;