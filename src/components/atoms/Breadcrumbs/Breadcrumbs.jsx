import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { createBrowserHistory } from "history";

import "./Breadcrumbs.scss";

export const Breadcrumbs = ({ linkList }) => {
  let history = createBrowserHistory();
  let location = useLocation();
  linkList[3].href = `${location.pathname}/item`;
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <nav>
      <ul className="breadcrumbs">
        {linkList.map((item, index) => (
          <li className="breadcrumbs__item" key={index}>
            <Link
              onClick={() => history.push("/")}
              className="breadcrumbs__link"
              to={item.href}
            >
              {item.label}
            </Link>
            {pathnames.map((name, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
              return (
                <Link
                  onClick={() => history.push(routeTo)}
                  className="breadcrumbs__link"
                  to={item.href}
                  key={index}
                >
                  {name}
                </Link>
              );
            })}
          </li>
        ))}
      </ul>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  linkList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
