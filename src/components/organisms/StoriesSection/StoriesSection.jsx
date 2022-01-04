import React from "react";
import PropTypes from "prop-types";
import { NewsFeedCard } from "../../atoms/NewsFeedCard/NewsFeedCard.jsx";

export const StoriesSection = ({ data }) => {
  const storiesData = data?.stories;
  const postNews = storiesData?.filter(
    (x) => x.type === "post" || ("video" && x.type !== "birthday")
  );

  return (
    <div>
      <NewsFeedCard data={postNews} />
    </div>
  );
};

StoriesSection.propTypes = {
  data: PropTypes.object,
};
