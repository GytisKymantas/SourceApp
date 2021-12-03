import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ReactComponent as SearchIcon } from "../../../assets/searchIcon.svg";

import "./buttonqa.scss";

export const Button = ({
  type,
  isLarge,
  label,
  disabled,
  onClick,
  hasIcon,
}) => (
  <button
    type={type}
    className={classNames("button button--medium", {
      "button--large": isLarge,
      "button--has-icon": hasIcon,
    })}
    disabled={disabled}
    onClick={onClick}
  >
    <span className="button__content">
      {hasIcon && <SearchIcon />}
      {label}
    </span>
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  isLarge: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  hasIcon: PropTypes.node,
};

Button.defaultProps = {
  type: "button",
};
