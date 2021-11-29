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
  <div>
    <button type={type} className={btnClass} onClick={handleClick}>
      {icon && icon} {label}
    </button>
  </div>
);

Button.propTypes = {
  children: PropTypes.node,
  btnClass: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
};

Button.defaultProps = {
  type: "button",
  btnClass: "button primary",
  label: "default",
};
