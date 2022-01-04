import React from "react";
import "./hello-widget.scss";
import PropTypes from "prop-types";

export const HelloWidget = ({ name, time }) => {
  const hours = time.getHours();
  return (
    <div className="hello-widget">
      <div className="hello-widget__time">
        {time.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
      <div className="hello-widget__text">
        Good{" "}
        {hours < 5
          ? "evening"
          : [hours > 17 ? "evening" : [hours > 11 ? "afternoon" : "morning"]]}
        , <span className="hello-widget__text__name">{name}!</span>
      </div>
    </div>
  );
};

HelloWidget.propTypes = {
  name: PropTypes.string,
  time: PropTypes.object,
};
