import React from "react";
import PropTypes from "prop-types";

import "./DropDown.scss";

export const DropDown = ({ options }) => (
  <div className="drop-down">
    {options.map((option) => (
      <div
        key={option.id}
        className="drop-down__option"
        role="button"
        tabIndex={option.id}
        onClick={option.click}
        onKeyDown={option.click}
      >
        <div className="drop-down__logo">{option.logo}</div>
        <div>{option.text}</div>
      </div>
    ))}
  </div>
);

DropDown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      logo: PropTypes.node,
      text: PropTypes.string,
    })
  ),
};
