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
        <li>Salads</li>
        <li>Snacks</li>
        <li>Pizza</li>
      </ul>
      <div className="restaurant__container-image-heart">
        <img src={heartImage} alt="heart" />
      </div>
      <div className="restaurant__container-image-text">
        <h2>Ristorante Viva Piccola it...</h2>
        <span>10:00 - 21:00</span>
      </div>
    </div>
    <div className="restaurant__container-hidden">
      <div className="restaurant__container-examples">
        <span>
          <img src={globe} alt="globe" />
          EXAMPLE.COM
        </span>
        <span>
          <img src={map} alt="map" />
          EXAMPLE ST.32
        </span>
      </div>
      <p>
        Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor
        sit amet.Lorem ipsum dolor sit amet.
      </p>
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
};
