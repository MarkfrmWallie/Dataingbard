import React from "react";
import "./X6.css";

function X6(props) {
  const { className } = props;

  return (
    <div className={`x6 ${className || ""}`}>
      <div className="overlap-group-4">
        <div className="type-your-messages poppins-medium-rock-blue-14px">Type your messages ...</div>
        <div className="button_send">
          <img className="icon_send" src="/img/icon-send.svg" alt="icon_send" />
        </div>
      </div>
    </div>
  );
}

export default X6;
