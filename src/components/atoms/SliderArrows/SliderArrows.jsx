import React from "react";
// import PropTypes from 'prop-types'
import { ReactComponent as SliderArrowLeft } from "../../../assets/sliderArrowLeft.svg";
import { ReactComponent as SliderArrowRight } from "../../../assets/sliderArrowRight.svg";
import "./sliderArrows.scss";

export const SliderArrows = () => {
  return (
    <div className="container__slider--arrows">
      <button className="btn__left">
        <SliderArrowLeft className="arrow__left" />
      </button>
      <button className="btn__right">
        <SliderArrowRight className="arrow__right" />
      </button>
    </div>
  );
};

// SliderArrows.propTypes = {

// }
