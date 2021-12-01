import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./buttonqa.scss";

export const Button = ({
  type,
  isLarge,
  label,
  // isDisabled,
  disabled,
  handleClick,
}) => (
  <button
    id="button"
    type={type}
    className={classNames("button button--medium", {
      "button--large": isLarge,
      // "button--isDisabled": isDisabled,
    })}
    disabled={disabled}
    onClick={handleClick}
  >
    {label}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  isLarge: PropTypes.bool,
  // isDisabled: PropTypes.bool,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  type: "button",
};
