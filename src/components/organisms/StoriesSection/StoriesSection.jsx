import React from "react";
import PropTypes from "prop-types";
import { EventCard } from "components/molecules/EventCard/EventCard.jsx";
import { NewsFeedCard } from "../../molecules/NewsFeedCard/NewsFeedCard.jsx";
export const StoriesSection = ({ storiesData, userData }) => {
  const stories = storiesData?.stories;
  const birthdays = stories?.filter((story) => story.type === "birthday");
  const postNews = stories?.filter(
    (postCard) =>
      postCard.type === "post" || ("video" && postCard.type !== "birthday")
  );
  return (
    <div className="section">
      {stories && userData && (
        <>
          <EventCard storiesData={birthdays[0]} userData={userData} />
          <NewsFeedCard data={postNews[7]} userData={userData} />
        </>
      )}
    </div>
  );
};

StoriesSection.propTypes = {
  storiesData: PropTypes.object,
  userData: PropTypes.object,
};
