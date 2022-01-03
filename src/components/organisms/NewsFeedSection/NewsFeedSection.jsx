import React from "react";
import PropTypes from "prop-types";
import "./news-feed-section.scss";
import { EventCard } from "components/molecules/EventCard/EventCard";

export const NewsFeedSection = ({ data }) => {
  const storiesData = data?.stories;
  const birthdays = storiesData?.filter((x) => x.type === "birthday");
  const posts = storiesData?.filter((x) => x.type === "post");
  const videos = storiesData?.filter((x) => x.type === "video");

  return (
    <div className="news-section-container">
      <h2 className="news-section__header">News and stories</h2>
      <div className="news-section">
        {storiesData?.map((item) => {
          if (item.type === "birthday") {
            return <EventCard data={birthdays} />;
          }
          if (item.type === "post") {
            return (
              <div className="news-section__column__news-post">
                {posts?.type}
              </div>
            );
          }
          if (item.type === "video") {
            return (
              <div className="news-section__column__news-post">
                {videos?.type}
              </div>
            );
          }
          return null;
        })}
        <div className="news-section__column__event-card">
          <EventCard data={birthdays} />
          <div className="news-section__column__news-post"></div>
        </div>
      </div>
    </div>
  );
};

NewsFeedSection.propTypes = {
  data: PropTypes.object,
};
