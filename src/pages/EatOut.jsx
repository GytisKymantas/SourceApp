import { MainLayout } from "components/layouts/MainLayout/MainLayout";
import React from "react";
import { useState, useEffect } from "react";
import { EatOutSliderCard } from "components/atoms/EatOutSliderCard/EatOutSliderCard";

export const EatOut = () => {
  const [restaurantData, setRestaurantData] = useState();
  const restaurantSliderCard = restaurantData?.restaurants;

  useEffect(() => {
    fetch(
      "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/restaurants.json"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setRestaurantData(result);
        },

        (error) => {
          // handle error here
        }
      );
  }, []);

  return (
    <MainLayout>
      <h1>EatOut</h1>
      {restaurantData && (
        <EatOutSliderCard
          restaurantSloganProp={restaurantSliderCard[0].slogan}
          restaurantImageProp={restaurantSliderCard[0].image}
          restaurantDescriptionProp={restaurantSliderCard[0].description}
          restaurantNameProp={restaurantSliderCard[0].name}
          restaurantButtonColorProp={"red"}
        />
      )}
    </MainLayout>
  );
};
