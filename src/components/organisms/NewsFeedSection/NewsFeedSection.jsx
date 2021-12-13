import React from "react";
import PropTypes from "prop-types";
import "./news-feed-section.scss";

export const NewsFeedSection = ({ data }) => {
  return (
    <div>
      <h2 className="news-section__header">News and stories</h2>
      <div className="news-section">
        <div className="news-section__container-side">item</div>
        <div className="news-section__container-middle">item</div>
        <div className="news-section__container-side">item</div>
      </div>
    </div>
  );
};

NewsFeedSection.propTypes = {
  data: PropTypes.object,
};
