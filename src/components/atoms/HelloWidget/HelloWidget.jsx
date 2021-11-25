import React, { useState, useEffect } from "react";
import "./hello-widget.scss";
import PropTypes from "prop-types";

export const HelloWidget = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const hours = time.getHours();
  return (
    <div className="hello-widget">
      <div className="hello-widget__time">
        {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </div>
      <div className="hello-widget__text">
        {hours < 12 ? "morning" : [hours >= 17 ? "evening" : "afternoon"]}
      </div>
    </div>
  );
};

HelloWidget.propTypes = {
  time: PropTypes.instanceOf(Date),
};
