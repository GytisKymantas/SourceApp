import React from "react";
import PropTypes from "prop-types";
import globe from "../../../assets/globe.svg";
import map from "../../../assets/map pin.svg";
import heartImage from "../../../assets/heart.svg";
import "./restaurant-card.scss";
import redHeart from "../../../assets/redheart.svg";
import vectorImage from "../../../assets/Vector.svg";
import personIcon from "../../../assets/personIcon.svg";
import { useLocation } from "react-router";
import { Button } from "components/atoms/Button/Button";

export const RestaurantCard = ({ restaurantData }) => {
  const location = useLocation();
  const restaurantCheckin = restaurantData.restaurants[0].checkIns;
  const restaurantName = restaurantData.restaurants[0].name;
  const retaurantWebsite = restaurantData.restaurants[0].website;
  const restaurantAddress = restaurantData.restaurants[0].location.address;
  const restaurantOpeningHours =
    restaurantData.restaurants[0].openingHours[0].hours;
  const restaurantDescription = restaurantData.restaurants[0].description;
  const restaurantCategories = restaurantData.restaurants[0].categories;
  const restaurantImage = restaurantData.restaurants[0].image;

  const funkyfunction = () => {
    return 2 * 3;
  };

  return (
    <div className="restaurant__container">
      {location.pathname === "/dashboard" ? (
        <div className="restaurant__container-front">
          {location.pathname === "/dashboard" ? (
            <div className="restaurant__user-image">
              <img src={personIcon} alt="person" />
              <span>{restaurantCheckin}</span>
            </div>
          ) : (
            ""
          )}
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
              {location.pathname === "/dashboard" ? (
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
      ) : (
        ""
      )}
      {location.pathname === "/dashboard" ? (
        <div className="restaurant__container-hidden">
          <div className="restaurant__container-examples">
            <span className="restaurant__website">
              <img src={globe} alt="globe" />
              {retaurantWebsite}
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
};
