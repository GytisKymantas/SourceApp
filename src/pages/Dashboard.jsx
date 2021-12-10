import { MainLayout } from "components/layouts/MainLayout/MainLayout";
import React from "react";
import { useState, useEffect } from "react";
import { StoriesSection } from "components/organisms/StoriesSection/StoriesSection";
import { GreetingSection } from "components/molecules/GreetingSection/GreetingSection";
import { ViewEatOutCard } from "components/molecules/ViewEatOutCard/ViewEatOutCard";

export const Dashboard = (data) => {
  const userData = data.data?.userData[0];
  const firstName = userData?.userName.split(" ")[0];
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
      {storiesData && <StoriesSection data={storiesData} />}
      <ViewEatOutCard />
    </MainLayout>
  );
};
