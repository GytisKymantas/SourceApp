import React from "react";
import PropTypes from "prop-types";
import { NewsFeedItem } from "../../atoms/NewsFeedCard/NewsFeedCard.jsx";

export const StoriesSection = ({ data }) => {
  const storiesData = data?.stories;
  const postNews = storiesData?.filter((x) => x.type === "post");
  const postVideo = storiesData?.filter((y) => y.type === "video");

  return (
    <div>
      <NewsFeedItem data={postNews && postVideo} />
      {/* <NewsFeedItem data={postVideo} /> */}
    </div>
  );
};

StoriesSection.propTypes = {
  data: PropTypes.object,
};
