import React from "react";
import PropTypes from "prop-types";

import "./Avatar.scss";

export const Avatar = ({ imageSource }) => (
  <div className="profile">
    <img className="profile__picture" src={imageSource} alt="profile" />
  </div>
);

Avatar.propTypes = {
  imageSource: PropTypes.string,
};
