import React from "react";
import "./RestaurantCard.scss";
import PropTypes from "prop-types";
import globe from "./globe.svg";
import map from "./map.svg";
import redheart from "./redheart copy.svg";

export const RestaurantCard = ({
  headerImage,
  userImage,
  vectorImage,
  heartImage,
  isTrue,
}) => (
  <div className="restaurant">
    <div className="restaurant__front">
      <img src={userImage} alt="user" className="user" />
      <img src={headerImage} alt="pizza"></img>
      <div className="restaurant__frame">
        <img src={vectorImage} alt="vector"></img>
        <span>4.5</span>
      </div>
      <ul>
        <li>Salads</li>
        <li>Snacks</li>
        <li>Pizza</li>
      </ul>
      <div className="restaurant__image-heart">
        {isTrue ? (
          <img src={redheart} alt="redheart" />
        ) : (
          <img src={heartImage} alt="heart" />
        )}
      </div>
      <div className="restaurant__image-text">
        <h2>Ristorante Viva Piccola it...</h2>
        <span>10:00 - 21:00</span>
      </div>
      {isTrue ? (
        <div className="restaurant__hidden">
          <div className="restaurant__examples">
            <span>
              <img src={globe} alt="globe"></img>
              EXAMPLE.COM
            </span>
            <span>
              <img src={map} alt="map"></img>
              EXAMPLE ST.32
            </span>
          </div>
          <p>
            Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
            dolor sit amet.Lorem ipsum dolor sit amet.
          </p>
          <div className="restaurant__buttons">
            <button>READ MORE</button>
            <button>CHECK-IN</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  </div>
);
RestaurantCard.propTypes = {
  headerImage: PropTypes.string,
  userImage: PropTypes.string,
  vectorImage: PropTypes.string,
  heartImage: PropTypes.string,
  isTrue: PropTypes.bool,
};
