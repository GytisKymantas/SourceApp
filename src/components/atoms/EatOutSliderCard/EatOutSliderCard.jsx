import React from "react";
import SliderBulletPoint from "../../../assets/SliderBulletPoint.svg";
import SliderBulletPointSelected from "../../../assets/SliderBulletPointSelected.svg";
import { Button } from "components/atoms/Button/Button";
import PlaceholderNav from "../../../assets/PlaceholderNav.svg";
import PropTypes from "prop-types";

import "./eat-out-slider.scss";

export const EatOutSliderCard = ({
  restaurantNameProp,
  restaurantSloganProp,
  restaurantImageProp,
  restaurantDescriptionProp,
  restaurantButtonColorProp, // in progress
}) => {
  return (
    <div className="slider__container">
      <div
        className="slider__image-wrapper"
        style={{
          background: `linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%),url(${restaurantImageProp})`,
        }}
      ></div>
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
        <span className="text-slogan">{restaurantSloganProp}</span>
        <h2>{restaurantNameProp}</h2>
        <p>{restaurantDescriptionProp}</p>
        <div className="btn-container">
          <Button
            label={"LEARN MORE"}
            isLarge
            color={restaurantButtonColorProp}
          />
        </div>
      </div>
    </div>
  );
};

EatOutSliderCard.propTypes = {
  restaurantNameProp: PropTypes.string,
  restaurantDescriptionProp: PropTypes.string,
  restaurantImageProp: PropTypes.string,
  restaurantSloganProp: PropTypes.string,
  restaurantButtonColorProp: PropTypes.string,
};
