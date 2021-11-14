import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./Breadcrumbs.scss";

const Breadcrumbs = ({ linkList }) => (
  <nav>
    <ul className="breadcrumbs">
      {linkList.map((item, index) => (
        <li className="breadcrumbs__item" key={index}>
          <Link className="breadcrumbs__link" to={item.href}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

Breadcrumbs.propTypes = {
  linkList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Breadcrumbs;
