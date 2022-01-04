import React from "react";
import PropTypes from "prop-types";

import "./drop-down.scss";

export const DropDown = ({ options, onSelect }) => (
  <div className="drop-down">
    {options.map((option) => (
      <div
        key={option.id}
        className="drop-down__option"
        role="button"
        tabIndex="0"
        onClick={() => onSelect(option.id)}
        onKeyDown={() => onSelect(option.id)}
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
      id: PropTypes.string,
      logo: PropTypes.node,
      text: PropTypes.string,
    })
  ),
  onSelect: PropTypes.func,
};
