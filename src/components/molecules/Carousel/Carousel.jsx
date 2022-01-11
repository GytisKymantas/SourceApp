import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./carousel.scss";

export const Carousel = ({ children, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);
  const [touchPosition, setTouchPosition] = useState(null);

  const [width, setWidth] = useState(window.innerWidth);

  // Sets the width prop of the screen
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const nextCard = () => {
    if (width <= 768 && currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    } else if (width <= 1155 && currentIndex < length - 2) {
      setCurrentIndex((prevState) => prevState + 1);
    } else if (currentIndex < length - 3) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

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

  return (
    <div className="carousel">
      <div className="carousel__title-container">
        <div className="carousel__title-container--title">{title}</div>
        {/* Will be replaced be other arrows */}
        <div className="carousel__title-container--slider-arrows">
          <button onClick={prevCard} className="left-arrow">
            &lt;
          </button>
          <button onClick={nextCard} className="right-arrow">
            &gt;
          </button>
        </div>
      </div>
      <div className="carousel__wrapper">
        <div
          className="carousel__wrapper--content-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className={`carousel-content`}
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
