import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as StarLogo } from "../../../assets/ratingBadgeStar.svg";
import "./rating-badge.scss";

export const RatingBadge = ({ averageRating }) => (
  <div className="frame">
    <StarLogo className="frame__icon" />
    <div className="frame__score">{averageRating}</div>
  </div>
);

RatingBadge.propTypes = {
  averageRating: PropTypes.number.isRequired,
};
