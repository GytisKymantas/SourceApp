import React from "react";
import PropTypes from "prop-types";
import globe from "../../../assets/globeIcon.svg";
import map from "../../../assets/mapPinIcon.svg";
import heartImage from "../../../assets/clearHeartIcon.svg";
import "./restaurant-card.scss";
import redHeart from "../../../assets/redHeartIcon.svg";
import vectorImage from "../../../assets/Vector.svg";
import personIcon from "../../../assets/personIcon.svg";
import { Button } from "components/atoms/Button/Button";

export const RestaurantCard = ({ restaurantData, displayFullCard }) => {
  const restaurantList = restaurantData.restaurants[0];
  const restaurantCheckin = restaurantList.checkIns;
  const restaurantName = restaurantList.name;
  const restaurantWebsite = restaurantList.website.slice(7);
  const restaurantAddress = restaurantList.location.address;
  const restaurantOpeningHours = restaurantList.openingHours[0].hours;
  const restaurantDescription = restaurantList.description;
  const restaurantCategories = restaurantList.categories;
  const restaurantImage = restaurantList.image;
  console.log(restaurantWebsite);
  const funkyfunction = () => {
    return 2 * 3;
  };

  return (
    <div className="restaurant__container">
      <div className="restaurant__container-front">
        <div className="restaurant__user-image">
          <img src={personIcon} alt="person" />
          <span>{restaurantCheckin}</span>
        </div>
        <div
          className="restaurant__container-image-wrapper"
          style={{
            background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%),url('${restaurantImage}')`,
          }}
        ></div>
        <div className="restaurant__container-frame">
          <img src={vectorImage} alt="vector" />
          <span>4.5</span>
        </div>
        <div className="restaurant__container-footer">
          <ul className="ordered-list">
            {restaurantCategories.map((obj, index) => (
              <li key={index}>{obj}</li>
            ))}
          </ul>
          <div className="restaurant__container-image-heart">
            {!displayFullCard ? (
              <img src={heartImage} alt="heart " />
            ) : (
              <img src={redHeart} alt="heart filled red" />
            )}
          </div>
          <div className="restaurant__container-image-text">
            <h2>{restaurantName}</h2>
            <span>{restaurantOpeningHours}</span>
          </div>
        </div>
      </div>
      {displayFullCard ? (
        <div className="restaurant__container-hidden">
          <div className="restaurant__container-examples">
            <span className="restaurant__website">
              <img src={globe} alt="globe" />
              {restaurantWebsite}
            </span>
            <span className="restaurant__address">
              <img src={map} alt="map" />
              {restaurantAddress}
            </span>
          </div>
          <p className="restaurant__description">{restaurantDescription}</p>
          <div className="restaurant__container-buttons">
            <button>READ MORE</button>
            <Button label={"CHECK-IN"} onClick={funkyfunction()} />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

RestaurantCard.propTypes = {
  restaurantData: PropTypes.object,
  displayFullCard: PropTypes.bool,
};
