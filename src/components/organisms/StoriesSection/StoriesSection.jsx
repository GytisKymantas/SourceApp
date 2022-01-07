import React from "react";
import PropTypes from "prop-types";
import { EventCard } from "components/molecules/EventCard/EventCard.jsx";

export const StoriesSection = ({ storiesData, userData }) => {
  const stories = storiesData?.stories;
  const birthdays = stories?.filter((story) => story.type === "birthday");

  return (
    <div className="section">
      {birthdays && (
        <EventCard storiesData={birthdays[0]} userData={userData} />
      )}
    </div>
  );
};

StoriesSection.propTypes = {
  storiesData: PropTypes.object,
  userData: PropTypes.object,
};
