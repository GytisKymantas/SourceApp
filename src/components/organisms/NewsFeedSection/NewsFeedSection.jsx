import React from "react";
import PropTypes from "prop-types";
import "./news-feed-section.scss";
import { EventCard } from "components/molecules/EventCard/EventCard";

export const NewsFeedSection = ({ data }) => {
  const storiesData = data?.stories;
  const Birthdays = storiesData?.filter((x) => x.type === "birthday");

  return (
    <div className="news-section-container">
      <h2 className="news-section__header">News and stories</h2>
      <div className="news-section">
        <div className="news-section__column">
          <div className="news-section__column__event-card">
            <EventCard data={Birthdays} />
          </div>
          <div className="news-section__column__news-post">
            <b>Vitoldo kortelė</b>
          </div>
        </div>
        <div className="news-section__column">
          <div className="news-section__column__news-post">
            <b>Vitoldo kortelė</b>
          </div>
          <div className="news-section__column__event-card">
            <EventCard data={Birthdays} />
          </div>
        </div>
        <div className="news-section__column">
          <div className="news-section__column__event-card">
            <EventCard data={Birthdays} />
          </div>
          <div className="news-section__column__news-post">
            <b>Vitoldo kortelė</b>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsFeedSection.propTypes = {
  data: PropTypes.object,
};
