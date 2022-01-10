import { MainLayout } from "components/layouts/MainLayout/MainLayout";
import React from "react";
import PropTypes from "prop-types";
import EatOutHeroSlider from "components/molecules/EatOutHeroSlider/EatOutHeroSlider";

export const EatOut = ({ data }) => {
  const restaurantsData = data?.restaurants;

  return (
    <MainLayout>
      <EatOutHeroSlider data={restaurantsData} />
      <h1>EatOut</h1>
    </MainLayout>
  );
};

EatOut.propTypes = {
  data: PropTypes.object,
};
