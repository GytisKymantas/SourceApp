import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as TeamSpaceLogo } from "../../assets/teamSpaceLogoPurple.svg";

import "./StartingPageLayout.scss";

export const StartingPageLayout = ({ title, subtitle }) => (
  <div className="starting-page-layout">
    <div className="starting-page-layout__logo-container">
      <TeamSpaceLogo />
    </div>
    <div className="starting-page-layout__form-container">
      <h2 className="starting-page-layout__form-container__title">{title}</h2>
      <p className="starting-page-layout__form-container__subtitle">
        {subtitle}
      </p>
      <form></form>
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
};
