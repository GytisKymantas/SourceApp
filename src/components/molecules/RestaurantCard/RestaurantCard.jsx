import React, { useState } from "react";
import PropTypes from "prop-types";
import globe from "../../../assets/globeIcon.svg";
import map from "../../../assets/mapPinIcon.svg";
import heartImage from "../../../assets/clearHeartIcon.svg";
import redHeart from "../../../assets/redHeartIcon.svg";
import personIcon from "../../../assets/personIcon.svg";
import { Button } from "components/atoms/Button/Button";
import { RatingBadge } from "components/atoms/RatingBadge/RatingBadge";
import "./restaurant-card.scss";

export const RestaurantCard = ({
  displayFullCard,
  numberOfCheckIns,
  restaurantName,
  restaurantWebsite,
  restaurantAddress,
  restaurantOpeningHours,
  restaurantDescription,
  restaurantCategories,
  restaurantImage,
  restaurantReviewList,
}) => {
  const ratingArray = restaurantReviewList.map((review) => review.rating);
  const average =
    ratingArray &&
    ratingArray.reduce((preValue, curValue) => preValue + curValue) /
      ratingArray.length;

  const [heart, setHeart] = useState(true);
  const [checkIn, setCheckIn] = useState(numberOfCheckIns);
  const handleHeartClick = () => setHeart(!heart);
  let handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setHeart(!heart);
    }
  };
  const handleCheckInClick = () => setCheckIn(!checkIn);

  return (
    <div className="restaurant__container">
      <div className="restaurant__container-front">
        <div className="restaurant__container-top">
          {!displayFullCard && (
            <div className="restaurant__people-number">
              <img src={personIcon} alt="person" />
              <span>{!checkIn ? numberOfCheckIns + 1 : numberOfCheckIns}</span>
            </div>
          )}
          <div className="restaurant__container-frame">
            <RatingBadge averageRating={Math.round(average * 10) / 10} />
          </div>
        </div>
        <div
          className="restaurant__container-image-wrapper"
          style={{
            background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%),url('${restaurantImage}')`,
          }}
        ></div>
        <div className="restaurant__container-footer">
          <ul className="ordered-list">
            {restaurantCategories &&
              restaurantCategories.map((category, index) => (
                <li key={index}>{category}</li>
              ))}
          </ul>
          <div
            className="restaurant__container-image-heart"
            onClick={handleHeartClick}
            onKeyDown={handleKeyPress}
            role="button"
            tabIndex={0}
          >
            <img
              src={heart ? heartImage : redHeart}
              alt={heart ? "Clear heart." : "Red heart."}
            />
          </div>
          <div className="restaurant__container-image-text">
            <h2 title={restaurantName}>{restaurantName}</h2>
            <span>{restaurantOpeningHours}</span>
          </div>
        </div>
      </div>
      {displayFullCard ? (
        <div className="restaurant__container-bottom">
          <div className="restaurant__container-credentials">
            <span className="restaurant-locale">
              <img src={globe} className="icon" alt="globe" />
              <a
                href={`https://${restaurantWebsite}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {restaurantWebsite.replace(/(^\w+:|^)\/\//, "")}
              </a>
            </span>
            <span className="restaurant-locale">
              <img src={map} className="location-pin icon" alt="map" />
              {restaurantAddress}
            </span>
          </div>
          <p className="restaurant__description">{restaurantDescription}</p>
          <div className="restaurant__container-buttons">
            <button>READ MORE</button>
            <Button
              label={checkIn ? "CHECK-IN" : "CHECK-OUT"}
              onClick={handleCheckInClick}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

RestaurantCard.propTypes = {
  displayFullCard: PropTypes.bool.isRequired,
  restaurantList: PropTypes.object,
  numberOfCheckIns: PropTypes.number,
  restaurantName: PropTypes.string,
  restaurantWebsite: PropTypes.string,
  restaurantAddress: PropTypes.string,
  restaurantOpeningHours: PropTypes.string,
  restaurantDescription: PropTypes.string,
  restaurantCategories: PropTypes.array,
  restaurantImage: PropTypes.string,
  restaurantReviewList: PropTypes.array,
};
