import React from "react";
import "./category-item.scss";
import PropTypes from "prop-types";
import classNames from "classnames";

export const CategoryItem = ({
  categoryName,
  categoryImage,
  categoryInfo,
  isFood,
}) => (
  <div className="category-item">
    <div className="category-item__header-container">
      <h2>{categoryName}</h2>
      <p>{categoryInfo}</p>
    </div>

    <div
      className={classNames("category-item__image-wrapper", {
        "category-item__image-wrapper--onRight": isFood,
      })}
    >
      <img
        className="category-item__image"
        src={categoryImage}
        alt="Category"
      />
    </div>
  </div>
);
CategoryItem.defaultProps = {
  isFood: true,
};
CategoryItem.propTypes = {
  categoryImage: PropTypes.string,
  categoryName: PropTypes.string,
  categoryInfo: PropTypes.string,
  isFood: PropTypes.bool,
};
