import React from "react";
import "./Slides.css";

function Slides(props) {
  const { className } = props;

  return (
    <div className={`slides ${className || ""}`}>
      <div className="dot"></div>
      <div className="slides-item"></div>
      <div className="slides-item"></div>
    </div>
  );
}

export default Slides;
