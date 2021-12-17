import React from "react";
import PropTypes from "prop-types";
import { NewsFeedItem } from "../../atoms/NewsFeedCard/NewsFeedCard.jsx";

export const StoriesSection = ({ data }) => {
  const storiesData = data?.stories;
  const postNews = storiesData?.filter((x) => x.type === "post");

  return (
    <div>
      <NewsFeedItem data={postNews} />
    </div>
  );
};

StoriesSection.propTypes = {
  data: PropTypes.object,
};
