import React, { useState } from "react";
import EatOutSliderCard from "components/atoms/EatOutSliderCard/EatOutSliderCard/";
import PropTypes from "prop-types";

export const EatOutHeroSlider = (data) => {
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
      <button onClick={handleCardRight}>Forwards</button>
      <button onClick={handleCardLeft}>Backwards</button>
      {restaurantsData && (
        <EatOutSliderCard
          restaurantSloganProp={restaurantsData[index].slogan}
          restaurantImageProp={restaurantsData[index].image}
          restaurantDescriptionProp={restaurantsData[index].description}
          restaurantNameProp={restaurantsData[index].name}
          index={index}
        />
      )}
    </div>
  );
};

EatOutHeroSlider.propTypes = {
  data: PropTypes.array,
};
