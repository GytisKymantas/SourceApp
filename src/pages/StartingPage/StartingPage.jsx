import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as TeamSpaceLogo } from "../../assets/teamSpaceLogoPurple.svg";

import "./StartingPage.scss";

export const StartingPage = ({ title, subtitle }) => {
  return (
    <div className="starting-page">
      <div className="starting-page__logo-container">
        <TeamSpaceLogo />
      </div>
      <div className="starting-page__form-container">
        <h2 className="starting-page__form-container__title">{title}</h2>
        <p className="starting-page__form-container__subtitle">{subtitle}</p>
        <form></form>
      </div>
    </div>
  );
};

StartingPage.defaultProps = {
  title: "Registration",
  subtitle: "Let's get you on board.",
};

StartingPage.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
