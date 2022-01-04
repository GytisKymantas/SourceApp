import { MainLayout } from "components/layouts/MainLayout/MainLayout";
import React from "react";
import { useState, useEffect } from "react";
import { EatOutSliderCard } from "components/atoms/EatOutSliderCard/EatOutSliderCard";

export const EatOut = () => {
  const [restaurantData, setRestaurantData] = useState();
  const restaurantSliderData = restaurantData?.restaurants?.[0];

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
      {restaurantSliderData && (
        <EatOutSliderCard
          restaurantSloganProp={restaurantSliderData.slogan}
          restaurantImageProp={restaurantSliderData.image}
          restaurantDescriptionProp={restaurantSliderData.description}
          restaurantNameProp={restaurantSliderData.name}
          restaurantButtonColorProp={"red"}
        />
      )}
    </MainLayout>
  );
};
