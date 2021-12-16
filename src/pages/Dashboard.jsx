import { HelloWidget } from "components/atoms/HelloWidget/HelloWidget";
import { MainLayout } from "components/layouts/MainLayout/MainLayout";
import { ReservationsSection } from "components/molecules/ReservationsSection/ReservationsSection";
import React from "react";
import { useState, useEffect } from "react";
import { StoriesSection } from "components/organisms/StoriesSection/StoriesSection";
import { RestaurantCard } from "components/atoms/RestaurantCard/RestaurantCard";
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
      {storiesData && <StoriesSection data={storiesData} />}
      {restaurantData && (
        <RestaurantCard
          displayFullCard={true}
          numberOfCheckIns={restaurantData?.restaurants[0].checkIns}
          restaurantName={restaurantData?.restaurants[0].name}
          restaurantWebsite={restaurantData?.restaurants[0].website.slice(7)}
          restaurantAddress={restaurantData?.restaurants[0].location.address}
          restaurantOpeningHours={
            restaurantData?.restaurants[0].openingHours[0].hours
          }
          restaurantDescription={restaurantData?.restaurants[0].description}
          restaurantCategories={restaurantData?.restaurants[0].categories}
          restaurantImage={restaurantData?.restaurants[0].image}
        />
      )}
      <EatOutSection data={restaurantData} />
    </MainLayout>
  );
};
