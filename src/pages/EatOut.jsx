import { MainLayout } from "components/layouts/MainLayout/MainLayout";
import React from "react";
import { EatOutHeroSlider } from "components/molecules/EatOutHeroSlider/EatOutHeroSlider";
import PropTypes from "prop-types";

export const EatOut = ({ data }) => {
  const restaurantsData = data?.restaurants;

  return (
    <MainLayout>
      <h1>EatOut</h1>
      <EatOutHeroSlider data={restaurantsData} />
    </MainLayout>
  );
};

EatOut.propTypes = {
  data: PropTypes.object,
};
