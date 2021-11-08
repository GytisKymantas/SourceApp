import React from "react";
import PropTypes from "prop-types";

import "./DropDown.scss";

export const DropDown = ({ items }) => (
  <div className="drop-down">
    {items.map((item) => (
      <div
        key={item.id}
        className="drop-down__item"
        role="button"
        tabIndex={item.id}
        onClick={item.click}
        onKeyDown={item.click}
      >
        <div className="drop-down__logo">{item.logo}</div>
        <div>{item.text}</div>
      </div>
    ))}
  </div>
);

DropDown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
