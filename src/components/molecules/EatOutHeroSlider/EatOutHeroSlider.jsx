import React, { useState } from "react";
import EatOutSliderCard from "components/atoms/EatOutSliderCard/EatOutSliderCard/";
import PropTypes from "prop-types";

export const EatOutHeroSlider = (data) => {
  const restaurantsData = data.data;

  const [index, setIndex] = useState(0);

  const handleCardUp = () => {
    setIndex(index === 4 ? 4 : index + 1);
  };
  const handleCardDel = () => {
    setIndex(index === 0 ? 0 : index - 1);
  };

  return (
    <div>
      <button onClick={handleCardUp}>Forwards</button>
      <button onClick={handleCardDel}>Backwards</button>
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
