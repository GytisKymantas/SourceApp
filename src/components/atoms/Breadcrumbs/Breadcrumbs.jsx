import React from "react";
import { Link, useLocation } from "react-router-dom";
import { paths } from "utils/paths";

import "./breadcrumbs.scss";

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const formatedPaths = pathnames.map((pathname) => ({
    label: pathname,
    href: paths[pathname],
  }));

  return (
    <nav>
      {location.pathname === "/dashboard/" ? (
        ""
      ) : (
        <ul className="breadcrumbs">
          {formatedPaths.map((item, index) => (
            <li className="breadcrumbs__item" key={index}>
              <Link className="breadcrumbs__link" to={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
