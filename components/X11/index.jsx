import React from "react";
import "./X11.css";

function X11(props) {
  const { className } = props;

  return (
    <div className={`x11 ${className || ""}`}>
      <div className="overlap-group9">
        <div className="name poppins-bold-white-14px">
          <span className="span-1 poppins-bold-white-14px">
            Mark staked:
            <br />
          </span>
          <span className="span-1 poppins-medium-white-18px">.01 BTC</span>
        </div>
        <div className="group-1896">
          <div className="profile-picture-5"></div>
        </div>
      </div>
      <div className="text-6 poppins-medium-selective-yellow-12px">08:41</div>
    </div>
  );
}

export default X11;
