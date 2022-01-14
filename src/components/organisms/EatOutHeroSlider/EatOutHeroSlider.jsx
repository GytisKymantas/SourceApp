import React, { useState, Fragment } from "react";
import EatOutSliderCard from "components/molecules/EatOutSliderCard/EatOutSliderCard/";
import PropTypes from "prop-types";

const EatOutHeroSlider = (data) => {
  const restaurantsData = data.data;

  const [index, setIndex] = useState(0);

  const handleCard = (e) => {
    e === "right"
      ? setIndex(index === 4 ? 4 : index + 1)
      : setIndex(index === 0 ? 0 : index - 1);
  };
  const handleImageClick = () => {
    setIndex(index === 4 ? index - 4 : index + 1);
  };

  return (
    <Fragment>
      {restaurantsData && (
        <EatOutSliderCard
          restaurantSloganProp={restaurantsData[index].slogan}
          restaurantImageProp={restaurantsData[index].image}
          restaurantDescriptionProp={restaurantsData[index].description}
          restaurantNameProp={restaurantsData[index].name}
          index={index}
          handleCard={handleCard}
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
