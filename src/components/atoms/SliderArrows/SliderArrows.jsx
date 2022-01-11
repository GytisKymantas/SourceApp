import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as SliderArrowLeft } from "../../../assets/sliderArrowLeft.svg";
import { ReactComponent as SliderArrowRight } from "../../../assets/sliderArrowRight.svg";
import "./sliderArrows.scss";

export const SliderArrows = (props) => {
  const { onClickSlider } = props;

  const handleClick = (onClickSlider) => {
    onClickSlider = props;
    // console.log(onClickSlider);
  };

  return (
    <div className="container__slider--arrows">
      <button className="btn__left">
        <SliderArrowLeft
          className="arrow__left"
          onClick={() => {
            handleClick(onClickSlider + " Arrow Left");
          }}
        />
      </button>
      <button className="btn__right">
        <SliderArrowRight
          className="arrow__right"
          onClick={() => {
            handleClick(onClickSlider + " Arrow Right");
          }}
        />
      </button>
    </div>
  );
};

SliderArrows.propTypes = {
  onClickSlider: PropTypes.func,
};
