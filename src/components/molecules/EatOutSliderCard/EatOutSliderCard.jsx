import React from "react";
import SliderBulletPoint from "../../../assets/SliderBulletPoint.svg";
import SliderBulletPointSelected from "../../../assets/SliderBulletPointSelected.svg";
import { Button } from "components/atoms/Button/Button";
import PlaceholderNav from "../../../assets/PlaceholderNav.svg";
import PropTypes from "prop-types";
import TextTruncate from "react-text-truncate";

import "./eat-out-slider.scss";

const array = [1, 2, 3, 4, 5];

const EatOutSliderCard = ({
  restaurantNameProp,
  restaurantSloganProp,
  restaurantImageProp,
  restaurantDescriptionProp,
  index,
  handleCardRight,
  handleCardLeft,
}) => (
  <div className="slider__container">
    <button onClick={handleCardLeft}> - </button>
    <button onClick={handleCardRight}> + </button>
    <div
      className="slider__image-wrapper"
      style={{
        background: `linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%),url(${restaurantImageProp})`,
      }}
    ></div>
    <div className="slider-text__wrapper">
      <div className="top-navigation">
        <div className="bullets">
          {array.map((object, i) => (
            <img
              key={object}
              src={index === i ? SliderBulletPointSelected : SliderBulletPoint}
              alt={index === i ? "selected point" : "bullet point"}
            />
          ))}
        </div>
        <div className="placeholder-nav">
          <img src={PlaceholderNav} alt="placeholder" />
        </div>
      </div>
      <span className="text-slogan">{restaurantSloganProp}</span>
      <h2>{restaurantNameProp}</h2>
      <p title={restaurantDescriptionProp}>
        <TextTruncate
          line={2}
          element="span"
          truncateText="…"
          text={restaurantDescriptionProp}
        />
      </p>
      <div className="btn-container">
        <Button label={"LEARN MORE"} isLarge redColor />
      </div>
    </div>
  </div>
);

EatOutSliderCard.propTypes = {
  restaurantNameProp: PropTypes.string,
  restaurantDescriptionProp: PropTypes.string,
  restaurantImageProp: PropTypes.string,
  restaurantSloganProp: PropTypes.string,
  index: PropTypes.number,
  handleCardRight: PropTypes.func,
  handleCardLeft: PropTypes.func,
};

export default EatOutSliderCard;
