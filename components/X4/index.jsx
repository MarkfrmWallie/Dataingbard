import React from "react";
import "./X4.css";

function X4(props) {
  const { damnYeahLetsFindSomeoneWithA, className } = props;

  return (
    <div className={`x4-4 ${className || ""}`}>
      <div className="overlap-group6-4">
        <p className="damn-yeah-lets-find-someone-with-a poppins-medium-tickle-me-pink-14px">
          {damnYeahLetsFindSomeoneWithA}
        </p>
      </div>
      <div className="text-14 poppins-medium-we-peep-12px">08:41</div>
    </div>
  );
}

export default X4;
