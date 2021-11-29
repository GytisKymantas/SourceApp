import React from "react";
import PropTypes from "prop-types";

export const Button = ({ type }, { btnClass }, { handleClick }, { label }) => (
  <div>
    <button type={type} className={btnClass} onClick={handleClick}>
      {label}
    </button>
  </div>
);

Button.propTypes = {
  children: PropTypes.node,
  btnClass: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
};
