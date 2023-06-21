import React from "react";
import IconPin from "../IconPin";
import "./Group4.css";

function Group4(props) {
  const { overlapGroupContainer, profilePicture, className } = props;

  return (
    <div className={`group-4 ${className || ""}`}>
      <div className="overlap-group-container" style={{ backgroundImage: `url(${overlapGroupContainer})` }}>
        <div className="overlap-group1-1">
          <div className="profile-picture-1" style={{ backgroundImage: `url(${profilePicture})` }}></div>
          <IconPin />
        </div>
        <div className="overlap-group-2">
          <div className="view poppins-medium-white-12px">View</div>
        </div>
      </div>
      <div className="text-2 poppins-medium-tiara-12px">08:40</div>
    </div>
  );
}

export default Group4;
