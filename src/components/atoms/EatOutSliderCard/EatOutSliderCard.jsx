import React from "react";
import SliderBulletPoint from "../../../assets/SliderBulletPoint.svg";
import SliderBulletPointSelected from "../../../assets/SliderBulletPointSelected.svg";
import { Button } from "components/atoms/Button/Button";
import PlaceholderNav from "../../../assets/PlaceholderNav.svg";

// import PropTypes from "prop-types";

import "./eat-out-slider.scss";

export const EatOutSliderCard = () => {
  const defaultSloganName = ["Feel the taste of Italy"];
  const defaultRestaurantName = ["Casa Della Pasta"];
  const defaultRestaurantDescription = [
    "Casa della Pasta was the first restaurant in Kaunas cooking pizza in a traditional wood-oven a restaurant capable of satisfying more than 3000 customers...",
  ];

  return (
    <div className="slider__container">
      <div className="slider__image-wrapper"></div>
      <div className="slider-text__wrapper">
        <div className="top-navigation">
          <div className="bullets">
            <img src={SliderBulletPoint} alt="bullet point" />
            <img src={SliderBulletPoint} alt="bullet point" />
            <img src={SliderBulletPointSelected} alt="selected point" />
            <img src={SliderBulletPoint} alt="bullet point" />
            <img src={SliderBulletPoint} alt="bullet point" />
          </div>
          <div className="placeholder-nav">
            <img src={PlaceholderNav} alt="placeholder" />
          </div>
        </div>
        <span className="text-slogan">{defaultSloganName}</span>
        <h2>{defaultRestaurantName}</h2>
        <p>{defaultRestaurantDescription}</p>
        <div className="btn-container">
          <Button label={"LEARN MORE"} isLarge />
        </div>
      </div>
    </div>
  );
};
