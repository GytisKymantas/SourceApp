import React from "react";
import PropTypes from "prop-types";
import "./menu-item.scss";
import { Link } from "react-router-dom";

export const MenuItem = ({ icon, name, link }) => (
  <div className="menuItem">
    <Link to={link}>
      <div className="menuItem__content">
        <div className="menuItem__icon">{icon}</div>
        <div className="menuItem__name">{name}</div>
      </div>
    </Link>
  </div>
);
MenuItem.propTypes = {
  icon: PropTypes.node,
  name: PropTypes.string,
  link: PropTypes.string,
};
