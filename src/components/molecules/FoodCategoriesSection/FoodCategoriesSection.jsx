import React from "react";
import "./food-categories-section.scss";
import { CategoryItem } from "components/atoms/CategoryItem/CategoryItem";
import Barbecue from "../../../assets/barbecue.svg";
import Bread from "../../../assets/bread.svg";
import Breakfast from "../../../assets/breakfast.svg";
import Burger from "../../../assets/burger.svg";
import Cake from "../../../assets/cake.svg";
import Cheese from "../../../assets/cheese.svg";
import Dango from "../../../assets/dango.svg";
import Donut from "../../../assets/donut.svg";
import Dumpling from "../../../assets/dumpling.svg";
import FrenchFries from "../../../assets/frenchFries.svg";
import FriedChicken from "../../../assets/friedChicken.svg";
import FriedEgg from "../../../assets/friedEgg.svg";
import HotDog from "../../../assets/hotDog.svg";
import IceCream from "../../../assets/iceCream.svg";
import Jam from "../../../assets/jam.svg";
import Kebab from "../../../assets/kebab.svg";
import Onigiri from "../../../assets/onigiri.svg";
import Pancake from "../../../assets/pancake.svg";
import Pizza from "../../../assets/pizza.svg";
import Popsicle from "../../../assets/popsicle.svg";
import Ramen from "../../../assets/ramen.svg";
import Salad from "../../../assets/salad.svg";
import Sandwich from "../../../assets/sandwich.svg";
import Sausage from "../../../assets/sausage.svg";
import Shrimp from "../../../assets/shrimp.svg";
import Soup from "../../../assets/soup.svg";
import Steak from "../../../assets/steak.svg";
import SushiMaki from "../../../assets/sushiMaki.svg";
import SushiNigiri from "../../../assets/sushiNigiri.svg";
import Tempura from "../../../assets/tempura.svg";

export const FoodCategoriesSection = (restaurantsData) => {
  const restaurantsArray = restaurantsData.restaurants;
  console.log(restaurantsArray);
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
      case "books":
        return Book;
      case "rooms":
        return Door;
      case "devices":
        return Phone;
      default:
        return Door;
    }
  };
  return (
    <div>
      {restaurantsArray
        ? restaurantsArray.map((obj, index) => {
            return (
              <CategoryItem
                categoryName={nameMatcher(obj[0])}
                categoryInfo={
                  obj[1].length ? `${obj[1].length} RESERVED` : "UNRESERVED"
                }
                categoryImage={imageMatcher(obj[0])}
                key={index}
              />
            );
          })
        : null}
    </div>
  );
};
