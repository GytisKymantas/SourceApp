import React from "react";
import SliderBulletPoint from "../../../assets/SliderBulletPoint.svg";
import SliderBulletPointSelected from "../../../assets/SliderBulletPointSelected.svg";
import { Button } from "components/atoms/Button/Button";
import PropTypes from "prop-types";
import TextTruncate from "react-text-truncate";
import { SliderArrows } from "components/atoms/SliderArrows/SliderArrows";

import "./eat-out-slider-card.scss";

const BulletArray = [1, 2, 3, 4, 5];

const EatOutSliderCard = ({
  restaurantNameProp,
  restaurantSloganProp,
  restaurantImageProp,
  restaurantDescriptionProp,
  index,
  handleCardSwitch,
  handleImageClick,
}) => (
  <div className="slider__container">
    <div className="slider__content">
      <div
        className="slider__image-wrapper hidden-one"
        style={{
          background: `linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%),url(${restaurantImageProp})`,
        }}
      ></div>
      <div
        className="slider__image-wrapper hidden-two"
        onClick={handleImageClick}
        onKeyPress={handleImageClick}
        role={"switch"}
        tabIndex={-1}
        aria-checked="false"
        style={{
          background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%),url(${restaurantImageProp})`,
        }}
      ></div>
      <div className="slider-text__wrapper">
        <div className="top-navigation">
          <div className="bullets">
            {BulletArray.map((bulletImg, i) => (
              <img
                key={bulletImg}
                src={
                  index === i ? SliderBulletPointSelected : SliderBulletPoint
                }
                alt={index === i ? "selected point" : "bullet point"}
              />
            ))}
          </div>
          <div className="arrow-nav">
            <SliderArrows
              onClickSlider={handleCardSwitch}
              disabledLeft={index === 0 ? true : false}
              disabledRight={index === 4 ? true : false}
            />
          </div>
        </div>
        <span className="text-slogan">{restaurantSloganProp}</span>
        <h2>{restaurantNameProp}</h2>
        <p
          className="restaurant__description"
          title={restaurantDescriptionProp}
        >
          <TextTruncate
            line={4}
            element="span"
            truncateText="???"
            text={restaurantDescriptionProp}
          />
        </p>
        <div className="btn-container">
          <Button label={"LEARN MORE"} isLarge redColor />
        </div>
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
  handleCardSwitch: PropTypes.func,
  handleImageClick: PropTypes.func,
};

export default EatOutSliderCard;
