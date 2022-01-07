import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as HeartLogo } from "../../../assets/heart.svg";
import classNames from "classnames";

import "./avatar.scss";

export const Avatar = ({ imageSource, hasIcon, isClickable, isLarge }) => {
  const className = classNames("avatar", {
    "avatar--large": isLarge,
    "avatar--clickable": isClickable,
  });

  return (
    <div className={className}>
      <img className="avatar__picture" src={imageSource} alt="profile" />
      {hasIcon && <HeartLogo className="avatar__logo" />}
    </div>
  );
};

Avatar.defaultProps = {
  hasIcon: false,
};

Avatar.propTypes = {
  imageSource: PropTypes.string,
  hasIcon: PropTypes.bool,
  isClickable: PropTypes.bool,
  isLarge: PropTypes.bool,
};
