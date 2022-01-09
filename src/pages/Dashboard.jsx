import { MainLayout } from "components/layouts/MainLayout/MainLayout";
import { ReservationsSection } from "components/molecules/ReservationsSection/ReservationsSection";
import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { StoriesSection } from "components/organisms/StoriesSection/StoriesSection";
import { GreetingSection } from "components/molecules/GreetingSection/GreetingSection";
import { RestaurantCard } from "components/molecules/RestaurantCard/RestaurantCard";
import { ViewEatOutCard } from "components/molecules/ViewEatOutCard/ViewEatOutCard";

export const Dashboard = ({ data, restaurantsInfo }) => {
  const userData = data?.userData[0];
  const firstName = userData?.userName.split(" ")[0];
  const reservationData = userData?.reservations;
  const restaurantData = restaurantsInfo;
  const restaurantCardData = restaurantData?.restaurants[0];
  const [storiesData, setStoriesData] = useState();

  useEffect(() => {
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
      <GreetingSection name={firstName} />
      <ReservationsSection reservationData={reservationData} />
      {restaurantCardData && (
        <RestaurantCard
          displayFullCard
          numberOfCheckIns={restaurantCardData.checkIns}
          restaurantName={restaurantCardData.name}
          restaurantWebsite={restaurantCardData.website}
          restaurantAddress={restaurantCardData.location.address}
          restaurantOpeningHours={restaurantCardData.openingHours[0].hours}
          restaurantDescription={restaurantCardData.description}
          restaurantCategories={restaurantCardData.categories}
          restaurantImage={restaurantCardData.image}
          restaurantAverageRating={restaurantCardData.reviews.map(
            (review) => review.rating
          )}
        />
      )}
      <ViewEatOutCard />
      {storiesData && <StoriesSection data={storiesData} userData={userData} />}
    </MainLayout>
  );
};

Dashboard.propTypes = {
  data: PropTypes.object,
  restaurantsInfo: PropTypes.object,
};
