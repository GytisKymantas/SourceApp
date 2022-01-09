import React from "react";
import PropTypes from "prop-types";
import { EventCard } from "components/molecules/EventCard/EventCard.jsx";
import { NewsFeedCard } from "../../molecules/NewsFeedCard/NewsFeedCard.jsx";
export const StoriesSection = ({ data, userData }) => {
  const storiesData = data?.stories;
  const birthdays = storiesData?.filter((story) => story.type === "birthday");
  const postNews = storiesData?.filter(
    (postCard) =>
      postCard.type === "post" || ("video" && postCard.type !== "birthday")
  );

  return (
    <div className="section">
      {birthdays && <EventCard data={birthdays[0]} />}
      <NewsFeedCard data={postNews[7]} userData={userData} />
    </div>
  );
};

StoriesSection.propTypes = {
  data: PropTypes.object,
  userData: PropTypes.object,
};
