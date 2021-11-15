import React from "react";
import PropTypes from "prop-types";
import "./menu-item.scss";
import { Link } from "react-router-dom";

export const MenuItem = ({ icon, name, link }) => (
  <Link to={link} className="menu-item">
    <div className="menu-item__content">
      <div className="menu-item__icon">{icon}</div>
      <div className="menu-item__name">{name}</div>
    </div>
  </Link>
);
MenuItem.propTypes = {
  icon: PropTypes.node,
  name: PropTypes.string,
  link: PropTypes.string,
};
