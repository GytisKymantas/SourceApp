import React from "react";
import PropTypes from "prop-types";
import globe from "../../../assets/globe.svg";
import map from "../../../assets/map.svg";
import heartImage from "../../../assets/heart.svg";
import "./restaurant-card.scss";
import userImage from "../../../assets/CheckIn.svg";
import redHeart from "../../../assets/redheart.svg";
import { useLocation } from "react-router";

export const RestaurantCard = ({ restaurantData }) => {
  const userImage = "bla";
  const vectorImage = "bla";
  const location = useLocation();
  const restaurantName = restaurantData.restaurants[0].name;
  const retaurantWebsite = restaurantData.restaurants[0].website;
  const restaurantAddress = restaurantData.restaurants[0].location.address;
  const restaurantOpeningHours =
    restaurantData.restaurants[0].openingHours[0].hours;
  const restaurantDescription = restaurantData.restaurants[0].description;
  const restaurantCategories = restaurantData.restaurants[0].categories;
  const restaurantImage = restaurantData.restaurants[0].image;
  console.log(restaurantOpeningHours);
  return (
    <div className="restaurant__container">
      {location.pathname === "/dashboard" ? (
        <div className="restaurant__container-front">
          {location.pathname === "/dashboard" ? (
            <img className="user-image" src={userImage} alt="user" />
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
                <img src={heartImage} alt="heart" />
              ) : (
                <img src={redHeart} alt="heart" />
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
      ) : (
        ""
      )}
    </div>
  );
};

RestaurantCard.propTypes = {
  // headerImage: PropTypes.string,
  // userImage: PropTypes.string,
  // vectorImage: PropTypes.string,
  // heartImage: PropTypes.string,
  // restaurantName: PropTypes.string,
  // retaurantWebsite: PropTypes.string,
  // restaurantAddress: PropTypes.string,
  // restaurantOpeningHours: PropTypes.string,
  // restaurantDescription: PropTypes.string,
  // restaurantCategories: PropTypes.string,
  restaurantData: PropTypes.object,
};
