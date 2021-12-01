import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./buttonqa.scss";

export const Button = ({ type, isLarge, label, isDisabled }) => (
  <button
    type={type}
    className={classNames("button button--medium", {
      "button--large": isLarge,
      "button--isDisabled": isDisabled,
    })}
  >
    {label}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  isLarge: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

Button.defaultProps = {
  type: "button",
  label: "default",
};
