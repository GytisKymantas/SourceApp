import React from "react";
import "./eat-out-section.scss";
import { RestaurantCard } from "components/molecules/RestaurantCard/RestaurantCard";
import { ViewEatOutCard } from "components/molecules/ViewEatOutCard/ViewEatOutCard";

const EatOutSection = (data) => {
  let restaurantData = data?.data?.restaurants;

  const twoBiggest = () => {
    let averageArray = [];
    let finalArray = [];

    for (let i = 0; i < restaurantData.length; i++) {
      let array2 = restaurantData[i].reviews.map((review) => review.rating); // [5,5,5]
      let averageCount =
        array2.reduce((prevValue, curValue) => prevValue + curValue, 0) /
        array2.length;

      averageArray.push(averageCount);
      averageArray[i] >= 4.8 ? finalArray.push(restaurantData[i]) : void 0;
    }
    return finalArray;
  };

  return (
    <div className="main-container">
      <ViewEatOutCard />
      {twoBiggest() &&
        twoBiggest().map((obj, i) => (
          <RestaurantCard
            key={i}
            numberOfCheckIns={twoBiggest()[i].checkIns}
            restaurantName={twoBiggest()[i].name}
            restaurantOpeningHours={twoBiggest()[i].openingHours[0].hours}
            restaurantCategories={twoBiggest()[i].categories}
            restaurantImage={twoBiggest()[i].image}
            restaurantAverageRating={twoBiggest()[i].reviews.map(
              (review) => review.rating
            )}
          />
        ))}
    </div>
  );
};

export default EatOutSection;
