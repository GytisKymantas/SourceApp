import React from "react";
import PropTypes from "prop-types";

import "./button.scss";

export const Button = (
  { type },
  { btnClass },
  { handleClick },
  { icon },
  { label }
) => (
  <button type={type} className={btnClass} onClick={handleClick}>
    {icon && icon} {label}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  btnClass: PropTypes.string,
  handleClick: PropTypes.func,
  icon: PropTypes.node,
  label: PropTypes.string,
};

Button.defaultProps = {
  type: "button",
  btnClass: "button primary",
  label: "default",
};
