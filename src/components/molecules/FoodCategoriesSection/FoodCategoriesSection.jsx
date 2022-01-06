import React from "react";
import "./food-categories-section.scss";
import { Link } from "react-router-dom";

import { CategoryItem } from "components/atoms/CategoryItem/CategoryItem";
import Bread from "../../../assets/bread.svg";
import Breakfast from "../../../assets/breakfast.svg";
import Burger from "../../../assets/burger.svg";
import Cake from "../../../assets/cake.svg";
import Donut from "../../../assets/donut.svg";
import HotDog from "../../../assets/hotDog.svg";
import Kebab from "../../../assets/kebab.svg";
import Pancake from "../../../assets/pancake.svg";
import Pizza from "../../../assets/pizza.svg";
import Ramen from "../../../assets/ramen.svg";
import Salad from "../../../assets/salad.svg";
import Sandwich from "../../../assets/sandwich.svg";
import Soup from "../../../assets/soup.svg";
import Barbecue from "../../../assets/barbecue.svg";
import SushiMaki from "../../../assets/sushiMaki.svg";
import PropTypes from "prop-types";

export const FoodCategoriesSection = ({ restaurantsData }) => {
  let categories = [];
  for (const restaurant in restaurantsData?.restaurants) {
    for (const category in restaurantsData?.restaurants[restaurant]
      .categories) {
      categories = [
        ...categories,
        restaurantsData?.restaurants[restaurant].categories[category],
      ];
    }
  }

  const counts = {};
  for (const num of categories) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  const path = "/dashboard/eatout/";
  const getPath = (item) => {
    return path.concat(item);
  };

  const nameMatcher = (name) => {
    switch (name) {
      default:
        return name;
    }
  };
  const imageMatcher = (image) => {
    switch (image) {
      case "burger":
        return Burger;
      case "salads":
        return Salad;
      case "grill":
        return Barbecue;
      case "pizza":
        return Pizza;
      case "pancakes":
        return Pancake;
      case "soups":
        return Soup;
      case "sweets":
        return Cake;
      case "breakfast":
        return Breakfast;
      case "ramen":
        return Ramen;
      case "sandwich":
        return Sandwich;
      case "kebab":
        return Kebab;
      case "sushi":
        return SushiMaki;
      case "hot dogs":
        return HotDog;
      case "donuts":
        return Donut;
      default:
        return Bread;
    }
  };

  return (
    <div className="food-categories-section">
      <h2 className="food-categories-section__header">Categories</h2>
      <div className="food-categories-section__element-container">
        {counts
          ? Object.entries(counts).map((name, index) => {
              return (
                <Link
                  key={index}
                  className="food-categories-section__element"
                  to={getPath(name[0].toLowerCase())}
                >
                  <CategoryItem
                    categoryName={nameMatcher(name[0])}
                    categoryInfo={`${name[1]}
                    ${name[1] % 10 === 1 ? "PLACE" : "PLACES"}`}
                    categoryImage={imageMatcher(name[0].toLowerCase())}
                    key={index}
                  />
                </Link>
              );
            })
          : null}
      </div>
    </div>
  );
};
FoodCategoriesSection.propTypes = {
  restaurantsData: PropTypes.object,
};
