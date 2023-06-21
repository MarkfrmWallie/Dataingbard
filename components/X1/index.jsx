import React from "react";
import "./X1.css";

function X1(props) {
  const { wowYouUberEatsALot, youreTop01OnO, className } = props;

  return (
    <div className={`x1 ${className || ""}`}>
      <div className="overlap-group3">
        <div className="analyzing-your-data poppins-medium-blumine-12px">Analyzing your data.....</div>
      </div>
      <div className="overlap-group2">
        <p className="wow-you-uber-eats-a-lot poppins-medium-blumine-12px">{wowYouUberEatsALot}</p>
      </div>
      <div className="overlap-group4">
        <p className="youre-top-01-on-o poppins-medium-blumine-12px">{youreTop01OnO}</p>
      </div>
      <div className="overlap-group">
        <p className="tell-me-about-your-ideal-match poppins-medium-blumine-12px">Tell me about your ideal match</p>
      </div>
    </div>
  );
}

export default X1;
