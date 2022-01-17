import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as SliderArrowLeft } from "../../../assets/sliderArrowLeft.svg";
import { ReactComponent as SliderArrowRight } from "../../../assets/sliderArrowRight.svg";
import "./sliderArrows.scss";

<<<<<<< HEAD
const SliderArrows = (props) => {
  const onClickSlider = props.props;

  return (
    <div className="container__slider--arrows">
      <button className="btn btn__left" onClick={() => onClickSlider("left")}>
        <SliderArrowLeft className="arrow" />
      </button>
      <button className="btn btn__right" onClick={() => onClickSlider("right")}>
        <SliderArrowRight className="arrow" />
      </button>
    </div>
  );
};
=======
export const SliderArrows = ({ onClickSlider }) => (
  <div className="container__slider--arrows">
    <button className="btn btn__left" onClick={() => onClickSlider("left")}>
      <SliderArrowLeft className="arrow" />
    </button>
    <button className="btn btn__right" onClick={() => onClickSlider("right")}>
      <SliderArrowRight className="arrow" />
    </button>
  </div>
);
>>>>>>> dev

SliderArrows.propTypes = {
  props: PropTypes.func,
};

export default SliderArrows;
