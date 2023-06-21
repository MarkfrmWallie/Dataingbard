import React from "react";
import { Link } from "react-router-dom";
import Slides from "../Slides";
import "./Teach.css";

function Teach(props) {
  const { title, weKnowWhatYouLik, img_8A9A6D94Da1912, analyzeMe, slides1Props, slides2Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="teach screen">
        <h1 className="title-2">{title}</h1>
        <p className="we-know-what-you-lik poppins-medium-blumine-24px">{weKnowWhatYouLik}</p>
        <Slides className={slides1Props.className} />
        <div className="overlap-group1-18">
          <Slides className={slides2Props.className} />
          <img className="img_8-a9-a6-d94-da19-1-2" src={img_8A9A6D94Da1912} alt="IMG_8A9A6D94DA19-1 2" />
        </div>
        <Link to="/meet-cupid">
          <div className="button-5">
            <div className="overlap-group-24">
              <div className="analyze-me valign-text-middle poppins-medium-white-20px">{analyzeMe}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Teach;
