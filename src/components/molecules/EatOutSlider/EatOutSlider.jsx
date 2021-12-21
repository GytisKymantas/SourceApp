import React from "react";
import CassaDellaPasta from "../../../assets/CassaDellaPasta.svg";
import SliderBulletPoint from "../../../assets/SliderBulletPoint.svg";
import SliderBulletPointSelected from "../../../assets/SliderBulletPointSelected.svg";
import { Button } from "components/atoms/Button/Button";

// import PropTypes from "prop-types";

import "./eat-out-slider.scss";

const EatOutSlider = () => {
  return (
    <div className="slider__container">
      <div className="slider__image-wrapper">
        <img src={CassaDellaPasta} className="slider-image" alt="salad bowl" />
      </div>
      <div className="slider-text__wrapper">
        <div className="top-navigation">
          <img src={SliderBulletPoint} alt="bullet point" />
          <img src={SliderBulletPoint} alt="bullet point" />
          <img src={SliderBulletPointSelected} alt="selected point" />
          <img src={SliderBulletPoint} alt="bullet point" />
          <img src={SliderBulletPoint} alt="bullet point" />
        </div>
        <span className="text-slogan">Feel the taste of italy</span>
        <h2>Casa Della Pasta</h2>
        <p>
          Casa della Pasta was the first restaurant in Kaunas cooking pizza in a
          traditional wood-oven; a restaurant capable of satisfying more than
          3000 customers...
        </p>
        <div className="btn-container">
          <Button label={"LEARN MORE"} isLarge className="LargeBtn" />
        </div>
      </div>
    </div>
  );
};

export default EatOutSlider;
