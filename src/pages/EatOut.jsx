import React from "react";
import PropTypes from "prop-types";
import { useNearestRestaurants } from "hooks/useNearestRestaurants";
import { SliderArrows } from "components/atoms/SliderArrows/SliderArrows";
import { MainLayout } from "components/layouts/MainLayout/MainLayout";
import { FoodCategoriesSection } from "components/molecules/FoodCategoriesSection/FoodCategoriesSection";

export const EatOut = ({ data }) => {
  const restaurantsData = data?.restaurants;
  // eslint-disable-next-line no-unused-vars
  const nearestRestaurants = useNearestRestaurants(restaurantsData); // Returns an array if data is fetched or null if not

  // eslint-disable-next-line no-unused-vars
  const sortedByDate = []
    .concat(restaurantsData)
    .sort((a, b) => (a.createdDate > b.createdDate ? -1 : 1))
    .slice(0, 6);
  return (
    <MainLayout>
      <h1>Hungry? Find the best place!</h1>
      {restaurantsData && (
        <FoodCategoriesSection restaurantsData={restaurantsData} />
      )}
      <SliderArrows />
    </MainLayout>
  );
};

EatOut.propTypes = {
  data: PropTypes.object,
};
