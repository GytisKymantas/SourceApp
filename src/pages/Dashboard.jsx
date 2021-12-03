import { HelloWidget } from "components/atoms/HelloWidget/HelloWidget";
import { MainLayout } from "components/layouts/MainLayout/MainLayout";
import React from "react";
import { useState, useEffect } from "react";
import { StoriesSection } from "components/organisms/StoriesSection/StoriesSection";
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
  const Birthdays = storiesData?.stories.filter((x) => x.type === "birthday");
  const Posts = storiesData?.stories.filter((x) => x.type === "post");
  const Videos = storiesData?.stories.filter((x) => x.type === "video");

  return (
    <MainLayout>
      <HelloWidget name={firstName} />
      <StoriesSection birthdays={Birthdays} posts={Posts} videos={Videos} />
    </MainLayout>
  );
};
