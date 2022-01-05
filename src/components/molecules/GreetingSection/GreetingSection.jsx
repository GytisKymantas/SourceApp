import React, { useState, useEffect } from "react";
import { WeatherWidget } from "components/atoms/WeatherWidget/WeatherWidget";
import { HelloWidget } from "components/atoms/HelloWidget/HelloWidget";
import "./greeting-section.scss";
import PropTypes from "prop-types";

export const GreetingSection = ({ name }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="greeting-section">
      <HelloWidget
        name={name}
        time={time}
        className="greeting-section__hello-widget"
      />
      <WeatherWidget time={time} className="greeting-section__weather-widget" />
    </div>
  );
};

GreetingSection.propTypes = {
  name: PropTypes.string,
};
