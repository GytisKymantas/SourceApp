import React from "react";
import { WeatherWidget } from "components/atoms/WeatherWidget/WeatherWidget";
import { HelloWidget } from "components/atoms/HelloWidget/HelloWidget";
import "./greeting-section.scss";
import PropTypes from "prop-types";

export const GreetingSection = ({ name }) => {
  return (
    <div className="greeting-section">
      <HelloWidget name={name} className="greeting-section__hello-widget" />
      <WeatherWidget className="greeting-section__weather-widget" />
    </div>
  );
};

GreetingSection.propTypes = {
  name: PropTypes.string,
};
