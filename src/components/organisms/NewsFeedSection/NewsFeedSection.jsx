import React from "react";
import PropTypes from "prop-types";
import "./news-feed-section.scss";
import { EventCard } from "components/molecules/EventCard/EventCard";
import { NewsFeedCard } from "../../molecules/NewsFeedCard/NewsFeedCard.jsx";

export const NewsFeedSection = ({ data, userData }) => {
  const storiesData = data?.stories;
  const storiesAmount = storiesData?.length;
  const storiesPerColumn = Math.ceil(storiesAmount / 3);
  const columnData = [
    storiesData?.slice(0, storiesPerColumn),
    storiesData?.slice(storiesPerColumn, storiesPerColumn * 2),
    storiesData?.slice(storiesPerColumn * 2),
  ];

  return (
    <div className="news-section-container">
      <h2 className="news-section__header">News and stories</h2>
      <div className="news-section">
        {columnData?.map((col, index) => (
          <div className="news-section__column" key={index}>
            {col.map((card) =>
              card.type === "birthday" ? (
                <div className="news-section__column__event-card" key={card.id}>
                  <EventCard storiesData={card} userData={userData} />
                </div>
              ) : (
                <div className="news-section__column__news-post" key={card.id}>
                  <NewsFeedCard data={card} userData={userData} />
                </div>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

NewsFeedSection.propTypes = {
  data: PropTypes.object,
  userData: PropTypes.object,
};
