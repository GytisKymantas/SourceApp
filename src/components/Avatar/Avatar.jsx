import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as HeartLogo } from "../../assets/heart.svg";

import "./Avatar.scss";

export const Avatar = ({ imageSource, hasIcon }) => (
  <div className="profile">
    <img className="profile__picture" src={imageSource} alt="profile" />
    {hasIcon && <HeartLogo className="profile__logo" />}
  </div>
);

Avatar.defaultProps = {
  hasIcon: false,
};

Avatar.propTypes = {
  imageSource: PropTypes.string,
  hasIcon: PropTypes.bool,
};
