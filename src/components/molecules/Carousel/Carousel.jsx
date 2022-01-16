import React, { useEffect, useState } from "react";
import { SliderArrows } from "components/atoms/SliderArrows/SliderArrows";
import PropTypes from "prop-types";

import "./carousel.scss";

export const Carousel = ({ children, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);

  // Sets the width prop of the screen
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const nextCard = () => {
    if (width <= 768 && currentIndex < 5) {
      setCurrentIndex((prevState) => prevState + 1);
    } else if (width <= 1155 && currentIndex < 4) {
      setCurrentIndex((prevState) => prevState + 1);
    } else if (currentIndex < 3) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  // Slides cards automatically
  useEffect(() => {
    let timeout;

    if (width <= 768) {
      timeout = setTimeout(
        () =>
          setCurrentIndex(
            currentIndex === 5 ? currentIndex - 5 : currentIndex + 1
          ),
        5000
      );
    } else if (width <= 1155) {
      timeout = setTimeout(
        () =>
          setCurrentIndex(
            currentIndex === 4 ? currentIndex - 4 : currentIndex + 1
          ),
        5000
      );
    } else {
      timeout = setTimeout(
        () =>
          setCurrentIndex(
            currentIndex === 3 ? currentIndex - 3 : currentIndex + 1
          ),
        5000
      );
    }
    return () => clearTimeout(timeout);
  }, [currentIndex, width]);

  // Carousel works not only with arrows click, but with touch slide on mobile
  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      nextCard();
    }

    if (diff < -5) {
      prevCard();
    }

    setTouchPosition(null);
  };

  const handleClickSlider = (pos) => {
    if (pos === "left") {
      prevCard();
    } else {
      nextCard();
    }
  };

  return (
    <div className="carousel">
      <div className="carousel__title-container">
        <div className="carousel__title-container--title">{title}</div>
        <SliderArrows onClickSlider={handleClickSlider} />
      </div>
      <div className="carousel__wrapper">
        <div
          className="carousel__wrapper--content-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className={"carousel-content"}
            style={{
              transform: `translateX(-${currentIndex * (100 / 6)}%)`,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
