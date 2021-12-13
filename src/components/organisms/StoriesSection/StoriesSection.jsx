import React from "react";
import PropTypes from "prop-types";
import { EventCard } from "components/atoms/EventCard/EventCard.jsx";
export const StoriesSection = ({ data }) => {
  const storiesData = data?.stories;
  const Birthdays = storiesData?.filter((x) => x.type === "birthday");

  return (
    <div className="section">
      <EventCard data={Birthdays} />
    </div>
  );
};

StoriesSection.propTypes = {
  data: PropTypes.object,
};
