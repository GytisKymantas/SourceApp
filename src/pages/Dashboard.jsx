import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { MainLayout } from "components/layouts/MainLayout/MainLayout";
import { ReservationsSection } from "components/molecules/ReservationsSection/ReservationsSection";
import { NewsFeedSection } from "components/organisms/NewsFeedSection/NewsFeedSection";
import { GreetingSection } from "components/molecules/GreetingSection/GreetingSection";
import { EatOutSection } from "components/organisms/EatOutSection/EatOutSection";

export const Dashboard = ({ data, restaurantsInfo }) => {
  const userData = data?.userData[0];
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
      <GreetingSection name={firstName} />
      <ReservationsSection reservationData={reservationData} />
      {restaurantsInfo && <EatOutSection data={restaurantsInfo} />}
      {storiesData && (
        <NewsFeedSection data={storiesData} userData={userData} />
      )}
    </MainLayout>
  );
};

Dashboard.propTypes = {
  data: PropTypes.object,
  restaurantsInfo: PropTypes.object,
};
