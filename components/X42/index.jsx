import React from "react";
import "./X42.css";

function X42(props) {
  const { wowHeIsCuteOkayIllBite, className } = props;

  return (
    <div className={`x4-6 ${className || ""}`}>
      <div className="overlap-group1-20">
        <p className="wow-he-is-cute-okay-ill-bite poppins-medium-tickle-me-pink-14px">{wowHeIsCuteOkayIllBite}</p>
      </div>
      <div className="text-15 poppins-medium-we-peep-12px">08:41</div>
    </div>
  );
}

export default X42;
