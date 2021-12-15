import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as HeartLogo } from "../../../assets/heart.svg";

import "./avatar.scss";

export const Avatar = ({ imageSource, hasIcon, isClickable, size }) => (
  <div className={`avatar${isClickable ? "__clickable" : ""}--${size}`}>
    <img
      className={`avatar__picture--${size}`}
      src={imageSource}
      alt="profile"
    />
    {hasIcon && <HeartLogo className="avatar__logo" />}
  </div>
);

Avatar.defaultProps = {
  imageSource:
    "https://thumbs.dreamstime.com/b/default-avatar-profile-trendy-style-social-media-user-icon-187599373.jpg",
  hasIcon: false,
};

Avatar.propTypes = {
  imageSource: PropTypes.string,
  hasIcon: PropTypes.bool,
  isClickable: PropTypes.bool,
  size: PropTypes.string,
};
