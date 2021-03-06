import React, { useState, Fragment, useEffect } from "react";
import EatOutSliderCard from "components/molecules/EatOutSliderCard/EatOutSliderCard/";
import PropTypes from "prop-types";

const EatOutHeroSlider = (data) => {
  const restaurantsData = data.data;

  const [index, setIndex] = useState(0);
  const handleImageClick = () => {
    setIndex(index === 4 ? index - 4 : index + 1);
  };

  const handleCardSwitch = (e) => {
    e === "right"
      ? setIndex(index === 4 ? 4 : index + 1)
      : setIndex(index === 0 ? 0 : index - 1);
  };

  useEffect(() => {
    const timeout = setTimeout(
      () => setIndex(index === 4 ? index - 4 : index + 1),
      5000
    );

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <Fragment>
      {restaurantsData && (
        <EatOutSliderCard
          restaurantSloganProp={restaurantsData[index].slogan}
          restaurantImageProp={restaurantsData[index].image}
          restaurantDescriptionProp={restaurantsData[index].description}
          restaurantNameProp={restaurantsData[index].name}
          index={index}
          handleCardSwitch={handleCardSwitch}
          handleImageClick={handleImageClick}
        />
      )}
    </Fragment>
  );
};

EatOutHeroSlider.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      slogan: PropTypes.string,
      image: PropTypes.string,
      description: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

export default EatOutHeroSlider;
