import { MainLayout } from "components/layouts/MainLayout/MainLayout";
import { NewPlacesSection } from "components/organisms/NewPlacesSection/NewPlacesSection";
import React, { useEffect, useState } from "react";

export const EatOut = (data) => {
  const [restaurantData, setRestaurantData] = useState();

  // const restaurantCardData = restaurantData?.restaurants[0];

  // const ratingArray = restaurantCardData?.reviews.map(
  //   (review) => review.rating
  // );
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
  /* eslint-disable no-alert, no-console */
  console.log(restaurantData);
  return (
    <MainLayout>
      <h1>EatOut</h1>
      {restaurantData && <NewPlacesSection data={restaurantData} />}
    </MainLayout>
  );
};
