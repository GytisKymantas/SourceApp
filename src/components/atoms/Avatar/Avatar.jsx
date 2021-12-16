import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as HeartLogo } from "../../../assets/heart.svg";
import classNames from "classnames";

import "./avatar.scss";

export const Avatar = ({ imageSource, hasIcon, isClickable, isLarge }) => (
  <div
    className={classNames("avatar", {
      "avatar--large": isLarge,
      "avatar--clickable": isClickable,
    })}
  >
    <img className="avatar__picture" src={imageSource} alt="profile" />
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
  isLarge: PropTypes.bool,
};
