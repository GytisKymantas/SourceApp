import React from "react";
import "./food-categories-section.scss";
import { Link } from "react-router-dom";

import { CategoryItem } from "components/atoms/CategoryItem/CategoryItem";
// import Barbecue from "../../../assets/barbecue.svg";
import Bread from "../../../assets/bread.svg";
// import Breakfast from "../../../assets/breakfast.svg";
import Burger from "../../../assets/burger.svg";
// import Cake from "../../../assets/cake.svg";
// import Cheese from "../../../assets/cheese.svg";
// import Dango from "../../../assets/dango.svg";
// import Donut from "../../../assets/donut.svg";
// import Dumpling from "../../../assets/dumpling.svg";
// import FrenchFries from "../../../assets/frenchFries.svg";
// import FriedChicken from "../../../assets/friedChicken.svg";
// import FriedEgg from "../../../assets/friedEgg.svg";
// import HotDog from "../../../assets/hotDog.svg";
// import IceCream from "../../../assets/iceCream.svg";
// import Jam from "../../../assets/jam.svg";
// import Kebab from "../../../assets/kebab.svg";
// import Onigiri from "../../../assets/onigiri.svg";
// import Pancake from "../../../assets/pancake.svg";
// import Pizza from "../../../assets/pizza.svg";
// import Popsicle from "../../../assets/popsicle.svg";
// import Ramen from "../../../assets/ramen.svg";
import Salads from "../../../assets/salad.svg";
// import Sandwich from "../../../assets/sandwich.svg";
// import Sausage from "../../../assets/sausage.svg";
// import Shrimp from "../../../assets/shrimp.svg";
// import Soup from "../../../assets/soup.svg";
import Steak from "../../../assets/steak.svg";
// import SushiMaki from "../../../assets/sushiMaki.svg";
// import SushiNigiri from "../../../assets/sushiNigiri.svg";
// import Tempura from "../../../assets/tempura.svg";
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
      case "rooms":
        return "Meeting Rooms";
      default:
        return name;
    }
  };
  const imageMatcher = (image) => {
    switch (image) {
      case "burger":
        return Burger;
      case "salad":
        return Salads;
      case "grill":
        return Steak;
      default:
        return Bread;
    }
  };
  return (
    <div>
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
                  categoryInfo={name[1] > 1 ? `${name[1]} PLACES` : "PLACE"}
                  categoryImage={imageMatcher(name[0])}
                  key={index}
                />
              </Link>
            );
          })
        : null}
    </div>
  );
};
FoodCategoriesSection.propTypes = {
  restaurantsData: PropTypes.object,
};
