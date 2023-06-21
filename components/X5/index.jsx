import React from "react";
import "./X5.css";

function X5(props) {
  const { className } = props;

  return (
    <div className={`x5 ${className || ""}`}>
      <div className="ellipse-5"></div>
      <div className="ellipse-51"></div>
      <div className="ellipse-5"></div>
    </div>
  );
}

export default X5;
