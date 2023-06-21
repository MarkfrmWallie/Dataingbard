import React from "react";
import { Link } from "react-router-dom";
import "./GuySalesPitch.css";

function GuySalesPitch(props) {
  const { img_28841, overlapGroup4, hesDoingVeryWell, hardNo, setMeUp, aaaand } = props;

  return (
    <div className="container-center-horizontal">
      <div className="guy-sales-pitch screen">
        <div className="overlap-group-container-4">
          <div className="overlap-group3-8">
            <img className="img_2884-1" src={img_28841} alt="IMG_2884 1" />
            <div className="rectangle-107"></div>
          </div>
          <div className="overlap-group4-7" style={{ backgroundImage: `url(${overlapGroup4})` }}>
            <div className="rectangle-111"></div>
          </div>
        </div>
        <p className="hes-doing-very-well poppins-semi-bold-blumine-16px">{hesDoingVeryWell}</p>
        <div className="button-6">
          <div className="overlap-group-container-5">
            <div className="overlap-group1-21">
              <div className="hard-no-3 valign-text-middle poppins-medium-white-16px">{hardNo}</div>
            </div>
            <div className="overlap-group2-13">
              <div className="set-me-up-3 valign-text-middle poppins-medium-white-16px">{setMeUp}</div>
            </div>
          </div>
          <Link to="/guy-pitch-2">
            <div className="group-1903">
              <div className="overlap-group-27">
                <div className="aaaand-3 valign-text-middle poppins-medium-white-16px">{aaaand}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GuySalesPitch;
