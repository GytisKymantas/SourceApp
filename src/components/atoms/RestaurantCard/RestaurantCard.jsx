import React from "react";
import "./restaurant-card.scss";
import PropTypes from "prop-types";
import globe from "../../../assets/globe.svg";
import map from "../../../assets/map.svg";

export const RestaurantCard = ({
  headerImage,
  userImage,
  vectorImage,
  heartImage,
  restaurantName,
  retaurantWebsite,
  restaurantAddress,
  restaurantOpeningHours,
  restaurantDescription,
  restaurantCategories,
}) => (
  <div className="restaurant__container">
    <div className="restaurant__container-front">
      <img src={userImage} alt="user" />
      <img src={headerImage} alt="pizza" />
      <div className="restaurant__container-frame">
        <img src={vectorImage} alt="vector" />
        <span>4.5</span>
      </div>
      <ul>
        <li>{restaurantCategories}</li>
        <li>{restaurantCategories}</li>
        <li>{restaurantCategories}</li>
      </ul>
      <div className="restaurant__container-image-heart">
        <img src={heartImage} alt="heart" />
      </div>
      <div className="restaurant__container-image-text">
        <h2>{restaurantName}</h2>
        <span>{restaurantOpeningHours}</span>
      </div>
    </div>
    <div className="restaurant__container-hidden">
      <div className="restaurant__container-examples">
        <span>
          <img src={globe} alt="globe" />
          {retaurantWebsite}
        </span>
        <span>
          <img src={map} alt="map" />
          {restaurantAddress}
        </span>
      </div>
      <p>{restaurantDescription}</p>
      <div className="restaurant__container-buttons">
        <button>READ MORE</button>
        <button>CHECK-IN</button>
      </div>
    </div>
  </div>
);

RestaurantCard.propTypes = {
  headerImage: PropTypes.string,
  userImage: PropTypes.string,
  vectorImage: PropTypes.string,
  heartImage: PropTypes.string,
  restaurantName: PropTypes.string,
  retaurantWebsite: PropTypes.string,
  restaurantAddress: PropTypes.string,
  restaurantOpeningHours: PropTypes.string,
  restaurantDescription: PropTypes.string,
  restaurantCategories: PropTypes.string,
};
