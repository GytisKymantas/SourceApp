import { HelloWidget } from "components/atoms/HelloWidget/HelloWidget";
import { MainLayout } from "components/layouts/MainLayout/MainLayout";
import { ReservationsSection } from "components/molecules/ReservationsSection/ReservationsSection";
import React from "react";
import { useState, useEffect } from "react";
import { NewsFeedSection } from "components/organisms/NewsFeedSection/NewsFeedSection";
import { ViewEatOutCard } from "components/molecules/ViewEatOutCard/ViewEatOutCard";

export const Dashboard = (data) => {
  const userData = data.data?.userData[0];
  const firstName = userData?.userName.split(" ")[0];
  const reservationData = userData?.reservations;
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
      <HelloWidget name={firstName} />
      <ReservationsSection reservationData={reservationData} />
      {storiesData && <NewsFeedSection data={storiesData} />}
      <ViewEatOutCard />
    </MainLayout>
  );
};
