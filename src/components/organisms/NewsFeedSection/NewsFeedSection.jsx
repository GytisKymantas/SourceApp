import React from "react";
import PropTypes from "prop-types";
import "./news-feed-section.scss";
import { EventCard } from "components/molecules/EventCard/EventCard";
import { NewsFeedCard } from "../../molecules/NewsFeedCard/NewsFeedCard.jsx";

export const NewsFeedSection = ({ data, userData }) => {
  const storiesData = data?.stories;

  return (
    <div className="news-section-container">
      <h2 className="news-section__header">News and stories</h2>
      <div className="news-section">
        {storiesData.map((card) =>
          card.type === "birthday" ? (
            <div className="news-section__event-card" key={card.id}>
              <EventCard storiesData={card} userData={userData} />
            </div>
          ) : (
            <div className="news-section__post-card" key={card.id}>
              <NewsFeedCard data={card} userData={userData} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

NewsFeedSection.propTypes = {
  data: PropTypes.object,
  userData: PropTypes.object,
};
