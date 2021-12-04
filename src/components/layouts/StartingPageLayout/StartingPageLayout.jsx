import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as TeamSpaceLogo } from "../../../assets/teamSpaceLogoPurple.svg";

import "./starting-page-layout.scss";

export const StartingPageLayout = ({ title, subtitle, children }) => (
  <div className="starting-page-layout">
    <div className="starting-page-layout__logo-container">
      <TeamSpaceLogo />
    </div>
    <div className="starting-page-layout__header">
      <h2 className="starting-page-layout__header__title">{title}</h2>
      <p className="starting-page-layout__header__subtitle">{subtitle}</p>
      {children}
    </div>
  </div>
);

StartingPageLayout.defaultProps = {
  title: "Registration",
  subtitle: "Let's get you on board.",
};

StartingPageLayout.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
};
