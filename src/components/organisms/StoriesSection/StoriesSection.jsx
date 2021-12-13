import React from "react";
import PropTypes from "prop-types";
import { EventCard } from "components/molecules/EventCard/EventCard.jsx";
export const StoriesSection = ({ data }) => {
  const storiesData = data?.stories;
  const Birthdays = storiesData?.filter((x) => x.type === "birthday");

  return (
    <div className="section">
      {Birthdays && <EventCard data={Birthdays[0]} />}
    </div>
  );
};

StoriesSection.propTypes = {
  data: PropTypes.object,
};
