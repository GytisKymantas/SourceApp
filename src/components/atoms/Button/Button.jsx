import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ReactComponent as SearchIcon } from "../../../assets/searchIcon.svg";

import "./button.scss";

export const Button = (props) => {
  const { type, isLarge, label, disabled, onClick, hasIcon, redColor } = props;

  return (
    <button
      type={type ?? "button"}
      className={classNames("button button--medium", {
        "button--large": isLarge,
        "button--has-icon": hasIcon,
        "button--has-color-red": redColor,
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
};

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  isLarge: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  hasIcon: PropTypes.node,
  redColor: PropTypes.string,
};
