import { MainLayout } from "components/layouts/MainLayout/MainLayout";
import React from "react";
import { EatOutSliderCard } from "components/atoms/EatOutSliderCard/EatOutSliderCard";
import PropTypes from "prop-types";

export const EatOut = ({ data }) => {
  const restaurantsData = data?.restaurants;

  return (
    <MainLayout>
      <h1>EatOut</h1>
      {restaurantsData && (
        <EatOutSliderCard
          restaurantSloganProp={restaurantsData[0].slogan}
          restaurantImageProp={restaurantsData[0].image}
          restaurantDescriptionProp={restaurantsData[0].description}
          restaurantNameProp={restaurantsData[0].name}
        />
      )}
    </MainLayout>
  );
};

EatOut.propTypes = {
  data: PropTypes.object,
};
