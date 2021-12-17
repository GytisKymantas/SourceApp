import React from "react";
import PropTypes from "prop-types";
import { EventCard } from "components/molecules/EventCard/EventCard.jsx";

export const StoriesSection = ({ data }) => {
  const storiesData = data?.stories;
  const birthdays = storiesData?.filter((story) => story.type === "birthday");

  return (
    <div className="section">
      {birthdays && <EventCard data={birthdays[0]} />}
    </div>
  );
};

StoriesSection.propTypes = {
  data: PropTypes.object,
};
