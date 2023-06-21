import React from "react";
import Profile2 from "../Profile2";
import "./Train.css";

function Train(props) {
  const {
    showUsWhatYoureLookingFor,
    appearance,
    number1,
    compatability,
    number2,
    overallInterestLevel,
    number3,
    group1899,
    profile2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="train screen">
        <Profile2 className={profile2Props.className} nameProps={profile2Props.nameProps} />
        <p className="show-us-what-youre-looking-for poppins-semi-bold-blumine-18px">{showUsWhatYoureLookingFor}</p>
        <div className="group-8 poppins-medium-blumine-14px">
          <div className="appearance">{appearance}</div>
          <div className="overlap-group3-5">
            <img className="line-4" src="/img/line-47.svg" alt="Line 47" />
            <div className="overlap-group-21">
              <div className="number valign-text-middle montserrat-bold-white-14px">{number1}</div>
            </div>
          </div>
          <div className="compatability">{compatability}</div>
          <div className="overlap-group5-4">
            <img className="line-4" src="/img/line-47.svg" alt="Line 48" />
            <div className="overlap-group1-14">
              <div className="number valign-text-middle montserrat-bold-white-14px">{number2}</div>
            </div>
          </div>
          <div className="overall-interest-level">{overallInterestLevel}</div>
          <div className="overlap-group4-4">
            <img className="line-4" src="/img/line-47.svg" alt="Line 49" />
            <div className="overlap-group2-9">
              <div className="number valign-text-middle montserrat-bold-white-14px">{number3}</div>
            </div>
          </div>
        </div>
        <div className="overlap-group6-3">
          <div className="navigation">
            <div className="icon_swipe_left">
              <img className="close" src="/img/close.svg" alt="close" />
            </div>
            <div className="icon_swipe_right">
              <img className="icon_love" src="/img/icon-love.svg" alt="icon_love" />
            </div>
          </div>
          <img className="group-1899" src={group1899} alt="Group 1899" />
        </div>
      </div>
    </div>
  );
}

export default Train;
