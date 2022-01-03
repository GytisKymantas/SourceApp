import React from "react";
import SliderBulletPoint from "../../../assets/SliderBulletPoint.svg";
import SliderBulletPointSelected from "../../../assets/SliderBulletPointSelected.svg";
import { Button } from "components/atoms/Button/Button";
import PlaceholderNav from "../../../assets/PlaceholderNav.svg";
import PropTypes from "prop-types";

import "./eat-out-slider.scss";

export const EatOutSliderCard = (
  restaurantNameProp,
  restaurantSloganProp,
  restaurantImageProp,
  restaurantDescriptionProp,
  restaurantBtnColourProp
) => {
  const defaultSloganName = ["Feel the taste of Italy"];
  const defaultRestaurantName = ["Casa Della Pasta"];
  const defaultRestaurantDescription = [
    "Casa della Pasta was the first restaurant in Kaunas cooking pizza in a traditional wood-oven a restaurant capable of satisfying more than 3000 customers...",
  ];
  console.log(restaurantNameProp);
  console.log(restaurantNameProp.restaurantDescriptionProp);

  // console.log(restaurantSloganProp);

  // console.log(restaurantDescriptionProp);

  return (
    <div className="slider__container">
      <div
        className="slider__image-wrapper"
        style={{
          background: `url(${restaurantNameProp.restaurantImageProp})`,
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
        <span className="text-slogan">
          {restaurantNameProp.restaurantSloganProp}
        </span>
        <h2>{restaurantNameProp.restaurantNameProp}</h2>
        <p>{restaurantNameProp.restaurantDescriptionProp}</p>
        <div className="btn-container">
          <Button label={"LEARN MORE"} isLarge />
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
  restaurantButtonColour: PropTypes.string,
};
