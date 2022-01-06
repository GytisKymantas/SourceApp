import { MainLayout } from "components/layouts/MainLayout/MainLayout";
import { FoodCategoriesSection } from "components/molecules/FoodCategoriesSection/FoodCategoriesSection";
import React, { useState, useEffect } from "react";

export const EatOut = () => {
  const [restaurantsData, setRestaurantsData] = useState();
  useEffect(() => {
    fetch(
      "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/restaurants.json"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setRestaurantsData(result);
        },

        (error) => {
          // handle error here
        }
      );
  }, []);

  return (
    <MainLayout>
      {restaurantsData && (
        <FoodCategoriesSection restaurantsData={restaurantsData} />
      )}
    </MainLayout>
  );
};
