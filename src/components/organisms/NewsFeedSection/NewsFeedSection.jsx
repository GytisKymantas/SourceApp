import React from "react";
import PropTypes from "prop-types";
import "./news-feed-section.scss";
import { EventCard } from "components/molecules/EventCard/EventCard";

export const NewsFeedSection = ({ data }) => {
  const storiesData = data?.stories;
  const Birthdays = storiesData?.filter((x) => x.type === "birthday");

  return (
    <div>
      <h2 className="news-section__header">News and stories</h2>
      <div className="news-section">
        <div className="news-section__container-side">item</div>
        <div className="news-section__container-middle">item</div>
        <div className="news-section__container-side">item</div>
      </div>
      <div className="section">
        <EventCard data={Birthdays} />
      </div>
    </div>
  );
};

NewsFeedSection.propTypes = {
  data: PropTypes.object,
};
