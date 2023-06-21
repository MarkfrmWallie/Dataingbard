import React from "react";
import "./Profile.css";

function Profile(props) {
  const { className } = props;

  return (
    <div className={`profile-1 ${className || ""}`}>
      <div className="profile-picture-3"></div>
      <div className="cupid-ai-x-mark poppins-semi-bold-blumine-18px">Cupid AI x Mark</div>
      <img className="divider-1" src="/img/divider.svg" alt="divider" />
    </div>
  );
}

export default Profile;
