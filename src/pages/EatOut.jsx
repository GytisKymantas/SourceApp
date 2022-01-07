import { MainLayout } from "components/layouts/MainLayout/MainLayout";
import React from "react";
import PropTypes from "prop-types";

export const EatOut = ({ data }) => {
  // const restaurantsData = data;

  return (
    <MainLayout>
      <h1>EatOut</h1>
    </MainLayout>
  );
};

EatOut.propTypes = {
  data: PropTypes.object,
};
