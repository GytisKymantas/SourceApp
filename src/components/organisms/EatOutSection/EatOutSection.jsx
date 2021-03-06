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
  }
  bestRatedArray.sort((a, b) => b.averageRating - a.averageRating);
  const twoBestRatedArray = bestRatedArray.slice(0, 2);

  return (
    <div className="eat-out-section">
      <ViewEatOutCard />
      {twoBestRatedArray.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          displayFullCard={false}
          numberOfCheckIns={restaurant.checkIns}
          restaurantName={restaurant.name}
          restaurantOpeningHours={restaurant.openingHours[0].hours}
          restaurantCategories={restaurant.categories}
          restaurantImage={restaurant.image}
          restaurantReviewList={restaurant.reviews}
        />
      ))}
    </div>
  );
};
