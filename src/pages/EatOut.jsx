import { MainLayout } from "components/layouts/MainLayout/MainLayout";
import React from "react";
import PropTypes from "prop-types";
import EatOutHeroSlider from "components/organisms/EatOutHeroSlider/EatOutHeroSlider";

export const EatOut = ({ data }) => {
  const restaurantsData = data?.restaurants;

  // eslint-disable-next-line no-unused-vars
  const sortedByDate = []
    .concat(restaurantsData)
    .sort((a, b) => (a.createdDate > b.createdDate ? -1 : 1))
    .slice(0, 6);

  return (
    <MainLayout>
      <h1>Hungry? Find the best place!</h1>
      <EatOutHeroSlider data={restaurantsData} />
    </MainLayout>
  );
};

EatOut.propTypes = {
  data: PropTypes.object,
};
