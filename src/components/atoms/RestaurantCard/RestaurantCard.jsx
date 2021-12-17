import React from "react";
import PropTypes from "prop-types";
import globe from "../../../assets/globeIcon.svg";
import map from "../../../assets/mapPinIcon.svg";
import heartImage from "../../../assets/clearHeartIcon.svg";
import "./restaurant-card.scss";
import redHeart from "../../../assets/redHeartIcon.svg";
import personIcon from "../../../assets/personIcon.svg";
import { Button } from "components/atoms/Button/Button";
import { RatingBadge } from "components/atoms/RatingBadge/RatingBadge";

import { useState } from "react";

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
  restaurantAverageRating,
}) => {
  const average =
    restaurantAverageRating &&
    restaurantAverageRating.reduce(
      (preValue, curValue) => preValue + curValue
    ) / restaurantAverageRating.length;

  const [heart, setHeart] = useState(true);

  const handleHeartClick = () => {
    setHeart((prevValue) => !prevValue);
  };

  return (
    <div className="restaurant__container">
      <div className="restaurant__container-front">
        <div className="restaurant__people-number">
          <img src={personIcon} alt="person" />
          <span>{numberOfCheckIns}</span>
        </div>
        <div
          className="restaurant__container-image-wrapper"
          style={{
            background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%),url('${restaurantImage}')`,
          }}
        ></div>
        <div className="restaurant__container-frame">
          <RatingBadge averageRating={Math.round(average * 10) / 10} />
        </div>
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
            onKeyDown={handleHeartClick}
            role="button"
            aria-hidden="true"
          >
            {heart ? (
              <img src={heartImage} alt="clear heart" />
            ) : (
              <img src={redHeart} alt="heart filled red" />
            )}
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
            <span className="restaurant__website">
              <img src={globe} alt="globe" />
              <a
                href={restaurantWebsite}
                rel="nopener noreferrer"
                target="_blank"
              >
                {restaurantWebsite}
              </a>
            </span>
            <span className="restaurant__address">
              <img src={map} alt="map" />
              <a
                href={restaurantAddress}
                rel="noopener noreferrer"
                target="_blank"
              >
                {restaurantAddress}
              </a>
            </span>
          </div>
          <p className="restaurant__description">{restaurantDescription}</p>
          <div className="restaurant__container-buttons">
            <button>READ MORE</button>
            <Button label={"CHECK-IN"} onClick={handleHeartClick} />
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
  restaurantAverageRating: PropTypes.array,
};
