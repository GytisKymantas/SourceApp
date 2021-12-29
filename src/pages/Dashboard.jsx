import { HelloWidget } from "components/atoms/HelloWidget/HelloWidget";
import { MainLayout } from "components/layouts/MainLayout/MainLayout";
import { ReservationsSection } from "components/molecules/ReservationsSection/ReservationsSection";
import React from "react";
import { useState, useEffect } from "react";
import { StoriesSection } from "components/organisms/StoriesSection/StoriesSection";
import EatOutSection from "components/organisms/EatOutSection/EatOutSection";

export const Dashboard = (data) => {
  const userData = data.data?.userData[0];
  const firstName = userData?.userName.split(" ")[0];
  const reservationData = userData?.reservations;
  // const restaurantList = restaurantData?.restaurants[0];
  const [storiesData, setStoriesData] = useState();
  const [restaurantData, setRestaurantData] = useState();

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
    fetch(
      "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/stories.json"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setStoriesData(result);
        },

        (error) => {
          // handle error here
        }
      );
  }, []);

  return (
    <MainLayout>
      <HelloWidget name={firstName} />
      <ReservationsSection reservationData={reservationData} />
      {restaurantData && <EatOutSection data={restaurantData} />}
      {storiesData && <StoriesSection data={storiesData} />}
    </MainLayout>
  );
};
