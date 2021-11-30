import React from "react";
import PropTypes, { oneOf } from "prop-types";

import "./buttonqa.scss";

export const Button = (props) => (
  <button type={props.type} className="button primary large">
    {props.label}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  btnSize: oneOf(["large", "medium"]),
};

Button.defaultProps = {
  type: "button",
  // btnClass: "button primary",
  label: "default",
};
