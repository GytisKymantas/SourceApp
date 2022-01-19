import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as SliderArrowLeft } from "../../../assets/sliderArrowLeft.svg";
import { ReactComponent as SliderArrowRight } from "../../../assets/sliderArrowRight.svg";
import { ReactComponent as SliderArrowLeftWhite } from "../../../assets/sliderArrowLeftWhite.svg";
import { ReactComponent as SliderArrowRightWhite } from "../../../assets/sliderArrowRightWhite.svg";
import "./slider-arrows.scss";

export const SliderArrows = ({
  onClickSlider,
  disabledLeft,
  disabledRight,
}) => (
  <div className="container__slider--arrows">
    <button
      className={disabledLeft ? "btn btn__left btn__disabled" : "btn btn__left"}
      disabled={disabledLeft ? true : false}
      aria-label="left arrow"
      onClick={() => onClickSlider("left")}
    >
      {disabledLeft ? (
        <SliderArrowLeftWhite className="arrow" />
      ) : (
        <SliderArrowLeft className="arrow" />
      )}
    </button>
    <button
      className={
        disabledRight ? "btn btn__right btn__disabled" : "btn btn__right"
      }
      disabled={disabledRight ? true : false}
      aria-label="right arrow"
      onClick={() => onClickSlider("right")}
    >
      {disabledRight ? (
        <SliderArrowRightWhite className="arrow" />
      ) : (
        <SliderArrowRight className="arrow" />
      )}
    </button>
  </div>
);

SliderArrows.propTypes = {
  onClickSlider: PropTypes.func,
  disabledLeft: PropTypes.bool,
  disabledRight: PropTypes.bool,
};
