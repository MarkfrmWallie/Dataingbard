import React from "react";
import "./X10.css";

function X10(props) {
  const { className } = props;

  return (
    <div className={`x10-1 ${className || ""}`}>
      <div className="overlap-group8-1">
        <p className="he-was-awesome-can poppins-medium-tickle-me-pink-12px">
          He was awesome! Can you help me think of a second date he’d like?
        </p>
      </div>
      <div className="text-5 poppins-medium-we-peep-12px">08:41</div>
    </div>
  );
}

export default X10;
