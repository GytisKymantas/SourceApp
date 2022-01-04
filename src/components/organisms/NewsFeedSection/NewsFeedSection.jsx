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
        <div className="news-section__column">
          {storiesData?.slice(0, 6).map((item, index) => {
            if (item.type === "birthday") {
              return (
                <div className="news-section__column__event-card">
                  {birthdays[index] && <EventCard data={birthdays[index]} />}
                </div>
              );
            }
            if (item.type === "post") {
              return (
                <div className="news-section__column__news-post">
                  {posts[index]?.userName}
                </div>
              );
            }
            if (item.type === "video") {
              return (
                <div className="news-section__column__news-post">
                  {videos[index]?.userName}
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="news-section__column">
          {storiesData?.slice(6, 11).map((item, index) => {
            if (item.type === "birthday") {
              return (
                <div className="news-section__column__event-card">
                  {birthdays[index] && <EventCard data={birthdays[index]} />}
                </div>
              );
            }
            if (item.type === "post") {
              return (
                <div className="news-section__column__news-post">
                  {posts[index]?.userName}
                </div>
              );
            }
            if (item.type === "video") {
              return (
                <div className="news-section__column__news-post">
                  {videos[index]?.userName}
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="news-section__column">
          {storiesData?.slice(11, 16).map((item, index) => {
            if (item.type === "birthday") {
              return (
                <div className="news-section__column__event-card">
                  {birthdays[index] && <EventCard data={birthdays[index]} />}
                </div>
              );
            }
            if (item.type === "post") {
              return (
                <div className="news-section__column__news-post">
                  {posts[index]?.userName}
                </div>
              );
            }
            if (item.type === "video") {
              return (
                <div className="news-section__column__news-post">
                  {videos[index]?.userName}
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

NewsFeedSection.propTypes = {
  data: PropTypes.object,
};
