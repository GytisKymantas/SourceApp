import React from "react";
import PropTypes from "prop-types";
import "./news-feed-section.scss";
import { EventCard } from "components/molecules/EventCard/EventCard";
import { NewsFeedCard } from "../../molecules/NewsFeedCard/NewsFeedCard.jsx";

export const NewsFeedSection = ({ data, userData }) => {
  const storiesData = data?.stories;
  const storiesAmount = storiesData?.length;
  const postNews = storiesData?.filter(
    (postCard) =>
      postCard.type === "post" || ("video" && postCard.type !== "birthday")
  );
  const storiesPerColumn = Math.ceil(storiesAmount / 3);
  const columnData = [
    storiesData?.slice(0, storiesPerColumn),
    storiesData?.slice(storiesPerColumn, storiesPerColumn * 2),
    storiesData?.slice(storiesPerColumn * 2),
  ];
  // userData ? console.log(userData) : console.log("");
  // storiesData ? console.log(storiesData) : console.log("");

  return (
    <div className="news-section-container">
      <h2 className="news-section__header">News and stories</h2>
      <div className="news-section">
        {columnData?.map((col, index) => (
          <div className="news-section__column" key={index}>
            {col.map((card) =>
              card.type === "birthday" ? (
                <div className="news-section__column__event-card" key={card.id}>
                  {<EventCard data={card} />}
                </div>
              ) : (
                <div className="news-section__column__news-post" key={card.id}>
                  <NewsFeedCard data={postNews[7]} userData={userData} />
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
