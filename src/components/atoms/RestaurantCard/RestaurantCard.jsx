import React from "react";
import "./RestaurantCard.scss";
import PropTypes from "prop-types";

const RestaurantCard = ({headerImage,userImage,vectorImage,heartImage}) => (
  <div className="restaurant">
      <div className="restaurant__front">
          <img src={userImage} alt="user"></img>
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
          <img src={heartImage} alt="heart"></img>
      </div>
      <div className="restaurant__image-text">
          <h2>Ristorante Viva Piccola it...</h2>
          <span>10:00 - 21:00</span>
      </div>
  </div>
</div>

)

export default RestaurantCard;