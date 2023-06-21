import React from "react";
import "./Name.css";

function Name(props) {
  const { samantha18, className } = props;

  return (
    <div className={`name-2 ${className || ""}`}>
      <div className="samantha-18 poppins-semi-bold-white-24px">{samantha18}</div>
      <div className="icon_verified">
        <img className="check" src="/img/check.svg" alt="check" />
      </div>
    </div>
  );
}

export default Name;
