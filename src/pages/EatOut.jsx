import { MainLayout } from "components/layouts/MainLayout/MainLayout";
import { FoodCategoriesSection } from "components/molecules/FoodCategoriesSection/FoodCategoriesSection";
import React from "react";
import PropTypes from "prop-types";
import { SliderArrows } from "components/atoms/SliderArrows/SliderArrows";

export const EatOut = ({ data }) => {
  const restaurantsData = data?.restaurants;

  // eslint-disable-next-line no-unused-vars
  const sortedByDate = []
    .concat(restaurantsData)
    .sort((a, b) => (a.createdDate > b.createdDate ? -1 : 1))
    .slice(0, 6);

  return (
    <MainLayout>
      {restaurantsData && (
        <FoodCategoriesSection restaurantsData={restaurantsData} />
      )}
      <SliderArrows></SliderArrows>
    </MainLayout>
  );
};

EatOut.propTypes = {
  data: PropTypes.object,
};
