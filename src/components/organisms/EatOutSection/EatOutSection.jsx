import React from "react";
import "./eat-out-section.scss";
import { RestaurantCard } from "components/molecules/RestaurantCard/RestaurantCard";
import { ViewEatOutCard } from "components/molecules/ViewEatOutCard/ViewEatOutCard";

export const EatOutSection = (data) => {
  const restaurantData = data?.data?.restaurants;
  let bestRatedArray = [];

  for (let i = 0; i < restaurantData.length; i++) {
    const ratings = restaurantData[i].reviews.map((review) => review.rating); // gets ratings in an array
    const averageCount =
      ratings.reduce((prevValue, curValue) => prevValue + curValue, 0) / // counts the average of previous array
      ratings.length;

    bestRatedArray.push({
      ...restaurantData[i],
      averageRating: averageCount,
    });
    bestRatedArray.sort((a, b) => (b.averageRating < a.averageRating ? 1 : -1));
  }
  const twoBestRatedArray = bestRatedArray.slice(18, 20);

  return (
    <div className="eat-out-section">
      <ViewEatOutCard />
      {twoBestRatedArray.map((obj, i) => (
        <RestaurantCard
          key={twoBestRatedArray.id}
          displayFullCard={false}
          numberOfCheckIns={twoBestRatedArray[i].checkIns}
          restaurantName={twoBestRatedArray[i].name}
          restaurantOpeningHours={twoBestRatedArray[i].openingHours[0].hours}
          restaurantCategories={twoBestRatedArray[i].categories}
          restaurantImage={twoBestRatedArray[i].image}
          restaurantAverageRating={twoBestRatedArray[i].reviews.map(
            (review) => review.rating
          )}
        />
      ))}
    </div>
  );
};
