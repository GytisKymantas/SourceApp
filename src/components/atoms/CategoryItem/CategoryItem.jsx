import React from "react";
import "./category-item.scss";
import PropTypes from "prop-types";

export const CategoryItem = ({ categoryName, categoryImage, categoryInfo }) => (
  <div className="category-item">
    <div className="category-item__header-container">
      <h2>{categoryName}</h2>
      <p>{categoryInfo}</p>
    </div>
    <div className="category-item__image-wrapper">
      <img
        className="category-item__image"
        src={categoryImage}
        alt="Category"
      />
    </div>
  </div>
);

CategoryItem.propTypes = {
  categoryImage: PropTypes.string,
  categoryName: PropTypes.string,
  categoryInfo: PropTypes.string,
};
