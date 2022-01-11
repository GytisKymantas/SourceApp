import React, { useState } from "react";
import EatOutSliderCard from "components/molecules/EatOutSliderCard/EatOutSliderCard/";
import PropTypes from "prop-types";

const EatOutHeroSlider = (data) => {
  const restaurantsData = data.data;

  const [index, setIndex] = useState(0);

  const handleCardRight = () => {
    setIndex(index === 4 ? 4 : index + 1);
  };
  const handleCardLeft = () => {
    setIndex(index === 0 ? 0 : index - 1);
  };

  return (
    <div>
      {restaurantsData && (
        <EatOutSliderCard
          restaurantSloganProp={restaurantsData[index].slogan}
          restaurantImageProp={restaurantsData[index].image}
          restaurantDescriptionProp={restaurantsData[index].description}
          restaurantNameProp={restaurantsData[index].name}
          index={index}
          handleCardLeft={handleCardLeft}
          handleCardRight={handleCardRight}
        />
      )}
    </div>
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
