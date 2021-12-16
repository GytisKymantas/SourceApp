import React from "react";
import PropTypes from "prop-types";
import "./menu-item.scss";
import { NavLink } from "react-router-dom";

export const MenuItem = ({ icon, name, link }) => {
  return (
    <NavLink to={link} className="menu-item" activeclassname="active">
      <div className="menu-item__content">
        <div className="menu-item__icon">{icon}</div>
        <div className="menu-item__name">{name}</div>
      </div>
    </NavLink>
  );
};
MenuItem.propTypes = {
  icon: PropTypes.node,
  name: PropTypes.string,
  link: PropTypes.string,
};
