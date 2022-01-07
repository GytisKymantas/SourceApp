import React from "react";
import PropTypes from "prop-types";
import { EventCard } from "components/molecules/EventCard/EventCard.jsx";
import { NewsFeedCard } from "../../molecules/NewsFeedCard/NewsFeedCard.jsx";

export const StoriesSection = ({ storiesData, userData }) => {
  const stories = storiesData?.stories;
  const birthdays = stories?.filter((story) => story.type === "birthday");
  const postNews = stories?.filter(
    (x) => x.type === "post" || ("video" && x.type !== "birthday")
  );
  const userImage = userData?.userImage;

  return (
    <div className="section">
      {birthdays && (
        <EventCard storiesData={birthdays[0]} userData={userData} />
      )}
      <NewsFeedCard postData={postNews} currentUserImage={userImage} />
    </div>
  );
};

StoriesSection.propTypes = {
  storiesData: PropTypes.object,
  userData: PropTypes.object,
};
